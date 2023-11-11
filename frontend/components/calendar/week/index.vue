<template>
  <v-container class="d-flex mt-3 pa-1">
    <CalendarWeekColumn
      width="10%"
      :start-time="startTime"
      :end-time="endTime"
    >
      <template #body="bodyProps">
        <span
          class="mx-2"
          style="font-size: xx-small"
        >
          {{ bodyProps.time.str }}
        </span>
        <v-divider :id="`time-divider-${bodyProps.time.id}`" />
      </template>
    </CalendarWeekColumn>
    <CalendarWeekColumn
      v-for="dayNumber in 6"
      :key="dayNumber"
      width="15%"
      :start-time="startTime"
      :end-time="endTime"
      class="border-s"
    >
      <template #header>
        <v-btn
          size="small"
          rounded="0"
          elevation="0"
          width="100%"
          height="100%"
          :color="dayNumber === today.getDay() ? 'blue' : 'white'"
        >
          {{ getDayOfWeekJaString(dayNumber) }}
        </v-btn>
      </template>
      <template #body>
        <v-divider />
      </template>
    </CalendarWeekColumn>
  </v-container>
</template>

<script setup lang="ts">
const today = new Date();
const startTime = 8;
const endTime = 21;
</script>
