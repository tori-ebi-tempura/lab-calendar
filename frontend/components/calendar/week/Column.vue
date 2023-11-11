<template>
  <v-sheet :width="width">
    <template v-if="isShowKlass">
      <LazyCalendarWeekKlass
        v-for="klass in klasses"
        :key="klass.klassId"
        :klass="klass"
      >
      </LazyCalendarWeekKlass>
    </template>
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
      height="6vh"
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
import type { Klass } from "~/types/klass";

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

const klasses: Klass[] = [
  {
    klassId: 1,
    klassName: "ソフトウェア工学演習",
    dayOfWeek: 2,
    from: "17:10",
    to: "18:50",
    roomNames: ["A307"],
  },
  {
    klassId: 2,
    klassName: "プログラム実習2",
    dayOfWeek: 2,
    from: "13:30",
    to: "17:00",
    roomNames: ["A307"],
  },
];

const isShowKlass = ref<boolean>(false);
onMounted(() => {
  setTimeout(() => {
    isShowKlass.value = true;
  }, 500);
});
</script>
