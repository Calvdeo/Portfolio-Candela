import { onBeforeUnmount, onMounted, ref } from "vue"

export function useOrientation() {
  const isPortrait = ref(true)

  function updateOrientation() {
    if (typeof window === "undefined") return
    isPortrait.value = window.innerHeight >= window.innerWidth
  }

  onMounted(() => {
    updateOrientation()
    window.addEventListener("resize", updateOrientation)
  })

  onBeforeUnmount(() => {
    window.removeEventListener("resize", updateOrientation)
  })

  return {
    isPortrait,
    updateOrientation,
  }
}
