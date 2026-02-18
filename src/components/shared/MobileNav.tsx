"use client";

import { navlinks } from "@/constants";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";

const MobileNav = () => {
  const [activeSubMenu, setActiveSubMenu] = useState<null | string | number>(
    null,
  );
  const t = useTranslations("nav"); // same namespace as desktop

  const toggleSubMenu = (index: number | string) => {
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  return (
    <div>
      {navlinks.map((link, index) => (
        <div key={index}>
          <div className="flex items-center justify-between">
            <Link href={link.href || "#"} className="block py-2 font-medium">
              {t(link.key)} {/* translated label */}
            </Link>

            {link.sublinks && (
              <button
                title="button"
                className="p-1 focus:outline-none"
                onClick={() => toggleSubMenu(index)}
              >
                <ChevronDownIcon
                  className={`h-5 w-5 transform ${
                    activeSubMenu === index ? "rotate-180" : ""
                  }`}
                />
              </button>
            )}
          </div>

          {link.sublinks && activeSubMenu === index && (
            <div className="ml-4 mt-2 space-y-1">
              {link.sublinks.map((subLink, subIndex) => (
                <Link
                  key={subIndex}
                  href={subLink.href || "#"}
                  className="block py-1"
                >
                  {t(subLink.key)} {/* translated sublabel */}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MobileNav;
