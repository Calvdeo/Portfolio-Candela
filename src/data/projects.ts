export type ProjectCategory = "diseño" | "ilustración"

export type Project = {
  slug: string
  title: string
  category: ProjectCategory
  year?: string
  tags: string[]
  description: string
  cover?: string // 👈 portada
}

export const projects: Project[] = [
  {
    slug: "branding-yonosoyessa",
    title: "Branding · YoNoSoyEssa",
    category: "diseño",
    year: "2025",
    tags: ["branding", "identidad", "logo"],
    description: "Identidad visual y sistema gráfico para proyecto personal.",
    cover: "/projects/branding-yonosoyessa.jpg",
  },
  {
    slug: "cartel-festival",
    title: "Cartel · Festival",
    category: "diseño",
    year: "2024",
    tags: ["cartel", "tipografía"],
    description: "Cartel promocional con enfoque tipográfico y composición.",
    cover: "/projects/cartel-festival.jpg",
  },
  {
    slug: "ilustracion-editorial",
    title: "Ilustración · Editorial",
    category: "ilustración",
    year: "2025",
    tags: ["editorial", "color"],
    description: "Serie de ilustraciones para pieza editorial.",
    cover: "/projects/ilustracion-editorial.jpg",
  },
  {
    slug: "personajes-procreate",
    title: "Personajes · Procreate",
    category: "ilustración",
    year: "2024",
    tags: ["personajes", "procreate"],
    description: "Exploración de personajes y estilo con Procreate.",
    cover: "/projects/personajes-procreate.jpg",
  },
]