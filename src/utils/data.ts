// src/data/data.ts
import visibilityDilemma from "../assets/images/visibility-dilemma.jpg";
import engagementGap from "../assets/images/engagement-gap.jpg";
import resultsInHibernation from "../assets/images/results-in-hibernation.jpg";

// Interfaz para servicios (ya existente)
export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  heroDescription: string;
  longDescription?: string;
  icon: string;
  features: string[];
  benefits: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

// Interfaz para paquetes
export interface Package {
  slug: string;
  name: string;
  type: "basic" | "standard" | "premium" | "conference" | "custom";
  description: string;
  capacity: string;
  price: string;
  priceNote?: string;
  durationHours?: number;
  icon: string;
  featured?: boolean;

  // Vista comercial (tarjetas)
  highlights: string[];

  // Vista detalle (cuando entran al paquete)
  technicalDetails?: string[];

  includes: string[];

  upsells?: {
    name: string;
    price: string;
    description?: string;
  }[];
}

export const services: Service[] = [
  {
    slug: "audio-iluminacion",
    title: "Audio e Iluminación Profesional",
    shortDescription: "Sonido potente e iluminación profesional para transformar tu evento.",
    heroDescription: "Sistemas de sonido de alta fidelidad e iluminación arquitectónica diseñados para crear experiencias impactantes.",
    longDescription: "Contamos con equipo de audio de primera línea: 4 Elipsis VA206, 2 Elipsis VAB118A, 2 EV ZLX G2, 2 Mackie Thump, 2 Graves FBT, todo ecualizado vía Driverack PA2. En iluminación: 6 Parleds, 6 Pixel Strobe 1048, 4 Cabezas móviles wash, 6 Cabezas móviles BEAM 7R, 2 Rayos láser 3W, Truss profesional, Control DMX (Chamsys) y máquina de humo.",
    icon: "🔊",
    features: [
      "4 Elipsis VA206 + 2 VAB118A",
      "2 EV ZLX G2 + 2 Mackie Thump",
      "Driverack PA2 para ecualización profesional",
      "6 Parleds + 6 Pixel Strobe 1048",
      "10 Cabezas móviles (4 wash + 6 BEAM 7R)",
      "Control DMX Chamsys + máquina de humo"
    ],
    benefits: [
      "Sonido claro y potente en todo el espacio",
      "Efectos de iluminación sincronizados con la música",
      "Técnicos especializados durante todo el evento"
    ],
    seo: {
      title: "Audio e Iluminación Profesional para Eventos en CDMX",
      description: "Renta de equipo de sonido profesional e iluminación para eventos. Elipsis, EV, Mackie y más. ¡Cotiza aquí!",
      keywords: ["audio profesional", "iluminación para eventos", "renta de sonido"]
    }
  },
  {
    slug: "dj-profesional",
    title: "DJ Profesional",
    shortDescription: "Ambientación musical personalizada y mezcla en vivo.",
    heroDescription: "Creamos la atmósfera perfecta con selección musical estratégica.",
    icon: "🎧",
    features: [
      "DJ con experiencia en eventos sociales",
      "Biblioteca musical extensa",
      "Mezcla en vivo profesional",
      "Coordinación previa de playlist"
    ],
    benefits: [
      "Música adaptada a tu público",
      "Transiciones perfectas toda la noche",
      "Ambiente dinámico y elegante"
    ],
    seo: {
      title: "DJ Profesional para Bodas y Eventos en CDMX",
      description: "DJ profesional para tu evento. Música personalizada y mezcla en vivo.",
      keywords: ["dj profesional", "música para eventos"]
    }
  },
  {
    slug: "mobiliario",
    title: "Mobiliario y Montaje",
    shortDescription: "Mesas, sillas y montaje profesional.",
    heroDescription: "Organización estratégica del espacio con mobiliario funcional y elegante.",
    icon: "🪑",
    features: [
      "Sillas acojinadas plegables",
      "Sillas Tiffany",
      "Mesas redondas y tablones",
      "Barra de bebidas",
      "Vajilla 3 tiempos para 100 personas",
      "Mantelería profesional",
      "Chafers para buffet"
    ],
    benefits: [
      "Presentación impecable",
      "Optimización del espacio",
      "Coordinación eficiente"
    ],
    seo: {
      title: "Renta de Mobiliario para Eventos en CDMX",
      description: "Renta de mesas, sillas, vajilla y mantelería para eventos.",
      keywords: ["renta de mobiliario", "sillas para eventos"]
    }
  },
  {
    slug: "personal-coordinacion",
    title: "Personal y Coordinación",
    shortDescription: "Meseros capacitados y logística integral.",
    heroDescription: "Atención profesional para garantizar que todo fluya correctamente.",
    icon: "👥",
    features: [
      "Meseros uniformados",
      "Coordinación logística",
      "Supervisión técnica",
      "Personal de apoyo"
    ],
    benefits: [
      "Servicio atento y profesional",
      "Organización sin estrés",
      "Flujo eficiente del evento"
    ],
    seo: {
      title: "Meseros y Personal para Eventos en CDMX",
      description: "Contrata meseros profesionales y personal para tu evento.",
      keywords: ["meseros para eventos", "staff para bodas"]
    }
  }
];

export const packages: Package[] = [
    {
  slug: "paquete-standard",
  name: "Paquete Standard",
  type: "standard",
  description: "Ideal para eventos sociales de 30 a 50 personas. Sonido potente, iluminación elegante y DJ profesional.",
  capacity: "30 - 50 personas",
  price: "$8,490",
  durationHours: 4,
  icon: "🎵",

  highlights: [
    "Sistema de sonido profesional",
    "Iluminación ambiental elegante",
    "DJ profesional en vivo",
    "1 micrófono inalámbrico incluido",
    "Técnico durante todo el evento"
  ],

  technicalDetails: [
    "2 Mackie Thump",
    "2 Elipsis VA206",
    "1 Subwoofer Elipsis VAB118A",
    "6 Parleds",
    "Driverack PA2"
  ],

  includes: [
    "Montaje y desmontaje",
    "Operador técnico",
    "Asesoría previa de playlist"
  ],

  upsells: [
    { name: "Hora adicional", price: "+$1,200", description: "Extiende tu evento una hora más" },
    { name: "Karaoke", price: "+$500", description: "Pantalla o proyector + micrófono inalámbrico" },
    { name: "Pista de baile LED 3x3", price: "+$2,500" },
    { name: "Micrófono inalámbrico adicional", price: "+$800" }
  ]
},
  {
  slug: "paquete-plus",
  name: "Paquete Plus",
  type: "basic",
  description: "La combinación perfecta de audio, iluminación y mobiliario para eventos de 50 a 80 personas.",
  capacity: "50 - 80 personas",
  price: "$15,900",
  durationHours: 5,
  icon: "🌟",
  featured: true,

  highlights: [
    "Sistema de sonido completo",
    "Iluminación dinámica con efectos",
    "DJ profesional en vivo",
    "Mobiliario para invitados",
    "2 meseros incluidos",
    "1 micrófono inalámbrico"
  ],

  technicalDetails: [
    "4 Elipsis VA206",
    "2 Subwoofers VAB118A",
    "2 EV ZLX G2",
    "6 Parleds + 4 Pixel Strobe",
    "2 Cabezas móviles wash",
    "Control DMX Chamsys"
  ],

  includes: [
    "30 sillas acojinadas",
    "8 mesas redondas",
    "Mantelería profesional",
    "Montaje completo"
  ],

  upsells: [
    { name: "Hora adicional", price: "+$1,400" },
    { name: "Karaoke", price: "+$500" },
    { name: "Pista de baile LED 4x4", price: "+$3,500" },
    { name: "Cabezas móviles BEAM", price: "+$2,800" }
  ]
},
  {
  slug: "paquete-premium",
  name: "Paquete Premium",
  type: "premium",
  description: "Experiencia completa de producción profesional para eventos de 80 a 120+ personas.",
  capacity: "80 - 120+ personas",
  price: "$24,900",
  durationHours: 6,
  icon: "✨",

  highlights: [
    "Producción integral profesional",
    "Sistema completo de audio e iluminación",
    "DJ profesional extendido",
    "Mobiliario completo",
    "4 meseros + coordinador",
    "1 micrófono inalámbrico incluido"
  ],

  technicalDetails: [
    "4 Elipsis VA206 + 2 VAB118A",
    "2 EV ZLX G2 + 2 Mackie Thump",
    "6 Parleds + 6 Pixel Strobe",
    "4 Wash + 6 BEAM 7R",
    "2 Rayos láser 3W",
    "Máquina de humo",
    "Truss profesional",
    "Control DMX avanzado"
  ],

  includes: [
    "50 sillas + 10 Tiffany",
    "12 mesas redondas + 2 tablones",
    "Vajilla 3 tiempos (100 pax)",
    "Barra de bebidas",
    "Chafers buffet (4)"
  ],

  upsells: [
    { name: "Hora adicional", price: "+$1,800" },
    { name: "Karaoke Premium", price: "+$500" },
    { name: "Pista LED 5x5", price: "+$4,500" },
    { name: "Micrófono inalámbrico adicional", price: "+$800" }
  ]
},
{
  slug: "paquete-conferencias",
  name: "Paquete Conferencias",
  type: "conference",
  description: "Producción técnica profesional para conferencias, presentaciones y eventos corporativos.",
  capacity: "Hasta 150 personas",
  price: "$18,900",
  durationHours: 6,
  icon: "🎤",

  highlights: [
    "Sistema de audio claro y profesional",
    "2 micrófonos inalámbricos",
    "1 micrófono alámbrico",
    "2 proyectores HD",
    "Iluminación para escenario",
    "Técnico especializado durante el evento"
  ],

  technicalDetails: [
    "Sistema Line Array Elipsis",
    "Driverack PA2",
    "Monitores de escenario",
    "Iluminación frontal tipo wash",
    "Control DMX"
  ],

  includes: [
    "Montaje técnico completo",
    "Prueba de sonido previa",
    "Soporte técnico en ponencias"
  ],

  upsells: [
    { name: "Hora adicional", price: "+$1,500" },
    { name: "Pantalla LED", price: "Cotización especial" },
    { name: "Grabación del evento", price: "Cotización especial" }
  ]
},
  {
  slug: "paquete-personalizado",
  name: "Arma tu paquete",
  type: "custom",
  description: "Diseña tu evento a la medida seleccionando exactamente lo que necesitas.",
  capacity: "La que necesites",
  price: "Personalizado",
  priceNote: "Cotización a la medida",
  icon: "⚙️",

  highlights: [
    "Selecciona solo lo que necesitas",
    "Audio e iluminación por separado",
    "Mobiliario a elección",
    "Personal adicional",
    "Karaoke y pista opcional"
  ],

  includes: [
    "Asesoría personalizada",
    "Cotización detallada",
    "Flexibilidad total"
  ]
}
];

export const solutions = [
  {
    title: "Eventos sin impacto",
    painPoint: "Muchos eventos tienen buena intención, pero carecen de ambientación profesional y terminan siendo olvidables.",
    agitatepainPoint: "La música no conecta, la iluminación no destaca y la experiencia no genera emoción. Tus invitados lo notan.",
    solution: "Diseñamos experiencias completas donde cada elemento —audio, iluminación y logística— trabaja en conjunto para crear momentos memorables.",
    img: visibilityDilemma,
  },
  {
    title: "Problemas técnicos en el evento",
    painPoint: "Fallos de sonido, retrasos en montaje o mala coordinación pueden arruinar meses de planeación.",
    agitatepainPoint: "Nada genera más estrés que un micrófono que no funciona o un montaje incompleto cuando los invitados ya llegaron.",
    solution: "Contamos con equipo propio y personal técnico capacitado para garantizar que todo funcione de manera impecable.",
    img: engagementGap,
  },
  {
    title: "Falta de experiencia profesional",
    painPoint: "No todos los proveedores entienden la importancia de la producción integral.",
    agitatepainPoint: "Contratar por separado sonido, DJ y mobiliario puede generar desorganización y falta de coherencia visual.",
    solution: "Integramos todos los servicios bajo una misma dirección técnica para asegurar armonía, calidad y eficiencia.",
    img: resultsInHibernation,
  },
];

export const faqs = [
  {
    question: "¿Con cuánta anticipación debo reservar?",
    answer: "Recomendamos reservar con al menos 1 a 3 meses de anticipación, ya que trabajamos con fechas limitadas cada mes."
  },
  {
    question: "¿El equipo de audio e iluminación es propio?",
    answer: "Sí. Contamos con equipo profesional propio (Elipsis, EV, Mackie, etc.) lo que garantiza calidad y control total."
  },
  {
    question: "¿Puedo armar mi paquete personalizado?",
    answer: "¡Claro! Contamos con la opción 'Arma tu paquete' donde puedes seleccionar exactamente lo que necesitas."
  },
  {
    question: "¿El karaoke tiene costo adicional?",
    answer: "Sí, el karaoke tiene un costo adicional de $500 que incluye pantalla, micrófono y selección de canciones."
  },
  {
    question: "¿Qué incluye exactamente el equipo de audio?",
    answer: "Contamos con 4 Elipsis VA206, 2 Elipsis VAB118A, 2 EV ZLX G2, 2 Mackie Thump, 2 Graves FBT, todo ecualizado con Driverack PA2."
  },
  {
    answer: "Operamos principalmente en CDMX y área metropolitana, con posibilidad de desplazamiento a otros estados.",
    question: "¿En qué zonas trabajan?"
  }
];