<template>
  <main class="page">
    <section class="page-hero">
      <p class="eyebrow">Услуги</p>
      <h1>Что мы делаем</h1>
      <p>
        Обработка заявок, данных и документов, технические интеграции,
        уведомления и взаимодействие с внешними партнёрами.
      </p>
    </section>

    <section class="page-card-grid">
      <article v-for="item in services" :key="item.title" class="page-card icon-card">
        <div class="icon-card__head">
          <span class="card-ic" aria-hidden="true">
            <svg viewBox="0 0 24 24" v-html="item.icon" />
          </span>
          <h2>{{ item.title }}</h2>
        </div>
        <p>{{ item.text }}</p>
      </article>
    </section>
  </main>
</template>

<script setup>
useHead({
  title: "IT-услуги, обработка заявок и интеграции | Flyuxora",
  meta: [
    {
      name: "description",
      content: "Услуги Flyuxora: обработка заявок, техническое сопровождение, API-интеграции, CRM, Telegram-боты, работа с данными, документы и AML/KYC-процедуры.",
    },
  ],
});
const services = [
  {
    title: 'Обработка заявок',
    text: 'Приём, регистрация, уточнение и сопровождение пользовательских заявок.',
    icon: '<path d="M3 12l3-7h12l3 7v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M3 12h5l1 2h6l1-2h5"/>',
  },
  {
    title: 'Интеграции',
    text: 'API, CRM, Telegram-боты, формы заявок, уведомления и технические связки между сервисами.',
    icon: '<path d="M9 15l6-6"/><path d="M11 6l1-1a4 4 0 0 1 6 6l-1 1"/><path d="M13 18l-1 1a4 4 0 0 1-6-6l1-1"/>',
  },
  {
    title: 'Работа с данными',
    text: 'Нормализация данных, проверка заполнения, маршрутизация и подготовка информации для исполнения заявки.',
    icon: '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
  },
  {
    title: 'Техническое сопровождение',
    text: 'Консультации, поддержка пользователя, контроль статуса заявки и технические уведомления.',
    icon: '<path d="M4 13v-1a8 8 0 0 1 16 0v1"/><rect x="3" y="13" width="4" height="6" rx="1.5"/><rect x="17" y="13" width="4" height="6" rx="1.5"/><path d="M20 19a4 4 0 0 1-4 3h-3"/>',
  },
  {
    title: 'AML/KYC-процедуры',
    text: 'Проверка заявок, оценка риска, запрос уточняющих сведений и соблюдение внутренних правил сервиса.',
    icon: '<path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/>',
  },
  {
    title: 'Документы и отчётность',
    text: 'Подготовка уведомлений, технических комментариев, статусов и подтверждающих материалов по заявке.',
    icon: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/><path d="M9 17v-3M12 17v-5M15 17v-2"/>',
  },
]
</script>
