<template>
  <v-btn
    size="small"
    style="position: absolute; z-index: 2"
    :style="styleObject"
  >
    <h3>{{ klass.klassName }}</h3>
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
});
const setStyle = (_klass: Klass) => {
  const { fromHour, fromMinute, rangeMinute } = parseTimeString(
    _klass.from,
    _klass.to,
  );
  const timeDividerId = `time-divider-${fromHour}`;
  const borderElement = document.getElementById(timeDividerId);
  if (!borderElement) {
    return;
  }

  styleObject.top = `calc(${borderElement.getBoundingClientRect().bottom}px + ${
    fromMinute / 10
  }vh)`;
  styleObject.height = `${rangeMinute / 10}vh`;
};

onMounted(() => {
  setStyle(klass);
});

window.addEventListener("resize", () => {
  setStyle(klass);
});
</script>
