export type ProjectCategory = "diseño" | "ilustración"

export type Project = {
  slug: string
  title: string
  category: ProjectCategory
  year?: string
  tags: string[]
  description: string
  cover?: string
}

export const projects: Project[] = [
  {
    slug: "branding-yonosoyessa",
    title: "36 days of type",
    category: "diseño",
    year: "2025",
    tags: ["tipografia", "editorial", "sticker"],
    description: "Exploracion tipografica con palabras grandes y pegatinas interactivas.",
    cover: "/projects/branding-yonosoyessa.jpg",
  },
  {
    slug: "cartel-festival",
    title: "Cartel · Festival",
    category: "diseño",
    year: "2024",
    tags: ["cartel", "tipografia"],
    description: "Cartel promocional con enfoque tipografico y composicion.",
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
    description: "Exploracion de personajes y estilo con Procreate.",
    cover: "/projects/personajes-procreate.jpg",
  },
]
