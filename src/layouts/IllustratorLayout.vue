<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from "vue-router"

const router = useRouter()

function goToLanding() {
  router.push("/")
}
</script>

<template>
  <div class="min-h-screen">
    <!-- Menú superior: solo aparece cuando estás “dentro” -->
    <header class="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
      <div class="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div class="flex items-center gap-3">
  <div class="h-8 w-8 rounded bg-muted" />
  <button
    @click="goToLanding"
    class="text-sm hover:underline"
  >
    Illustrator
  </button>
</div>

        <nav class="flex items-center gap-4 text-sm">
          <RouterLink class="hover:underline" to="/app/projects">Proyectos</RouterLink>
          <RouterLink class="hover:underline" to="/app/about">Skills</RouterLink>
          <RouterLink class="hover:underline" to="/app/contact">Contacto</RouterLink>
        </nav>
      </div>
    </header>

    <!-- “Interfaz” decorativa + lienzo -->
    <main class="relative mx-auto max-w-6xl px-4 py-6">
      <!-- aquí luego pondremos tu imagen de interfaz como fondo -->
      <div class="rounded-xl border bg-muted/30 p-4">
        <div class="rounded-lg bg-background p-6 min-h-[60vh]">
          <RouterView />
        </div>
      </div>
    </main>
  </div>
</template>