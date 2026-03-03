<script setup lang="ts">
import { computed, ref } from "vue"
import { useRoute, RouterLink } from "vue-router"
import { projects } from "@/data/projects"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-vue-next"

const route = useRoute()

const project = computed(() => {
  const slug = String(route.params.slug)
  return projects.find((p) => p.slug === slug) ?? null
})

const is36Days = computed(() => project.value?.slug === "branding-yonosoyessa")
const mainWord = computed(() => "36 days of type")
type FruitKey = "apple-red" | "apple-green" | "orange"
const activeFruit = ref<FruitKey>("apple-red")

const fruitInfo: Record<FruitKey, { title: string; text: string }> = {
  "apple-red": {
    title: "Manzana roja - Concepto visual",
    text: "Esta parte explora la idea principal del sistema grafico: contraste alto, composicion directa y simbolos faciles de reconocer.",
  },
  "apple-green": {
    title: "Manzana verde - Construccion tipografica",
    text: "Aqui se trabaja el ritmo de las letras, pesos y proporciones para mantener coherencia en toda la serie de 36 piezas.",
  },
  orange: {
    title: "Naranja - Aplicacion final",
    text: "En esta fase se prueban variantes finales, jerarquia visual y acabado editorial para cerrar la coleccion completa.",
  },
}

const fruitButtons: Array<{ key: FruitKey; label: string; src: string }> = [
  { key: "apple-red", label: "Manzana roja", src: "/images/manzana-roja.png" },
  { key: "apple-green", label: "Manzana verde", src: "/images/manzana-verde.png" },
  { key: "orange", label: "Naranja", src: "/images/naranja.png" },
]

type StickerPos = {
  id: number
  wrapperClass: string
  sizeClass: string
}

const stickerPositions: StickerPos[] = [
  { id: 3, wrapperClass: "left-[8%] top-[8%] rotate-[-8deg]", sizeClass: "w-32 sm:w-40 md:w-48" },
  { id: 4, wrapperClass: "left-[20%] top-[22%] rotate-[12deg]", sizeClass: "w-28 sm:w-36 md:w-44" },
  { id: 5, wrapperClass: "left-[32%] top-[9%] rotate-[-10deg]", sizeClass: "w-32 sm:w-40 md:w-48" },
  { id: 6, wrapperClass: "right-[28%] top-[8%] rotate-[7deg]", sizeClass: "w-28 sm:w-36 md:w-44" },
  { id: 7, wrapperClass: "right-[11%] top-[18%] rotate-[-9deg]", sizeClass: "w-32 sm:w-40 md:w-48" },
  { id: 8, wrapperClass: "left-[12%] bottom-[20%] rotate-[10deg]", sizeClass: "w-32 sm:w-40 md:w-48" },
  { id: 9, wrapperClass: "left-[36%] bottom-[11%] rotate-[-12deg]", sizeClass: "w-28 sm:w-36 md:w-44" },
  { id: 10, wrapperClass: "right-[18%] bottom-[8%] rotate-[6deg]", sizeClass: "w-32 sm:w-40 md:w-48" },
  { id: 11, wrapperClass: "left-[47%] top-[30%] rotate-[14deg]", sizeClass: "w-28 sm:w-36 md:w-44" },
  { id: 12, wrapperClass: "right-[5%] bottom-[30%] rotate-[-14deg]", sizeClass: "w-28 sm:w-36 md:w-44" },
]

function stickerPath(id: number) {
  return `/images/fruta-${String(id).padStart(2, "0")}.png`
}
</script>

<template>
  <div class="space-y-6">
    <RouterLink to="/app/projects/design">
      <Button variant="ghost">
        <ArrowLeft class="h-4 w-4 mr-2" />
        Volver a proyectos
      </Button>
    </RouterLink>

    <div v-if="project" class="space-y-4">
      <section
        v-if="is36Days"
        class="relative min-h-[68vh] sm:min-h-[72vh] overflow-hidden"
      >
        <div class="absolute inset-0 flex items-center justify-center px-4">
          <p
            class="select-none text-black/90 font-semibold leading-none tracking-tight lowercase whitespace-nowrap text-[clamp(3.2rem,16vw,13rem)]"
          >
            {{ mainWord }}
          </p>
        </div>

        <button
          v-for="s in stickerPositions"
          :key="s.id"
          type="button"
          class="absolute transition-transform duration-200 hover:scale-105 focus:outline-none"
          :class="[s.wrapperClass, 'z-10']"
          :aria-label="`Sticker fruta ${s.id}`"
        >
          <img
            :src="stickerPath(s.id)"
            :alt="`Sticker fruta ${s.id}`"
            class="object-contain drop-shadow-[0_8px_10px_rgba(0,0,0,0.18)]"
            :class="s.sizeClass"
            draggable="false"
          />
        </button>
      </section>

      <div v-if="is36Days" class="max-w-4xl ml-auto space-y-5">
        <p class="text-right text-base leading-relaxed font-semibold text-black/80">
          36 Days of Type is a project that invites designers, illustrators and visual artists to
          express their unique interpretation of the letters and numbers of the Latin alphabet.
        </p>
        <p class="text-right text-base leading-relaxed font-semibold text-black/80">
          A yearly open call that explores the creative boundaries of letterforms by challenging
          participants to design a letter or number each day for 36 consecutive days. The result is
          a global and simultaneous act that showcases the ability to represent the same symbols
          from thousands of different perspectives.
        </p>

        <div class="pt-1 space-y-4">
          <div class="flex flex-wrap items-center justify-center gap-4">
            <button
              v-for="fruit in fruitButtons"
              :key="fruit.key"
              type="button"
              class="transition-transform duration-200 hover:scale-105"
              :class="activeFruit === fruit.key ? 'scale-105' : ''"
              :aria-label="`Abrir info ${fruit.label}`"
              @click="activeFruit = fruit.key"
            >
              <img
                :src="fruit.src"
                :alt="fruit.label"
                class="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                draggable="false"
              />
            </button>
          </div>

          <div class="border-r-4 border-black/70 pr-4 py-1 max-w-3xl ml-auto">
            <h3 class="text-lg font-semibold text-black text-right">{{ fruitInfo[activeFruit].title }}</h3>
            <p class="mt-1 text-sm sm:text-base text-black/80 leading-relaxed text-right">
              {{ fruitInfo[activeFruit].text }}
            </p>
          </div>
        </div>
      </div>

      <div v-else class="border overflow-hidden bg-muted/20">
        <div class="p-4 sm:p-5 space-y-3 border-b bg-background">
          <div class="space-y-1">
            <h2 class="text-3xl font-semibold">{{ project.title }}</h2>
            <p class="text-sm text-muted-foreground">{{ project.category }} - {{ project.year ?? "-" }}</p>
          </div>
          <div class="flex flex-wrap gap-2">
            <Badge v-for="t in project.tags" :key="t" variant="secondary">{{ t }}</Badge>
          </div>
          <p class="text-muted-foreground">{{ project.description }}</p>
        </div>
        <img
          v-if="project.cover"
          :src="project.cover"
          :alt="`Portada de ${project.title}`"
          class="w-full h-64 sm:h-72 object-cover"
          loading="lazy"
        />
        <div v-else class="h-40 flex items-center justify-center text-sm text-muted-foreground">
          Sin portada
        </div>
      </div>
    </div>

    <div v-else class="border p-4">
      <p class="text-sm text-muted-foreground">No existe ese proyecto.</p>
      <RouterLink to="/app/projects/design" class="underline text-sm">Volver</RouterLink>
    </div>
  </div>
</template>
