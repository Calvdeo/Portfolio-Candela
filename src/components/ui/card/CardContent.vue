<script setup lang="ts">
import { computed } from "vue"
const props = defineProps<{ class?: string }>()
const classes = computed(() => `p-4 pt-0 ${props.class ?? ""}`)
</script>

<template>
  <div :class="classes"><slot /></div>
</template>