import visibilityDilemma from "../assets/images/visibility-dilemma.jpg";
import engagementGap from "../assets/images/engagement-gap.jpg";
import resultsInHibernation from "../assets/images/results-in-hibernation.jpg";

const services = [
  {
    title: "DJ Profesional",
    icon: "music",
    features: [
      "Curaduría musical personalizada según tu evento",
      "Mezcla en vivo y lectura de pista",
      "Experiencia en bodas, XV años y eventos corporativos",
      "Equipo profesional de alto rendimiento"
    ]
  },
  {
    title: "Audio e Iluminación",
    icon: "light",
    features: [
      "Sonido potente, claro y balanceado",
      "Iluminación arquitectónica y ambiental",
      "Efectos dinámicos sincronizados con la música",
      "Montaje técnico seguro y profesional"
    ]
  },
  {
    title: "Mobiliario y Montaje",
    icon: "chair",
    features: [
      "Mesas, sillas y bufeteras elegantes",
      "Distribución estratégica del espacio",
      "Montaje puntual y organizado",
      "Presentación estética impecable"
    ]
  },
  {
    title: "Personal y Coordinación",
    icon: "team",
    features: [
      "Meseros capacitados y uniformados",
      "Coordinación logística integral",
      "Supervisión técnica durante el evento",
      "Atención profesional a invitados"
    ]
  }
];

const solutions = [
  {
    title: "Eventos sin impacto",
    painPoint:
      "Muchos eventos tienen buena intención, pero carecen de ambientación profesional y terminan siendo olvidables.",
    agitatepainPoint:
      "La música no conecta, la iluminación no destaca y la experiencia no genera emoción. Tus invitados lo notan.",
    solution:
      "Diseñamos experiencias completas donde cada elemento —audio, iluminación y logística— trabaja en conjunto para crear momentos memorables.",
    img: visibilityDilemma,
  },
  {
    title: "Problemas técnicos en el evento",
    painPoint:
      "Fallos de sonido, retrasos en montaje o mala coordinación pueden arruinar meses de planeación.",
    agitatepainPoint:
      "Nada genera más estrés que un micrófono que no funciona o un montaje incompleto cuando los invitados ya llegaron.",
    solution:
      "Contamos con equipo propio y personal técnico capacitado para garantizar que todo funcione de manera impecable.",
    img: engagementGap,
  },
  {
    title: "Falta de experiencia profesional",
    painPoint:
      "No todos los proveedores entienden la importancia de la producción integral.",
    agitatepainPoint:
      "Contratar por separado sonido, DJ y mobiliario puede generar desorganización y falta de coherencia visual.",
    solution:
      "Integramos todos los servicios bajo una misma dirección técnica para asegurar armonía, calidad y eficiencia.",
    img: resultsInHibernation,
  },
];

const faqs = [
  {
    question: "¿Con cuánta anticipación debo reservar?",
    answer:
      "Recomendamos reservar con al menos 1 a 3 meses de anticipación, ya que trabajamos con fechas limitadas cada mes para garantizar calidad en cada evento.",
  },
  {
    question: "¿El equipo de audio e iluminación es propio?",
    answer:
      "Sí. Contamos con equipo profesional propio, lo que nos permite garantizar calidad, puntualidad y control total durante el evento.",
  },
  {
    question: "¿Se puede personalizar la música y ambientación?",
    answer:
      "Claro. Diseñamos la experiencia musical según el tipo de evento, perfil de invitados y preferencias del cliente.",
  },
  {
    question: "¿También ofrecen mobiliario y personal?",
    answer:
      "Sí. Podemos integrar mobiliario, bufeteras, mesas, sillas y personal capacitado para que tengas todo en un solo proveedor.",
  },
  {
    question: "¿Atienden eventos corporativos?",
    answer:
      "Sí. Trabajamos tanto eventos sociales como corporativos, adaptando la producción al formato requerido.",
  },
  {
    question: "¿En qué zonas trabajan?",
    answer:
      "Operamos principalmente en CDMX y área metropolitana, con posibilidad de desplazamiento según el evento.",
  }
];

export { services, solutions, faqs };