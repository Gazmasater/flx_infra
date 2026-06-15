<template>
  <section id="top" class="it-hero" aria-labelledby="hero-title">
    <img
      class="it-hero__image"
      src="/fluxora-it-hero.webp"
      alt="Fluxora — платформа для обработки заявок, данных и интеграций"
      width="1916"
      height="821"
      fetchpriority="high"
    >

    <div class="it-hero__links" aria-label="Основные действия">
      <a class="it-hero__link it-hero__link--primary" href="#payment">Оставить заявку</a>
      <a class="it-hero__link it-hero__link--secondary" href="/documents">Документы</a>
    </div>

    <div class="it-hero__seo">
      <p class="eyebrow">Информационно-технологический сервис</p>
      <h1 id="hero-title">Платформа для обработки заявок, данных и интеграций</h1>
      <p>
        Обработка пользовательских заявок, техническое сопровождение, AML/KYC-процедуры,
        документы до оплаты и формирование согласованных счетов ЮKassa.
      </p>
    </div>
  </section>
</template>

<style scoped>
.it-hero {
  position: relative;
  width: 100%;
  overflow: hidden;
  border: 1px solid rgba(94, 234, 212, 0.18);
  border-radius: 30px;
  background:
    radial-gradient(circle at 20% 20%, rgba(45, 212, 191, 0.14), transparent 34%),
    linear-gradient(135deg, rgba(8, 15, 28, 0.98), rgba(2, 6, 23, 0.98));
  box-shadow:
    0 28px 90px rgba(0, 0, 0, 0.38),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.it-hero__image {
  display: block;
  width: 100%;
  height: auto;
}

.it-hero__links {
  position: absolute;
  left: 5.8%;
  bottom: 20.3%;
  display: flex;
  gap: 18px;
  z-index: 2;
}

.it-hero__link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 54px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 800;
  font-size: clamp(12px, 1vw, 18px);
  line-height: 1;
  opacity: 0;
}

.it-hero__link--primary {
  width: clamp(140px, 15vw, 290px);
}

.it-hero__link--secondary {
  width: clamp(120px, 13vw, 250px);
}

.it-hero__seo {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 768px) {
  .it-hero {
    border-radius: 22px;
  }

  .it-hero__image {
    width: 170%;
    max-width: none;
    transform: translateX(-4%);
  }

  .it-hero__links {
    left: 6.5%;
    bottom: 20%;
    gap: 10px;
  }

  .it-hero__link {
    min-height: 38px;
  }

  .it-hero__link--primary {
    width: 150px;
  }

  .it-hero__link--secondary {
    width: 125px;
  }
}

@media (max-width: 480px) {
  .it-hero__image {
    width: 210%;
    transform: translateX(-5%);
  }

  .it-hero__links {
    bottom: 19%;
  }

  .it-hero__link--primary {
    width: 128px;
  }

  .it-hero__link--secondary {
    width: 112px;
  }
}
</style>
