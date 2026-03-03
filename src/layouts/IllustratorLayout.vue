<script setup lang="ts">
import { onBeforeUnmount, ref } from "vue"
import { RouterLink, RouterView } from "vue-router"

/**
 * Tools:
 * - grid: tools 04..33 en 2 columnas
 * - tool 34: SOLO imagen, grande, NO botón
 *
 * PNGs en /public/tools:
 * tools-04.png ... tools-33.png y tools-34.png
 */

type Tool = {
  id: number
  name: string
  icon: string
  cursor: string
}

function pad2(n: number) {
  return String(n).padStart(2, "0")
}

const appRoot = ref<HTMLElement | null>(null)

/**
 * Nombres exactos por ID (según tu lista)
 * (puedes corregir tildes/typos cuando quieras)
 */
const toolNameById: Record<number, string> = {
  4: "Selección",
  5: "Selección directa",
  6: "Varita mágica",
  7: "Lazo",
  8: "Pluma",
  9: "Curvatura",
  10: "Texto",
  11: "Línea",
  12: "Rectángulo",
  13: "Pincel",
  14: "Shaper",
  15: "Borrador",
  16: "Rotar",
  17: "Escala",
  18: "Ancho",
  19: "Transformación libre",
  20: "Creador de formas",
  21: "Cuadrícula de perspectiva",
  22: "Malla",
  23: "Degradado",
  24: "Dimensión",
  25: "Cuentagotas",
  26: "Fusión",
  27: "Rociar símbolos",
  28: "Gráfico de columnas",
  29: "Mesa de trabajo",
  30: "Sector",
  31: "Mano",
  32: "Objetos en trazado",
  33: "Lupa",
}

const toolsGrid = ref<Tool[]>(
  Array.from({ length: 30 }, (_, i) => {
    const id = i + 4 // 04..33
    const file = `/tools/tools-${pad2(id)}.png`
    const name = toolNameById[id] ?? `Tool ${id}`
    return { id, name, icon: file, cursor: file }
  }),
)

const tool34Icon = "/tools/tools-34.png"

const selectedToolId = ref<number>(4)

function applyCursor(url: string) {
  const cur = `url('${url}') 0 0, auto`
  document.body.style.cursor = cur
  document.documentElement.style.cursor = cur
  if (appRoot.value) appRoot.value.style.cursor = cur
}

function setCursorFromTool(tool: Tool) {
  selectedToolId.value = tool.id
  applyCursor(tool.cursor)
}

// cursor por defecto
applyCursor("/tools/tools-04.png")

onBeforeUnmount(() => {
  document.body.style.cursor = "auto"
  document.documentElement.style.cursor = "auto"
  if (appRoot.value) appRoot.value.style.cursor = "auto"
})
</script>

<template>
  <div
    ref="appRoot"
    class="min-h-[100svh] bg-[#3d3d3d] text-white overflow-hidden [&_*]:cursor-inherit"
  >
    <!-- Barra superior app -->
    <header class="h-12 bg-[#2a2a2a] border-b border-white/10 flex items-center px-4">
      <div class="flex items-center gap-3">
        <div
          class="h-6 w-6 rounded bg-[#1f1f1f] border border-white/10 flex items-center justify-center text-[11px] font-semibold"
        >
          Ai
        </div>

        <nav class="flex items-center gap-2 text-[12px] text-white/80">
          <RouterLink
            class="h-8 px-3 rounded-md border border-white/15 bg-white/5 hover:bg-white/15 hover:text-white transition-colors cursor-inherit flex items-center"
            to="/app/about"
          >
            Skills
          </RouterLink>
          <RouterLink
            class="h-8 px-3 rounded-md border border-white/15 bg-white/10 hover:bg-white/20 hover:text-white transition-colors cursor-inherit flex items-center"
            to="/app/projects/design"
          >
            Proyectos
          </RouterLink>
          <RouterLink
            class="h-8 px-3 rounded-md border border-white/15 bg-white/5 hover:bg-white/15 hover:text-white transition-colors cursor-inherit flex items-center"
            to="/app/contact"
          >
            Contacto
          </RouterLink>
        </nav>
      </div>

      <div class="ml-auto flex items-center gap-3 text-[12px]">
        <RouterLink
          class="h-8 px-3 rounded-md border border-white/15 bg-white/5 hover:bg-white/15 hover:text-white transition-colors cursor-inherit text-white/80 flex items-center"
          to="/"
        >
          Volver al inicio
        </RouterLink>
      </div>
    </header>

    <div class="flex h-[calc(100svh-48px)]">
      <!-- Barra herramientas -->
      <aside class="w-23 bg-[#2b2b2b] border-r border-black/30 flex flex-col overflow-hidden">
        <!-- HEADER (como tu imagen) -->
        <div class="h-10 bg-[#3a3a3a] border-b border-black/30 flex items-center px-2">
          <div class="text-white/80 text-xs select-none">≪</div>

          <div class="mx-auto h-6 w-14 rounded bg-[#4a4a4a] border border-black/30 flex items-center justify-center">
            <div class="h-[2px] w-10 bg-white/30"></div>
          </div>
        </div>

        <!-- Tools 04..33 (sin botones visibles, solo seleccionada marcada) -->
        <div class="p-2">
          <div class="grid grid-cols-2 gap-x-1 gap-y-2">
            <button
              v-for="t in toolsGrid"
              :key="t.id"
              type="button"
              class="h-9 w-9 rounded-sm flex items-center justify-center overflow-hidden cursor-inherit"
              :class="selectedToolId === t.id ? 'bg-[#6a6a6a]' : 'bg-transparent'"
              :title="t.name"
              @click="setCursorFromTool(t)"
            >
              <img :src="t.icon" :alt="t.name" class="h-6 w-6 object-contain" draggable="false" />
            </button>
          </div>

          <!-- Tool 34:  -->
<div class="mt-3 flex items-center justify-center">
  <img
    :src="tool34Icon"
    alt="Tool 34"
    class="w-[130px] h-auto"
    draggable="false"
  />
</div>
        </div>
      </aside>

      <!-- Centro -->
      <main class="flex-1 bg-[#3a3a3a] p-2 sm:p-3 overflow-hidden">
        <div class="h-full w-full rounded-lg bg-[#2f2f2f] border border-white/10 p-2 sm:p-3 overflow-hidden">
          <div class="h-full w-full">
            <!-- Lienzo blanco: SOLO aquí scroll -->
            <div class="bg-white text-black rounded shadow-sm h-full overflow-y-auto p-4 sm:p-6">
              <RouterView />
            </div>
          </div>
        </div>
      </main>

      <!-- Panel derecha -->
      <aside class="hidden lg:flex w-[320px] bg-[#2d2d2d] border-l border-white/10 flex-col overflow-hidden">
        <div class="h-10 px-4 flex items-center border-b border-white/10">
          <p class="text-xs font-semibold text-white/60 tracking-wide">Propiedades</p>
        </div>

        <div class="p-4 space-y-4 overflow-y-auto">
          <div class="rounded bg-[#1f1f1f] border border-white/10 p-3">
            <p class="text-[11px] text-white/50">Herramienta activa</p>
            <div
              class="mt-2 h-9 rounded bg-black/10 border border-white/10 flex items-center justify-center text-xs text-white/80"
            >
              {{ toolNameById[selectedToolId] ?? `Tool ${selectedToolId}` }}
            </div>
          </div>
        </div>

        <div class="mt-auto p-3 border-t border-white/10 text-[11px] text-white/40">
          Illustrator UI (mock)
        </div>
      </aside>
    </div>
  </div>
</template>
