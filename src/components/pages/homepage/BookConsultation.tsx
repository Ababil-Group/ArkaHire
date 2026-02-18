import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const BookConsultation = () => {
  const t = useTranslations("bookconsultation");
  return (
    <section className="py-10">
      <div className="container grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <FadeInLeftWithSlowBounce className="space-y-4">
          <h2 className="text-4xl font-bold">{t("title")}</h2>
          <p className=" ">
          {t("desc1")}
          </p>
          <p className=" ">
          {t("decs2")}
          </p>
          <div>
            <Link href="/contact">
              <Button>{t("btn")}</Button>
            </Link>
          </div>
        </FadeInLeftWithSlowBounce>
        <FadeInRightWithSlowBounce>
          <Image
            className="h-auto w-full rounded-2xl"
            src="/images/consultant.jpg"
            alt="Consultation"
            height={380}
            width={560}
          />
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default BookConsultation;
