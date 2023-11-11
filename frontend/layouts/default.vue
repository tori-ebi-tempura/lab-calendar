<template>
  <v-app id="lab-calendar">
    <v-app-bar
      :elevation="3"
      color="cyan-darken-1"
      density="compact"
    >
      <v-container class="d-flex align-center">
        <v-app-bar-title>
          <v-btn
            variant="text"
            to="/"
            size="large"
            :active="false"
            nuxt
          >
            <span class="text-h5"> Lab-Calendar </span>
          </v-btn>
        </v-app-bar-title>
      </v-container>
    </v-app-bar>
    <v-main>
      <slot></slot>
    </v-main>
  </v-app>
</template>
