<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref, watch } from "vue"
import { useRoute, RouterLink } from "vue-router"
import { projects } from "@/data/projects"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Pause, SkipBack, SkipForward, Volume2 } from "lucide-vue-next"

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
const isAvariciaProject = computed(() => project.value?.slug === "Avaricia")
const isCartelCrefad = computed(() => project.value?.slug === "cartel Crefad")
const isPackagingProject = computed(() => project.value?.slug === "Packaging")
const isLevisProject = computed(() => project.value?.slug === "Le-vis")
const isRetratosProject = computed(() => project.value?.slug === "Retratos")
const isCreatedHumanProject = computed(() => project.value?.slug === "Creado por inteligencia humana")
const isIllustrationConceptual = computed(() => project.value?.slug === "Ilustración conceptual")
const isFeminismoProject = computed(() => project.value?.slug === "Feminismo")
const isOlimpiadaFilosoficaProject = computed(() => {
  const slug = (project.value?.slug ?? "").toLowerCase()
  return slug.includes("olimpiada") && (slug.includes("filosófica") || slug.includes("filosofica"))
})
const isCartelFilosoficoProject = computed(() => {
  const slug = (project.value?.slug ?? "").toLowerCase()
  const title = (project.value?.title ?? "").toLowerCase()
  return (
    slug.includes("cartel filosófico") ||
    slug.includes("cartel filosofico") ||
    title.includes("cartel filosófico") ||
    title.includes("cartel filosofico")
  )
})
const isComicProject = computed(() => {
  const key = (project.value?.slug ?? "").toLowerCase()
  return key.includes("comic") || key.includes("cómic") || key.includes("cã³mic")
})
const isIllustrationNarrative = computed(() => {
  const slug = (project.value?.slug ?? "").toLowerCase()
  const title = (project.value?.title ?? "").toLowerCase()
  return slug.includes("narrativa") || title.includes("narrativa") || title.includes("narativa")
})
const isLoboLopezProject = computed(() => {
  const slug = (project.value?.slug ?? "").toLowerCase()
  const title = (project.value?.title ?? "").toLowerCase()
  return slug.includes("lobo") || title.includes("lobo")
})
const hasFullGrayBackground = computed(() =>
  isIllustrationConceptual.value ||
  isIllustrationNarrative.value ||
  isComicProject.value ||
  isLoboLopezProject.value,
)
const cartelFestivalGif = "/images/páginas detalle/cartel-crefad-detalle.gif"
const cartelCrefadText =
  "Elaboración de un proyecto de comunicación gráfica del I Congreso Iberoamericano de Creación y Fabricación Digital. Se diseñará la imagen de un cartel y un logotipo."
const createdHumanStickerA =
  "/images/páginas detalle/ilustración/Creado por inteligencia humana 1.1.png"
const createdHumanStickerB =
  "/images/páginas detalle/ilustración/Creado por inteligencia humana 1.2 .png"
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
const packagingHeroImage = "/images/páginas detalle/LOGO CHOCOLATE negro.png"
const packagingFeatureImages = [
  "/images/páginas detalle/121.png",
  "/images/páginas detalle/122.png",
  "/images/páginas detalle/61.png",
  "/images/páginas detalle/92.png",
]
const packagingCarouselPhotos = [
  "/images/páginas detalle/2.png",
  "/images/páginas detalle/3.png",
  "/images/páginas detalle/4.png",
  "/images/páginas detalle/5.png",
  "/images/páginas detalle/6.png",
  "/images/páginas detalle/7.png",
  "/images/páginas detalle/8.png",
  "/images/páginas detalle/9.png",
  "/images/páginas detalle/10.png",
  "/images/páginas detalle/11.png",
  "/images/páginas detalle/12.png",
  "/images/páginas detalle/13.png",
  "/images/páginas detalle/14.png",
  "/images/páginas detalle/15.png",
  "/images/páginas detalle/16.png",
  "/images/páginas detalle/17.png",
  "/images/páginas detalle/18.png",
  "/images/páginas detalle/19.png",
  "/images/páginas detalle/20.png",
  "/images/páginas detalle/21.png",
  "/images/páginas detalle/22.png",
  "/images/páginas detalle/23.png",
]
const retratosHeroGifs = [
  "/images/páginas detalle/fotografía/1.gif",
  "/images/páginas detalle/fotografía/2.gif",
  "/images/páginas detalle/fotografía/3.gif",
]
const levisGridImages = [
  "/images/páginas detalle/fotografía/levis-38.png",
  "/images/páginas detalle/fotografía/levis-39.png",
  "/images/páginas detalle/fotografía/levis-41.png",
  "/images/páginas detalle/fotografía/levis-42.png",
  "/images/páginas detalle/fotografía/levis-43.png",
]
const levisApplicationImages = [
  "/images/páginas detalle/fotografía/10.png",
  "/images/páginas detalle/fotografía/11.png",
  "/images/páginas detalle/fotografía/12.png",
  "/images/páginas detalle/fotografía/13.png",
  "/images/páginas detalle/fotografía/14.png",
  "/images/páginas detalle/fotografía/15.png",
  "/images/páginas detalle/fotografía/16.png",
  "/images/páginas detalle/fotografía/17.png",
]
const retratosScrollImages = [
  "/images/páginas detalle/fotografía/1.png",
  "/images/páginas detalle/fotografía/1.1.png",
  "/images/páginas detalle/fotografía/2.png",
  "/images/páginas detalle/fotografía/2.2.png",
  "/images/páginas detalle/fotografía/3.png",
  "/images/páginas detalle/fotografía/3.2.png",
]
const packagingCarouselIndex = ref(0)
const activePackagingImage = computed(
  () => packagingCarouselPhotos[packagingCarouselIndex.value] ?? packagingCarouselPhotos[0] ?? "",
)
let packagingCarouselTimer: ReturnType<typeof setInterval> | null = null
const illustrationConceptualBottomText =
  "Feminismos complejos para una vida digna de ser vivida. Este proyecto traduce en imagen una idea central del feminismo contemporáneo: que la lucha por la igualdad no ocurre solo en las calles, sino también en la vida cotidiana. La ilustración muestra un momento íntimo de descanso junto al símbolo feminista, recordando que lo personal también es político. La obra propone reflexionar sobre las múltiples realidades que atraviesan a las mujeres y sobre la necesidad de construir colectivamente condiciones para una vida digna."
const illustrationConceptualSecondImage =
  "/images/páginas detalle/ilustración/conceptual1.png"
const illustrationConceptualWatercolorText = "Ilustraciones en acuarela."
const illustrationNarrativePalette = [
  {
    color: "#8a8d91",
    text: "Tristeza, rutina, miedo, silencio, cenizas, supervivencia",
    border: false,
  },
  {
    color: "#8f1016",
    text: "Sangre, odio, fuego, violencia, destrucción, rabia, humanos",
    border: false,
  },
  {
    color: "#000000",
    text: "Muerte, guerra, pérdida, dolor, oscuridad, opresión, muerte",
    border: false,
  },
  {
    color: "#f6f6f6",
    text: "Inocencia, esperanza, palabras, amistad, humanidad, luz, Liesel",
    border: true,
  },
]
const illustrationNarrativeMosaic = [
  "/images/páginas detalle/ilustración/portada y contraportada.png",
  "/images/páginas detalle/ilustración/hitler.png",
  "/images/páginas detalle/ilustración/peque ojo.png",
  "/images/páginas detalle/ilustración/peque recolectores.png",
  "/images/páginas detalle/ilustración/peque portada.png",
  "/images/páginas detalle/ilustración/sinfondo1.png",
  "/images/páginas detalle/ilustración/sinfondo2.png",
  "/images/páginas detalle/ilustración/doble página.png",
]
const illustrationNarrativeCharactersImage = "/images/páginas detalle/ilustración/personaje.png"
const illustrationNarrativeText =
  "Proyecto de ilustración narrativa inspirado en La ladrona de libros. Se encargaro una doble página, dos páginas individuales, portada y contraportada. Como plus y atendiendo a las necesidades del texto decidí ilustrar un libro narrado dentro de la propia historia."
const comicColorImage = "/images/p%C3%A1ginas%20detalle/ilustración/comiccolor.png"
const comicBlackImage = "/images/p%C3%A1ginas%20detalle/ilustración/comicnegro.png"
const comicSequentialCharactersImage =
  "/images/p%C3%A1ginas%20detalle/ilustración/personajesecuencial.png"
const comicBottomText =
  "Proyecto de ilustración secuencial de una anécdota, además de la creación de un personaje inicial. Ilustración hecha con tinta china y color digital."
const loboSpotifyUrl = "https://open.spotify.com/track/6LtcpZ71tEHTsnR4GEHsSR"
const loboPlayerCover = "/images/páginas detalle/ilustración/kikoveneno.png"
const loboPlayerCoverHover = "/images/páginas detalle/ilustración/lobolopez2.png"
const loboBottomText =
  "Ilustración por amor a una canción, al igual que el Lobo López, yo también tenía que decir que echaba de emnos hacer ilustraciones solo para mí"
const olimpiadaGanadoraImage = "/images/páginas detalle/ganadora.png"
const cartelGalleryBasePath = "/images/páginas detalle"
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

function prevPackagingImage() {
  if (packagingCarouselPhotos.length === 0) return
  packagingCarouselIndex.value =
    (packagingCarouselIndex.value - 1 + packagingCarouselPhotos.length) % packagingCarouselPhotos.length
  resetPackagingAutoplay()
}

function nextPackagingImage() {
  if (packagingCarouselPhotos.length === 0) return
  packagingCarouselIndex.value = (packagingCarouselIndex.value + 1) % packagingCarouselPhotos.length
  resetPackagingAutoplay()
}

function goToPackagingImage(index: number) {
  if (index < 0 || index >= packagingCarouselPhotos.length) return
  packagingCarouselIndex.value = index
  resetPackagingAutoplay()
}

function startPackagingAutoplay() {
  if (packagingCarouselTimer || packagingCarouselPhotos.length <= 1) return
  packagingCarouselTimer = setInterval(() => {
    packagingCarouselIndex.value = (packagingCarouselIndex.value + 1) % packagingCarouselPhotos.length
  }, 2800)
}

function stopPackagingAutoplay() {
  if (!packagingCarouselTimer) return
  clearInterval(packagingCarouselTimer)
  packagingCarouselTimer = null
}

function resetPackagingAutoplay() {
  stopPackagingAutoplay()
  if (isPackagingProject.value) startPackagingAutoplay()
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
type NarrativeTabKey = "color" | "characters"
const activeFruit = ref<FruitKey>("apple-red")
const activeNarrativeTab = ref<NarrativeTabKey>("color")
const comicHover = ref(false)
const loboCoverHover = ref(false)
const fruitPhotoSection = ref<HTMLElement | null>(null)

const fruitInfo: Record<FruitKey, { title: string; text: string; photo: string; photoAlt: string }> = {
  "apple-red": {
    title: "I",
    text: "Las pegatinas de la fruta siempre han sido un ejemplo de microdiseño en nuestro día a día.",
    photo: "/images/i.png",
    photoAlt: "Foto i - manzana roja",
  },
  "apple-green": {
    title: "T",
    text: "En homenaje a ellas formulé la idea de este reto. Cada una está diseñada con un trasfondo tipográfico, así se puede ver que en algunas aparecen las grandes categorías tipográficas y algunas de sus características.",
    photo: "/images/t.png",
    photoAlt: "Foto t - manzana verde",
  },
  orange: {
    title: "C",
    text: "Para llevar a cabo el proyecto, se imprimieron y se hizo un reportaje fotográfico junto con frutas reales, y este ha sido el resultado.",
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

watch(
  isPackagingProject,
  (active) => {
    if (active) {
      startPackagingAutoplay()
      return
    }
    stopPackagingAutoplay()
  },
  { immediate: true },
)

onBeforeUnmount(() => {
  stopPackagingAutoplay()
})
</script>

<template>
  <div
    class="days-detail space-y-6"
    :class="hasFullGrayBackground ? 'detail-gray-surface' : ''"
  >
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
        <template v-if="isAvariciaProject">
          <div class="bg-background p-4 sm:p-6 space-y-4">
            <img
              :src="project.cover || ''"
              alt="Cartel Avaricia"
              class="w-full h-auto object-contain bg-muted/20"
              loading="lazy"
            />

            <p class="text-sm sm:text-base text-muted-foreground">
              {{ project.description }}
            </p>
          </div>
        </template>
        <template v-else-if="isFeminismoProject">
          <div class="bg-background p-4 sm:p-6 space-y-4">
            <img
              :src="project?.cover || ''"
              :alt="project ? `Portada ${project.title}` : 'Portada Feminismo'"
              class="w-full max-h-[86vh] object-contain bg-muted/20"
              loading="lazy"
            />

            <p class="mx-auto max-w-4xl text-sm sm:text-base text-muted-foreground leading-relaxed">
              {{ project?.description }}
            </p>
          </div>
        </template>
        <template v-else-if="isOlimpiadaFilosoficaProject">
          <div class="bg-background p-4 sm:p-6">
            <img
              :src="olimpiadaGanadoraImage"
              alt="Olimpiada filosófica - imagen ganadora"
              class="w-full max-h-[86vh] object-contain bg-muted/20"
              loading="lazy"
            />
          </div>
        </template>
        <template v-else-if="isCartelFilosoficoProject">
          <div class="bg-background p-4 sm:p-6 space-y-4">
            <img
              :src="project?.cover || ''"
              :alt="project ? `Portada ${project.title}` : 'Portada cartel filosófico'"
              class="w-full max-h-[86vh] object-contain bg-muted/20"
              loading="lazy"
            />

            <p class="mx-auto max-w-4xl text-sm sm:text-base text-muted-foreground leading-relaxed">
              {{ project?.description }}
            </p>
          </div>
        </template>
        <template v-else-if="isCartelCrefad">
          <div class="bg-background p-4 sm:p-6 space-y-4">
            <div class="flex flex-col md:flex-row gap-4 md:gap-5">
              <img
                :src="cartelFestivalGif"
                alt="Animacion Cartel Crefad"
                class="w-full md:flex-1 max-h-[80vh] object-contain bg-muted/20"
                loading="lazy"
              />
              <p class="md:w-[34%] md:min-w-[220px] text-xs sm:text-sm leading-relaxed text-muted-foreground">
                {{ cartelCrefadText }}
              </p>
            </div>

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
        <template v-else-if="isPackagingProject">
          <div class="bg-background p-4 sm:p-6 space-y-6">
            <img
              :src="packagingHeroImage"
              alt="Packaging - imagen principal"
              class="w-full max-h-[84vh] object-contain bg-muted/20"
              loading="lazy"
            />

            <div class="grid grid-cols-4 gap-4">
              <img
                v-for="(image, index) in packagingFeatureImages"
                :key="`packaging-feature-${index}`"
                :src="image"
                :alt="`Packaging - imagen destacada ${index + 1}`"
                class="w-full max-h-[72vh] object-contain bg-muted/20"
                loading="lazy"
              />
            </div>

            <div class="space-y-3">
              <div class="relative rounded bg-muted/20 p-2 sm:p-3">
                <img
                  :src="activePackagingImage"
                  alt="Packaging - carrusel"
                  class="w-full max-h-[76vh] object-contain"
                  loading="lazy"
                />

                <button
                  type="button"
                  class="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/70 text-white text-2xl leading-none hover:bg-black/85"
                  aria-label="Imagen anterior"
                  @click="prevPackagingImage"
                >
                  <
                </button>

                <button
                  type="button"
                  class="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/70 text-white text-2xl leading-none hover:bg-black/85"
                  aria-label="Imagen siguiente"
                  @click="nextPackagingImage"
                >
                  >
                </button>
              </div>

              <div class="flex flex-wrap items-center justify-center gap-2">
                <button
                  v-for="(_, index) in packagingCarouselPhotos"
                  :key="`packaging-dot-${index}`"
                  type="button"
                  class="h-2.5 w-2.5 rounded-full transition-opacity"
                  :class="index === packagingCarouselIndex ? 'bg-black opacity-100' : 'bg-black/40 opacity-70'"
                  :aria-label="`Ir a imagen ${index + 1}`"
                  @click="goToPackagingImage(index)"
                />
              </div>
            </div>
          </div>
        </template>
        <template v-else-if="isIllustrationConceptual">
          <div class="p-0 space-y-8">
            <img
              v-if="project.cover"
              :src="project.cover"
              :alt="`Ilustración conceptual - ${project.title}`"
              class="w-full h-auto object-contain"
              loading="lazy"
            />
            <div v-else class="h-60 flex items-center justify-center text-sm text-muted-foreground">
              Sin portada
            </div>

            <p class="mx-auto px-4 sm:px-6 max-w-4xl text-center text-sm sm:text-base leading-relaxed text-muted-foreground">
              {{ illustrationConceptualBottomText }}
            </p>

            <img
              :src="illustrationConceptualSecondImage"
              alt="Ilustración conceptual en acuarela"
              class="w-full h-auto object-contain"
              loading="lazy"
            />

            <p class="mx-auto px-4 sm:px-6 max-w-4xl text-center text-sm sm:text-base leading-relaxed text-muted-foreground">
              {{ illustrationConceptualWatercolorText }}
            </p>
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
        <template v-else-if="isIllustrationNarrative">
          <div class="p-4 sm:p-6 space-y-6">
            <div class="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] sm:auto-rows-[190px] gap-3 sm:gap-4">
              <img
                :src="illustrationNarrativeMosaic[0]"
                alt="Ilustración narrativa - imagen 1"
                class="col-span-2 row-span-2 h-full w-full object-cover"
                loading="lazy"
              />
              <img
                :src="illustrationNarrativeMosaic[1]"
                alt="Ilustración narrativa - imagen 2"
                class="h-full w-full object-cover"
                loading="lazy"
              />
              <img
                :src="illustrationNarrativeMosaic[2]"
                alt="Ilustración narrativa - imagen 3"
                class="h-full w-full object-cover"
                loading="lazy"
              />
              <img
                :src="illustrationNarrativeMosaic[3]"
                alt="Ilustración narrativa - imagen 4"
                class="h-full w-full object-cover"
                loading="lazy"
              />
              <img
                :src="illustrationNarrativeMosaic[4]"
                alt="Ilustración narrativa - imagen 5"
                class="h-full w-full object-cover"
                loading="lazy"
              />
              <img
                :src="illustrationNarrativeMosaic[5]"
                alt="Ilustración narrativa - imagen 6"
                class="col-span-2 row-span-2 h-full w-full object-cover md:col-span-2"
                loading="lazy"
              />
              <img
                :src="illustrationNarrativeMosaic[6]"
                alt="Ilustración narrativa - imagen 7"
                class="col-span-2 row-span-2 h-full w-full object-cover md:col-span-2"
                loading="lazy"
              />
            </div>

            <img
              :src="illustrationNarrativeMosaic[7]"
              alt="Ilustración narrativa - imagen final"
              class="mx-auto w-full max-w-4xl h-auto object-contain"
              loading="lazy"
            />

            <div class="mx-auto max-w-4xl px-1 sm:px-2 text-center">
              <p class="text-sm sm:text-base leading-relaxed text-muted-foreground">
                {{ illustrationNarrativeText }}
              </p>
            </div>

            <div class="flex items-end gap-2 rounded-t-2xl border border-b-0 border-[#3d3d3d] bg-[#2f2f2f] px-4 pt-4">
              <button
                type="button"
                class="px-5 py-2.5 border border-b-0 rounded-t-xl text-base font-semibold transition"
                :class="activeNarrativeTab === 'color'
                  ? 'bg-[#4a4a4a] text-white border-white/35'
                  : 'bg-[#2f2f2f] text-gray-300 border-white/20 hover:bg-[#353535]'"
                @click="activeNarrativeTab = 'color'"
              >
                Paleta de color
              </button>
              <button
                type="button"
                class="px-5 py-2.5 border border-b-0 rounded-t-xl text-base font-semibold transition"
                :class="activeNarrativeTab === 'characters'
                  ? 'bg-[#4a4a4a] text-white border-white/35'
                  : 'bg-[#2f2f2f] text-gray-300 border-white/20 hover:bg-[#353535]'"
                @click="activeNarrativeTab = 'characters'"
              >
                Personajes
              </button>
            </div>

            <div class="-mt-2 rounded-2xl border border-[#3d3d3d] bg-[#f1f1f1] p-5 sm:p-7">
              <div v-if="activeNarrativeTab === 'color'" class="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                <div
                  v-for="(item, index) in illustrationNarrativePalette"
                  :key="`palette-${index}`"
                  class="space-y-3"
                >
                  <div
                    class="mx-auto h-28 w-36 sm:h-32 sm:w-40 rounded-2xl"
                    :class="item.border ? 'border border-black/70' : ''"
                    :style="{ backgroundColor: item.color }"
                  />
                  <p class="text-[28px] leading-tight text-black/85 narrative-palette-text">
                    {{ item.text }}
                  </p>
                </div>
              </div>

              <div v-else class="flex justify-center">
                <img
                  :src="illustrationNarrativeCharactersImage"
                  alt="Ilustración narrativa - personajes"
                  class="w-full max-w-4xl h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </template>
        <template v-else-if="isComicProject">
          <div class="p-0 space-y-6">
            <div
              class="w-full"
              @mouseenter="comicHover = true"
              @mouseleave="comicHover = false"
            >
              <img
                :src="comicHover ? comicBlackImage : (project.cover || comicColorImage)"
                :alt="comicHover ? 'Cómic en blanco y negro' : 'Cómic a color'"
                class="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>

            <p class="mx-auto max-w-4xl px-4 sm:px-6 text-center text-sm sm:text-base leading-relaxed text-muted-foreground">
              {{ comicBottomText }}
            </p>

            <div class="mx-auto w-full max-w-5xl h-[60vh] sm:h-[72vh] flex items-center justify-center">
              <img
                :src="comicSequentialCharactersImage"
                alt="Cómic - personajes en secuencia"
                class="h-full w-auto object-contain -rotate-90"
                loading="lazy"
              />
            </div>
          </div>
        </template>
        <template v-else-if="isLoboLopezProject">
          <div class="p-4 sm:p-6 space-y-6">
            <img
              :src="project.cover || '/images/páginas detalle/ilustración/lobolopez1.png'"
              alt="Lobo López portada"
              class="w-full max-h-[86vh] object-contain"
              loading="lazy"
            />

            <div class="mx-auto w-full max-w-4xl rounded-[32px] bg-[#8f8f8f] p-4 sm:p-6 text-white shadow-[0_12px_30px_rgba(0,0,0,0.2)]">
              <div class="flex flex-col md:flex-row gap-4 sm:gap-6 items-stretch">
                <div
                  class="mx-auto w-full max-w-[240px] md:mx-0 md:w-[190px] md:max-w-none shrink-0 aspect-square overflow-hidden rounded-3xl bg-white/20"
                  @mouseenter="loboCoverHover = true"
                  @mouseleave="loboCoverHover = false"
                >
                  <img
                    :src="loboCoverHover ? loboPlayerCoverHover : loboPlayerCover"
                    :alt="loboCoverHover ? 'Portada alternativa Lobo López' : 'Portada Lobo López'"
                    class="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div class="flex-1 flex flex-col justify-between min-h-[110px] sm:min-h-[190px]">
                  <div class="flex items-start justify-between gap-3">
                    <div>
                      <p class="text-sm sm:text-base font-semibold leading-tight">Lobo López</p>
                      <p class="text-xs sm:text-sm text-white/85">Kiko Veneno</p>
                      <p class="text-[11px] sm:text-xs text-white/70">Échate un cantecito</p>
                    </div>
                    <a
                      :href="loboSpotifyUrl"
                      target="_blank"
                      rel="noreferrer"
                      class="inline-flex items-center gap-1 rounded-full bg-black/25 px-3 py-1.5 text-[11px] sm:text-xs font-medium hover:bg-black/35 transition"
                    >
                      Spotify
                      <ExternalLink class="h-3.5 w-3.5" />
                    </a>
                  </div>

                  <div class="space-y-3 sm:space-y-4">
                    <div class="space-y-1">
                      <div class="h-[3px] rounded-full bg-white/35 overflow-hidden">
                        <div class="h-full w-[48%] bg-white rounded-full" />
                      </div>
                      <div class="flex items-center justify-between text-[10px] sm:text-[11px] text-white/80">
                        <span>1:03</span>
                        <span>2:22</span>
                      </div>
                    </div>

                    <div class="flex items-center justify-center gap-4 sm:gap-5">
                      <button type="button" class="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                        <SkipBack class="h-4 w-4" />
                      </button>
                      <button type="button" class="h-10 w-10 rounded-full bg-white text-[#5d5d5d] flex items-center justify-center">
                        <Pause class="h-5 w-5" />
                      </button>
                      <button type="button" class="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                        <SkipForward class="h-4 w-4" />
                      </button>
                    </div>

                    <div class="flex items-center gap-2 text-white/90">
                      <Volume2 class="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      <div class="h-[3px] flex-1 rounded-full bg-white/35 overflow-hidden">
                        <div class="h-full w-[72%] bg-white rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p class="mx-auto max-w-4xl text-center text-sm sm:text-base leading-relaxed text-black/75">
              {{ loboBottomText }}
            </p>
          </div>
        </template>
        <template v-else-if="isLevisProject">
          <div class="bg-background p-4 sm:p-6 space-y-7">
            <section class="space-y-4">
              <img
                :src="levisGridImages[0]"
                alt="Le-vis portada"
                class="levis-cover-image mx-auto w-auto h-auto max-w-full object-contain bg-muted/20"
                loading="lazy"
              />

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <img
                  v-for="(image, index) in levisGridImages.slice(1)"
                  :key="`levis-grid-${index + 1}`"
                  :src="image"
                  :alt="`Le-vis imagen ${index + 2}`"
                  class="levis-grid-image mx-auto w-auto h-auto max-w-full object-contain bg-muted/20"
                  loading="lazy"
                />
              </div>
            </section>

            <section class="space-y-3">
              <h3 class="text-lg sm:text-xl font-semibold text-black">Aplicaciones</h3>
              <div class="levis-app-scroll flex gap-3 sm:gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
                <img
                  v-for="(image, index) in levisApplicationImages"
                  :key="`levis-application-${index}`"
                  :src="image"
                  :alt="`Le-vis aplicación ${index + 1}`"
                  class="levis-app-image snap-start shrink-0 w-auto h-auto max-w-full object-contain bg-muted/20"
                  loading="lazy"
                />
              </div>
            </section>
          </div>
        </template>
        <template v-else-if="isRetratosProject">
          <div class="bg-background p-4 sm:p-6 space-y-6">
            <section class="retratos-hero-gifs">
              <img
                v-for="(gif, index) in retratosHeroGifs"
                :key="`retratos-gif-${index}`"
                :src="gif"
                :alt="`Retratos animados ${index + 1}`"
                class="retratos-hero-gif object-contain bg-muted/20"
                :class="`retratos-hero-gif-${index + 1}`"
                loading="lazy"
              />
            </section>

            <section class="space-y-3">
              <p class="text-sm sm:text-base text-muted-foreground">
                {{ project.description }}
              </p>

              <div class="portrait-scroll flex gap-3 sm:gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
                <img
                  v-for="(image, index) in retratosScrollImages"
                  :key="`retratos-scroll-${index}`"
                  :src="image"
                  :alt="`Retrato ${index + 1}`"
                  class="snap-start shrink-0 w-auto h-auto object-contain bg-muted/20"
                  loading="lazy"
                />
              </div>
            </section>
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

.detail-gray-surface {
  background: #d8d8d8;
  margin: -1rem;
  padding: 1rem;
  min-height: calc(100% + 2rem);
}

@media (min-width: 640px) {
  .detail-gray-surface {
    margin: -1.5rem;
    padding: 1.5rem;
    min-height: calc(100% + 3rem);
  }
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

.narrative-palette-text {
  font-family: "Times New Roman", Times, serif;
}

.portrait-scroll {
  scrollbar-width: thin;
}

.levis-app-scroll {
  scrollbar-width: thin;
}

.levis-cover-image {
  max-height: 68vh;
}

.levis-grid-image {
  max-height: 42vh;
}

.levis-app-image {
  max-height: 38vh;
}

.retratos-hero-gifs {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  overflow-x: visible;
  overflow-y: visible;
  padding-bottom: 0.35rem;
}

.retratos-hero-gif {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  max-width: 100%;
}

@media (max-width: 1180px) {
  .retratos-hero-gifs {
    flex-wrap: wrap;
  }

  .retratos-hero-gif-1 {
    order: 2;
    margin-top: 42px;
  }

  .retratos-hero-gif-2 {
    order: 1;
    margin-top: 0;
  }

  .retratos-hero-gif-3 {
    order: 3;
    margin-top: 82px;
  }
}

@media (max-width: 860px) {
  .retratos-hero-gifs {
    flex-direction: column;
    align-items: center;
    overflow: visible;
  }

  .retratos-hero-gif-1 {
    order: 3;
    margin-top: 190px;
  }

  .retratos-hero-gif-2 {
    order: 1;
    margin-top: 0;
  }

  .retratos-hero-gif-3 {
    order: 2;
    margin-top: 96px;
  }
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
    width: clamp(5.1rem, 10.5cqw, 8.5rem);
  }

  .days-sticker-img-sm {
    width: clamp(4.5rem, 9.2cqw, 7.2rem);
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
    width: clamp(4.7rem, 10.8cqw, 7.2rem);
  }

  .days-sticker-img-sm {
    width: clamp(4.1rem, 9.6cqw, 6.3rem);
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



