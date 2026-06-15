<script setup lang="ts">
import "~/assets/css/main.css";

useHead({
  link: [
    {
      rel: "icon",
      type: "image/webp",
      href: "/flyuxora-logo-mark.webp?v=2",
    },
    {
      rel: "shortcut icon",
      type: "image/webp",
      href: "/flyuxora-logo-mark.webp?v=2",
    },
  ],
});
</script>

<template>
  <YandexMetrika />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
