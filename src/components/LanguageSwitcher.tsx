"use client";

import * as React from "react";
import { useMemo, useState } from "react";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useLocale } from "next-intl";
import type { AppLocale } from "@/i18n/type";
import { ChevronDown, Check, Globe2, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ----------------------------------------------------------------------------
   Minimal in-file facsimiles of shadcn/ui primitives
-----------------------------------------------------------------------------*/
function cn(...cls: (string | false | null | undefined)[]) {
  return cls.filter(Boolean).join(" ");
}

function Card(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "rounded-2xl border bg-white/70 shadow-sm backdrop-blur",
        props.className,
      )}
    />
  );
}

function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "ghost" | "default";
  },
) {
  const { variant = "default", className, ...rest } = props;
  return (
    <button
      {...rest}
      className={cn(
        "inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium transition",
        variant === "ghost"
          ? "bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800"
          : "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100",
        className,
      )}
    />
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        "w-full rounded-xl border px-3 py-2 text-sm outline-none",
        "border-zinc-200 bg-white/80 dark:border-zinc-800 dark:bg-zinc-900/80",
        props.className,
      )}
    />
  );
}

function Badge(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs",
        "border-zinc-200 bg-white/70 dark:border-zinc-800 dark:bg-zinc-900/70",
        props.className,
      )}
    />
  );
}

/* ----------------------------------------------------------------------------
   Types
-----------------------------------------------------------------------------*/
type Country = {
  name: string;
  flag: string;
  preferredLocale: AppLocale;
};

/* ----------------------------------------------------------------------------
   Dataset (country → preferred locale)
-----------------------------------------------------------------------------*/
const COUNTRIES: ReadonlyArray<Country> = [
  { name: "English (International)", flag: "en", preferredLocale: "en" },
  { name: "Armenia", flag: "🇦🇲", preferredLocale: "hy" },
  { name: "Austria", flag: "🇦🇹", preferredLocale: "de" },
  { name: "Belarus", flag: "🇧🇾", preferredLocale: "be" },
  { name: "Belgium", flag: "🇧🇪", preferredLocale: "nl" },
  { name: "Bosnia", flag: "🇧🇦", preferredLocale: "bs" },
  { name: "Bulgaria", flag: "🇧🇬", preferredLocale: "bg" },
  { name: "Croatia", flag: "🇭🇷", preferredLocale: "hr" },
  {
    name: "Cyprus – Northern Cyprus (Turkey)",
    flag: "🇹🇷",
    preferredLocale: "tr",
  },
  {
    name: "Cyprus – Republic of Cyprus (Greek)",
    flag: "🇨🇾",
    preferredLocale: "el",
  },
  { name: "Finland", flag: "🇫🇮", preferredLocale: "fi" },
  { name: "Germany", flag: "🇩🇪", preferredLocale: "de" },
  { name: "Greece", flag: "🇬🇷", preferredLocale: "el" },
  { name: "Italy", flag: "🇮🇹", preferredLocale: "it" },
  { name: "Kosovo", flag: "🇽🇰", preferredLocale: "sq" },
  { name: "Lithuania", flag: "🇱🇹", preferredLocale: "lt" },
  { name: "Macedonia", flag: "🇲🇰", preferredLocale: "mk" },
  { name: "Malta", flag: "🇲🇹", preferredLocale: "mt" },
  { name: "Moldova", flag: "🇲🇩", preferredLocale: "ro" },
  { name: "Mongolia", flag: "🇲🇳", preferredLocale: "mn" },
  { name: "Poland", flag: "🇵🇱", preferredLocale: "pl" },
  { name: "Romania", flag: "🇷🇴", preferredLocale: "ro" },
  { name: "Serbia", flag: "🇷🇸", preferredLocale: "sr" },
  { name: "Slovakia", flag: "🇸🇰", preferredLocale: "sk" },
  { name: "Slovenia", flag: "🇸🇮", preferredLocale: "sl" },
  { name: "Ukraine", flag: "🇺🇦", preferredLocale: "uk" },
];

/* ----------------------------------------------------------------------------
   Locales from routing
-----------------------------------------------------------------------------*/
const LOCALES = routing.locales as ReadonlyArray<AppLocale>;

function mapToSupportedLocale(preferred: AppLocale): AppLocale {
  const supported = new Set<AppLocale>(LOCALES);
  if (supported.has(preferred)) return preferred;

  // TEMP fallbacks – adjust/remove as you add real locales
  const targeted: Partial<Record<AppLocale, AppLocale>> = {
    be: "ru",
    de: "en",
    nl: "en",
    fi: "en",
    it: "en",
    lt: "en",
    mk: "en",
    mt: "en",
    mn: "en",
    pl: "en",
    sq: "en",
    tr: "en",
    hy: "en",
    uk: "en",
  };

  return targeted[preferred] ?? "en";
}

/* ----------------------------------------------------------------------------
   Component
-----------------------------------------------------------------------------*/
export default function LanguageSwitcher() {
  const currentLocale = useLocale() as AppLocale;
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const currentCountry: Country = useMemo(() => {
    const match = COUNTRIES.find(
      (c) => mapToSupportedLocale(c.preferredLocale) === currentLocale,
    );
    if (match) return match;
    return COUNTRIES[0];
  }, [currentLocale]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return COUNTRIES;
    return COUNTRIES.filter((c) =>
      [c.name, c.preferredLocale].some((v) => v.toLowerCase().includes(q)),
    );
  }, [query]);

  // Build a localized href with next-intl's getPathname and navigate.
  const go = (country: Country) => {
    const nextLocale = mapToSupportedLocale(country.preferredLocale);
    if (nextLocale === currentLocale) return;

    // If you created your router via createSharedPathnamesNavigation / next-intl’s navigation,
    // this API is supported and will correctly replace `/en/...` with `/${nextLocale}/...`.
    router.replace(pathname, { locale: nextLocale });
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* Trigger */}
      <Button onClick={() => setOpen((v) => !v)} className="gap-2 bg-secondary">
        <span className="text-xl leading-none">{currentCountry.flag}</span>
        <span className="">{currentLocale.toUpperCase()}</span>
        <ChevronDown size={16} />
      </Button>

      {/* Panel - Centered for all devices */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={cn(
              "2xl:top-2% fixed left-[3%] z-50 max-h-[85vh] w-[95vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 overflow-auto sm:left-[calc(8.5%-1.5rem)] md:left-[calc(11.5%-1.5rem)] lg:left-[calc(12.5%-1.5rem)] xl:left-[calc(22.5%-1.5rem)] 2xl:left-1/4",
              "rounded-2xl border bg-white/95 shadow-2xl backdrop-blur",
              "sm:w-[90vw] md:w-[85vw] lg:w-[80vw]",
            )}
          >
            <div className="sticky top-0 border-b bg-white/95 p-4 backdrop-blur">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex flex-1 items-center gap-2">
                  <Search size={16} className="opacity-70" />
                  <Input
                    placeholder="Search country or language…"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="flex-1"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="gap-1">
                    <Globe2 size={14} />
                    <span>{LOCALES.length} Languages</span>
                  </Badge>
                  <Button
                    variant="ghost"
                    onClick={() => setOpen(false)}
                    className="bg-zinc-900 text-xs text-white hover:bg-zinc-500"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>

            {/* Grid of countries */}
            <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {filtered.map((c) => {
                const mapped = mapToSupportedLocale(c.preferredLocale);
                const supported = LOCALES.includes(mapped);
                const isActive = mapped === currentLocale;
                return (
                  <Card
                    key={c.name}
                    onClick={() => supported && go(c)}
                    className={cn(
                      "group cursor-pointer p-4 transition-all duration-200",
                      supported
                        ? "hover:scale-105 hover:shadow-lg"
                        : "cursor-not-allowed opacity-60",
                      isActive && "ring-2 ring-blue-500",
                    )}
                  >
                    <div className="flex items-start justify-between">
                      <div className="select-none text-2xl leading-none">
                        {c.flag}
                      </div>
                      {isActive && (
                        <Badge className="bg-black text-[10px] text-white">
                          Current
                        </Badge>
                      )}
                    </div>
                    <div className="mt-3 space-y-1">
                      <div className="text-sm font-medium leading-tight">
                        {c.name}
                      </div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400">
                        {c.preferredLocale.toUpperCase()} →{" "}
                        {mapped.toUpperCase()}
                        {!LOCALES.includes(c.preferredLocale) &&
                          mapped === "en" && (
                            <span className="ml-1 text-orange-500">
                              (fallback)
                            </span>
                          )}
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div
                        className={cn(
                          "text-xs",
                          supported ? "text-zinc-500" : "text-red-500",
                        )}
                      >
                        {supported ? "Click to switch" : "Not available"}
                      </div>
                      {isActive && (
                        <Check size={16} className="text-blue-500" />
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>

            {filtered.length === 0 && (
              <div className="p-8 text-center text-zinc-500">
                No countries or languages found matching `${query}`
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
