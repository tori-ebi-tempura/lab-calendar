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
        <v-divider />
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
        {{ getDayOfWeekJaString(dayNumber) }}
      </template>
      <template #body>
        <v-divider />
      </template>
    </CalendarWeekColumn>
  </v-container>
</template>

<script setup lang="ts">
const startTime = 9;
const endTime = 21;
</script>
