<template>
  <main class="page">
    <section class="page-hero">
      <p class="eyebrow">Цены</p>
      <h1>Стоимость и оплата</h1>
      <p>
        Итоговая сумма определяется индивидуально и указывается в счёте ЮKassa
        до совершения платежа.
      </p>
    </section>

    <section class="price-page-table">
      <div v-for="row in rows" :key="row.name" class="price-page-row">
        <div>
          <h2>{{ row.name }}</h2>
          <p>{{ row.text }}</p>
        </div>
        <strong>{{ row.price }}</strong>
      </div>
    </section>

    <section class="page-note page-note--accent">
      <p class="page-note__label">Важно</p>
      <p class="page-note__text">
        Оплата производится только после согласования заявки. Пользователь заранее
        видит условия, сумму и документы сервиса.
      </p>
    </section>
  </main>
</template>

<script setup>
useHead({
  title: "Стоимость услуг и согласование цены до оплаты | Flyuxora",
  meta: [
    {
      name: "description",
      content: "Стоимость услуг Flyuxora согласуется до оплаты. Обработка заявок, AML/KYC-проверки, интеграции, техническое сопровождение и формирование счёта ЮKassa.",
    },
  ],
});
const rows = [
  {
    name: 'Обработка пользовательской заявки',
    text: 'Приём, регистрация и первичная обработка заявки.',
    price: 'от 500 ₽',
  },
  {
    name: 'AML/KYC-проверка заявки',
    text: 'Проверка сведений, анализ риска и запрос дополнительных документов при необходимости.',
    price: 'от 500 ₽ до 5 000 ₽',
  },
  {
    name: 'Срочная обработка',
    text: 'Приоритетная обработка при наличии технической возможности.',
    price: 'от 1 000 ₽',
  },
  {
    name: 'Интеграции и автоматизация',
    text: 'API, CRM, Telegram, формы, уведомления и технические связки.',
    price: 'индивидуально',
  },
  {
    name: 'Информационная поддержка',
    text: 'Сопровождение пользователя по статусу заявки и техническим вопросам.',
    price: 'включено / индивидуально',
  },
]
</script>
