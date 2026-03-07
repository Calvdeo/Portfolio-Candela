<script setup lang="ts">
import { reactive, ref } from "vue"
import { Button } from "@/components/ui/button"

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
  <section class="contact-scene">
    <p class="contact-word" aria-hidden="true">CONTACT</p>

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
            Proyecto enviado. ¡Qué ganas de trabajar juntos!
          </p>
        </div>
      </div>
    </form>
  </section>
</template>

<style scoped>
.contact-scene {
  position: relative;
  overflow: hidden;
  min-height: clamp(580px, 72vh, 860px);
  background: #070707;
  padding: 1.5rem 1rem 2rem;
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
  margin: clamp(0.9rem, 5vw, 2.2rem) 0 0 auto;
  background: #3d3d3d;
  color: #fffdfd;
  padding: clamp(1.2rem, 2.8vw, 2.4rem);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
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
}
</style>
