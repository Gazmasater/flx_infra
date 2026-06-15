<template>
  <section id="top" class="it-hero" aria-labelledby="hero-title">
    <div class="it-hero__main">
      <p class="it-hero__eyebrow">
        <span class="it-hero__dot" aria-hidden="true" />
        Информационно-технологический сервис
      </p>

      <h1 id="hero-title" class="it-hero__title">
        Платформа для обработки
        <span class="it-hero__accent">заявок, данных и интеграций</span>
      </h1>

      <p class="it-hero__lead">
        Принимаем, проверяем и обрабатываем пользовательские заявки под ключ:
        AML/KYC, технические интеграции и сопровождение. Стоимость и документы —
        всегда до оплаты, счёт формируется через ЮKassa.
      </p>

      <div class="it-hero__actions">
        <a class="it-hero__btn it-hero__btn--primary" href="#payment">Оставить заявку</a>
        <NuxtLink class="it-hero__btn it-hero__btn--ghost" to="/documents">Документы</NuxtLink>
      </div>
    </div>

    <aside class="it-hero__panel" aria-label="Преимущества сервиса">
      <div class="it-hero__panel-head">
        <span class="it-hero__status">
          <span class="it-hero__dot" aria-hidden="true" />
          Заявка в работе
        </span>
        <span class="it-hero__panel-id">FLX · ЮKassa</span>
      </div>

      <ul class="it-hero__features">
        <li>
          <span class="it-hero__feature-ic" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /></svg>
          </span>
          <span>
            <strong>Надёжность</strong>
            Договор, реквизиты и понятные правила сервиса.
          </span>
        </li>
        <li>
          <span class="it-hero__feature-ic" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" /></svg>
          </span>
          <span>
            <strong>Скорость</strong>
            Быстрый приём и обработка заявок без лишних шагов.
          </span>
        </li>
        <li>
          <span class="it-hero__feature-ic" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M9 7V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3m-9 0h12l-1 13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 7z" /></svg>
          </span>
          <span>
            <strong>Интеграции</strong>
            API, CRM, Telegram-боты, формы и уведомления.
          </span>
        </li>
        <li>
          <span class="it-hero__feature-ic" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>
          </span>
          <span>
            <strong>Контроль</strong>
            Прозрачный статус заявки на каждом этапе.
          </span>
        </li>
      </ul>
    </aside>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.it-hero {
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: clamp(28px, 4vw, 56px);
  padding: clamp(28px, 4vw, 56px);
  border: 1px solid rgba(94, 234, 212, 0.18);
  border-radius: 30px;
  background:
    radial-gradient(circle at 18% 12%, rgba(45, 212, 191, 0.18), transparent 42%),
    radial-gradient(circle at 92% 18%, rgba(80, 130, 255, 0.14), transparent 38%),
    linear-gradient(135deg, rgba(8, 15, 28, 0.98), rgba(2, 6, 23, 0.98));
  box-shadow:
    0 28px 90px rgba(0, 0, 0, 0.38),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

/* left column */
.it-hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 18px;
  color: var(--accent);
  font-size: var(--fs-cap);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.it-hero__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 4px rgba(71, 229, 189, 0.18);
}

.it-hero__title {
  margin: 0 0 18px;
  font-size: var(--fs-h1);
  line-height: 1.04;
  letter-spacing: -0.035em;
  color: #fff;
}

.it-hero__accent {
  display: block;
  background: linear-gradient(120deg, var(--accent), var(--accent-soft));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.it-hero__lead {
  max-width: 46ch;
  margin: 0 0 28px;
  color: var(--muted);
  font-size: var(--fs-lead);
  line-height: 1.55;
}

.it-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.it-hero__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 28px;
  border-radius: 999px;
  font-weight: 800;
  text-decoration: none;
  transition: transform var(--ease), opacity var(--ease), background var(--ease), border-color var(--ease);
}

.it-hero__btn--primary {
  background: linear-gradient(135deg, var(--accent), var(--accent-soft));
  color: var(--accent-dark);
  box-shadow: 0 18px 42px rgba(71, 229, 189, 0.24);
}

.it-hero__btn--primary:hover {
  transform: translateY(-2px);
  opacity: 0.94;
}

.it-hero__btn--ghost {
  border: 1px solid var(--line-strong);
  background: rgba(255, 255, 255, 0.04);
  color: #e2e8f0;
}

.it-hero__btn--ghost:hover {
  border-color: var(--card-border-hover);
  background: rgba(71, 229, 189, 0.1);
  color: #fff;
}

/* right column — product panel */
.it-hero__panel {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: clamp(18px, 2vw, 24px);
  background:
    linear-gradient(160deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.02));
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(8px);
}

.it-hero__panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 18px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.it-hero__status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  font-weight: 700;
  font-size: var(--fs-sm);
}

.it-hero__panel-id {
  color: var(--muted-2);
  font-size: var(--fs-cap);
  letter-spacing: 0.04em;
}

.it-hero__features {
  display: grid;
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.it-hero__features li {
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 14px;
  align-items: center;
}

.it-hero__features strong {
  display: block;
  margin-bottom: 2px;
  color: #fff;
  font-size: var(--fs-body);
}

.it-hero__features span span,
.it-hero__features li > span:last-child {
  color: var(--muted-2);
  font-size: var(--fs-sm);
  line-height: 1.4;
}

.it-hero__feature-ic {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: rgba(71, 229, 189, 0.12);
}

.it-hero__feature-ic svg {
  width: 20px;
  height: 20px;
  fill: none;
  stroke: var(--accent);
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* tablet / mobile — stack to one column */
@media (max-width: 900px) {
  .it-hero {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .it-hero__features li {
    align-items: start;
  }
}

@media (max-width: 560px) {
  .it-hero {
    padding: 22px;
    border-radius: 22px;
  }

  .it-hero__lead {
    margin-bottom: 22px;
  }

  /* full-width stacked actions */
  .it-hero__actions {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }

  .it-hero__btn {
    width: 100%;
  }
}
</style>
