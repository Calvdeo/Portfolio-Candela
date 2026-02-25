<script setup lang="ts">
import { useRouter } from "vue-router"
import { Button } from "@/components/ui/button"

const router = useRouter()

function openApp() {
  router.push("/start")
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-6">
    <div class="w-full max-w-3xl rounded-xl border bg-background shadow-sm">
      <div class="flex items-center gap-2 border-b px-4 py-3">
        <div class="h-3 w-3 rounded-full bg-muted" />
        <div class="h-3 w-3 rounded-full bg-muted" />
        <div class="h-3 w-3 rounded-full bg-muted" />
        <p class="ml-2 text-sm text-muted-foreground">Illustrator.exe</p>
      </div>

      <div class="p-8 space-y-4">
        <h1 class="text-3xl font-semibold">Vale · Portfolio</h1>
        <p class="text-muted-foreground">
          Portada tipo “abrir app”. Aquí luego pondrás tu diseño.
        </p>

        <Button @click="openApp">Abrir Illustrator</Button>
      </div>
    </div>
  </div>
</template>