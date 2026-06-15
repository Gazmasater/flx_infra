<script setup lang="ts">
useHead({
  title: "Fluxora — обработка заявок, данных и интеграций",
});
</script>

<template>
  <main class="home-clean">
    <HeroSection />
    <section class="home-clean-hero">
      <div>
        <p class="eyebrow">Информационно-технологический сервис</p>
        <h1>Обработка заявок, данных и интеграций</h1>
        <p>
          Сервис помогает принимать заявки, согласовывать стоимость до оплаты,
          проводить необходимые проверки, оформлять документы и формировать счёт ЮKassa.
        </p>

        <div class="home-clean-actions">
          <a href="#payment" class="primary-button">Оставить заявку</a>
          <NuxtLink to="/documents" class="secondary-button">Документы</NuxtLink>
        </div>
      </div>

      <aside class="home-clean-panel" aria-label="Краткий порядок работы">
        <div><span>Заявка</span><strong>принимается</strong></div>
        <div><span>Стоимость</span><strong>согласуется</strong></div>
        <div><span>Документы</span><strong>до оплаты</strong></div>
        <div><span>Счёт ЮKassa</span><strong>после согласования</strong></div>
      </aside>
    </section>

    <section class="home-clean-section">
      <div class="home-clean-head">
        <div>
          <p class="eyebrow">Услуги</p>
          <h2>Что делает сервис</h2>
        </div>
        <NuxtLink to="/services" class="home-clean-link">Все услуги</NuxtLink>
      </div>

      <div class="home-clean-grid">
        <article>
          <h3>Обработка заявок</h3>
          <p>Приём, регистрация, уточнение и сопровождение пользовательских заявок.</p>
        </article>
        <article>
          <h3>Интеграции</h3>
          <p>API, CRM, Telegram-боты, формы, уведомления и технические связки.</p>
        </article>
        <article>
          <h3>AML/KYC</h3>
          <p>Проверка заявки, оценка риска и запрос дополнительных сведений при необходимости.</p>
        </article>
      </div>
    </section>

    <section class="home-clean-section home-clean-two">
      <article>
        <p class="eyebrow">Как работает</p>
        <h2>От заявки до исполнения</h2>
        <ol>
          <li>Пользователь оставляет заявку.</li>
          <li>Сервис уточняет задачу и условия.</li>
          <li>Стоимость согласуется до оплаты.</li>
          <li>После оплаты выполняется услуга.</li>
        </ol>
        <NuxtLink to="/workflow" class="home-clean-link">Подробнее</NuxtLink>
      </article>

      <article>
        <p class="eyebrow">Стоимость</p>
        <h2>До оплаты</h2>
        <div class="home-clean-price">
          <div><span>Обработка заявки</span><strong>от 500 ₽</strong></div>
          <div><span>AML/KYC-проверка</span><strong>от 500 ₽ до 5 000 ₽</strong></div>
          <div><span>Интеграции</span><strong>индивидуально</strong></div>
        </div>
        <NuxtLink to="/pricing" class="home-clean-link">Смотреть стоимость</NuxtLink>
      </article>
    </section>

    <section class="home-clean-section home-clean-docs">
      <div>
        <p class="eyebrow">Документы и реквизиты</p>
        <h2>Условия доступны до оплаты</h2>
        <p>
          Оферта, AML/KYC Policy, документы по персональным данным, риски,
          возврат, правила сервиса и реквизиты доступны на отдельных страницах.
        </p>
      </div>

      <div class="home-clean-doc-links">
        <NuxtLink to="/documents">Все документы</NuxtLink>
        <NuxtLink to="/about">Реквизиты</NuxtLink>
        <NuxtLink to="/payment">Об оплате</NuxtLink>
        <NuxtLink to="/offer">Оферта</NuxtLink>
        <NuxtLink to="/aml-kyc">AML/KYC</NuxtLink>
      </div>
    </section>

    <LeadForm />
  </main>
</template>
