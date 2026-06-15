<script setup lang="ts">
import "~/assets/css/main.css";

useHead({
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico?v=3",
    },
    {
      rel: "shortcut icon",
      type: "image/x-icon",
      href: "/favicon.ico?v=3",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png?v=3",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png?v=3",
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
