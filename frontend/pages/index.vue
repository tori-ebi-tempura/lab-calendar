<template>
  <v-container>
    <h1>Hello</h1>
    <NuxtLink to="schedule"> Schedule </NuxtLink>
  </v-container>
</template>

<script setup lang="ts">
useHead({
  meta: [
    {
      charset: "utf-8",
    },
  ],
  title: "トップページ - Lab-Calendar",
});
</script>
