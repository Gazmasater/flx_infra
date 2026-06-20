import { mkdir, appendFile } from 'node:fs/promises';
import { join } from 'node:path';
import { randomUUID } from 'node:crypto';
import { createError, getRequestHeader, readBody, type H3Event } from 'h3';

type PaymentRequestPayload = {
  lastName?: string;
  firstName?: string;
  middleName?: string;
  contact?: string;
  amount?: number | string;
  comment?: string;
  offerAccepted?: boolean;
  offerVersion?: string;
  browserLanguage?: string;
  platform?: string;
  screenWidth?: number;
  screenHeight?: number;
  hardwareConcurrency?: number | null;
  deviceMemory?: number | null;
};

type YooKassaPaymentResponse = {
  id: string;
  status: string;
  confirmation?: {
    type?: string;
    confirmation_url?: string;
  };
};

const clean = (value: unknown) => String(value ?? '').trim();

const formatAmount = (value: unknown) => {
  const amount = Number(value);

  if (!Number.isFinite(amount) || amount <= 0) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Укажите корректную сумму оплаты',
    });
  }

  return amount.toFixed(2);
};

const getClientIp = (event: H3Event) => {
  return clean(getRequestHeader(event, 'x-forwarded-for')).split(',')[0]
    || clean(getRequestHeader(event, 'x-real-ip'))
    || clean(event.node.req.socket.remoteAddress);
};

export default defineEventHandler(async (event) => {
  const body = await readBody<PaymentRequestPayload>(event);

  const lastName = clean(body.lastName);
  const firstName = clean(body.firstName);
  const middleName = clean(body.middleName);
  const contact = clean(body.contact);
  const comment = clean(body.comment);
  const amount = formatAmount(body.amount);

  if (!lastName || !firstName || !contact) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Заполните фамилию, имя и эл. почту для чека',
    });
  }

  if (!body.offerAccepted) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Необходимо согласиться с условиями сервиса',
    });
  }

  const shopId = clean(process.env.YOOKASSA_SHOP_ID);
  const secretKey = clean(process.env.YOOKASSA_SECRET_KEY);
  const returnUrl = clean(process.env.YOOKASSA_RETURN_URL) || 'https://flyuxora.ru/payment';
  const vatCode = Number(process.env.YOOKASSA_VAT_CODE || 1);

  if (!shopId || !secretKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Не настроены YOOKASSA_SHOP_ID и YOOKASSA_SECRET_KEY',
    });
  }

  const fullName = [lastName, firstName, middleName].filter(Boolean).join(' ');
  const requestId = randomUUID();

  const paymentPayload = {
    amount: {
      value: amount,
      currency: 'RUB',
    },
    capture: true,
    payment_method_data: {
      type: 'sbp',
    },
    confirmation: {
      type: 'redirect',
      return_url: returnUrl,
    },
    description: `Оплата IT-услуг Flyuxora. Заявка ${requestId}`,
    receipt: {
      customer: {
        email: contact,
      },
      items: [
        {
          description: 'Информационно-технологические услуги Flyuxora',
          quantity: '1.00',
          amount: {
            value: amount,
            currency: 'RUB',
          },
          vat_code: vatCode,
          payment_subject: 'service',
          payment_mode: 'full_payment',
        },
      ],
    },
    metadata: {
      requestId,
      paymentMethod: 'sbp',
      clientName: fullName,
      contact,
    },
  };

  const auth = Buffer.from(`${shopId}:${secretKey}`).toString('base64');

  const response = await fetch('https://api.yookassa.ru/v3/payments', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/json',
      'Idempotence-Key': requestId,
    },
    body: JSON.stringify(paymentPayload),
  });

  const payment = await response.json().catch(() => null) as YooKassaPaymentResponse | null;

  if (!response.ok || !payment?.id || !payment.confirmation?.confirmation_url) {
    console.error('YooKassa SBP payment error', {
      status: response.status,
      payment,
    });

    throw createError({
      statusCode: 502,
      statusMessage: 'ЮKassa не создала ссылку для оплаты через СБП',
    });
  }

  const lead = {
    createdAt: new Date().toISOString(),
    requestId,
    invoiceId: payment.id,
    invoiceUrl: payment.confirmation.confirmation_url,
    paymentMethod: 'sbp',
    paymentStatus: payment.status,
    lastName,
    firstName,
    middleName,
    contact,
    amount,
    comment,
    offerAccepted: true,
    offerVersion: clean(body.offerVersion) || '2026-06-12',
    ip: getClientIp(event),
    userAgent: clean(getRequestHeader(event, 'user-agent')),
    browserLanguage: clean(body.browserLanguage),
    platform: clean(body.platform),
    screenWidth: body.screenWidth ?? null,
    screenHeight: body.screenHeight ?? null,
    hardwareConcurrency: body.hardwareConcurrency ?? null,
    deviceMemory: body.deviceMemory ?? null,
  };

  const storageDir = join(process.cwd(), 'storage');
  const filePath = join(storageDir, 'payment-requests.jsonl');

  await mkdir(storageDir, { recursive: true });
  await appendFile(filePath, JSON.stringify(lead) + '\n', 'utf8');

  return {
    ok: true,
    requestId,
    invoiceId: payment.id,
    invoiceUrl: payment.confirmation.confirmation_url,
    paymentMethod: 'sbp',
  };
});
