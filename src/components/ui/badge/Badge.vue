<script setup lang="ts">
import { computed } from "vue"

type Variant = "default" | "secondary"

const props = withDefaults(
  defineProps<{
    variant?: Variant
  }>(),
  { variant: "default" }
)

const classes = computed(() => {
  const base =
    "inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium transition-colors"
  const variants: Record<Variant, string> = {
    default: "bg-white/10 text-white border-white/15",
    secondary: "bg-black/10 text-foreground border-border",
  }
  return `${base} ${variants[props.variant]}`
})
</script>

<template>
  <span :class="classes">
    <slot />
  </span>
</template>