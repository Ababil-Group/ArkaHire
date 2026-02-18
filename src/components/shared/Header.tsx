"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { navlinks } from "@/constants";
import { Url } from "next/dist/shared/lib/router/router";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import MobileNav from "./MobileNav";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher"

const Header = () => {
  const t = useTranslations("nav");
 
  return (
    <header className="sticky top-0 z-50 bg-white py-2 shadow">
      <nav className="container flex items-center justify-between">
        <Link href="/">
          <Image
            className="h-auto w-[150px]"
            src="/logo.png"
            alt="Migrate Cloud Logo"
            width={150}
            height={75}
          />
        </Link>

        <ul className="hidden items-center justify-center gap-7 font-semibold lg:flex">
          
          {navlinks.map((navlink, i) => (
            
            <li key={i} className="group relative">
            
              <Link
                className="inline-flex items-center transition-colors hover:text-primary"
                href={navlink.href ? (navlink.href as Url) : "#"}
              >
                {t(navlink.key)} {navlink.sublinks && <MdKeyboardArrowDown />}
              </Link>

              {/* Dropdown for sublinks */}
              {navlink.sublinks && (
                <ul className="invisible absolute left-0 top-full z-50 mt-2 w-52 rounded-lg bg-white py-2 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  {navlink.sublinks.map((sublink, j) => (
                    <li key={j}>
                      <Link
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        href={sublink.href}
                      >
                        {t(sublink.key)}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <LanguageSwitcher/>
        <Link href="/contact">
          <Button className="hidden lg:inline-block">{t("contact")}</Button>
        </Link>

        <Sheet>
          <SheetTrigger className="lg:hidden">
            <FaBars className="cursor-pointer text-3xl text-secondary lg:hidden" />
          </SheetTrigger>
          <SheetContent className="bg-white">
            <MobileNav />
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Header;
