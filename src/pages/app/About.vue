<script setup lang="ts"></script>

<template>
  <div>
    <div class="-m-4 sm:-m-6 overflow-hidden">
      <img
        src="/images/yo.png"
        alt="Portada About me"
        class="w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] max-w-none h-[calc(100svh-48px)] object-cover"
        loading="lazy"
      />
    </div>

    <section class="px-4 sm:px-8 py-10 text-black">
      <p class="about-text mt-16 sm:mt-24 ml-auto max-w-4xl text-right">
        Si me preguntan como comencé a dibujar, diría que la pintura me ha acompanado desde siempre.<br /><br />
        Recuerdo unas manitas pequenas buscando el color preciso en un estuche atiborrado que me seguia
        a todas partes. Recuerdo dibujar cuando hacia frio y cuando hacia calor, dibujar en restaurantes
        y esperando para la ortodoncia, en el coche, en el tren... Recuerdo carpetas y cuadernos atiborrados
        de garabatos. Recuerdo cuando descubri con espanto que algunos de ellos hallaban muerte temprana
        en la papelera de casa. Mis dibujos estan colmados de aprendizajes con los que mi vida, sin cesar,
        me va obsequiando y ahora me complace compartirlos.
      </p>

      <div class="mt-12 flex justify-center">
        <img
          src="/images/education.png"
          alt="Educacion y softwares"
          class="w-full max-w-5xl h-auto object-contain"
          loading="lazy"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-text {
  font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
  font-size: clamp(1.35rem, 2.2vw, 2.1rem);
  line-height: 1.22;
  letter-spacing: 0.01em;
  font-weight: 400;
}
</style>
