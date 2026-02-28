<script setup lang="ts">
import { computed } from "vue"

const props = defineProps<{ class?: string }>()
const classes = computed(() => `rounded-xl border bg-background ${props.class ?? ""}`)
</script>

<template>
  <div :class="classes"><slot /></div>
</template>