<script setup lang="ts">
import { Instagram, Mail, MapPin, Phone } from "lucide-vue-next"

const INSTAGRAM_URL = "https://instagram.com/yonosoyessa.tiff"
const BEHANCE_URL = "https://www.behance.net/eladeobesso"
</script>

<template>
  <footer class="contact-strip">
    <div class="contact-strip-inner">
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
        <div class="flex gap-6 justify-center md:justify-start">
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
</template>

<style scoped>
.contact-strip {
  width: 100%;
  background: #3d3d3d;
  color: #d1d5db;
  padding: 1.1rem 0.9rem 2rem;
}

.contact-strip-inner {
  width: min(980px, 100%);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
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

@media (min-width: 900px) {
  .contact-strip {
    padding-inline: 2rem;
  }

  .contact-strip-inner {
    flex-direction: row;
    justify-content: center;
    gap: clamp(2rem, 6vw, 6rem);
  }
}
</style>
