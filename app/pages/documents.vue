<script setup lang="ts">
useHead({
  title: "Документы: оферта, AML/KYC, ПДн и правила сервиса | Flyuxora",
  meta: [
    {
      name: "description",
      content: "Документы Flyuxora: публичная оферта, правила сервиса, политика конфиденциальности, согласие на обработку персональных данных, AML/KYC, риски, возвраты и cookies.",
    },
  ],
});

const docs = [
  { title: "Публичная оферта", to: "/offer", text: "Условия и договор", icon: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/><path d="M9 12h6M9 16h4"/>' },
  { title: "Правила оказания услуг", to: "/service-rules", text: "Порядок работы с заявками", icon: '<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4.5 6h.01M4.5 12h.01M4.5 18h.01"/>' },
  { title: "Политика обработки ПДн", to: "/privacy", text: "Обработка и защита данных", icon: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>' },
  { title: "Согласие на обработку ПДн", to: "/personal-data-consent", text: "Условия обработки ПДн", icon: '<circle cx="10" cy="8" r="3.5"/><path d="M4 20c0-3.3 2.7-6 6-6"/><path d="M14.5 18l2 2 4-4"/>' },
  { title: "Политика AML/KYC", to: "/aml-kyc", text: "Проверка и оценка риска", icon: '<path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/>' },
  { title: "Уведомление о рисках", to: "/risk-disclaimer", text: "Возможные риски сервиса", icon: '<path d="M12 4l9 16H3z"/><path d="M12 10v4M12 17h.01"/>' },
  { title: "Политика возврата средств", to: "/refund-policy", text: "Порядок возврата средств", icon: '<path d="M9 7L4 12l5 5"/><path d="M4 12h11a5 5 0 0 1 5 5"/>' },
  { title: "Политика Cookies", to: "/cookies", text: "Использование cookie", icon: '<path d="M12 3a9 9 0 1 0 9 9 3 3 0 0 1-3-3 3 3 0 0 1-3-3 3 3 0 0 1-3-3z"/><circle cx="9" cy="12" r="1"/><circle cx="13" cy="15" r="1"/><circle cx="15.5" cy="10" r="1"/>' },
];
</script>

<template>
  <main class="page">
    <section class="page-hero">
      <p class="eyebrow">Документы</p>
      <h1>Условия сервиса</h1>
      <p>
        Все документы доступны до оплаты: оферта, правила сервиса, обработка
        персональных данных, AML/KYC-процедуры и уведомления о рисках.
      </p>
    </section>

    <section class="page-card-grid">
      <NuxtLink
        v-for="item in docs"
        :key="item.to"
        :to="item.to"
        class="page-card doc-card"
      >
        <span class="card-ic" aria-hidden="true">
          <svg viewBox="0 0 24 24" v-html="item.icon" />
        </span>
        <h2>{{ item.title }}</h2>
      </NuxtLink>
    </section>
  </main>
</template>
