import { NextIntlClientProvider, hasLocale } from "next-intl";
import { ReactNode } from "react";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ArkaHire Agency | Hire Foreign Employees in 48 Hours",
  icons: {
    icon: "/favicon.ico", // /public/favicon.ico
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${montserrat.className} min-h-screen antialiased`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
