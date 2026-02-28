<script setup lang="ts">
import { computed } from "vue"
import { RouterLink, useRoute } from "vue-router"
import { projects } from "@/data/projects"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-vue-next"

const route = useRoute()

const activeTab = computed<"design" | "illustration">(() => {
  return route.path.includes("/app/projects/illustration") ? "illustration" : "design"
})

const title = computed(() => (activeTab.value === "design" ? "Diseño" : "Ilustración"))

const filteredProjects = computed(() =>
  projects.filter((p) =>
    activeTab.value === "design" ? p.category === "diseño" : p.category === "ilustración"
  )
)
</script>

<template>
  <div class="space-y-6">
    <div class="space-y-2">
      <h2 class="text-5xl font-bold tracking-tight">Proyectos</h2>
      <p class="text-base text-muted-foreground">Elige una pestaña y explora los trabajos.</p>
    </div>

    <!-- Tabs -->
    <div class="flex items-end gap-2">
      <RouterLink
        to="/app/projects/design"
        class="px-6 py-3 rounded-t-xl border border-b-0 text-lg font-semibold transition"
        :class="activeTab === 'design'
          ? 'bg-background text-foreground border-border'
          : 'bg-muted/40 text-muted-foreground border-border/60 hover:bg-muted/60'"
      >
        Diseño
      </RouterLink>

      <RouterLink
        to="/app/projects/illustration"
        class="px-6 py-3 rounded-t-xl border border-b-0 text-lg font-semibold transition"
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

    <!-- Panel -->
    <section class="rounded-xl border bg-background overflow-hidden">
      <div class="border-b px-6 py-5">
        <h3 class="text-5xl font-bold tracking-tight">{{ title }}</h3>
        <p class="text-sm text-muted-foreground mt-2">Haz click en un proyecto para ver su detalle.</p>
      </div>

      <!-- Scroll -->
      <div class="h-[70vh] overflow-y-auto px-6 py-6">
        <!-- 2 columnas grandes -->
        <div class="grid gap-8 md:grid-cols-2">
          <RouterLink
            v-for="p in filteredProjects"
            :key="p.slug"
            :to="`/app/projects/${p.slug}`"
            class="block"
          >
            <Card class="h-full hover:shadow-sm transition overflow-hidden">
              <!-- PORTADA -->
              <div class="w-full aspect-[16/9] bg-muted/40">
                <img
                  v-if="p.cover"
                  :src="p.cover"
                  :alt="`Portada de ${p.title}`"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
                <div v-else class="w-full h-full flex items-center justify-center text-sm text-muted-foreground">
                  Sin portada
                </div>
              </div>

              <CardHeader class="p-8 pb-4">
                <CardTitle class="text-2xl font-semibold flex items-center justify-between gap-3">
                  <span class="line-clamp-1">{{ p.title }}</span>
                  <ArrowRight class="h-5 w-5 opacity-60" />
                </CardTitle>
                <p class="text-lg text-muted-foreground">{{ p.year ?? "—" }}</p>
              </CardHeader>

              <CardContent class="p-8 pt-0 space-y-5">
                <p class="text-base text-muted-foreground line-clamp-3">
                  {{ p.description }}
                </p>

                <div class="flex flex-wrap gap-2">
                  <Badge
                    v-for="t in p.tags"
                    :key="t"
                    variant="secondary"
                    class="text-sm px-2 py-1"
                  >
                    {{ t }}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>