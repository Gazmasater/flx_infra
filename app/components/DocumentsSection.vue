<template>
  <section id="documents-section" class="section documents-section">
    <div class="section-heading">
      <p class="eyebrow">Документы сервиса</p>
      <h2>Условия, проверки и обработка данных доступны до оплаты</h2>
      <p>
        Основные документы опубликованы на сайте. Пользователь может ознакомиться
        с условиями оказания услуг, порядком AML/KYC-проверок, обработкой персональных
        данных и уведомлением о рисках до совершения платежа.
      </p>
    </div>

    <div class="documents-grid">
      <NuxtLink to="/offer" class="document-card">
        <span>01</span>
        <h3>Публичная оферта</h3>
        <p>Условия оказания информационно-технологических услуг.</p>
      </NuxtLink>

      <NuxtLink to="/aml-kyc" class="document-card">
        <span>02</span>
        <h3>Политика AML/KYC</h3>
        <p>Порядок проверки пользователей, заявок и оценки риска.</p>
      </NuxtLink>

      <NuxtLink to="/privacy" class="document-card">
        <span>03</span>
        <h3>Политика ПДн</h3>
        <p>Правила обработки и защиты персональных данных.</p>
      </NuxtLink>

      <NuxtLink to="/personal-data-consent" class="document-card">
        <span>04</span>
        <h3>Согласие на ПДн</h3>
        <p>Согласие пользователя на обработку персональных данных.</p>
      </NuxtLink>

      <NuxtLink to="/risk-disclaimer" class="document-card">
        <span>05</span>
        <h3>Уведомление о рисках</h3>
        <p>Технические, банковские, AML/KYC и иные возможные риски.</p>
      </NuxtLink>

      <NuxtLink to="/refund-policy" class="document-card">
        <span>06</span>
        <h3>Политика возврата</h3>
        <p>Порядок рассмотрения обращений и возврата средств.</p>
      </NuxtLink>

      <NuxtLink to="/service-rules" class="document-card">
        <span>07</span>
        <h3>Правила сервиса</h3>
        <p>Порядок работы с заявками и условия использования сервиса.</p>
      </NuxtLink>

      <NuxtLink to="/cookies" class="document-card">
        <span>08</span>
        <h3>Cookies</h3>
        <p>Использование cookies и технических данных сайта.</p>
      </NuxtLink>
    </div>
  </section>
</template>
