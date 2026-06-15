<script setup lang="ts">
const isOpen = ref(false)
const loading = ref(false)
const errorMessage = ref('')

const form = reactive({
  lastName: '',
  firstName: '',
  middleName: '',
  contact: '',
  amount: '',
  comment: '',
  offerAccepted: false,
})

const submit = async () => {
  loading.value = true
  errorMessage.value = ''

  try {
    if (!form.offerAccepted) {
      errorMessage.value = 'Необходимо согласиться с условиями сервиса.'
      return
    }

    const result = await $fetch<{
      ok: boolean
      requestId: string
      invoiceId: string
      invoiceUrl: string
    }>('/api/payment-request', {
      method: 'POST',
      body: {
        lastName: form.lastName,
        firstName: form.firstName,
        middleName: form.middleName,
        contact: form.contact,
        amount: Number(form.amount),
        comment: form.comment,

        offerAccepted: form.offerAccepted,
        offerVersion: '2026-06-12',

        browserLanguage: navigator.language,
        platform: navigator.platform,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        hardwareConcurrency: navigator.hardwareConcurrency || null,
        deviceMemory: (navigator as any).deviceMemory || null,
      },
    })

    if (!result.invoiceUrl) {
      errorMessage.value = 'Ссылка на счёт не получена.'
      return
    }

    reachPaymentRequestCreatedGoal(result.invoiceUrl)
  } catch (e) {
    errorMessage.value = 'Не удалось создать счёт. Попробуйте ещё раз.'
  } finally {
    loading.value = false
  }
}

const closeModal = () => {
  isOpen.value = false
  errorMessage.value = ''
}

const reachPaymentRequestCreatedGoal = (redirectUrl: string) => {
  const go = () => {
    window.location.href = redirectUrl
  }

  if (
    process.client &&
    typeof window !== "undefined" &&
    typeof (window as any).ym === "function"
  ) {
    let redirected = false

    const safeGo = () => {
      if (redirected) return
      redirected = true
      go()
    }

    ;(window as any).ym(
      109835938,
      "reachGoal",
      "payment_request_created",
      {},
      safeGo
    )

    setTimeout(safeGo, 700)
    return
  }

  go()
}

</script>

<template>
  <section id="payment" class="lead">
    <div class="lead__cta">
      <h2 class="lead__title">Заявка и счёт на оплату</h2>

      <p class="lead__text">
        Оставьте заявку — после согласования будет сформирован счёт ЮKassa для оплаты.
      </p>

      <button type="button" class="lead__btn" @click="isOpen = true">
        Запросить счёт
      </button>
    </div>

    <div v-if="isOpen" class="lead-modal" @click.self="closeModal">
      <div class="lead-modal__card" role="dialog" aria-modal="true" aria-labelledby="lead-modal-title">
        <button type="button" class="lead-modal__close" aria-label="Закрыть" @click="closeModal">
          ✕
        </button>

        <h3 id="lead-modal-title" class="lead-modal__title">
          Данные для оформления счёта
        </h3>

        <p class="lead-modal__note">
          После нажатия кнопки будет создан счёт ЮKassa, а данные заявки и эл. почта для чека будут сохранены.
        </p>

        <form class="lead-form" @submit.prevent="submit">
          <div class="lead-form__fio">
            <input
              v-model="form.lastName"
              required
              type="text"
              placeholder="Фамилия"
              class="lead-input"
            >

            <input
              v-model="form.firstName"
              required
              type="text"
              placeholder="Имя"
              class="lead-input"
            >

            <input
              v-model="form.middleName"
              type="text"
              placeholder="Отчество"
              class="lead-input"
            >
          </div>

          <input
            v-model="form.contact"
            required
            type="email" autocomplete="email"
            placeholder="Эл. почта для чека"
            class="lead-input"
          >
          <p class="lead-hint">
            Чек будет направлен на указанную эл. почту. Проверьте правильность адреса перед оплатой.
          </p>

          <input
            v-model="form.amount"
            required
            type="number"
            min="1"
            step="0.01"
            placeholder="Сумма, ₽"
            class="lead-input"
          >

          <textarea
            v-model="form.comment"
            placeholder="Комментарий"
            class="lead-input"
          ></textarea>

          <label class="lead-consent">
            <input
              v-model="form.offerAccepted"
              required
              type="checkbox"
            >
            <span>
              Нажимая «Запросить счёт», я подтверждаю, что ознакомлен и согласен с
              <a href="/offer" target="_blank">публичной офертой</a>,
              <a href="/service-rules" target="_blank">правилами сервиса</a>,
              <a href="/privacy" target="_blank">политикой обработки персональных данных</a>,
              <a href="/personal-data-consent" target="_blank">согласием на обработку персональных данных</a>,
              <a href="/aml-kyc" target="_blank">AML/KYC-политикой</a>,
              <a href="/risk-disclaimer" target="_blank">уведомлением о рисках</a>,
              <a href="/refund-policy" target="_blank">политикой возвратов</a>
              и <a href="/cookies" target="_blank">политикой cookies</a>.
            </span>
          </label>

          <p v-if="errorMessage" class="lead-error">
            {{ errorMessage }}
          </p>

          <button
            type="submit"
            :disabled="loading"
            class="lead__btn lead-submit"
          >
            {{ loading ? 'Создаём счёт...' : 'Запросить счёт' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
