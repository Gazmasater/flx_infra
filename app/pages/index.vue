<script setup lang="ts">
useHead({
  title: "Flyuxora — обработка заявок, данных и интеграций",
  meta: [
    {
      name: "description",
      content: "Flyuxora — информационно-технологический сервис для обработки пользовательских заявок, данных, интеграций, документов, AML/KYC-процедур и согласования счетов ЮKassa.",
    },
  ],
});
</script>

<template>
  <main class="home-clean">
    <HeroSection />
    <section class="home-clean-section home-clean-panel">
      <div class="home-clean-head">
        <div>
          <p class="eyebrow">Услуги</p>
          <h2>Что делает сервис</h2>
        </div>
        <NuxtLink to="/services" class="home-clean-link">Все услуги</NuxtLink>
      </div>

      <div class="home-clean-grid">
        <article class="icon-card">
          <div class="icon-card__head">
            <span class="card-ic" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M3 12l3-7h12l3 7v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M3 12h5l1 2h6l1-2h5"/></svg>
            </span>
            <h3>Обработка заявок</h3>
          </div>
          <p>Приём, регистрация, уточнение и сопровождение пользовательских заявок.</p>
        </article>
        <article class="icon-card">
          <div class="icon-card__head">
            <span class="card-ic" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M9 15l6-6"/><path d="M11 6l1-1a4 4 0 0 1 6 6l-1 1"/><path d="M13 18l-1 1a4 4 0 0 1-6-6l1-1"/></svg>
            </span>
            <h3>Интеграции</h3>
          </div>
          <p>API, CRM, Telegram-боты, формы, уведомления и технические связки.</p>
        </article>
        <article class="icon-card">
          <div class="icon-card__head">
            <span class="card-ic" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg>
            </span>
            <h3>AML/KYC</h3>
          </div>
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
      <div class="home-clean-docs__intro">
        <p class="eyebrow">Документы и реквизиты</p>
        <h2>Условия доступны до оплаты</h2>
        <p>
          Оферта, Политика AML/KYC, документы по персональным данным, риски,
          возврат, правила сервиса и реквизиты доступны на отдельных страницах.
        </p>
      </div>

      <ul class="home-clean-doc-links">
        <li>
          <NuxtLink to="/documents">
            <span>Все документы</span>
            <span class="home-clean-doc-links__arr" aria-hidden="true">→</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">
            <span>Реквизиты</span>
            <span class="home-clean-doc-links__arr" aria-hidden="true">→</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/payment">
            <span>Оплата по счёту</span>
            <span class="home-clean-doc-links__arr" aria-hidden="true">→</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/offer">
            <span>Публичная оферта</span>
            <span class="home-clean-doc-links__arr" aria-hidden="true">→</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/aml-kyc">
            <span>Политика AML/KYC</span>
            <span class="home-clean-doc-links__arr" aria-hidden="true">→</span>
          </NuxtLink>
        </li>
      </ul>
    </section>

    <LeadForm />
  </main>
</template>
