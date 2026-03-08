export type ProjectCategory = "diseño" | "ilustración" | "fotografía"

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
    cover: "/images/Portada_essa.png",
  },
  {
    slug: "cartel Crefad",
    title: "Cartel Crefad",
    category: "diseño",
    year: "2025",
    tags: ["cartel", "tipografia"],
    description: "Cartel promocional con enfoque tipografico y composicion.",
    cover: "/images/páginas detalle/cartel_crefad.png",
  },
  {
    slug: "Packaging",
    title: "Packaging de chocolates",
    category: "diseño",
    year: "2023",
    tags: ["branding", "packaging"],
    description: "Identidad para una nueva chocolatería",
    cover: "/images/education.png",
  },
  {
    slug: "editorial-manifiesto",
    title: "Editorial · Manifiesto",
    category: "diseño",
    year: "2024",
    tags: ["editorial", "maquetacion"],
    description: "Maquetacion de publicacion corta con ritmo tipografico y jerarquia visual.",
    cover: "/images/Portada_essa.png",
  },
  {
    slug: "Creado por inteligencia humana",
    title: "Creado por inteligencia humana",
    category: "ilustración",
    year: "2025",
    tags: ["Pegatina", "color"],
    description: "Pegatinas por la ilustración humana",
    cover: "/images/páginas detalle/ilustración/Creado por inteligencia humana 1.1.png",
  },
  {
    slug: "Ilustración conceptual",
    title: "Ilustración conceptual",
    category: "ilustración",
    year: "2025",
    tags: ["texto", "serie"],
    description: "Conceptualizar un texto",
    cover: "/images/páginas detalle/ilustración/conceptual.png",
  },
  {
    slug: "Ilustración narrativa",
    title: "Ilustración Narativa",
    category: "ilustración",
    year: "2025",
    tags: ["Narrativa", "personajes"],
    description: "Ilustración de la ladrona de libros",
    cover: "/images/páginas detalle/ilustración/sinfondo2.png",
  },
  
  {
    slug: "Cómic",
    title: "Cómic",
    category: "ilustración",
    year: "2024",
    tags: ["narrativa", "digital"],
    description: "Historia ilustrada en viñetas",
    cover: "/images/páginas detalle/ilustración/comiccolor.png",
  },
  {
    slug: "Lobo López",
    title: "Lobo López",
    category: "ilustración",
    year: "2023",
    tags: ["Canción", "digital"],
    description: "Ilustración musical",
    cover: "/images/páginas detalle/ilustración/lobolopez1.png",
  },
    {
    slug: "ilustración vectorial",
    title: "ilustración vectorial",
    category: "ilustración",
    year: "2023",
    tags: ["moda", "vector"],
    description: "Ilustración vectorial",
    cover: "/images/páginas detalle/ilustración/vectorial.png",
  },
  {
    slug: "Retratos",
    title: "Retratos",
    category: "fotografía",
    year: "2024",
    tags: ["retrato"],
    description: "Sesion de retrato centrada en la manipulación de la luz",
    cover: "/images/páginas detalle/fotografía/3.2.png",
  },
  
]
