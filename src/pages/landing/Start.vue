<script setup lang="ts">
import { useRouter } from "vue-router"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-vue-next"

const router = useRouter()

function createNewProject() {
  router.push("/app/projects")
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-6">
    <div class="w-full max-w-4xl rounded-xl border bg-background shadow-sm">
      <div class="flex items-center justify-between border-b px-4 py-3">
        <p class="text-sm text-muted-foreground">Illustrator · Inicio</p>
        <Button variant="ghost" @click="router.push('/')">
  <ArrowLeft class="h-4 w-4 mr-2" />
  Cerrar
</Button>
      </div>

      <div class="p-8 space-y-4">
        <h1 class="text-3xl font-semibold">Inicio de Illustrator</h1>
        <p class="text-muted-foreground">
          Aquí va tu presentación breve + la idea de “crear nuevo proyecto”.
        </p>

        <Button @click="createNewProject">Crear nuevo proyecto</Button>
      </div>
    </div>
  </div>
</template>