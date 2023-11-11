<template>
  <v-btn
    size="small"
    style="position: absolute; z-index: 2"
    :style="styleObject"
  >
    <span
      class="d-inline-block text-truncate"
      :style="{
        maxWidth: styleObject.width,
      }"
    >
      {{ klass.klassName }}
    </span>
  </v-btn>
</template>

<script setup lang="ts">
import type { Klass } from "~/types/klass";
interface Props {
  klass: Klass;
}
const { klass } = defineProps<Props>();

const styleObject = reactive({
  visibility: "visible",
  top: "0px",
  height: "0px",
  width: "0px",
});
const setStyle = (_klass: Klass) => {
  const { fromHour, fromMinute, rangeMinute } = parseTimeString(
    _klass.from,
    _klass.to,
  );
  const divider = document.getElementById(`time-divider-${fromHour}`);
  const column = document.getElementById(`column-${klass.dayOfWeek}`);
  if (!divider || !column) {
    return;
  }
  const dividerHeight = divider.getBoundingClientRect().bottom;
  const columnWidth = column.getBoundingClientRect().width;

  styleObject.top = `calc(${dividerHeight}px + ${fromMinute / 10}vh)`;
  styleObject.width = `${columnWidth - 1}px`;
  styleObject.height = `${rangeMinute / 10}vh`;
};

onMounted(() => {
  setStyle(klass);
});

window.addEventListener("resize", () => {
  setStyle(klass);
});
</script>
