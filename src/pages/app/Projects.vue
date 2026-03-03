<script setup lang="ts">
import { computed } from "vue"
import { RouterLink, useRoute } from "vue-router"
import { projects } from "@/data/projects"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const route = useRoute()

const activeTab = computed<"design" | "illustration">(() => {
  return route.path.includes("/app/projects/illustration") ? "illustration" : "design"
})

const title = computed(() => (activeTab.value === "design" ? "Diseño" : "Ilustración"))

const filteredProjects = computed(() =>
  projects.filter((p) => (activeTab.value === "design" ? p.category === "diseño" : p.category === "ilustración"))
)

const projectsHeroImg = computed(
  () => filteredProjects.value.find((p) => p.cover)?.cover ?? "/images/Portada_essa.png"
)
</script>

<template>
  <div class="space-y-6">
    <div class="border overflow-hidden bg-muted/30">
      <img
        :src="projectsHeroImg"
        alt="Portada de proyectos"
        class="w-full h-52 sm:h-64 md:h-72 object-cover"
        loading="lazy"
      />
    </div>

    <div class="flex items-end gap-2">
      <RouterLink
        to="/app/projects/design"
        class="px-6 py-3 border border-b-0 text-lg font-semibold transition"
        :class="activeTab === 'design'
          ? 'bg-background text-foreground border-border'
          : 'bg-muted/40 text-muted-foreground border-border/60 hover:bg-muted/60'"
      >
        Diseño
      </RouterLink>

      <RouterLink
        to="/app/projects/illustration"
        class="px-6 py-3 border border-b-0 text-lg font-semibold transition"
        :class="activeTab === 'illustration'
          ? 'bg-background text-foreground border-border'
          : 'bg-muted/40 text-muted-foreground border-border/60 hover:bg-muted/60'"
      >
        Ilustración
      </RouterLink>

      <div class="ml-auto pb-2 text-sm text-muted-foreground">
        {{ filteredProjects.length }} proyectos
      </div>
    </div>

    <section class="border bg-background overflow-hidden">
      <div class="border-b px-6 py-5">
        <h3 class="text-5xl font-bold tracking-tight">{{ title }}</h3>
        <p class="text-sm text-muted-foreground mt-2">Haz click en un proyecto para ver su detalle.</p>
      </div>

      <div class="h-[70vh] overflow-y-auto px-6 py-6 bg-[#ecefce]">
        <div class="grid gap-10 md:grid-cols-2">
          <RouterLink
            v-for="(p, index) in filteredProjects"
            :key="p.slug"
            :to="`/app/projects/${p.slug}`"
            class="block group py-2"
          >
            <Card
              class="mx-auto w-[94%] overflow-hidden border-black/20 bg-[#f3f5d6] text-black shadow-[0_14px_28px_rgba(0,0,0,0.2)] transition-transform duration-300"
              :class="index % 2 === 0
                ? 'rotate-[-2.6deg] group-hover:rotate-[-1.2deg]'
                : 'rotate-[2.6deg] group-hover:rotate-[1.2deg]'"
            >
              <div class="w-full aspect-[4/3] bg-[#d9ddc4]">
                <img
                  v-if="p.cover"
                  :src="p.cover"
                  :alt="`Portada de ${p.title}`"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
                <div v-else class="w-full h-full flex items-center justify-center text-sm text-black/60">
                  Sin portada
                </div>
              </div>

              <div class="px-5 py-5 text-center space-y-3 border-t border-black/10">
                <p class="text-[1.02rem] font-semibold uppercase tracking-[0.03em] line-clamp-1">
                  {{ p.title }}
                </p>
                <p class="text-sm leading-snug line-clamp-2 text-black/80">
                  {{ p.description }}
                </p>

                <div class="pt-1">
                  <Badge
                    variant="secondary"
                    class="border border-black/35 bg-transparent text-black hover:bg-black/5"
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
