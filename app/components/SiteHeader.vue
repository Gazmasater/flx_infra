<template>
  <header class="topbar topbar-premium">
    <div class="topbar-main">
      <NuxtLink to="/" class="brand brand-logo" aria-label="Главная">
        <img src="/flyuxora-logo-mark.webp" alt="Flyuxora" class="brand-logo__mark" width="38" height="38">
        <span class="brand-logo__text">Flyuxora</span>
      </NuxtLink>

      <nav class="nav" aria-label="Разделы сайта">
        <NuxtLink to="/services">Услуги</NuxtLink>
        <NuxtLink to="/pricing">Стоимость</NuxtLink>
        <NuxtLink to="/workflow">Как работает</NuxtLink>
        <NuxtLink to="/documents">Документы</NuxtLink>
        <NuxtLink to="/about">Реквизиты</NuxtLink>
      </nav>
    </div>

    <NuxtLink to="/#payment" class="topbar-cta">Оставить заявку</NuxtLink>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  company: {
    brand: string
  }
}>()
</script>
