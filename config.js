// ============================================================
// MAISON VELA — Plantilla para Salón / Spa de Uñas / Spa
// Edita todo en este archivo para adaptar el sitio a un nuevo
// cliente. Para un re-skin normal, no debería hacer falta
// cambiar nada fuera de este archivo.
// ============================================================

const CONFIG = {
  lang: "es",

  // ---- Marca ----
  brandName: "MAISON VELA",
  brandNameShort: "VELA",
  tagline: "Cabello. Uñas. Piel.",
  heroEyebrow: "Una Casa de Belleza Privada",
  heroHeadlineLines: ["El Ritual", "de Ser Vista"],
  heroSub:
    "Donde cada cita es una ocasión. Cabello, uñas y piel — atendidos con el cuidado que se nota.",

  // ---- Contacto / Reservas ----
  whatsappNumber: "50499999999", // código de país + número, sin + ni espacios
  whatsappDefaultMessage: "¡Hola! Me gustaría reservar una cita en MAISON VELA.",
  phoneDisplay: "+504 9999-9999",
  address: "Blvd. Morazán, Torre Sky, Local 4 — Tegucigalpa",
  hours: [
    { day: "Mar — Vie", time: "10:00 AM – 7:00 PM" },
    { day: "Sábado", time: "9:00 AM – 6:00 PM" },
    { day: "Dom — Lun", time: "Cerrado" },
  ],
  instagramHandle: "@maisonvela",
  instagramUrl: "https://instagram.com",

  // ---- Colores (edita solo los valores hex) ----
  colors: {
    noir: "#12100D",
    noirSoft: "#1C1812",
    champagne: "#C9A66B",
    champagneSoft: "#E4D2AC",
    ivory: "#F6F1E9",
    ivorySoft: "#EFE7D8",
    umber: "#2A2018",
    roseEmber: "#B9694E",
    smoke: "#948C7F",
  },

  // ---- Servicios ----
  services: [
    {
      label: "Cabello",
      name: "Estudio de Cabello",
      description:
        "Corte, color y acabado con estilistas formadas en las técnicas más actuales de Miami y Europa.",
      items: ["Corte y peinado signature", "Balayage y corrección de color", "Barra de blowout", "Peinado para bodas y eventos"],
    },
    {
      label: "Uñas",
      name: "Atelier de Uñas",
      description:
        "Detalle pintado a mano, acabados de larga duración y un estándar de sanitización que no negociamos.",
      items: ["Gel-X y builder gel", "Manicura rusa", "Nail art pintado a mano", "Ritual de pedicura spa"],
    },
    {
      label: "Piel",
      name: "Piel & Spa",
      description:
        "Faciales y tratamientos corporales diseñados para tu piel, no un menú genérico.",
      items: ["Facial signature", "Dermaplaning", "Masaje con piedras calientes", "Envoltura corporal reductora"],
    },
  ],

  // ---- Franja ritual (sección de scroll signature) ----
  ritualSteps: [
    {
      time: "01",
      title: "Llegar",
      text: "Champagne, toallas tibias y una consulta con tu estilista antes de tocar una sola herramienta.",
      img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
    },
    {
      time: "02",
      title: "Atender",
      text: "Atención plena, una clienta a la vez — sin sillas doble-reservadas ni acabados apresurados.",
      img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      time: "03",
      title: "Finalizar",
      text: "Cada servicio termina igual: revisión en el espejo y tiempo para disfrutar de verdad el resultado.",
      img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1200&auto=format&fit=crop",
    },
    {
      time: "04",
      title: "Salir Radiante",
      text: "Reagendamos a tu salida — confirmación por WhatsApp antes de que llegues a la puerta.",
      img: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=1200&auto=format&fit=crop",
    },
  ],

  // ---- Galería ----
  gallery: [
    "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522337094846-8a8195aca3aa?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1470259078422-826894b933aa?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=900&auto=format&fit=crop",
  ],

  // ---- Testimonios ----
  testimonials: [
    { quote: "El único salón donde nunca he mirado el reloj.", name: "Andrea M." },
    { quote: "Reservé por WhatsApp a las 11pm, confirmada antes de despertar.", name: "Fernanda R." },
    { quote: "Se siente como un spa de hotel, no un salón de strip mall.", name: "Carolina V." },
  ],

  // ---- Fondo del hero ----
  heroImage:
    "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?q=80&w=1800&auto=format&fit=crop",

  // ---- Textos de interfaz ----
  ui: {
    metaDescription: "MAISON VELA — Una casa de belleza privada para cabello, uñas y piel.",
    navServices: "Servicios",
    navExperience: "Experiencia",
    navGallery: "Galería",
    navVisit: "Visítanos",
    navBook: "Reservar",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    heroCta: "Reservar por WhatsApp",
    heroSecondary: "Ver servicios",
    heroScroll: "Desliza",
    servicesEyebrow: "Lo Que Hacemos",
    servicesTitle: "Tres salas, un solo estándar.",
    ritualEyebrow: "La Experiencia",
    ritualTitle: "Cada visita, el mismo ritual.",
    galleryEyebrow: "Dentro de la Casa",
    galleryTitle: "Un espacio hecho para bajar el ritmo.",
    galleryImageAlt: "Imagen de galería",
    testimonialsEyebrow: "De Boca en Boca",
    testimonialsTitle: "Lo que repiten nuestras clientas.",
    visitEyebrow: "Encuéntranos",
    visitTitle: "Visita la casa.",
    visitImageAlt: "Interior del salón",
    footerEyebrow: "Cuando Quieras",
    footerTitle: "Reserva tu cita.",
    footerCta: "Escríbenos por WhatsApp",
    whatsappLabel: "WhatsApp",
  },
};
