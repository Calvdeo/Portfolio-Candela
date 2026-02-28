<script setup lang="ts">
import { computed } from "vue"
import { useRoute, RouterLink } from "vue-router"
import { projects } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-vue-next"

const route = useRoute()

const project = computed(() => {
  const slug = String(route.params.slug)
  return projects.find(p => p.slug === slug) ?? null
})
</script>

<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between gap-4">
      <RouterLink to="/app/projects">
        <Button variant="ghost">
          <ArrowLeft class="h-4 w-4 mr-2" />
          Volver a proyectos
        </Button>
      </RouterLink>
    </div>

    <div v-if="project" class="space-y-4">
      <div class="space-y-1">
        <h2 class="text-2xl font-semibold">{{ project.title }}</h2>
        <p class="text-sm text-muted-foreground">
          {{ project.category }} · {{ project.year ?? "—" }}
        </p>
      </div>

      <div class="flex flex-wrap gap-2">
        <Badge v-for="t in project.tags" :key="t" variant="secondary">{{ t }}</Badge>
      </div>

      <p class="text-muted-foreground">
        {{ project.description }}
      </p>

      <!-- Aquí luego metemos imágenes, proceso, etc. -->
      <div class="rounded-lg border p-4 text-sm text-muted-foreground">
        Zona de contenido: imágenes, proceso, mockups, etc. (la rellenamos cuando quieras)
      </div>
    </div>

    <div v-else class="rounded-lg border p-4">
      <p class="text-sm text-muted-foreground">
        No existe ese proyecto.
      </p>
      <RouterLink to="/app/projects" class="underline text-sm">Volver</RouterLink>
    </div>
  </div>
</template>