<template>
  <v-app id="lab-calendar">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>

<script setup lang="ts">
useHead({
  meta: [
    {
      charset: "utf-8",
    },
  ],
  title: "Lab-Calendar",
});
</script>
