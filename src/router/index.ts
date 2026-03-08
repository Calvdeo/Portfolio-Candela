import { createRouter, createWebHashHistory } from "vue-router"

import Start from "@/pages/landing/Start.vue"
import ExitConfirm from "@/pages/landing/Exitconfirm.vue" 

import IllustratorLayout from "@/layouts/IllustratorLayout.vue"
import Projects from "@/pages/app/Projects.vue"
import ProjectDetail from "@/pages/app/ProjectDetail.vue"
import About from "@/pages/app/About.vue"
import Contact from "@/pages/app/Contact.vue"

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "start", component: Start },
    { path: "/exit", name: "exit", component: ExitConfirm },

    {
      path: "/app",
      component: IllustratorLayout,
      children: [
        { path: "", redirect: "/app/about" },
        { path: "projects", redirect: "/app/projects/design" },
        { path: "projects/design", name: "projects-design", component: Projects },
        { path: "projects/illustration", name: "projects-illustration", component: Projects },
        { path: "projects/photography", name: "projects-photography", component: Projects },
        { path: "projects/:slug", name: "project-detail", component: ProjectDetail },
        { path: "about", name: "about", component: About },
        { path: "contact", name: "contact", component: Contact },
      ],
    },

    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
})
