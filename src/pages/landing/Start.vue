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

/** Datos */
const age = 20
const city = "Valencia"
const role = ref("Diseñadora")

/** Hover para cambiar logo */
const isNameHover = ref(false)

/** Imágenes del nombre (en public/brand) */
const essaImg = "/brand/essa.png"
const yonosoyessaImg = "/brand/yonosoyessa.png"

/** Proyectos (panel derecho) */
const projects = ref([
  { slug: "branding-yonosoyessa", title: "Branding · YoNoSoyEssa" },
  { slug: "cartel-festival", title: "Cartel · Festival" },
  { slug: "ilustracion-editorial", title: "Ilustración · Editorial" },
  { slug: "personajes-procreate", title: "Personajes · Procreate" },
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


const instagramUrl = "https://instagram.com/yonosoyessa.tiff"
const email = "yonosoyessa.jpg@gmail.com"


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


const portraitIcon = "/orientation/portrait.png"
const landscapeIcon = "/orientation/landscape.png"
</script>

<template>
  <div class="w-full h-[100svh] bg-[#3d3d3d] text-white overflow-hidden">
    <div class="w-full h-full bg-[#2f2f2f] flex flex-col">
      
      <div
        class="h-10 bg-[#2a2a2a] border-b border-white/10 flex items-center justify-between px-4"
      >
        <p class="text-sm text-white/80">Nuevo documento</p>
        <button class="text-white/60 hover:text-white/90" type="button">✕</button>
      </div>

      <div class="flex flex-1 overflow-hidden">
        
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

        
        <aside class="w-[380px] border-l border-white/10 p-6 bg-[#2d2d2d] flex flex-col">
          <p class="text-xs font-semibold text-white/60 tracking-wide">Sobre mí</p>

         
          <div
            class="mt-3 pb-3 border-b border-white/15 select-none"
            @mouseenter="isNameHover = true"
            @mouseleave="isNameHover = false"
          >
            <p class="text-[11px] text-white/40">Nombre</p>

            <div class="mt-2 h-12 w-full flex items-center">
              <!-- Imagen base (essa) -->
              <img
                :src="essaImg"
                alt="essa"
                class="h-40
                 w-auto flex items-center justify-center"
                :class="isNameHover ? 'hidden' : 'block'"
                draggable="false"
              />

              <!-- Imagen hover (yonosoyessa) -->
              <img
                :src="yonosoyessaImg"
                alt="yonosoyessa"
                class="h-60
                 w-auto"
                :class="isNameHover ? 'block' : 'hidden'"
                draggable="false"
              />
            </div>
          </div>

          
          <div class="mt-4">
            <p class="text-xs text-white/60 mb-2">Edad</p>

            <div class="flex items-center gap-2">
              <div
                class="h-9 w-24 rounded bg-[#1f1f1f] border border-white/10 flex items-center justify-center text-white/80"
              >
                {{ age }}
              </div>

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

                <span
                  class="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
                >
                  ▾
                </span>
              </div>
            </div>
          </div>

          
          <div class="mt-4">
            <p class="text-xs text-white/60 mb-2">Ciudad</p>

            <div class="flex items-center gap-2">
              <div
                class="h-9 w-24 rounded bg-[#1f1f1f] border border-white/10 flex items-center justify-center text-white/80"
              >
                {{ city }}
              </div>

              <div class="flex items-center gap-2 ml-1" title="Orientación automática">
                <img
                  :src="isPortrait ? portraitIcon : landscapeIcon"
                  alt="Orientación"
                  class="h-6 w-auto opacity-80"
                  draggable="false"
                />
                <span class="text-xs text-white/55">
                  {{ isPortrait ? "Vertical" : "Horizontal" }}
                </span>
              </div>
            </div>
          </div>

          
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

          
          <details class="mt-6">
            <summary class="list-none cursor-pointer">
              <div class="flex items-center justify-between">
                <p class="text-xs text-white/60">Soportes</p>
                <span class="text-white/40">▸</span>
              </div>
            </summary>

            <div class="mt-3 grid grid-cols-2 gap-3">
              <div v-for="(v, k) in supports" :key="k">
                <p class="text-[11px] text-white/50 mb-1">{{ k }}</p>
                <div
                  class="h-9 rounded bg-[#1f1f1f] border border-white/10 flex items-center justify-center text-white/80"
                >
                  {{ v }}%
                </div>
              </div>
            </div>
          </details>

          <!-- Contacto -->
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

          <!-- Botones -->
          <button
            class="mt-4 w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500"
            type="button"
            @click="createNewProject"
          >
            Crear
          </button>

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