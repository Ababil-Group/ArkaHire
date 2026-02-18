import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: [
    // Core / existing
    "en", // English
    "bg", // Bulgarian
    "bs", // Bosnian
    "sr", // Serbian
    "hr", // Croatian
    "ro", // Romanian
    "ru", // Russian
    "sl", // Slovenian
    "sk", // Slovak
    "el", // Greek
    "la", // (Latin - optional, remove if not needed)

    // Added countries / languages
    "hy", // Armenian
    "de", // German (Austria, Germany)
    "be", // Belarusian
    "nl", // Dutch (Belgium)
    "tr", // Turkish (Northern Cyprus, Turkey)
    "fi", // Finnish
    "it", // Italian
    "sq", // Albanian (Kosovo)
    "lt", // Lithuanian
    "mk", // Macedonian
    "mt", // Maltese
    "mn", // Mongolian
    "pl", // Polish
    "uk", // Ukrainian
  ],
  defaultLocale: "en",
  localePrefix: "always", // always include /en/... prefix
});
