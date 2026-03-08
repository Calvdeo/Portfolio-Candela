<script setup lang="ts"></script>

<template>
  <div class="about-page">
    <div class="-mx-4 sm:-mx-6 overflow-hidden">
      <img
        src="/images/yo.png"
        alt="Portada About me"
        class="w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] max-w-none h-[42svh] sm:h-[58svh] lg:h-[calc(100svh-48px)] object-cover object-center"
        loading="lazy"
      />
    </div>

    <section class="px-1 sm:px-6 lg:px-8 py-8 sm:py-10 text-black">
      <p class="about-text mt-8 sm:mt-14 lg:mt-20 mx-auto max-w-5xl text-left sm:text-right">
        Si me preguntan como comencé a dibujar, diría que la pintura me ha acompañado desde siempre.<br /><br />
        Recuerdo unas manitas pequeñas buscando el color preciso en un estuche atiborrado que me seguía
        a todas partes. Recuerdo dibujar cuando hacía frío y cuando hacía calor, dibujar en restaurantes
        y esperando para la ortodoncia, en el coche, en el tren... Recuerdo carpetas y cuadernos atiborrados
        de garabatos. Recuerdo cuando descubrí con espanto que algunos de ellos hallaban muerte temprana
        en la papelera de casa. Mis dibujos están colmados de aprendizajes con los que mi vida, sin cesar,
        me va obsequiando y ahora me complace compartirlos.
      </p>

      <div class="mt-10 sm:mt-12 flex justify-center">
        <img
          src="/images/education.png"
          alt="Educación y softwares"
          class="w-full max-w-5xl h-auto object-contain px-1 sm:px-0"
          loading="lazy"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-text {
  font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
  font-size: clamp(1rem, 3.8vw, 2.1rem);
  line-height: 1.35;
  letter-spacing: 0.01em;
  font-weight: 400;
}
</style>
