<script setup lang="ts">
import { computed, nextTick, ref } from "vue"
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

const backToProjectsPath = computed(() => {
  const category = project.value?.category
  if (category === "ilustración") return "/app/projects/illustration"
  if (category === "fotografía") return "/app/projects/photography"
  return "/app/projects/design"
})

const is36Days = computed(() => project.value?.slug === "branding-yonosoyessa")
const isCartelCrefad = computed(() => project.value?.slug === "cartel Crefad")
const isCreatedHumanProject = computed(() => project.value?.slug === "Creado por inteligencia humana")
const cartelFestivalGif = "/images/p%C3%A1ginas%20detalle/cartel-crefad-detalle.gif"
const cartelCrefadText =
  "Elaboración de un proyecto de comunicación gráfica del I Congreso Iberoamericano de Creación y Fabricación Digital. Se diseñará la imagen de un cartel y un logotipo."
const createdHumanStickerA =
  "/images/p%C3%A1ginas%20detalle/ilustraci%C3%B3n/Creado%20por%20inteligencia%20humana%201.1.png"
const createdHumanStickerB =
  "/images/p%C3%A1ginas%20detalle/ilustraci%C3%B3n/Creado%20por%20inteligencia%20humana%201.2%20.png"
const createdHumanStickerCards = [
  { src: createdHumanStickerA, top: 2, left: 4, rotate: -14, width: 24, z: 6 },
  { src: createdHumanStickerB, top: 8, left: 33, rotate: 11, width: 28, z: 9 },
  { src: createdHumanStickerA, top: 4, left: 62, rotate: -7, width: 22, z: 4 },
  { src: createdHumanStickerB, top: 19, left: 14, rotate: 9, width: 31, z: 10 },
  { src: createdHumanStickerA, top: 22, left: 47, rotate: -12, width: 27, z: 7 },
  { src: createdHumanStickerB, top: 31, left: 72, rotate: 13, width: 23, z: 5 },
  { src: createdHumanStickerA, top: 41, left: 3, rotate: -10, width: 29, z: 12 },
  { src: createdHumanStickerB, top: 46, left: 28, rotate: 6, width: 25, z: 8 },
  { src: createdHumanStickerA, top: 49, left: 55, rotate: -16, width: 30, z: 11 },
  { src: createdHumanStickerB, top: 63, left: 18, rotate: 8, width: 26, z: 3 },
  { src: createdHumanStickerA, top: 68, left: 44, rotate: -9, width: 24, z: 13 },
  { src: createdHumanStickerB, top: 74, left: 68, rotate: 12, width: 21, z: 2 },
]
const cartelGalleryBasePath = "/images/p%C3%A1ginas%20detalle"
const cartelGalleryPhotos = [
  "page_1.png",
  "page_2.png",
  "page_3.png",
  "page_4.png",
  "page_5.png",
  "page_6.png",
  "page_7.png",
  "page_8.png",
  "page_9.png",
  "page_10.png",
  "page_11.png",
  "page_12.png",
  "page_13.png",
  "page_14.png",
  "page_15.png",
  "page_16.png",
  "page_17.png",
]
const cartelCarouselIndex = ref(0)
const activeCartelImage = computed(() => {
  const file = cartelGalleryPhotos[cartelCarouselIndex.value]
  return file ? `${cartelGalleryBasePath}/${file}` : ""
})

function prevCartelImage() {
  if (cartelGalleryPhotos.length === 0) return
  cartelCarouselIndex.value =
    (cartelCarouselIndex.value - 1 + cartelGalleryPhotos.length) % cartelGalleryPhotos.length
}

function nextCartelImage() {
  if (cartelGalleryPhotos.length === 0) return
  cartelCarouselIndex.value = (cartelCarouselIndex.value + 1) % cartelGalleryPhotos.length
}

function goToCartelImage(index: number) {
  if (index < 0 || index >= cartelGalleryPhotos.length) return
  cartelCarouselIndex.value = index
}

function getCreatedHumanStickerStyle(index: number) {
  const sticker = createdHumanStickerCards[index]
  if (!sticker) return {}
  return {
    top: `${sticker.top}%`,
    left: `${sticker.left}%`,
    width: `${sticker.width}%`,
    transform: `rotate(${sticker.rotate}deg)`,
    zIndex: String(sticker.z),
  }
}
const mainWord = computed(() => "36 days of type")
type FruitKey = "apple-red" | "apple-green" | "orange"
const activeFruit = ref<FruitKey>("apple-red")
const fruitPhotoSection = ref<HTMLElement | null>(null)

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
  sizeType: "lg" | "sm"
  hint: string
  hintClass: string
}

type DecorSticker = {
  id: number
  className: string
}

const stickerPositions: StickerPos[] = [
  { id: 3, wrapperClass: "left-[8%] top-[8%] rotate-[-8deg]", sizeClass: "w-32 sm:w-40 md:w-48", sizeType: "lg", hint: "Sans serif geometrica.Trazos rectos y formas basadas en circulos, 1927. Ejemplo: Futura Bold Condensed.", hintClass: "-left-14 sm:-left-20 top-full mt-2" },
  { id: 4, wrapperClass: "left-[20%] top-[22%] rotate-[12deg]", sizeClass: "w-28 sm:w-36 md:w-44", sizeType: "sm", hint: "Caligraficas. Imitan la escritura hecha a mano con trazos fluidos. Origen historico.", hintClass: "left-1/2 -top-14 sm:-top-16 -translate-x-1/2" },
  { id: 5, wrapperClass: "left-[32%] top-[9%] rotate-[-10deg]", sizeClass: "w-32 sm:w-40 md:w-48", sizeType: "lg", hint: "Romana con serifa. Serifas marcadas inspiradas en la caligrafia antigua, 1924.", hintClass: "left-1/2 top-full mt-2 -translate-x-1/2" },
  { id: 6, wrapperClass: "right-[28%] top-[8%] rotate-[7deg]", sizeClass: "w-28 sm:w-36 md:w-44", sizeType: "sm", hint: "Sans serif geometrica. Letras simples con construccion geometrica, 1927.Ejemplo:Futura.", hintClass: "right-0 -top-5 text-right" },
  { id: 7, wrapperClass: "right-[11%] top-[18%] rotate-[-9deg]", sizeClass: "w-32 sm:w-40 md:w-48", sizeType: "lg", hint: "Serif incisa. Serifas en forma de cuna inspiradas en inscripciones en piedra, 1958.", hintClass: "left-1/2 -top-5 -translate-x-1/2" },
  { id: 8, wrapperClass: "left-[12%] bottom-[20%] rotate-[10deg]", sizeClass: "w-32 sm:w-40 md:w-48", sizeType: "lg", hint: "Hutang. Estilo oriental decorativo. Inspirado en la caligrafia china tradicional, 1673.", hintClass: "left-1 top-full mt-2" },
  { id: 9, wrapperClass: "left-[36%] bottom-[11%] rotate-[-12deg]", sizeClass: "w-28 sm:w-36 md:w-44", sizeType: "sm", hint: "Tipografia posmoderna. Formas expresivas y experimentales. 2001. Ejemplo: Rayuela", hintClass: "left-1/2 top-full mt-2 -translate-x-1/2" },
  { id: 10, wrapperClass: "right-[18%] bottom-[8%] rotate-[6deg]", sizeClass: "w-32 sm:w-40 md:w-48", sizeType: "lg", hint: "Display. Tipografia decorativa, disenada para titulares y tamanos grandes, siglo XX.", hintClass: "right-full top-1/2 mr-2 -translate-y-1/2 text-right" },
  { id: 11, wrapperClass: "left-[47%] top-[30%] rotate-[14deg]", sizeClass: "w-28 sm:w-36 md:w-44", sizeType: "sm", hint: "Semi-serif. Mezcla rasgos de serif y sans serif, eje vertical, 1988. Ejemplo: Rotis Semi Serif.", hintClass: "left-1/2 -top-14 sm:-top-16 -translate-x-1/2 text-center" },
  { id: 12, wrapperClass: "right-[5%] bottom-[30%] rotate-[-14deg]", sizeClass: "w-28 sm:w-36 md:w-44", sizeType: "sm", hint: "Sans serif grotesca. Apertura pequena y trazos rectos no geometricos, 1958.", hintClass: "right-0 top-full mt-2 text-right" },
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

async function selectFruit(fruitKey: FruitKey) {
  activeFruit.value = fruitKey
  await nextTick()
  fruitPhotoSection.value?.scrollIntoView({ behavior: "smooth", block: "start" })
}
</script>

<template>
  <div class="days-detail space-y-6">
    <RouterLink :to="backToProjectsPath">
      <Button variant="ghost">
        <ArrowLeft class="h-4 w-4 mr-2" />
        Volver a proyectos
      </Button>
    </RouterLink>

    <div v-if="project" class="space-y-4">
      <section
        v-if="is36Days"
        class="days-hero relative"
      >
        <div class="absolute inset-0 flex items-center justify-center px-4">
          <p
            class="days-hero-title select-none text-black/90 font-semibold leading-none tracking-tight lowercase"
          >
            <span class="hero-main-word-inline">{{ mainWord }}</span>
            <span class="hero-main-word-portrait" aria-hidden="true">36 days<br />of type</span>
          </p>
        </div>

        <button
          v-for="s in stickerPositions"
          :key="s.id"
          type="button"
          class="days-sticker group absolute transition-transform duration-200 hover:scale-105 focus:outline-none"
          :class="[s.wrapperClass, 'z-10']"
          :aria-label="`Sticker fruta ${s.id}`"
        >
          <img
            :src="stickerPath(s.id)"
            :alt="`Sticker fruta ${s.id}`"
            class="days-sticker-img object-contain drop-shadow-[0_8px_10px_rgba(0,0,0,0.18)]"
            :class="[s.sizeClass, s.sizeType === 'lg' ? 'days-sticker-img-lg' : 'days-sticker-img-sm']"
            draggable="false"
          />
          <span
            class="days-sticker-hint pointer-events-none absolute z-20 w-44 sm:w-52 text-[10px] sm:text-[11px] leading-snug font-medium text-black/80 opacity-0 transition-opacity duration-150 group-hover:opacity-100"
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
              @click="selectFruit(fruit.key)"
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

          <div ref="fruitPhotoSection" class="relative w-full px-1 sm:px-2">
            <img
              v-for="(d, index) in decorStickers"
              :key="`decor-${d.id}-${index}`"
              :src="stickerPath(d.id)"
              :alt="`Pegatina decorativa ${d.id}`"
              class="days-decor-img pointer-events-none absolute z-10 object-contain drop-shadow-[0_4px_6px_rgba(0,0,0,0.14)]"
              :class="d.className"
              draggable="false"
            />
            <img
              :src="fruitInfo[activeFruit].photo"
              :alt="fruitInfo[activeFruit].photoAlt"
              class="relative z-20 mx-auto w-full max-w-[1200px] h-auto object-contain"
              draggable="false"
            />
          </div>
        </div>
      </div>

      <div v-else class="border overflow-hidden bg-muted/20">
        <template v-if="isCartelCrefad">
          <div class="bg-background p-4 sm:p-6 space-y-4">
            <img
              :src="cartelFestivalGif"
              alt="Animacion Cartel Crefad"
              class="w-full max-h-[80vh] object-contain bg-muted/20"
              loading="lazy"
            />
            <p class="text-sm sm:text-base leading-relaxed text-muted-foreground">
              {{ cartelCrefadText }}
            </p>

            <div class="space-y-3">
              <div class="relative rounded bg-muted/20 p-2 sm:p-3">
                <img
                  :src="activeCartelImage"
                  alt="Galeria Cartel Crefad"
                  class="w-full max-h-[78vh] object-contain"
                  loading="lazy"
                />

                <button
                  type="button"
                  class="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/70 text-white text-2xl leading-none hover:bg-black/85"
                  aria-label="Imagen anterior"
                  @click="prevCartelImage"
                >
                  <
                </button>

                <button
                  type="button"
                  class="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/70 text-white text-2xl leading-none hover:bg-black/85"
                  aria-label="Imagen siguiente"
                  @click="nextCartelImage"
                >
                  >
                </button>
              </div>

              <div class="flex flex-wrap items-center justify-center gap-2">
                <button
                  v-for="(_, index) in cartelGalleryPhotos"
                  :key="`cartel-dot-${index}`"
                  type="button"
                  class="h-2.5 w-2.5 rounded-full transition-opacity"
                  :class="index === cartelCarouselIndex ? 'bg-black opacity-100' : 'bg-black/40 opacity-70'"
                  :aria-label="`Ir a imagen ${index + 1}`"
                  @click="goToCartelImage(index)"
                />
              </div>
            </div>
          </div>
        </template>
        <template v-else-if="isCreatedHumanProject">
          <div class="p-0">
            <div class="relative w-full min-h-[62svh] sm:min-h-[72svh] md:min-h-[82svh] overflow-hidden">
              <img
                v-for="(sticker, index) in createdHumanStickerCards"
                :key="`created-human-stack-${index}`"
                :src="sticker.src"
                :alt="`Creado por inteligencia humana ${index + 1}`"
                class="absolute object-contain pointer-events-none select-none"
                :style="getCreatedHumanStickerStyle(index)"
                loading="lazy"
              />
            </div>

            <div class="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-10 space-y-5 text-black/85">
              <h2 class="text-3xl sm:text-4xl font-semibold tracking-tight">
                Creado por la Inteligencia Humana
              </h2>

              <p class="text-base sm:text-lg leading-relaxed">
                En un momento donde los algoritmos escriben, diseñan y producen a una velocidad
                vertiginosa, este proyecto nace como un recordatorio sencillo pero contundente: la
                creatividad sigue teniendo pulso humano.
              </p>

              <p class="text-base sm:text-lg leading-relaxed">
                Creado por la Inteligencia Humana es una declaración. Un gesto gráfico y conceptual
                que celebra la imaginación, la intuición y la imperfección que solo las personas
                pueden aportar. No es una negación de la tecnología, sino una reivindicación del
                origen de las ideas: la mente curiosa, la experiencia vivida, el humor, el error y
                la sensibilidad.
              </p>

              <p class="text-base sm:text-lg leading-relaxed">
                El símbolo del proyecto funciona como un sello. Una marca que señala aquello que
                fue pensado, dibujado o concebido desde la mente humana, con todas sus
                contradicciones y su riqueza. Es un recordatorio de que detrás de cada creación
                auténtica hay alguien observando el mundo, procesándolo y transformándolo.
              </p>

              <p class="text-base sm:text-lg leading-relaxed">
                Más que una etiqueta, Creado por la Inteligencia Humana es una invitación a valorar
                el proceso creativo y a mantener viva la chispa que nos hace inventar, imaginar y
                contar historias.
              </p>
            </div>
          </div>
        </template>

        <template v-else>
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
          class="w-full h-64 sm:h-72 object-contain bg-muted/20"
          loading="lazy"
        />
        <div v-else class="h-40 flex items-center justify-center text-sm text-muted-foreground">
          Sin portada
        </div>
        </template>
      </div>
    </div>

    <div v-else class="border p-4">
      <p class="text-sm text-muted-foreground">No existe ese proyecto.</p>
      <RouterLink :to="backToProjectsPath" class="underline text-sm">Volver</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.days-detail {
  overflow-x: clip;
}

.days-hero {
  min-height: clamp(430px, 50vw, 760px);
  overflow: visible;
}

.days-hero-title {
  white-space: nowrap;
  font-size: clamp(3.2rem, 16vw, 13rem);
}

.days-sticker-img,
.days-decor-img {
  transform-origin: center center;
}

.days-sticker-img-lg {
  width: clamp(5.8rem, 10.2cqw, 12rem) !important;
}

.days-sticker-img-sm {
  width: clamp(5rem, 8.9cqw, 10.5rem) !important;
}

.hero-main-word-portrait {
  display: none;
}

@container (max-width: 1200px) {
  .days-hero {
    min-height: clamp(420px, 56vw, 720px);
  }

  .days-hero-title {
    font-size: clamp(2.7rem, 13.5cqw, 7.8rem);
  }
}

@container (max-width: 960px) {
  .days-hero {
    min-height: clamp(390px, 60vw, 640px);
    overflow: hidden;
  }

  .days-hero-title {
    font-size: clamp(2.2rem, 13cqw, 6rem);
  }

  .days-sticker-hint {
    display: none;
  }

  .days-sticker-img-lg {
    width: clamp(5.1rem, 10.5cqw, 8.5rem) !important;
  }

  .days-sticker-img-sm {
    width: clamp(4.5rem, 9.2cqw, 7.2rem) !important;
  }
}

@container (max-width: 780px) {
  .days-hero {
    min-height: clamp(360px, 72vw, 620px);
    overflow: hidden;
  }

  .days-hero-title {
    white-space: normal;
    text-align: center;
    line-height: 0.9;
    font-size: clamp(1.9rem, 12.8cqw, 4.8rem);
  }

  .hero-main-word-inline {
    display: none;
  }

  .hero-main-word-portrait {
    display: inline-block;
    text-align: center;
  }
}

@container (max-width: 620px) {
  .days-hero {
    min-height: clamp(330px, 82vw, 540px);
  }

  .days-hero-title {
    font-size: clamp(1.75rem, 12.2cqw, 3.8rem);
  }

  .days-sticker-img-lg {
    width: clamp(4.7rem, 10.8cqw, 7.2rem) !important;
  }

  .days-sticker-img-sm {
    width: clamp(4.1rem, 9.6cqw, 6.3rem) !important;
  }
}

@media (orientation: landscape) and (max-height: 760px) {
  .days-hero {
    min-height: clamp(300px, 44vw, 480px);
  }

  .days-hero-title {
    font-size: clamp(1.85rem, 10.6cqw, 4.8rem);
  }
}
</style>

