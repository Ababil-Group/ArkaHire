import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Hero = () => {
  const t = useTranslations("administration.hero");
  return (
    <section className="py-20">
      <div className="container max-w-[800px] flex flex-col items-center justify-center gap-5">
        <h1 className="text-center text-5xl font-bold">
          {t("title")}
        </h1>
        <p className="text-center">
         {t("desc")}
        </p>
        <Link href="/contact">
          <Button>{t("btn")}</Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
