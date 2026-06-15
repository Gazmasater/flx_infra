<template>
  <a class="legal-back" href="#" @click.prevent="goBack">← Назад</a>
</template>

<script setup lang="ts">
const router = useRouter();

function goBack() {
  if (import.meta.client && window.history.length > 1) {
    router.back();
  } else {
    router.push("/");
  }
}
</script>
