<script setup lang="ts">
import { computed } from "vue"
const props = defineProps<{ class?: string }>()
const classes = computed(() => `p-4 pb-2 ${props.class ?? ""}`)
</script>

<template>
  <div :class="classes"><slot /></div>
</template>