// src/data/services.ts
import visibilityDilemma from "../assets/images/visibility-dilemma.jpg";
import engagementGap from "../assets/images/engagement-gap.jpg";
import resultsInHibernation from "../assets/images/results-in-hibernation.jpg";

// Definimos la interfaz para type safety
export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  heroDescription: string;
  longDescription?: string; // Para SEO y páginas individuales
  icon?: string; // Emoji o clase de icono
  features: string[];
  benefits: string[];
  images?: {
    hero?: string;
    gallery?: string[];
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonical?: string;
  };
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  priceRange?: string;
}

export const services: Service[] = [
  {
    slug: "audio-iluminacion",
    title: "Audio e Iluminación Profesional",
    shortDescription: "Sonido potente e iluminación profesional para transformar tu evento.",
    heroDescription: "Sistemas de sonido de alta fidelidad e iluminación arquitectónica diseñados para crear experiencias inolvidables.",
    longDescription: "Transformamos tu evento con la mejor tecnología en audio e iluminación. Nuestros sistemas de sonido de alta fidelidad garantizan una experiencia acústica excepcional, mientras que la iluminación arquitectónica crea ambientes únicos y memorables. Contamos con equipos de última generación y técnicos especializados que trabajan para que cada detalle sonoro y visual esté perfectamente sincronizado.",
    icon: "🔊",
    features: [
      "Sistemas de sonido profesional",
      "Subwoofers de alto rendimiento",
      "Iluminación arquitectónica LED",
      "Cabezas móviles y rayos lazer",
      "Montaje técnico especializado",
    ],
    benefits: [
      "Equipo propio sin intermediarios - garantía de calidad",
      "Montaje seguro y puntual - cumplimos horarios",
      "Calidad profesional garantizada - sonido claro en todo el espacio",
      "Ambientes personalizables según tu temática"
    ],
    seo: {
      title: "Audio e Iluminación Profesional para Eventos en CDMX | Rentamos Equipo de Sonido",
      description: "Rentamos equipo de sonido profesional e iluminación para eventos en CDMX. Sistemas line array, cabezas móviles, rayos laser y técnicos especializados. ¡Cotiza aquí!",
      keywords: ["audio profesional para eventos", "iluminación para eventos", "renta de sonido cdmx", "equipo de audio profesional", "iluminación arquitectónica", "BEAM", "Microfonia", "EV"], 
    }
  },
  {
    slug: "dj-profesional",
    title: "DJ Profesional para Eventos",
    shortDescription: "Ambientación musical personalizada y mezcla en vivo.",
    heroDescription: "Creamos la atmósfera perfecta con selección musical estratégica y mezcla en vivo adaptada a tu evento.",
    longDescription: "Más que solo reproducir música, creamos la atmósfera perfecta para tu evento. Nuestros DJs profesionales tienen más de 10 años de experiencia leyendo la pista y adaptando la música en tiempo real para mantener la energía ideal. Desde eventos corporativos hasta bodas, trabajamos contigo para diseñar una experiencia musical única que tus invitados recordarán.",
    icon: "🎧",
    features: [
      "Curaduría musical personalizada para tu evento",
      "Mezcla en vivo profesional con equipo Pioneer",
      "Experiencia en eventos sociales y corporativos",
      "Interacción con el público y lectura de pista",
      "Biblioteca musical extensa y actualizada"
    ],
    benefits: [
      "Lectura de pista profesional - música que conecta",
      "Transiciones limpias y energéticas sin cortes",
      "Ambiente dinámico y elegante toda la noche",
      "Coordinación previa para selección musical",
      "Backup de equipo garantizado"
    ],
    seo: {
      title: "DJ Profesional para Bodas y Eventos en CDMX | Música en Vivo",
      description: "✅ Contrata DJ profesional para tu boda o evento en CDMX. Mezcla en vivo, equipo Pioneer y experiencia en eventos sociales. ¡Ambientación musical personalizada!",
      keywords: ["dj para bodas cdmx", "dj profesional cdmx", "música para eventos", "dj para fiestas", "ambientación musical"]
    }
  },
  {
    slug: "mobiliario",
    title: "Mobiliario y Montaje",
    shortDescription: "Mesas, sillas y montaje profesional.",
    heroDescription: "Organización estratégica del espacio con mobiliario funcional y elegante.",
    longDescription: "El mobiliario adecuado transforma por completo la experiencia de tus invitados. Ofrecemos una amplia selección de mesas, sillas y elementos decorativos que se adaptan a cualquier tipo de evento. Nuestro equipo se encarga de todo el montaje y desmontaje, asegurando que cada espacio esté perfectamente distribuido para maximizar la comodidad y la funcionalidad.",
    icon: "🪑",
    features: [
      "Mesas redondas, rectangulares y cocktail",
      "Sillas Tiffany, egipcias y ghost",
      "Bufeteras y chafers para catering",
      "Distribución estratégica del espacio",
      "Montaje y desmontaje profesional",
      "Mantenimiento y limpieza incluidos"
    ],
    benefits: [
      "Presentación impecable que impresiona",
      "Optimización del espacio al máximo",
      "Coordinación eficiente con otros proveedores",
      "Logística completa sin preocupaciones",
      "Calidad y estilo en cada pieza"
    ],
    seo: {
      title: "Renta de Mesas y Sillas para Eventos en CDMX | Mobiliario Profesional",
      description: "Rentamos mesas, sillas y mobiliario para eventos en CDMX. Montaje profesional incluido. Amplia variedad de estilos para bodas, corporativos y fiestas.",
      keywords: ["renta de mesas cdmx", "renta de sillas para eventos", "mobiliario para bodas", "bufeteras en renta", "montaje de eventos"]
    }
  },
  {
    slug: "personal-coordinacion",
    title: "Personal y Coordinación",
    shortDescription: "Meseros capacitados y logística integral.",
    heroDescription: "Supervisión técnica y atención profesional para garantizar que todo fluya correctamente.",
    longDescription: "El éxito de un evento no solo depende del equipo técnico, sino también del personal que atiende a tus invitados. Contamos con meseros altamente capacitados, coordinadores de evento y personal de apoyo que trabajan en equipo para garantizar una experiencia excepcional. Desde la recepción hasta el último momento, nuestro equipo vela por cada detalle.",
    icon: "👥",
    features: [
      "Meseros uniformados y capacitados",
      "Coordinación logística completa",
      "Supervisión técnica durante todo el evento",
      "Atención profesional y cálida",
      "Personal de apoyo para montaje",
      "Staff bilingüe disponible"
    ],
    benefits: [
      "Organización sin estrés - nosotros coordinamos",
      "Servicio atento y profesional con tus invitados",
      "Flujo eficiente del evento garantizado",
      "Respuesta inmediata a imprevistos",
      "Imagen profesional que refuerza tu marca"
    ],
    seo: {
      title: "Meseros y Personal para Eventos en CDMX | Staff Profesional",
      description: "Contrata meseros profesionales y personal para tu evento en CDMX. Staff capacitado, coordinadores y atención de primera. ¡Servicio impecable garantizado!",
      keywords: ["meseros para eventos cdmx", "staff para bodas", "personal para fiestas", "coordinadores de eventos", "meseros profesionales"]
    }
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
    answer: "Recomendamos reservar con al menos 1 a 3 meses de anticipación, ya que trabajamos con fechas limitadas cada mes para garantizar calidad en cada evento."
  },
  {
    question: "¿El equipo de audio e iluminación es propio?",
    answer: "Sí. Contamos con equipo profesional propio, lo que nos permite garantizar calidad, puntualidad y control total durante el evento. No dependemos de terceros."
  },
  {
    question: "¿Se puede personalizar la música y ambientación?",
    answer: "Claro. Diseñamos la experiencia musical según el tipo de evento, perfil de invitados y preferencias del cliente. Trabajamos contigo para crear la atmósfera perfecta."
  },
  {
    question: "¿También ofrecen mobiliario y personal?",
    answer: "Sí. Podemos integrar mobiliario, bufeteras, mesas, sillas y personal capacitado para que tengas todo en un solo proveedor. Producción integral."
  },
  {
    question: "¿Atienden eventos corporativos?",
    answer: "Sí. Trabajamos tanto eventos sociales como corporativos, adaptando la producción al formato requerido. Congresos, convenciones, lanzamientos y más."
  },
  {
    question: "¿En qué zonas trabajan?",
    answer: "Operamos principalmente en CDMX y área metropolitana (Estado de México), con posibilidad de desplazamiento a otros estados según el evento."
  }
];