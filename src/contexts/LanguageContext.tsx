import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Hero Section
    heroSubtitle: "Jazz Singer • Cabaret Artist • Burlesque Performer",
    heroDescription: "Bringing the golden age of jazz to life with sophisticated artistry and timeless elegance in every performance.",
    viewPerformances: "View Performances",
    contactBooking: "Contact for Booking",
    
    // About Section
    aboutTitle: "About the Artist",
    aboutSubtitle: "A passionate performer dedicated to preserving and celebrating the timeless art of jazz, cabaret, and burlesque entertainment.",
    aboutDescription1: "Violeta Moore is a captivating performer who embodies the essence of vintage glamour with a modern twist. Her artistry spans the worlds of burlesque, cabaret, and theatrical performance, creating mesmerizing experiences that transport audiences to an era of sophistication and allure.",
    aboutDescription2: "With her commanding stage presence and attention to detail, Violeta crafts each performance as a work of art. Her elegant choreography, combined with stunning costumes and theatrical storytelling, creates unforgettable moments that celebrate the beauty and power of feminine expression.",
    specialtiesTitle: "Specialties",
    specialty1: "Burlesque Artistry",
    specialty2: "Cabaret Performance",
    specialty3: "Theatrical Shows",
    specialty4: "Vintage Glamour",
    specialty5: "Custom Choreography",
    specialty6: "Event Entertainment",
    
    // Performances Section
    performancesTitle: "Featured Performances",
    performancesSubtitle: "Experience the magic of live performance through a curated selection of signature shows and regular appearances.",
    featherDreams: "Feather Dreams",
    featherDreamsDesc: "An elegant burlesque performance featuring luxurious white feathers and sophisticated choreography that captivates audiences.",
    vintageGlamour: "Vintage Glamour Revue",
    vintageGlamourDesc: "A theatrical cabaret experience that transports audiences to the golden age of entertainment with stunning costumes and storytelling.",
    noirMystique: "Noir Mystique",
    noirMystiqueDesc: "A sophisticated artistic performance combining elements of burlesque, dance, and theatrical storytelling in black and white elegance.",
    whiteFeather: "White Feather Fantasy",
    whiteFeatherDesc: "Bespoke performances tailored for special events, featuring elaborate feather work and personalized choreography.",
    bookPrivate: "Book a Private Performance",
    bookPrivateDesc: "Create an unforgettable experience with a customized performance tailored to your special event or venue.",
    performanceGallery: "Performance Gallery",
    
    // Contact Section
    contactTitle: "Get in Touch",
    contactSubtitle: "Ready to bring sophisticated entertainment to your venue or event? Let's discuss how we can create an unforgettable experience together.",
    createMagic: "Let's Create Magic Together",
    contactDescription: "Whether you're planning an intimate jazz evening, a sophisticated cabaret show, or an elegant burlesque performance, I'm here to bring your vision to life with professionalism and artistic excellence.",
    email: "Email",
    location: "Location",
    availability: "Availability",
    emailDesc: "For bookings and inquiries",
    locationValue: "New York City, NY",
    locationDesc: "Available for travel",
    availabilityValue: "Year-round",
    availabilityDesc: "Book 2-8 weeks in advance",
    bookingInfo: "Booking Information",
    sendMessage: "Send a Message",
    firstName: "First Name",
    lastName: "Last Name",
    emailAddress: "Email Address",
    eventType: "Event Type",
    eventDate: "Event Date",
    message: "Message",
    selectEventType: "Select event type",
    burlesque: "Burlesque Performance",
    cabaret: "Cabaret Show",
    private: "Private Event",
    corporate: "Corporate Event",
    wedding: "Wedding Entertainment",
    other: "Other Type of Performance",
    messagePlaceholder: "Tell me about your event, venue, and any special requirements...",
    sendMessageBtn: "Send Message"
  },
  es: {
    // Hero Section
    heroSubtitle: "Cantante de Jazz • Artista de Cabaret • Intérprete de Burlesque",
    heroDescription: "Dando vida a la edad dorada del jazz con arte sofisticado y elegancia atemporal en cada actuación.",
    viewPerformances: "Ver Actuaciones",
    contactBooking: "Contactar para Reservas",
    
    // About Section
    aboutTitle: "Sobre la Artista",
    aboutSubtitle: "Una intérprete apasionada dedicada a preservar y celebrar el arte atemporal del jazz, cabaret y entretenimiento burlesque.",
    aboutDescription1: "Violeta Moore es una artista cautivadora que encarna la esencia del glamour vintage con un toque moderno. Su arte abarca los mundos del burlesque, cabaret y actuación teatral, creando experiencias hipnotizantes que transportan al público a una era de sofisticación y atractivo.",
    aboutDescription2: "Con su presencia escénica dominante y atención al detalle, Violeta elabora cada actuación como una obra de arte. Su coreografía elegante, combinada con vestuarios impresionantes y narrativa teatral, crea momentos inolvidables que celebran la belleza y el poder de la expresión femenina.",
    specialtiesTitle: "Especialidades",
    specialty1: "Arte Burlesque",
    specialty2: "Actuación de Cabaret",
    specialty3: "Espectáculos Teatrales",
    specialty4: "Glamour Vintage",
    specialty5: "Coreografía Personalizada",
    specialty6: "Entretenimiento para Eventos",
    
    // Performances Section
    performancesTitle: "Actuaciones Destacadas",
    performancesSubtitle: "Experimenta la magia de la actuación en vivo a través de una selección curada de espectáculos únicos y apariciones regulares.",
    featherDreams: "Sueños de Plumas",
    featherDreamsDesc: "Una elegante actuación de burlesque con plumas blancas lujosas y coreografía sofisticada que cautiva a las audiencias.",
    vintageGlamour: "Revista de Glamour Vintage",
    vintageGlamourDesc: "Una experiencia teatral de cabaret que transporta a las audiencias a la edad dorada del entretenimiento con vestuarios impresionantes y narrativa.",
    noirMystique: "Mística Noir",
    noirMystiqueDesc: "Una actuación artística sofisticada que combina elementos de burlesque, danza y narrativa teatral en elegancia en blanco y negro.",
    whiteFeather: "Fantasía de Plumas Blancas",
    whiteFeatherDesc: "Actuaciones personalizadas para eventos especiales, con trabajo elaborado de plumas y coreografía personalizada.",
    bookPrivate: "Reservar una Actuación Privada",
    bookPrivateDesc: "Crea una experiencia inolvidable con una actuación personalizada adaptada a tu evento especial o lugar.",
    performanceGallery: "Galería de Actuaciones",
    
    // Contact Section
    contactTitle: "Ponte en Contacto",
    contactSubtitle: "¿Listo para llevar entretenimiento sofisticado a tu lugar o evento? Discutamos cómo podemos crear una experiencia inolvidable juntos.",
    createMagic: "Creemos Magia Juntos",
    contactDescription: "Ya sea que estés planeando una velada íntima de jazz, un espectáculo sofisticado de cabaret, o una elegante actuación de burlesque, estoy aquí para dar vida a tu visión con profesionalismo y excelencia artística.",
    email: "Correo",
    location: "Ubicación",
    availability: "Disponibilidad",
    emailDesc: "Para reservas y consultas",
    locationValue: "Ciudad de Nueva York, NY",
    locationDesc: "Disponible para viajar",
    availabilityValue: "Todo el año",
    availabilityDesc: "Reservar con 2-8 semanas de anticipación",
    bookingInfo: "Información de Reservas",
    sendMessage: "Enviar un Mensaje",
    firstName: "Nombre",
    lastName: "Apellido",
    emailAddress: "Dirección de Correo",
    eventType: "Tipo de Evento",
    eventDate: "Fecha del Evento",
    message: "Mensaje",
    selectEventType: "Seleccionar tipo de evento",
    burlesque: "Actuación de Burlesque",
    cabaret: "Espectáculo de Cabaret",
    private: "Evento Privado",
    corporate: "Evento Corporativo",
    wedding: "Entretenimiento de Boda",
    other: "Otro Tipo de Actuación",
    messagePlaceholder: "Cuéntame sobre tu evento, lugar y cualquier requisito especial...",
    sendMessageBtn: "Enviar Mensaje"
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};