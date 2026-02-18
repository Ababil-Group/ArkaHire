// nav.config.ts

export type NavItem = {
  key: string; // i18n key inside "nav"
  href?: string;
  sublinks?: { key: string; href: string }[];
};

export const navlinks: NavItem[] = [
  { key: "home", href: "/" },
  { key: "howToHire", href: "/how-to-hire-international-talent" },

  {
    key: "solutions.label", // <-- label key
    sublinks: [
      {
        key: "solutions.navigating",
        href: "/solutions/navigating-immigration-laws",
      },
      {
        key: "solutions.seasonal",
        href: "/solutions/employment-of-seasonal-workers",
      },
      {
        key: "solutions.construction",
        href: "/solutions/employment-of-construction-workers",
      },
      {
        key: "solutions.medical",
        href: "/solutions/employment-of-medical-workers",
      },
    ],
  },

  {
    key: "services.label", // <-- label key
    href: "/services",
    sublinks: [
      { key: "services.admin", href: "/services/employment-administration" },
      { key: "services.fullHR", href: "/services/full-service-hr" },
      { key: "services.mediation", href: "/services/employment-mediation" },
      { key: "services.assignment", href: "/services/assignment-of-workers" },
    ],
  },

  { key: "about", href: "/about-us" },
];
