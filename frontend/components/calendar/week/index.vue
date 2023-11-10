<template>
  <v-container class="d-flex mt-3 pa-1">
    <v-sheet
      height="100%"
      width="10%"
    >
      <v-sheet
        width="100%"
        height="2em"
        class="border-b"
      />
      <v-sheet
        v-for="time in times"
        :key="time.id"
        height="6dvh"
        class="d-flex justify-end align-center"
      >
        <span
          class="mx-2"
          style="font-size: xx-small"
        >
          {{ time.str }}
        </span>
        <v-divider />
      </v-sheet>
    </v-sheet>
    <v-sheet
      v-for="dayNumber in 6"
      :key="dayNumber"
      height="100%"
      width="15%"
      class="border-s"
    >
      <v-sheet
        width="100%"
        height="2em"
        class="border-b d-flex justify-center"
      >
        {{ getDayOfWeekJaString(dayNumber) }}
      </v-sheet>
      <v-sheet
        v-for="i in times.length"
        :key="i"
        height="6dvh"
        class="d-flex justify-end align-center"
      >
        <v-divider />
      </v-sheet>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
const getTimes = (from: number, to: number) => {
  const times: { id: number; str: string }[] = [];
  for (let i = from; i <= to; i++) {
    times.push({
      id: i,
      str: `${String(i).padStart(2, "0")}:00`,
    });
  }
  return times;
};
const times = getTimes(9, 21);
</script>
