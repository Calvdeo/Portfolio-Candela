<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

function createNewProject() {
  router.push("/app/about")
}
function goToExitConfirm() {
  router.push("/exit")
}

const age = 20
const city = "Valencia"
const previewImg = "/images/Portada_essa.png"
const coverImg = "/images/illustrator.png"
const coverBackdropOptions = [
  "/images/páginas detalle/fotografía/3.png",
  "/images/páginas detalle/t.png",
  "/images/páginas detalle/fotografía/levis-38.png",
  "/images/páginas detalle/ilustración/lobolopez2",
  "/images/páginas detalle/ilustración/comiccolor.png",
]
const coverBackdropImg =
  coverBackdropOptions[Math.floor(Math.random() * coverBackdropOptions.length)]
const role = ref("Diseñadora")
const showCover = ref(true)

function dismissCover() {
  showCover.value = false
}

function showCoverAgain() {
  showCover.value = true
}


const isNameHover = ref(false)


const essaImg = "/brand/essa.png"
const yonosoyessaImg = "/brand/yonosoyessa.png"




const projects = ref([
  { slug: "36 days of type", title: "36 days of type" },
  { slug: "Bloom", title: "Bloom" },
  { slug: "Cartel crefad", title: "Cartel crefad" },
  { slug: "le-vi´s", title: "le-vi´s" },
  { slug: "Creado por inteligencia humana", title: "Creado por inteligencia humana" },
  { slug: "Ilustración conceptual", title: "Ilustración conceptual" },
  { slug: "Ilustración narrativa", title: "Ilustración narrativa" },
  { slug: "Cómic", title: "Cómic" },
  { slug: "Lobo lópez", title: "Lobo lópez" },
  { slug: "Ilustración vectorial", title: "Ilustración vectorial" },
 
])
const projectCount = computed(() => projects.value.length)


type SupportKey =
  | "Photoshop"
  | "Illustrator"
  | "InDesign"
  | "Premiere"
  | "After Effects"
  | "Procreate"

const supports = ref<Record<SupportKey, number>>({
  Photoshop: 90,
  Illustrator: 90,
  InDesign: 70,
  Premiere: 8,
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


const portraitIconOff = "/orientation/portrait.png"
const portraitIconOn = "/orientation/portrait_azul.png"
const landscapeIconOff = "/orientation/landscape.png"
const landscapeIconOn = "/orientation/landscape_azul.png"
</script>

<template>
  
  <div class="w-full min-h-svh bg-[#2f2f2f] overflow-hidden relative">
  
    <div class="w-full min-h-svh flex items-center justify-center p-3 sm:p-6 lg:p-10 pb-24">
      <div
        :class="[
          'relative w-[92vw] max-w-[1400px] h-[86svh] sm:h-[88svh] lg:h-[82svh] text-white overflow-hidden',
          showCover
            ? 'bg-transparent rounded-none border-0 shadow-none'
            : 'bg-[#2f2f2f] rounded-xl border border-black/10 shadow-2xl',
        ]"
      >
        
        <template v-if="!showCover">
        <div
          class="h-10 bg-[#2a2a2a] border-b border-white/10 flex items-center justify-between px-4"
        >
          <div class="flex items-center">
            <div class="px-3 py-1 rounded-md bg-[#242424] border border-white/10 text-sm text-white/80">
              Nuevo documento
            </div>
          </div>

          <button class="text-white/60 hover:text-white/90" type="button" @click="showCoverAgain">
            ✕
          </button>
        </div>

        
        <div
          class="flex flex-col lg:flex-row h-[calc(86svh-40px)] sm:h-[calc(88svh-40px)] lg:h-[calc(82svh-40px)] overflow-hidden"
        >
          
          <div class="flex-1 p-4 sm:p-6 lg:p-8 overflow-hidden lg:overflow-y-auto">
            
            <div class="hidden lg:block rounded-md bg-[#242424] border border-white/10 p-6 relative">
              <button
                class="absolute right-3 top-3 text-white/50 hover:text-white/80"
                type="button"
              >
                ✕
              </button>

              <h1 class="text-2xl sm:text-3xl font-semibold">Vamos a crear algo nuevo</h1>

              <p class="mt-2 text-sm text-blue-300 underline">Bienvenido a mi portfolio</p>
            </div>

            <div class="mt-6 sm:mt-8">
              
              <div class="hidden lg:flex items-center justify-between">
                <p class="text-sm font-semibold text-white/80">TUS ELEMENTOS RECIENTES</p>
                <p class="text-xs text-white/50">({{ projectCount }})</p>
              </div>

              
              <div
                class="mt-3 rounded-md bg-[#2b2b2b] border border-white/10 p-2 sm:p-4 h-[55svh] lg:h-auto flex items-center justify-center"
              >
                <img
                  :src="previewImg"
                  alt="Preview"
                  class="max-h-full w-full h-full object-contain"
                  draggable="false"
                />
              </div>
            </div>

          </div>

          
          <aside
            class="w-full lg:w-95 border-t lg:border-t-0 lg:border-l border-white/10 p-4 sm:p-6 bg-[#2d2d2d] flex flex-col overflow-y-auto"
          >
            <p class="text-xs font-semibold text-white/60 tracking-wide">Sobre mí</p>

            <div
              class="mt-3 pb-3 border-b border-white/15 select-none"
              @mouseenter="isNameHover = true"
              @mouseleave="isNameHover = false"
            >
              <p class="text-[11px] text-white/40">Nombre</p>

              <div class="mt-2 h-12 w-full flex items-center">
                <img
                  :src="essaImg"
                  alt="essa"
                  class="h-40 w-auto"
                  :class="isNameHover ? 'hidden' : 'block'"
                  draggable="false"
                />

                <img
                  :src="yonosoyessaImg"
                  alt="yonosoyessa"
                  class="h-60 w-auto"
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
                    <option>Editora</option>
                    <option>Creadora de contenido</option>
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

                <div class="ml-2">
                  <p class="text-[11px] text-white/40">Orientación</p>

                  <div class="mt-1 flex items-center gap-2" title="Orientación automática">
                    <img
                      :src="isPortrait ? portraitIconOn : portraitIconOff"
                      alt="Vertical"
                      class="h-6 w-auto"
                      :class="isPortrait ? 'opacity-100' : 'opacity-60'"
                      draggable="false"
                    />

                    <img
                      :src="isPortrait ? landscapeIconOff : landscapeIconOn"
                      alt="Horizontal"
                      class="h-6 w-auto"
                      :class="isPortrait ? 'opacity-60' : 'opacity-100'"
                      draggable="false"
                    />
                  </div>
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
                  <p class="text-xs text-white/60">Softwares</p>
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
        </template>

        <button
          v-if="showCover"
          type="button"
          class="absolute inset-0 z-[200] relative flex items-center justify-center cursor-pointer"
          @click="dismissCover"
          aria-label="Quitar portada"
        >
          <div
            class="absolute right-3 top-10 bottom-[4.25rem] w-[68%] sm:w-[62%] md:w-[56%] max-w-[520px] rounded-xl overflow-hidden"
          >
            <img
              v-for="img in coverBackdropOptions"
              :key="img"
              :src="img"
              alt="Fondo portada"
              class="absolute inset-0 h-full w-full object-cover transition-opacity duration-200"
              :class="img === coverBackdropImg ? 'opacity-100' : 'opacity-0'"
              draggable="false"
            />
          </div>
          <img
            :src="coverImg"
            alt="Portada"
            class="relative z-10 block h-auto w-auto max-h-full max-w-full object-contain"
            draggable="false"
          />
        </button>
      </div>
    </div>
  </div>
</template>




