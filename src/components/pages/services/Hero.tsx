import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Hero = () => {
    const t = useTranslations("servicemain");
  return (
    <section className="py-20">
      <div className="container flex max-w-[800px] flex-col items-center justify-center gap-5">
        <h1 className="text-center text-5xl font-bold">
         {t("title1")}
        </h1>
        <p className="text-center">
          {t("desc1")}
        </p>
        <Link href="/contact">
          <Button>{t("btn1")}</Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
