export const SITE = {
  name: "MS & Asociados",
  legalName: "MS & Asociados Abogados",
  tagline: "Estudio jurídico de innovación permanente y excelencia técnica",
  city: "Asunción, Paraguay",
};

export const CONTACT = {
  address:
    "Tte. Héctor Vera n.° 2859 e/ Cnel. Cabrera y Bdo. Caballero, Asunción",
  phoneLabel: "(021) 673 294",
  phoneHref: "tel:+59521673294",
  email: "ms.asociados01@gmail.com",
};

/**
 * Datos que el estudio todavía no envió. Al completarlos, los botones y el
 * formulario quedan funcionales sin tocar ningún componente.
 */
export const PENDING = {
  /** TODO: número de WhatsApp en formato internacional sin signos, ej. "595981123456". */
  whatsappNumber: "",
  /** TODO: URL pública del calendario (Calendly, Google Calendar, etc.). */
  calendarUrl: "",
  /** TODO: ID del formulario de Formspree, ej. "xbljkqwe" (formspree.io/f/<ID>). */
  formspreeId: "",
};

const whatsappMessage = encodeURIComponent(
  "Hola, quisiera agendar una consulta con MS & Asociados.",
);

export const whatsappUrl = PENDING.whatsappNumber
  ? `https://wa.me/${PENDING.whatsappNumber}?text=${whatsappMessage}`
  : null;

export const calendarUrl = PENDING.calendarUrl || null;

export const formspreeAction = PENDING.formspreeId
  ? `https://formspree.io/f/${PENDING.formspreeId}`
  : null;

/** Destino del botón "Agendar consulta" hasta que llegue el número real. */
export const bookingUrl = whatsappUrl ?? "/#contacto";
