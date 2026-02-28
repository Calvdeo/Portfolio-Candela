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
    title: "Branding · YoNoSoyEssa",
    category: "diseño",
    year: "2025",
    tags: ["branding", "identidad", "logo"],
    description: "Identidad visual y sistema gráfico para proyecto personal.",
  },
  {
    slug: "cartel-festival",
    title: "Cartel · Festival",
    category: "diseño",
    year: "2024",
    tags: ["cartel", "tipografía"],
    description: "Cartel promocional con enfoque tipográfico y composición.",
  },
  {
    slug: "ilustracion-editorial",
    title: "Ilustración · Editorial",
    category: "ilustración",
    year: "2025",
    tags: ["editorial", "color"],
    description: "Serie de ilustraciones para pieza editorial.",
  },
  {
    slug: "personajes-procreate",
    title: "Personajes · Procreate",
    category: "ilustración",
    year: "2024",
    tags: ["personajes", "procreate"],
    description: "Exploración de personajes y estilo con Procreate.",
  },
  {
  slug: "packaging-cafe",
  title: "Packaging · Café",
  category: "diseño",
  year: "2024",
  tags: ["packaging", "mockup"],
  description: "Diseño de packaging y aplicación en mockups.",
},
{
  slug: "sistema-editorial",
  title: "Sistema · Editorial",
  category: "diseño",
  year: "2025",
  tags: ["retícula", "editorial"],
  description: "Sistema editorial con retícula y jerarquías.",
},
{
  slug: "ilustracion-poster",
  title: "Ilustración · Póster",
  category: "ilustración",
  year: "2024",
  tags: ["poster", "color"],
  description: "Ilustración para póster con enfoque narrativo.",
},
{
  slug: "ilustracion-story",
  title: "Ilustración · Story",
  category: "ilustración",
  year: "2025",
  tags: ["rrss", "personajes"],
  description: "Ilustraciones para piezas de redes sociales.",
},
]