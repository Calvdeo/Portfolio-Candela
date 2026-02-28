<script setup lang="ts">
import { computed } from "vue"
import { RouterLink } from "vue-router"
import { projects } from "@/data/projects"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-vue-next"

const designProjects = computed(() => projects.filter(p => p.category === "diseño"))
const illustrationProjects = computed(() => projects.filter(p => p.category === "ilustración"))
</script>

<template>
  <div class="space-y-10">
    <div class="space-y-2">
      <h2 class="text-2xl font-semibold">Proyectos</h2>
      <p class="text-muted-foreground">
        Selección de trabajos organizada por categorías.
      </p>
    </div>

    <!-- DISEÑO -->
    <section class="space-y-4">
      <div class="flex items-end justify-between gap-4">
        <h3 class="text-xl font-semibold">Diseño</h3>
        <p class="text-sm text-muted-foreground">{{ designProjects.length }} proyectos</p>
      </div>

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <RouterLink
          v-for="p in designProjects"
          :key="p.slug"
          :to="`/app/projects/${p.slug}`"
          class="block"
        >
          <Card class="h-full hover:shadow-sm transition">
            <CardHeader>
              <CardTitle class="text-base flex items-center justify-between gap-2">
                <span class="line-clamp-1">{{ p.title }}</span>
                <ArrowRight class="h-4 w-4 opacity-60" />
              </CardTitle>
              <p class="text-sm text-muted-foreground">{{ p.year ?? "—" }}</p>
            </CardHeader>

            <CardContent class="space-y-3">
              <p class="text-sm text-muted-foreground line-clamp-2">
                {{ p.description }}
              </p>

              <div class="flex flex-wrap gap-2">
                <Badge v-for="t in p.tags" :key="t" variant="secondary">{{ t }}</Badge>
              </div>
            </CardContent>
          </Card>
        </RouterLink>
      </div>
    </section>

    <!-- ILUSTRACIÓN -->
    <section class="space-y-4">
      <div class="flex items-end justify-between gap-4">
        <h3 class="text-xl font-semibold">Ilustración</h3>
        <p class="text-sm text-muted-foreground">{{ illustrationProjects.length }} proyectos</p>
      </div>

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <RouterLink
          v-for="p in illustrationProjects"
          :key="p.slug"
          :to="`/app/projects/${p.slug}`"
          class="block"
        >
          <Card class="h-full hover:shadow-sm transition">
            <CardHeader>
              <CardTitle class="text-base flex items-center justify-between gap-2">
                <span class="line-clamp-1">{{ p.title }}</span>
                <ArrowRight class="h-4 w-4 opacity-60" />
              </CardTitle>
              <p class="text-sm text-muted-foreground">{{ p.year ?? "—" }}</p>
            </CardHeader>

            <CardContent class="space-y-3">
              <p class="text-sm text-muted-foreground line-clamp-2">
                {{ p.description }}
              </p>

              <div class="flex flex-wrap gap-2">
                <Badge v-for="t in p.tags" :key="t" variant="secondary">{{ t }}</Badge>
              </div>
            </CardContent>
          </Card>
        </RouterLink>
      </div>
    </section>
  </div>
</template>