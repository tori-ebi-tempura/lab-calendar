<template>
  <v-sheet :width="width">
    <v-sheet
      width="100%"
      height="2em"
      :class="`border-b d-flex justify-center ${customClass}`"
    >
      <slot name="header"></slot>
    </v-sheet>
    <v-sheet
      v-for="time in times"
      :key="time.id"
      height="6dvh"
      class="d-flex justify-end align-center"
    >
      <slot
        name="body"
        :time="time"
      ></slot>
    </v-sheet>
  </v-sheet>
</template>

<script setup lang="ts">
interface Props {
  width: string;
  startTime: number;
  endTime: number;
  customClass?: string;
}
const { startTime, endTime } = defineProps<Props>();

/** @example { id: 13, str: "13:00"} */
const times = ((from: number, to: number) => {
  const timeObjects = [];
  for (let i = from; i <= to; i++) {
    timeObjects.push({
      id: i,
      str: `${String(i).padStart(2, "0")}:00`,
    });
  }
  return timeObjects;
})(startTime, endTime);
</script>
