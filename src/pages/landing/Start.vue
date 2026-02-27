<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

function createNewProject() {
  router.push("/app/projects")
}

function goToExitConfirm() {
  router.push("/exit")
}

/** Datos concretos (NO editables) */
const age = 20
const city = "Valencia"
const role = ref("Diseñadora")

/** “Trabajos” (luego lo conectamos a data/projects.ts) */
const projects = ref([
  { slug: "branding-yonosoyessa", title: "Branding · YoNoSoyEssa" },
  { slug: "cartel-festival", title: "Cartel · Festival" },
  { slug: "editorial-magazine", title: "Editorial · Magazine" },
  { slug: "motion-reel", title: "Motion · Reel" },
])
const projectCount = computed(() => projects.value.length)

/** Soportes */
type SupportKey =
  | "Photoshop"
  | "Illustrator"
  | "InDesign"
  | "Premiere"
  | "After Effects"
  | "Procreate"

const supports = ref<Record<SupportKey, number>>({
  Photoshop: 85,
  Illustrator: 90,
  InDesign: 70,
  Premiere: 60,
  "After Effects": 55,
  Procreate: 75,
})

/** Contacto real */
const instagramUrl = "https://instagram.com/yonosoyessa.tiff"
const email = "yonosoyessa.jpg@gmail.com"

/** Orientación auto-detect */
const isPortrait = ref(true)
function updateOrientation() {
  isPortrait.value = window.innerHeight >= window.innerWidth
}
onMounted(() => {
  updateOrientation()
  window.addEventListener("resize", updateOrientation)
})
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateOrientation)
})
</script>

<template>
  <div class="w-full h-[100svh] bg-[#3d3d3d] text-white overflow-hidden">
    <div class="w-full h-full bg-[#2f2f2f] flex flex-col">
      <!-- Barra superior -->
      <div
        class="h-10 bg-[#2a2a2a] border-b border-white/10 flex items-center justify-between px-4"
      >
        <p class="text-sm text-white/80">Nuevo documento</p>
        <button class="text-white/60 hover:text-white/90" type="button">✕</button>
      </div>

      <div class="flex flex-1 overflow-hidden">
        <!-- Zona central -->
        <div class="flex-1 p-8 overflow-y-auto">
          <div class="rounded-md bg-[#242424] border border-white/10 p-6 relative">
            <button
              class="absolute right-3 top-3 text-white/50 hover:text-white/80"
              type="button"
            >
              ✕
            </button>

            <h1 class="text-3xl font-semibold">Vamos a empezar algo nuevo.</h1>

            <p class="mt-3 text-base text-white/70 max-w-2xl">
              Comienza por los ajustes de tus propios documentos o por una gama de ajustes
              preestablecidos para ponerte a trabajar rápidamente.
            </p>

            <p class="mt-2 text-sm text-blue-300 underline">
              ajustes preestablecidos de documentos
            </p>
          </div>

          <div class="mt-8">
            <div class="flex items-center justify-between">
              <p class="text-sm font-semibold text-white/80">TUS ELEMENTOS RECIENTES</p>
              <p class="text-xs text-white/50">(5)</p>
            </div>

            <div class="mt-3 rounded-md bg-[#2b2b2b] border border-white/10 h-[280px]" />
          </div>

          <div class="mt-6 rounded-md bg-[#2a2a2a] border border-white/10 h-12" />
        </div>

        <!-- Panel derecho -->
        <aside class="w-[380px] border-l border-white/10 p-6 bg-[#2d2d2d] flex flex-col">
          <p class="text-xs font-semibold text-white/60 tracking-wide">
            DETALLES DE AJUSTES PREESTABLECIDOS
          </p>

          <!-- Nombre -->
          <div class="mt-3 rounded bg-[#1f1f1f] border border-white/10 px-3 py-2 text-white/90">
            yonosoyessa.tiff
          </div>

          <!-- EDAD (pequeñito) + rol al lado -->
          <div class="mt-4">
            <p class="text-xs text-white/60 mb-2">Edad</p>
            <div class="flex items-center gap-2">
              <!-- cajita peque -->
              <div
                class="h-9 w-16 rounded bg-[#1f1f1f] border border-white/10 flex items-center justify-center text-white/80"
              >
                {{ age }}
              </div>

              <!-- select rol -->
              <div class="relative flex-1">
                <select
                  v-model="role"
                  class="h-9 w-full rounded bg-[#1f1f1f] border border-white/10 px-3 pr-8 text-white outline-none focus:border-white/25"
                >
                  <option>Diseñadora</option>
                  <option>Ilustradora</option>
                  <option>Mente creativa</option>
                  <option>Brand lover</option>
                  <option>Multidisciplinar</option>
                </select>

                <!-- flechita para que se vea desplegable -->
                <span class="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none">
                  ▾
                </span>
              </div>
            </div>
          </div>

          <!-- CIUDAD peque + ORIENTACIÓN con icono (sin recuadro) -->
          <div class="mt-4">
            <p class="text-xs text-white/60 mb-2">Ciudad</p>

            <div class="flex items-center gap-2">
              <div
                class="h-9 w-24 rounded bg-[#1f1f1f] border border-white/10 flex items-center justify-center text-white/80"
              >
                {{ city }}
              </div>

              <div class="flex items-center gap-2 ml-1" title="Orientación automática">
                <!-- Icono vertical/horizontal estilo illustrator (simple) -->
                <svg
                  v-if="isPortrait"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="7"
                    y="4"
                    width="10"
                    height="16"
                    rx="2"
                    stroke="rgba(255,255,255,.55)"
                    stroke-width="1.6"
                  />
                </svg>

                <svg
                  v-else
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="4"
                    y="7"
                    width="16"
                    height="10"
                    rx="2"
                    stroke="rgba(255,255,255,.55)"
                    stroke-width="1.6"
                  />
                </svg>

                <span class="text-xs text-white/55">
                  {{ isPortrait ? "Vertical" : "Horizontal" }}
                </span>
              </div>
            </div>
          </div>

          <!-- Mesas de trabajo -->
          <details class="mt-4">
            <summary class="list-none cursor-pointer">
              <div>
                <p class="text-xs text-white/60 mb-2">Mesas de trabajo</p>

                <div
                  class="h-9 rounded bg-[#1f1f1f] border border-white/10 flex items-center justify-center text-white/80 relative"
                >
                  <span>{{ projectCount }}</span>
                  <span class="absolute right-3 text-white/40">▾</span>
                </div>
              </div>
            </summary>

            <div class="mt-3 rounded bg-[#1f1f1f] border border-white/10 p-3 space-y-2">
              <p class="text-[11px] text-white/50">Páginas de detalle</p>

              <div class="space-y-2">
                <div
                  v-for="p in projects"
                  :key="p.slug"
                  class="flex items-center justify-between rounded bg-black/10 px-2 py-2"
                >
                  <span class="text-xs text-white/80">{{ p.title }}</span>
                  <span class="text-[11px] text-white/45">/{{ p.slug }}</span>
                </div>
              </div>
            </div>
          </details>

          <!-- SOPORTES -->
          <details class="mt-6">
            <summary class="list-none cursor-pointer">
              <div class="flex items-center justify-between">
                <p class="text-xs text-white/60">Soportes</p>
                <span class="text-white/40">▸</span>
              </div>
            </summary>

            <div class="mt-3 grid grid-cols-2 gap-3">
              <div>
                <p class="text-[11px] text-white/50 mb-1">Photoshop</p>
                <div class="h-9 rounded bg-[#1f1f1f] border border-white/10 flex items-center justify-center text-white/80">
                  {{ supports["Photoshop"] }}%
                </div>
              </div>

              <div>
                <p class="text-[11px] text-white/50 mb-1">Illustrator</p>
                <div class="h-9 rounded bg-[#1f1f1f] border border-white/10 flex items-center justify-center text-white/80">
                  {{ supports["Illustrator"] }}%
                </div>
              </div>

              <div>
                <p class="text-[11px] text-white/50 mb-1">InDesign</p>
                <div class="h-9 rounded bg-[#1f1f1f] border border-white/10 flex items-center justify-center text-white/80">
                  {{ supports["InDesign"] }}%
                </div>
              </div>

              <div>
                <p class="text-[11px] text-white/50 mb-1">Premiere</p>
                <div class="h-9 rounded bg-[#1f1f1f] border border-white/10 flex items-center justify-center text-white/80">
                  {{ supports["Premiere"] }}%
                </div>
              </div>

              <div>
                <p class="text-[11px] text-white/50 mb-1">After Effects</p>
                <div class="h-9 rounded bg-[#1f1f1f] border border-white/10 flex items-center justify-center text-white/80">
                  {{ supports["After Effects"] }}%
                </div>
              </div>

              <div>
                <p class="text-[11px] text-white/50 mb-1">Procreate</p>
                <div class="h-9 rounded bg-[#1f1f1f] border border-white/10 flex items-center justify-center text-white/80">
                  {{ supports["Procreate"] }}%
                </div>
              </div>
            </div>
          </details>

          <!-- CONTACTO -->
          <details class="mt-4">
            <summary class="list-none cursor-pointer">
              <div class="flex items-center justify-between">
                <p class="text-xs text-white/60">Contacto / Para saber más</p>
                <span class="text-white/40">▸</span>
              </div>
            </summary>

            <div class="mt-3 rounded bg-[#1f1f1f] border border-white/10 p-3 space-y-2">
              <a
                class="block text-sm text-blue-300 hover:underline"
                :href="instagramUrl"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>

              <a class="block text-sm text-blue-300 hover:underline" :href="`mailto:${email}`">
                {{ email }}
              </a>
            </div>
          </details>

          <!-- BOTÓN CREAR justo debajo de Contacto -->
          <button
            class="mt-4 w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500"
            type="button"
            @click="createNewProject"
          >
            Crear
          </button>

          <!-- Cerrar (lleva al aviso) -->
          <button
            class="mt-2 w-full rounded-md border border-white/15 px-4 py-2 text-sm text-white/80 hover:bg-white/5"
            type="button"
            @click="goToExitConfirm"
          >
            Cerrar
          </button>
        </aside>
      </div>
    </div>
  </div>
</template>