<script setup lang="ts">
import { reactive, ref } from "vue"
import { Button } from "@/components/ui/button"
import { Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, X } from "lucide-vue-next"

const submitted = ref(false)
const DEST_EMAIL = "yonosoyessa.jpg@gmail.com"

const form = reactive({
  nombre: "",
  apellidos: "",
  correo: "",
  mision: "",
  fecha: "",
})

function onSubmit() {
  const subject = `Nuevo proyecto de ${form.nombre} ${form.apellidos}`.trim()
  const body = [
    `Nombre: ${form.nombre}`,
    `Apellidos: ${form.apellidos}`,
    `Correo: ${form.correo}`,
    `Fechas del proyecto: ${form.fecha}`,
    "",
    "Proyecto:",
    form.mision,
  ].join("\n")

  const mailtoUrl = `mailto:${DEST_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.location.href = mailtoUrl
  submitted.value = true
}
</script>

<template>
  <div class="contact-page">
    <section class="contact-scene">
      <p class="contact-word" aria-hidden="true">CONTACTO</p>

      <form class="contact-panel" @submit.prevent="onSubmit">
        <div class="contact-grid">
          <div class="space-y-5">
            <div class="field">
              <label for="nomen">Nombre</label>
              <input id="nomen" v-model="form.nombre" type="text" required />
            </div>

            <div class="field">
              <label for="cognomen">Apellidos</label>
              <input id="cognomen" v-model="form.apellidos" type="text" required />
            </div>

            <div class="field">
              <label for="correo">Correo</label>
              <input
                id="correo"
                v-model="form.correo"
                type="email"
                placeholder="tucorreo@ejemplo.com"
                required
              />
            </div>

            <div class="field">
              <label for="fecha-mision">Fechas del proyecto</label>
              <input id="fecha-mision" v-model="form.fecha" type="date" required />
            </div>
          </div>

          <div class="space-y-5">
            <div class="field">
              <label for="mision">Proyecto</label>
              <textarea
                id="mision"
                v-model="form.mision"
                rows="6"
                placeholder="Escribe tu mensaje"
                required
              />
            </div>

            <div class="pt-2">
              <Button type="submit" class="send-btn">
                Enviar proyecto
              </Button>
            </div>

            <p v-if="submitted" class="ok-msg">
              Proyecto enviado. Que ganas de trabajar juntos!
            </p>
          </div>
        </div>
      </form>

      <div class="contact-empty-space" aria-hidden="true"></div>
    </section>

    <footer class="contact-footer">
      <div class="contact-footer-inner">
        <div class="space-y-4 text-center md:text-left">
          <h3 class="text-xl font-bold text-white">Informacion de Contacto</h3>
          <div class="space-y-2">
            <p class="flex items-center gap-2 justify-center md:justify-start">
              <Phone class="w-5 h-5" />
              +34 600 123 456
            </p>
            <p class="flex items-center gap-2 justify-center md:justify-start">
              <Mail class="w-5 h-5" />
              yonosoyessa.jpg@gmail.com
            </p>
            <p class="flex items-center gap-2 justify-center md:justify-start">
              <MapPin class="w-5 h-5" />
              Valencia, Espana
            </p>
          </div>
        </div>

        <div class="space-y-4 text-center md:text-left text-gray-400">
          <h3 class="text-xl font-bold text-white">Sigueme</h3>
          <div class="flex gap-8 justify-center md:justify-start">
            <X class="w-8 h-8 hover:text-white" />
            <Instagram class="w-8 h-8 hover:text-white" />
            <Linkedin class="w-8 h-8 hover:text-white" />
            <MessageCircle class="w-8 h-8 hover:text-white" />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.contact-page {
  width: 100%;
}

.contact-scene {
  position: relative;
  overflow: hidden;
  min-height: auto;
  background: #070707;
  padding: 1.5rem 1rem 0;
  display: flex;
  flex-direction: column;
}

.contact-word {
  margin: 0;
  color: #cfcfcf;
  line-height: 0.8;
  letter-spacing: -0.04em;
  font-weight: 900;
  font-size: clamp(4.3rem, 22vw, 15rem);
  user-select: none;
}

.contact-panel {
  position: relative;
  z-index: 2;
  width: min(980px, 100%);
  margin: clamp(1rem, 3.8vw, 2.2rem) 0 0 auto;
  min-height: clamp(560px, 68vh, 860px);
  background: #3d3d3d;
  color: #fffdfd;
  padding: clamp(1.2rem, 2.8vw, 2.4rem);
}

.contact-empty-space {
  width: 100%;
  height: 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: clamp(1rem, 3.5vh, 2.4rem);
}

.field label {
  display: block;
  font-size: 0.95rem;
  margin-bottom: 0.15rem;
  color: #ffffff;
}

.field input,
.field textarea {
  width: 100%;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.65);
  background: transparent;
  color: #fff;
  padding: 0.35rem 0.1rem;
  border-radius: 0;
}

.field input::placeholder,
.field textarea::placeholder {
  color: rgba(255, 255, 255, 0.78);
}

.field input:focus,
.field textarea:focus {
  outline: none;
  border-bottom-color: #fff;
}

.field textarea {
  resize: vertical;
  min-height: 160px;
}

.send-btn {
  width: 100%;
  border-radius: 9999px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.75);
  color: #fff;
}

.send-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.ok-msg {
  color: #e9ffe9;
  font-size: 0.88rem;
}

.contact-footer {
  width: 100%;
  background: #3d3d3d;
  color: #d1d5db;
  padding: 1.1rem 1rem 2.4rem;
}

.contact-footer-inner {
  width: min(980px, 100%);
  margin: 0 0 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 900px) {
  .contact-scene {
    padding-inline: 2rem;
  }

  .contact-word {
    text-align: left;
  }

  .contact-grid {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  .send-btn {
    width: 230px;
    margin-left: auto;
  }

  .contact-footer {
    padding-inline: 2rem;
  }

  .contact-footer-inner {
    flex-direction: row;
    justify-content: center;
    gap: clamp(2rem, 6vw, 6rem);
  }
}
</style>
