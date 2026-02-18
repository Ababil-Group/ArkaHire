import Hero from "@/components/pages/services/Hero";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MigrateCloud | Services",
};

const Services = () => {
  const t = useTranslations("servicemain");
  return (
    <main className="pb-20">
      <Hero />

      <div className="container mt-20 max-w-[1000px] space-y-20">
        {/* service  */}

        <div className="space-y-4">
          <h5 className="text-2xl font-bold">{t("title2")}</h5>

          <p>
            {t("desc2")}
          </p>

          <div>
            <Link href="/services/employment-administration">
              <Button>{t("btn2")}</Button>
            </Link>
          </div>
        </div>
        {/* service  */}

        <div className="space-y-4">
          <h5 className="text-2xl font-bold">{t("title3")}</h5>

          <p>
            {t("desc3")}
          </p>

          <div>
            <Link href="/services/full-service-hr">
              <Button>{t("btn2")}</Button>
            </Link>
          </div> 
        </div>
        {/* service  */}

        <div className="space-y-4">
          <h5 className="text-2xl font-bold">{t("title4")}</h5>

          <p>
            {t("desc4")}
          </p>

          <div>
            <Link href="/services/employment-mediation">
              <Button>{t("btn2")}</Button>
            </Link>
          </div>
        </div>
        {/* service  */}

        <div className="space-y-4">
          <h5 className="text-2xl font-bold">{t("title5")}</h5>

          <p>
            {t("desc5")}
          </p>

          <div>
            <Link href="/services/assignment-of-workers">
              <Button>{t("btn2")}</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
