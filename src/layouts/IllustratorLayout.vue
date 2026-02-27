<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from "vue-router"

const router = useRouter()

function goToStart() {
  router.push("/")
}
</script>

<template>
  <div class="min-h-screen">
    <header class="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
      <div class="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <!-- Botón volver al inicio (solo dentro de /app) -->
        <button @click="goToStart" class="text-sm font-medium hover:underline">
          ← Volver al inicio
        </button>

        <nav class="flex items-center gap-4 text-sm">
          <RouterLink class="hover:underline" to="/app/projects">Proyectos</RouterLink>
          <RouterLink class="hover:underline" to="/app/about">Skills</RouterLink>
          <RouterLink class="hover:underline" to="/app/contact">Contacto</RouterLink>
        </nav>
      </div>
    </header>

    <main class="relative mx-auto max-w-6xl px-4 py-6">
      <div class="rounded-xl border bg-muted/30 p-4">
        <div class="rounded-lg bg-background p-6 min-h-[60vh]">
          <RouterView />
        </div>
      </div>
    </main>
  </div>
</template>