<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <v-app-bar
    :elevation="5"
    color="cyan-darken-1"
  >
    <v-container class="d-flex align-center">
      <v-app-bar-title>
        <v-btn
          variant="text"
          to="/"
          size="x-large"
          :active="false"
          nuxt
        >
          <span class="text-h5"> Lab-Calendar </span>
        </v-btn>
      </v-app-bar-title>
    </v-container>
  </v-app-bar>
  <v-main>
    <NuxtPage />
  </v-main>
</template>
