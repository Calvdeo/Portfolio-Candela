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

const fruitInfo: Record<FruitKey, { title: string; text: string; photo: string; photoAlt: string }> = {
  "apple-red": {
    title: "I",
    text: "La pegatinas de la fruta siempre han sido un ejemplo de microdiseño en nuestro día a día",
    photo: "/images/i.png",
    photoAlt: "Foto i - manzana roja",
  },
  "apple-green": {
    title: "T",
    text: "En homenaje a ellas formulé la idea de este reto, cada una está diseñada con un trasfondo tipográfico así se puede ver que en algunas aparecen las grandes categorías tipográficas y algunas de sus características.",
    photo: "/images/t.png",
    photoAlt: "Foto t - manzana verde",
  },
  orange: {
    title: "C",
    text: "Para llevar a cabo el proyecto, se imprimieron y se hizo un reportaje fotográfico junto con frutas reales y este ha sido el resultado",
    photo: "/images/c.png",
    photoAlt: "Foto c - naranja",
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
  hint: string
  hintClass: string
}

type DecorSticker = {
  id: number
  className: string
}

const stickerPositions: StickerPos[] = [
  { id: 3, wrapperClass: "left-[8%] top-[8%] rotate-[-8deg]", sizeClass: "w-32 sm:w-40 md:w-48", hint: "Sans serif geometrica.Trazos rectos y formas basadas en circulos, 1927. Ejemplo: Futura Bold Condensed.", hintClass: "-left-14 sm:-left-20 top-full mt-2" },
  { id: 4, wrapperClass: "left-[20%] top-[22%] rotate-[12deg]", sizeClass: "w-28 sm:w-36 md:w-44", hint: "Caligraficas. Imitan la escritura hecha a mano con trazos fluidos. Origen historico.", hintClass: "left-1/2 -top-14 sm:-top-16 -translate-x-1/2" },
  { id: 5, wrapperClass: "left-[32%] top-[9%] rotate-[-10deg]", sizeClass: "w-32 sm:w-40 md:w-48", hint: "Romana con serifa. Serifas marcadas inspiradas en la caligrafia antigua, 1924.", hintClass: "left-1/2 top-full mt-2 -translate-x-1/2" },
  { id: 6, wrapperClass: "right-[28%] top-[8%] rotate-[7deg]", sizeClass: "w-28 sm:w-36 md:w-44", hint: "Sans serif geometrica. Letras simples con construccion geometrica, 1927.Ejemplo:Futura.", hintClass: "right-0 -top-5 text-right" },
  { id: 7, wrapperClass: "right-[11%] top-[18%] rotate-[-9deg]", sizeClass: "w-32 sm:w-40 md:w-48", hint: "Serif incisa. Serifas en forma de cuna inspiradas en inscripciones en piedra, 1958.", hintClass: "left-1/2 -top-5 -translate-x-1/2" },
  { id: 8, wrapperClass: "left-[12%] bottom-[20%] rotate-[10deg]", sizeClass: "w-32 sm:w-40 md:w-48", hint: "Hutang. Estilo oriental decorativo. Inspirado en la caligrafia china tradicional, 1673.", hintClass: "left-1 top-full mt-2" },
  { id: 9, wrapperClass: "left-[36%] bottom-[11%] rotate-[-12deg]", sizeClass: "w-28 sm:w-36 md:w-44", hint: "Tipografia posmoderna. Formas expresivas y experimentales. 2001. Ejemplo: Rayuela", hintClass: "left-1/2 top-full mt-2 -translate-x-1/2" },
  { id: 10, wrapperClass: "right-[18%] bottom-[8%] rotate-[6deg]", sizeClass: "w-32 sm:w-40 md:w-48", hint: "Display. Tipografia decorativa, disenada para titulares y tamanos grandes, siglo XX.", hintClass: "right-full top-1/2 mr-2 -translate-y-1/2 text-right" },
  { id: 11, wrapperClass: "left-[47%] top-[30%] rotate-[14deg]", sizeClass: "w-28 sm:w-36 md:w-44", hint: "Semi-serif. Mezcla rasgos de serif y sans serif, eje vertical, 1988. Ejemplo: Rotis Semi Serif.", hintClass: "left-1/2 -top-14 sm:-top-16 -translate-x-1/2 text-center" },
  { id: 12, wrapperClass: "right-[5%] bottom-[30%] rotate-[-14deg]", sizeClass: "w-28 sm:w-36 md:w-44", hint: "Sans serif grotesca. Apertura pequena y trazos rectos no geometricos, 1958.", hintClass: "right-0 top-full mt-2 text-right" },
]

const decorStickers: DecorSticker[] = [
  { id: 3, className: "left-[1%] top-[4%] rotate-[-18deg] w-14 sm:w-16 md:w-20 opacity-70" },
  { id: 4, className: "left-[10%] bottom-[10%] rotate-[10deg] w-14 sm:w-16 md:w-20 opacity-70" },
  { id: 5, className: "left-[28%] top-[2%] rotate-[-8deg] w-16 sm:w-20 md:w-24 opacity-75" },
  { id: 6, className: "right-[30%] top-[3%] rotate-[8deg] w-14 sm:w-16 md:w-20 opacity-70" },
  { id: 7, className: "right-[3%] top-[12%] rotate-[-10deg] w-14 sm:w-16 md:w-20 opacity-75" },
  { id: 8, className: "left-[3%] bottom-[28%] rotate-[10deg] w-14 sm:w-16 md:w-20 opacity-70" },
  { id: 9, className: "left-[20%] bottom-[2%] rotate-[-10deg] w-14 sm:w-16 md:w-20 opacity-70" },
  { id: 10, className: "right-[18%] bottom-[3%] rotate-[7deg] w-16 sm:w-20 md:w-24 opacity-75" },
  { id: 11, className: "right-[6%] bottom-[30%] rotate-[14deg] w-14 sm:w-16 md:w-20 opacity-70" },
  { id: 12, className: "left-[43%] top-[0.5%] rotate-[-14deg] w-14 sm:w-16 md:w-20 opacity-65" },
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
        class="relative min-h-[68vh] sm:min-h-[72vh] overflow-visible"
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
          class="group absolute transition-transform duration-200 hover:scale-105 focus:outline-none"
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
          <span
            class="pointer-events-none absolute z-20 w-44 sm:w-52 text-[10px] sm:text-[11px] leading-snug font-medium text-black/80 opacity-0 transition-opacity duration-150 group-hover:opacity-100"
            :class="s.hintClass"
          >
            {{ s.hint }}
          </span>
        </button>
      </section>

      <div v-if="is36Days" class="w-full space-y-8">
        <div class="ml-auto max-w-xl space-y-3">
          <p class="text-right text-sm sm:text-[15px] leading-relaxed font-normal text-black/70">
            36 Days of Type is a project that invites designers, illustrators and visual artists to
            express their unique interpretation of the letters and numbers of the Latin alphabet.
          </p>
          <p class="text-right text-sm sm:text-[15px] leading-relaxed font-normal text-black/70">
            A yearly open call that explores the creative boundaries of letterforms by challenging
            participants to design a letter or number each day for 36 consecutive days. The result is
            a global and simultaneous act that showcases the ability to represent the same symbols
            from thousands of different perspectives.
          </p>
        </div>

        <div class="pt-1 space-y-4">
          <div class="w-full min-h-[42vh] mt-0 flex items-center justify-center">
            <div class="w-full max-w-[1300px] px-2 sm:px-4 flex items-end justify-center gap-1 sm:gap-2 md:gap-3">
            <button
              v-for="fruit in fruitButtons"
              :key="fruit.key"
              type="button"
              class="shrink-0 transition-transform duration-200 hover:scale-105"
              :class="activeFruit === fruit.key ? 'scale-105' : ''"
              :aria-label="`Abrir info ${fruit.label}`"
              @click="activeFruit = fruit.key"
            >
              <img
                :src="fruit.src"
                :alt="fruit.label"
                class="w-[clamp(170px,22vw,340px)] h-auto object-contain"
                draggable="false"
              />
            </button>
            </div>
          </div>

          <div class="py-1 max-w-3xl mx-auto text-center">
            <h3 class="text-lg font-semibold text-black">{{ fruitInfo[activeFruit].title }}</h3>
            <p class="mt-1 text-sm sm:text-base text-black/80 leading-relaxed">
              {{ fruitInfo[activeFruit].text }}
            </p>
          </div>

          <div class="relative w-full px-1 sm:px-2">
            <img
              v-for="(d, index) in decorStickers"
              :key="`decor-${d.id}-${index}`"
              :src="stickerPath(d.id)"
              :alt="`Pegatina decorativa ${d.id}`"
              class="pointer-events-none absolute z-10 object-contain drop-shadow-[0_4px_6px_rgba(0,0,0,0.14)]"
              :class="d.className"
              draggable="false"
            />
            <img
              :src="fruitInfo[activeFruit].photo"
              :alt="fruitInfo[activeFruit].photoAlt"
              class="relative z-20 w-full h-[84vh] object-contain"
              draggable="false"
            />
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
