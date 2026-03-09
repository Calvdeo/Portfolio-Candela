<script setup lang="ts">
import { reactive, ref } from "vue"
import { Button } from "@/components/ui/button"
import { Instagram, Mail, MapPin, Phone } from "lucide-vue-next"

const submitted = ref(false)
const showTicket = ref(false)
const DEST_EMAIL = "yonosoyessa.jpg@gmail.com"
const INSTAGRAM_URL = "https://instagram.com/yonosoyessa.tiff"
const BEHANCE_URL = "https://www.behance.net/eladeobesso"

type SubmittedTicket = {
  code: string
  sentAt: string
  nombre: string
  apellidos: string
  correo: string
  fecha: string
  mision: string
}

const ticket = ref<SubmittedTicket | null>(null)

const form = reactive({
  nombre: "",
  apellidos: "",
  correo: "",
  mision: "",
  fecha: "",
})

function onSubmit() {
  const code = `TK-${Date.now().toString().slice(-8)}`
  const sentAt = new Date().toLocaleString("es-ES")
  ticket.value = {
    code,
    sentAt,
    nombre: form.nombre,
    apellidos: form.apellidos,
    correo: form.correo,
    fecha: form.fecha,
    mision: form.mision,
  }
  showTicket.value = true
  submitted.value = true
}

function buildMailtoUrl(data: SubmittedTicket) {
  const subject = `Nuevo proyecto de ${data.nombre} ${data.apellidos}`.trim()
  const body = [
    `Ticket: ${data.code}`,
    `Fecha de envio: ${data.sentAt}`,
    "",
    `Nombre: ${data.nombre}`,
    `Apellidos: ${data.apellidos}`,
    `Correo: ${data.correo}`,
    `Fechas del proyecto: ${data.fecha}`,
    "",
    "Proyecto:",
    data.mision,
  ].join("\n")

  return `mailto:${DEST_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

function sendTicketEmail() {
  if (!ticket.value) return
  window.location.href = buildMailtoUrl(ticket.value)
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
            <a
              :href="INSTAGRAM_URL"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              class="social-link"
            >
              <Instagram class="w-8 h-8" />
            </a>
            <a
              :href="BEHANCE_URL"
              target="_blank"
              rel="noreferrer"
              aria-label="Behance"
              class="social-link behance-link"
            >
              <span class="behance-mark">Be</span>
            </a>
          </div>
        </div>
      </div>
    </footer>

    <div v-if="showTicket && ticket" class="ticket-overlay">
      <div class="ticket-stack" role="dialog" aria-modal="true" aria-label="Ticket de proyecto enviado">
        <article class="ticket-yellow" aria-hidden="true">
          <p class="ticket-yellow-kicker">Proyecto registrado</p>
          <p class="ticket-yellow-main">Gracias por contactar conmigo</p>
          
        </article>

        <article class="ticket-white">
          <p class="ticket-white-kicker">TICKET DE PROYECTO</p>
          <p class="ticket-white-name">{{ ticket.nombre }} {{ ticket.apellidos }}</p>

          <div class="ticket-white-meta">
            <p><strong>Codigo:</strong> {{ ticket.code }}</p>
            <p><strong>Fecha:</strong> {{ ticket.sentAt }}</p>
            <p><strong>Correo:</strong> {{ ticket.correo }}</p>
          </div>

          <div class="ticket-white-actions">
            <Button type="button" class="ticket-btn-primary" @click="sendTicketEmail">
              Abrir correo
            </Button>
            <button type="button" class="ticket-btn-ghost" @click="showTicket = false">
              Cerrar
            </button>
          </div>
        </article>
      </div>
    </div>
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
  padding: 1rem 0.75rem 0;
  display: flex;
  flex-direction: column;
}

.contact-word {
  margin: 0;
  color: #cfcfcf;
  line-height: 0.8;
  letter-spacing: -0.02em;
  font-weight: 900;
  font-size: clamp(1.8rem, 11vw, 3.6rem);
  text-align: center;
  white-space: nowrap;
  user-select: none;
}

.contact-panel {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 980px;
  margin: clamp(0.9rem, 3.2vw, 2rem) auto 0;
  min-height: auto;
  background: #3d3d3d;
  color: #fffdfd;
  padding: clamp(1rem, 2.8vw, 2.2rem);
}

.contact-empty-space {
  width: 100%;
  height: 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.1rem;
  margin-top: clamp(0.8rem, 2.5vh, 1.8rem);
}

.field label {
  display: block;
  font-size: 0.9rem;
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
  min-height: 130px;
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
  padding: 1.1rem 0.9rem 2rem;
}

.contact-footer-inner {
  width: min(980px, 100%);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

.ticket-overlay {
  position: fixed;
  inset: 0;
  z-index: 1100;
  background: rgba(0, 0, 0, 0.58);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.ticket-stack {
  position: relative;
  width: min(640px, 100%);
  min-height: 390px;
}

.ticket-yellow {
  position: absolute;
  top: -0.9rem;
  left: 0.4rem;
  width: min(320px, 78%);
  background: #e7ea53;
  color: #1a1a1a;
  border: 1px solid rgba(0, 0, 0, 0.28);
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.24);
  padding: 1rem;
  transform: rotate(-5deg);
}

.ticket-yellow-kicker {
  margin: 0;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.07em;
}

.ticket-yellow-main {
  margin: 0.5rem 0 0;
  font-size: clamp(1rem, 2.8vw, 1.45rem);
  font-weight: 800;
  line-height: 1.1;
  text-transform: uppercase;
}

.ticket-yellow-sub {
  margin: 0.55rem 0 0;
  font-size: 0.82rem;
  opacity: 0.85;
}

.ticket-white {
  position: relative;
  margin: 5.1rem 0 0 auto;
  width: min(500px, 88%);
  background: #f7f6f2;
  color: #181818;
  border: 1px solid rgba(0, 0, 0, 0.22);
  box-shadow: 0 18px 34px rgba(0, 0, 0, 0.3);
  padding: 1.15rem 1rem;
  font-family: "Courier New", Courier, monospace;
  transform: rotate(2deg);
}

.ticket-white::after {
  content: "";
  position: absolute;
  left: 1rem;
  right: 1rem;
  bottom: 3.5rem;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.42);
}

.ticket-white-kicker {
  margin: 0;
  font-size: 0.72rem;
  letter-spacing: 0.07em;
  font-weight: 700;
}

.ticket-white-name {
  margin: 0.5rem 0 0.8rem;
  font-size: clamp(1.5rem, 4.9vw, 2.55rem);
  line-height: 1;
  font-weight: 900;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  word-break: break-word;
}

.ticket-white-meta {
  font-size: 0.84rem;
  line-height: 1.45;
  margin-bottom: 1.3rem;
}

.ticket-white-meta p {
  margin: 0.22rem 0;
}

.ticket-white-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.55rem;
  margin-top: 0.9rem;
}

.ticket-btn-primary {
  border-radius: 9999px;
  border: 1px solid #111;
  background: #111;
  color: #fff;
}

.ticket-btn-primary:hover {
  background: #2a2a2a;
}

.ticket-btn-ghost {
  border-radius: 9999px;
  border: 1px solid rgba(0, 0, 0, 0.35);
  background: transparent;
  padding: 0.45rem 0.95rem;
  font-size: 0.88rem;
}

@media (max-width: 640px) {
  .ticket-stack {
    min-height: 350px;
  }

  .ticket-yellow {
    top: -0.35rem;
    left: 0.2rem;
    width: 86%;
  }

  .ticket-white {
    margin-top: 4rem;
    width: 94%;
    transform: rotate(1deg);
  }
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  transition: color 0.2s ease, transform 0.2s ease;
}

.social-link:hover {
  color: #ffffff;
  transform: translateY(-1px);
}

.behance-link {
  width: 2rem;
  height: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 0.45rem;
}

.behance-mark {
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.01em;
}

@media (min-width: 640px) {
  .contact-word {
    font-size: clamp(2.6rem, 10vw, 6rem);
  }
}

@media (min-width: 900px) {
  .contact-scene {
    padding-inline: 2rem;
  }

  .contact-word {
    text-align: left;
    font-size: clamp(4rem, 9.5vw, 10rem);
  }

  .contact-grid {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  .contact-panel {
    margin-left: auto;
    margin-right: 0;
    min-height: clamp(560px, 68vh, 860px);
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

@media (min-width: 1280px) {
  .contact-word {
    font-size: clamp(6rem, 9vw, 14rem);
  }
}
</style>
