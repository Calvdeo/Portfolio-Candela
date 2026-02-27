<script setup lang="ts">
import { useRouter } from "vue-router"

const router = useRouter()

function backToStart() {
  router.push("/")
}

function continuePortfolio() {
  router.push("/app/projects")
}
</script>

<template>
  <div class="w-full h-[100svh] bg-[#3d3d3d] text-white grid place-items-center p-6">
    <div class="w-full max-w-xl rounded-lg overflow-hidden border border-white/10 bg-[#2f2f2f] shadow-sm">
      <div class="h-10 bg-[#2a2a2a] border-b border-white/10 flex items-center justify-between px-4">
        <p class="text-sm text-white/80">Aviso</p>
        <button class="text-white/60 hover:text-white/90" type="button" @click="backToStart">
          ✕
        </button>
      </div>

      <div class="p-6">
        <div class="rounded-md border border-yellow-400/30 bg-yellow-400/10 p-4">
          <div class="flex items-start gap-3">
            <!-- icono warning (svg simple) -->
            <svg
              class="mt-0.5"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 3L1.8 20.5c-.5.9.1 2 1.2 2h18c1.1 0 1.7-1.1 1.2-2L12 3Z"
                stroke="rgba(250,204,21,.9)"
                stroke-width="1.6"
              />
              <path
                d="M12 9v5"
                stroke="rgba(250,204,21,.9)"
                stroke-width="1.6"
                stroke-linecap="round"
              />
              <path
                d="M12 17.6h.01"
                stroke="rgba(250,204,21,.9)"
                stroke-width="2.4"
                stroke-linecap="round"
              />
            </svg>

            <div>
              <h2 class="text-lg font-semibold text-white">
                ¿Estás segura de querer irte sin guardar?
              </h2>
              <p class="mt-1 text-sm text-white/70">
                Puedes volver al inicio, contactar conmigo o ver mi portfolio antes de salir.
              </p>
            </div>
          </div>
        </div>

        <div class="mt-5 space-y-3">
          <button
            class="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500"
            type="button"
            @click="continuePortfolio"
          >
            Guardar / Ver portfolio
          </button>

          <button
            class="w-full rounded-md border border-white/15 px-4 py-2 text-sm text-white/80 hover:bg-white/5"
            type="button"
            @click="backToStart"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    </div>
  </div>
</template>