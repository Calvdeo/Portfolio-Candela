<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from "vue-router"
import {
  MousePointer2,
  PenTool,
  Type,
  Square,
  Circle,
  Brush,
  Hand,
  ZoomIn,
} from "lucide-vue-next"

const router = useRouter()

function goToStart() {
  router.push("/")
}
</script>

<template>
  <!-- Fondo general tipo Illustrator -->
  <div class="min-h-svh bg-[#3d3d3d] text-white">
    <!-- Barra de menú superior -->
    <header class="h-9 bg-[#2a2a2a] border-b border-white/10 flex items-center px-3">
      <div class="flex items-center gap-3">
        <!-- “Ai” -->
        <div class="h-6 w-6 rounded bg-[#1f1f1f] border border-white/10 flex items-center justify-center text-[11px] font-semibold">
          Ai
        </div>

        <!-- Menús (fake illustrator) -->
        <nav class="hidden md:flex items-center gap-4 text-[12px] text-white/80">
          <button class="hover:text-white" type="button">Archivo</button>
          <button class="hover:text-white" type="button">Edición</button>
          <button class="hover:text-white" type="button">Objeto</button>
          <button class="hover:text-white" type="button">Texto</button>
          <button class="hover:text-white" type="button">Seleccionar</button>
          <button class="hover:text-white" type="button">Efecto</button>
          <button class="hover:text-white" type="button">Ver</button>
          <button class="hover:text-white" type="button">Ventana</button>
          <button class="hover:text-white" type="button">Ayuda</button>
        </nav>
      </div>

      <!-- Acciones derecha -->
      <div class="ml-auto flex items-center gap-3">
        <!-- Navegación real de tu web -->
        <div class="hidden sm:flex items-center gap-3 text-[12px]">
          <RouterLink class="text-white/70 hover:text-white" to="/app/projects/design">Proyectos</RouterLink>
          <RouterLink class="text-white/70 hover:text-white" to="/app/about">Skills</RouterLink>
          <RouterLink class="text-white/70 hover:text-white" to="/app/contact">Contacto</RouterLink>
        </div>

        <button
          class="text-[12px] text-white/70 hover:text-white border border-white/10 bg-[#242424] px-2 py-1 rounded"
          type="button"
          @click="goToStart"
        >
          Volver al inicio
        </button>
      </div>
    </header>

    <!-- Cuerpo: herramientas izquierda + centro + paneles derecha -->
    <div class="flex min-h-[calc(100svh-36px)]">
      <!-- Barra herramientas izquierda -->
      <aside class="w-16 sm:w-20 bg-[#2d2d2d] border-r border-white/10 flex flex-col items-center py-3 gap-3">
        <button class="h-9 w-9 rounded bg-[#1f1f1f] border border-white/10 hover:bg-white/5 flex items-center justify-center" title="Selección">
          <MousePointer2 class="w-4 h-4 text-white/80" />
        </button>

        <button class="h-9 w-9 rounded bg-[#1f1f1f] border border-white/10 hover:bg-white/5 flex items-center justify-center" title="Pluma">
          <PenTool class="w-4 h-4 text-white/80" />
        </button>

        <button class="h-9 w-9 rounded bg-[#1f1f1f] border border-white/10 hover:bg-white/5 flex items-center justify-center" title="Texto">
          <Type class="w-4 h-4 text-white/80" />
        </button>

        <button class="h-9 w-9 rounded bg-[#1f1f1f] border border-white/10 hover:bg-white/5 flex items-center justify-center" title="Rectángulo">
          <Square class="w-4 h-4 text-white/80" />
        </button>

        <button class="h-9 w-9 rounded bg-[#1f1f1f] border border-white/10 hover:bg-white/5 flex items-center justify-center" title="Elipse">
          <Circle class="w-4 h-4 text-white/80" />
        </button>

        <button class="h-9 w-9 rounded bg-[#1f1f1f] border border-white/10 hover:bg-white/5 flex items-center justify-center" title="Pincel">
          <Brush class="w-4 h-4 text-white/80" />
        </button>

        <div class="mt-auto flex flex-col items-center gap-3 pb-2">
          <button class="h-9 w-9 rounded bg-[#1f1f1f] border border-white/10 hover:bg-white/5 flex items-center justify-center" title="Mano">
            <Hand class="w-4 h-4 text-white/80" />
          </button>
          <button class="h-9 w-9 rounded bg-[#1f1f1f] border border-white/10 hover:bg-white/5 flex items-center justify-center" title="Zoom">
            <ZoomIn class="w-4 h-4 text-white/80" />
          </button>
        </div>
      </aside>

      <!-- Centro: “mesa de trabajo” -->
     <main class="flex-1 bg-[#3a3a3a] p-2 sm:p-3 overflow-hidden">
        <!-- Fondo gris + artboard blanco -->
        <div class="h-full w-full rounded-lg bg-[#2f2f2f] border border-white/10 p-2 sm:p-3 overflow-hidden">
          <div class="h-full w-full">
            <!-- Artboard -->
            <div class="bg-white text-black rounded shadow-sm h-full overflow-y-auto p-4 sm:p-6">
  <RouterView />
</div>
          </div>
        </div>
      </main>

      <!-- Paneles derecha (propiedades, capas, etc.) -->
      <aside class="hidden lg:flex w-[320px] bg-[#2d2d2d] border-l border-white/10 flex-col">
        <!-- Header panel -->
        <div class="h-10 px-4 flex items-center border-b border-white/10">
          <p class="text-xs font-semibold text-white/60 tracking-wide">Propiedades</p>
        </div>

        <!-- Contenido panel -->
        <div class="p-4 space-y-4 overflow-y-auto">
          <div class="rounded bg-[#1f1f1f] border border-white/10 p-3">
            <p class="text-[11px] text-white/50">Documento</p>
            <div class="mt-2 h-9 rounded bg-black/10 border border-white/10 flex items-center justify-center text-xs text-white/80">
              Ajustes rápidos
            </div>
          </div>

          <div class="rounded bg-[#1f1f1f] border border-white/10 p-3">
            <p class="text-[11px] text-white/50">Apariencia</p>
            <div class="mt-2 grid grid-cols-2 gap-2">
              <div class="h-9 rounded bg-black/10 border border-white/10 flex items-center justify-center text-xs text-white/80">
                Relleno
              </div>
              <div class="h-9 rounded bg-black/10 border border-white/10 flex items-center justify-center text-xs text-white/80">
                Trazo
              </div>
            </div>
          </div>

          <div class="rounded bg-[#1f1f1f] border border-white/10 p-3">
            <p class="text-[11px] text-white/50">Capas</p>
            <div class="mt-2 space-y-2">
              <div class="h-9 rounded bg-black/10 border border-white/10 flex items-center justify-between px-3 text-xs text-white/80">
                <span>Capa 1</span><span class="text-white/40">▸</span>
              </div>
              <div class="h-9 rounded bg-black/10 border border-white/10 flex items-center justify-between px-3 text-xs text-white/80">
                <span>Capa 2</span><span class="text-white/40">▸</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer panel -->
        <div class="mt-auto p-3 border-t border-white/10 text-[11px] text-white/40">
          Illustrator UI (mock) · Portfolio
        </div>
      </aside>
    </div>
  </div>
</template>