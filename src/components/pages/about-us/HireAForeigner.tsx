import FadeInUpWithSlowBounce from "@/animation_wrappers/FadeInUpWithSlowBounce";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

const HireAForeigner = () => {
  const t = useTranslations("about.hireaforeigner");
  return (
    <section className="py-20">
      <FadeInUpWithSlowBounce className="container max-w-[620px] space-y-5">
        <h1 className="text-center text-5xl font-bold">{t("title")}</h1>
        <p className="text-center">
          {t("desc")}
        </p>
        <div className="flex items-center justify-center">
          <Link href="/contact">
            <Button>{t("btn")}</Button>
          </Link>
        </div>
      </FadeInUpWithSlowBounce>
    </section>
  );
};

export default HireAForeigner;
