// ============================================================
// MAISON VELA — Salon / Nail Spa / Spa Template Config
// Edit everything in this file to re-skin the site for a new
// client. Nothing below this file should need to change for
// a normal re-skin.
// ============================================================

const CONFIG = {
  // ---- Brand ----
  brandName: "MAISON VELA",
  brandNameShort: "VELA",
  tagline: "Hair. Nails. Skin.",
  heroEyebrow: "A Private Beauty House",
  heroHeadlineLines: ["The Ritual", "of Being Seen"],
  heroSub:
    "Where every appointment is an occasion. Hair, nails, and skin — attended to with the kind of care that shows.",

  // ---- Contact / Booking ----
  whatsappNumber: "50499999999", // country code + number, no + or spaces
  whatsappDefaultMessage: "Hola! I'd like to book an appointment at MAISON VELA.",
  phoneDisplay: "+504 9999-9999",
  address: "Blvd. Morazán, Torre Sky, Local 4 — Tegucigalpa",
  hours: [
    { day: "Tue — Fri", time: "10:00 AM – 7:00 PM" },
    { day: "Saturday", time: "9:00 AM – 6:00 PM" },
    { day: "Sun — Mon", time: "Closed" },
  ],
  instagramHandle: "@maisonvela",
  instagramUrl: "https://instagram.com",

  // ---- Colors (edit hex values only) ----
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

  // ---- Services ----
  services: [
    {
      label: "Hair",
      name: "Hair Studio",
      description:
        "Cut, color, and finish work by stylists trained on the latest Miami and European techniques.",
      items: ["Signature cut & style", "Balayage & color correction", "Blowout bar", "Bridal & event styling"],
    },
    {
      label: "Nails",
      name: "Nail Atelier",
      description:
        "Hand-painted detail, longwear finishes, and a sanitation standard we don't compromise on.",
      items: ["Gel-X & builder gel", "Russian manicure", "Hand-painted nail art", "Spa pedicure ritual"],
    },
    {
      label: "Skin",
      name: "Skin & Spa",
      description:
        "Facials and body treatments designed around your skin, not a one-size menu.",
      items: ["Signature facial", "Dermaplaning", "Hot stone massage", "Body contouring wrap"],
    },
  ],

  // ---- Ritual strip (signature scroll section) ----
  ritualSteps: [
    {
      time: "01",
      title: "Arrive",
      text: "Champagne, warm towels, a consult with your stylist before a single tool is picked up.",
      img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
    },
    {
      time: "02",
      title: "Attend",
      text: "Full attention, one client at a time — no double-booked chairs, no rushed finishes.",
      img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      time: "03",
      title: "Finish",
      text: "Every service ends the same way: a mirror check, and time to actually enjoy the result.",
      img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1200&auto=format&fit=crop",
    },
    {
      time: "04",
      title: "Leave Glowing",
      text: "Rebooking handled on your way out — WhatsApp confirmation before you reach the door.",
      img: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=1200&auto=format&fit=crop",
    },
  ],

  // ---- Gallery ----
  gallery: [
    "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522337094846-8a8195aca3aa?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1470259078422-826894b933aa?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=900&auto=format&fit=crop",
  ],

  // ---- Testimonials ----
  testimonials: [
    { quote: "The only salon where I've never once looked at the clock.", name: "Andrea M." },
    { quote: "Booked on WhatsApp at 11pm, confirmed before I woke up.", name: "Fernanda R." },
    { quote: "It feels like a hotel spa, not a strip-mall salon.", name: "Carolina V." },
  ],

  // ---- Hero background ----
  heroImage:
    "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?q=80&w=1800&auto=format&fit=crop",
};
