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
  { title: "Публичная оферта", to: "/offer" },
  { title: "Правила сервиса", to: "/service-rules" },
  { title: "Политика конфиденциальности", to: "/privacy" },
  { title: "Согласие на обработку ПДн", to: "/personal-data-consent" },
  { title: "AML/KYC Policy", to: "/aml-kyc" },
  { title: "Уведомление о рисках", to: "/risk-disclaimer" },
  { title: "Политика возвратов", to: "/refund-policy" },
  { title: "Cookies", to: "/cookies" },
];

</script>

<template>
  <main class="legal-page">
    <NuxtLink class="legal-back" to="/">← На главную</NuxtLink>

    <article class="legal-card">
      <p class="eyebrow">Юридический раздел</p>
      <h1>Документы</h1>
      <p>Основные документы сервиса, условия оказания услуг, обработки данных, AML/KYC-проверки и уведомления о рисках.</p>

      <div class="legal-links">
        <NuxtLink v-for="item in docs" :key="item.to" :to="item.to">
          {{ item.title }}
        </NuxtLink>
      </div>
    </article>
  </main>
</template>
