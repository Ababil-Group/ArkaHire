// Supported app locales
export type AppLocale =
  | "en" // English
  | "bg" // Bulgarian
  | "bs" // Bosnian
  | "sr" // Serbian
  | "hr" // Croatian
  | "ro" // Romanian
  | "ru" // Russian
  | "sl" // Slovenian
  | "sk" // Slovak
  | "el" // Greek
  | "la" // Latin (Vatican)
  | "hy" // Armenian
  | "de" // German
  | "be" // Belarusian
  | "nl" // Dutch (Belgium)
  | "tr" // Turkish (Northern Cyprus/Turkey)
  | "fi" // Finnish
  | "it" // Italian
  | "sq" // Albanian (Kosovo)
  | "lt" // Lithuanian
  | "mk" // Macedonian
  | "mt" // Maltese
  | "mn" // Mongolian
  | "pl" // Polish
  | "uk"; // Ukrainian

// Country -> locale mapping
export const countryToLocale = {
  // Already present
  BG: "bg",
  BA: "bs",
  RS: "sr",
  HR: "hr",
  RO: "ro",
  RU: "ru",
  SI: "sl",
  SK: "sk",
  US: "en",
  GB: "en",
  FR: "en", // keep as English unless you add 'fr'
  EL: "el", // Greece (kept your existing key)
  VA: "la", // Vatican City (Latin)

  // Added / updated
  AM: "hy", // Armenia
  AT: "de", // Austria
  BY: "be", // Belarus
  BE: "nl", // Belgium (Dutch fallback)
  CY: "el", // Cyprus (Republic of Cyprus - Greek)
  TR: "tr", // Turkey (Northern Cyprus context)
  FI: "fi", // Finland
  DE: "de", // Germany (updated from 'en' to 'de')
  IT: "it", // Italy
  XK: "sq", // Kosovo (common code)
  LT: "lt", // Lithuania
  MK: "mk", // North Macedonia
  MT: "mt", // Malta
  MD: "ro", // Moldova (Romanian)
  MN: "mn", // Mongolia
  PL: "pl", // Poland
  UA: "uk", // Ukraine
} as const satisfies Record<string, AppLocale>;

export type CountryCode = keyof typeof countryToLocale;
