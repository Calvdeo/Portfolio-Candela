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
  projects.filter((p) => (activeTab.value === "design" ? p.category === "diseño" : p.category === "ilustración"))
)
</script>

<template>
  <div class="space-y-6">
    <div class="space-y-2">
      <h2 class="text-4xl font-semibold tracking-tight">Proyectos</h2>
      <p class="text-base text-muted-foreground">
        Elige una pestaña y explora los trabajos.
      </p>
    </div>

    <!-- Tabs -->
    <div class="flex items-end gap-2">
      <RouterLink
        to="/app/projects/design"
        class="px-5 py-3 rounded-t-xl border border-b-0 text-base font-medium transition"
        :class="activeTab === 'design'
          ? 'bg-background text-foreground border-border'
          : 'bg-muted/40 text-muted-foreground border-border/60 hover:bg-muted/60'"
      >
        Diseño
      </RouterLink>

      <RouterLink
        to="/app/projects/illustration"
        class="px-5 py-3 rounded-t-xl border border-b-0 text-base font-medium transition"
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
      <div class="border-b px-6 py-4">
        <h3 class="text-3xl font-semibold">{{ title }}</h3>
        <p class="text-sm text-muted-foreground mt-1">
          Haz click en un proyecto para ver su detalle.
        </p>
      </div>

      <div class="h-[70vh] overflow-y-auto px-6 py-6">
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <RouterLink
            v-for="p in filteredProjects"
            :key="p.slug"
            :to="`/app/projects/${p.slug}`"
            class="block"
          >
            <Card class="h-full hover:shadow-sm transition">
              <CardHeader class="p-6 pb-3">
                <CardTitle class="text-xl flex items-center justify-between gap-3">
                  <span class="line-clamp-1">{{ p.title }}</span>
                  <ArrowRight class="h-5 w-5 opacity-60" />
                </CardTitle>
                <p class="text-base text-muted-foreground">{{ p.year ?? "—" }}</p>
              </CardHeader>

              <CardContent class="p-6 pt-0 space-y-4">
                <p class="text-base text-muted-foreground line-clamp-3">
                  {{ p.description }}
                </p>

                <div class="flex flex-wrap gap-2">
                  <Badge v-for="t in p.tags" :key="t" variant="secondary" class="text-sm px-2 py-1">
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