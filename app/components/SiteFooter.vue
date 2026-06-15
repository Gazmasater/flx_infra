<template>
  <footer class="footer clean-footer">
    <div class="clean-footer__cols">
      <nav class="clean-footer__group" aria-label="Сервис и документы">
        <span class="clean-footer__heading">Сервис</span>
        <NuxtLink to="/documents">Все документы</NuxtLink>
        <NuxtLink to="/offer">Публичная оферта</NuxtLink>
        <NuxtLink to="/service-rules">Правила сервиса</NuxtLink>
      </nav>

      <nav class="clean-footer__group" aria-label="Конфиденциальность">
        <span class="clean-footer__heading">Конфиденциальность</span>
        <NuxtLink to="/privacy">Политика конфиденциальности</NuxtLink>
        <NuxtLink to="/personal-data-consent">Согласие на обработку ПДн</NuxtLink>
        <NuxtLink to="/cookies">Cookies</NuxtLink>
      </nav>

      <nav class="clean-footer__group" aria-label="Условия и риски">
        <span class="clean-footer__heading">Условия и риски</span>
        <NuxtLink to="/aml-kyc">AML/KYC</NuxtLink>
        <NuxtLink to="/risk-disclaimer">Уведомление о рисках</NuxtLink>
        <NuxtLink to="/refund-policy">Возвраты</NuxtLink>
      </nav>

      <div class="clean-footer__group clean-footer__contacts">
        <span class="clean-footer__heading">Контакты</span>
        <a :href="`mailto:${company.email}`">{{ company.email }}</a>
        <span v-if="company.workTime">{{ company.workTime }}</span>
        <span v-if="company.region">{{ company.region }}</span>
      </div>
    </div>

    <div class="clean-footer__bottom">
      <p class="clean-footer__legal">
        <strong>{{ company.legalName }}</strong>
        <span>ИНН {{ company.inn }}</span>
        <span>ОГРНИП {{ company.ogrnip }}</span>
      </p>
      <p class="clean-footer__copy">© 2026 {{ company.brand }}</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{
  company: {
    brand: string
    legalName: string
    inn: string
    ogrnip: string
    email: string
    region?: string
    workTime?: string
  }
}>()
</script>
