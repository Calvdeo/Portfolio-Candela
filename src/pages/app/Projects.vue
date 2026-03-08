<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue"
import { RouterLink, useRoute } from "vue-router"
import { projects } from "@/data/projects"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const route = useRoute()

const activeTab = computed<"design" | "illustration" | "photography">(() => {
  if (route.path.includes("/app/projects/illustration")) return "illustration"
  if (route.path.includes("/app/projects/photography")) return "photography"
  return "design"
})

const title = computed(() => {
  if (activeTab.value === "illustration") return "Ilustración"
  if (activeTab.value === "photography") return "Fotografía"
  return "Diseño"
})

const filteredProjects = computed(() => {
  if (activeTab.value === "illustration") return projects.filter((p) => p.category === "ilustración")
  if (activeTab.value === "photography") return projects.filter((p) => p.category === "fotografía")
  return projects.filter((p) => p.category === "diseño")
})

type EyesZone = "left" | "center" | "right"
const eyesZone = ref<EyesZone>("center")
const eyesImages: Record<EyesZone, string> = {
  left: "/images/ojos-izquierda.png",
  center: "/images/ojos-recto.png",
  right: "/images/ojos-derecha.png",
}
const projectsHeroImg = computed(() => eyesImages[eyesZone.value])

const fruitCycleImages = ["/images/manzana-roja.png", "/images/manzana-verde.png", "/images/naranja.png"]
const fruitCycleIndex = ref(0)
let fruitCycleTimer: ReturnType<typeof setInterval> | null = null

function is36DaysProject(slug: string) {
  return slug === "branding-yonosoyessa"
}

function getProjectCardImage(slug: string, cover?: string) {
  if (is36DaysProject(slug)) return fruitCycleImages[fruitCycleIndex.value]
  return cover ?? ""
}

function getProjectCardImageClass(slug: string) {
  return is36DaysProject(slug)
    ? "w-full h-full object-contain scale-[1.2]"
    : "w-full h-full object-contain"
}

function startFruitCycle(slug: string) {
  if (!is36DaysProject(slug) || fruitCycleTimer) return
  fruitCycleTimer = setInterval(() => {
    fruitCycleIndex.value = (fruitCycleIndex.value + 1) % fruitCycleImages.length
  }, 450)
}

function stopFruitCycle(slug: string) {
  if (!is36DaysProject(slug)) return
  if (fruitCycleTimer) {
    clearInterval(fruitCycleTimer)
    fruitCycleTimer = null
  }
  fruitCycleIndex.value = 0
}

function onMouseMove(e: MouseEvent) {
  const width = window.innerWidth || 1
  const x = e.clientX
  const leftLimit = width / 3
  const rightLimit = (width / 3) * 2

  if (x < leftLimit) {
    eyesZone.value = "left"
    return
  }
  if (x > rightLimit) {
    eyesZone.value = "right"
    return
  }
  eyesZone.value = "center"
}

onMounted(() => {
  window.addEventListener("mousemove", onMouseMove)
})

onBeforeUnmount(() => {
  if (fruitCycleTimer) clearInterval(fruitCycleTimer)
  window.removeEventListener("mousemove", onMouseMove)
})
</script>

<template>
  <div>
    <div class="mb-6 border overflow-hidden bg-muted/30">
      <img
        :src="projectsHeroImg"
        alt="Portada de proyectos"
        class="w-full h-52 sm:h-64 md:h-72 object-cover"
        loading="lazy"
      />
    </div>

    <div class="flex items-end gap-2 rounded-t-2xl border border-b-0 border-[#3d3d3d] bg-[#2f2f2f] px-4 pt-4">
      <RouterLink
        to="/app/projects/design"
        class="px-6 py-3 border border-b-0 rounded-t-xl text-lg font-semibold transition"
        :class="activeTab === 'design'
          ? 'bg-[#4a4a4a] text-white border-white/35'
          : 'bg-[#2f2f2f] text-gray-300 border-white/20 hover:bg-[#353535]'"
      >
        Diseño
      </RouterLink>

      <RouterLink
        to="/app/projects/illustration"
        class="px-6 py-3 border border-b-0 rounded-t-xl text-lg font-semibold transition"
        :class="activeTab === 'illustration'
          ? 'bg-[#4a4a4a] text-white border-white/35'
          : 'bg-[#2f2f2f] text-gray-300 border-white/20 hover:bg-[#353535]'"
      >
        Ilustración
      </RouterLink>

      <RouterLink
        to="/app/projects/photography"
        class="px-6 py-3 border border-b-0 rounded-t-xl text-lg font-semibold transition"
        :class="activeTab === 'photography'
          ? 'bg-[#4a4a4a] text-white border-white/35'
          : 'bg-[#2f2f2f] text-gray-300 border-white/20 hover:bg-[#353535]'"
      >
        Fotografía
      </RouterLink>

      <div class="ml-auto pb-2 text-sm text-gray-200">
        {{ filteredProjects.length }} proyectos
      </div>
    </div>

    <section class="-mt-px rounded-b-2xl border border-[#3d3d3d] bg-[#3d3d3d] overflow-hidden">
      <div class="border-b border-white/15 bg-[#4a4a4a] px-6 py-5">
        <h3 class="text-5xl font-bold tracking-tight text-white">{{ title }}</h3>
        
      </div>

      <div class="h-[70vh] overflow-y-auto px-6 py-6 bg-[#3d3d3d]">
        <div class="grid gap-10 md:grid-cols-2">
          <RouterLink
            v-for="(p, index) in filteredProjects"
            :key="p.slug"
            :to="`/app/projects/${p.slug}`"
            class="block group py-2"
            @mouseenter="startFruitCycle(p.slug)"
            @mouseleave="stopFruitCycle(p.slug)"
          >
            <Card
              class="mx-auto w-[94%] overflow-visible border-0 bg-transparent text-white shadow-none transition-transform duration-300"
              :class="index % 2 === 0
                ? 'rotate-[-2.6deg] group-hover:rotate-[-1.2deg]'
                : 'rotate-[2.6deg] group-hover:rotate-[1.2deg]'"
            >
              <div class="w-full aspect-[4/3] overflow-hidden">
                <img
                  v-if="p.cover || is36DaysProject(p.slug)"
                  :src="getProjectCardImage(p.slug, p.cover)"
                  :alt="`Portada de ${p.title}`"
                  :class="getProjectCardImageClass(p.slug)"
                  loading="lazy"
                />
                <div v-else class="w-full h-full flex items-center justify-center text-sm text-white/60">
                  Sin portada
                </div>
              </div>

              <div class="px-5 pt-4 pb-2 text-center space-y-3">
                <p class="text-[1.02rem] font-semibold uppercase tracking-[0.03em] line-clamp-1">
                  {{ p.title }}
                </p>
                <p class="text-sm leading-snug line-clamp-2 text-white/80">
                  {{ p.description }}
                </p>

                <div class="pt-1">
                  <Badge
                    variant="secondary"
                    class="border border-white/35 bg-transparent text-white hover:bg-white/10"
                  >
                    {{ p.tags[0] ?? "Proyecto" }}
                  </Badge>
                </div>
              </div>
            </Card>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
