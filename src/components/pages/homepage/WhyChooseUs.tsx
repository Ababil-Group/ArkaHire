import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { IoIosCheckmarkCircle } from "react-icons/io";

const WhyChooseUs = () => {
  const t = useTranslations("whychooseus");
  return (
    <section className="py-10">
      <div className="container">
        <div className="mx-auto grid max-w-[1000px] grid-cols-1 items-center gap-20 lg:grid-cols-2">
          <FadeInLeftWithSlowBounce className="space-y-5">
            <h2 className="text-4xl font-bold">{t("title")}</h2>
            <p className="">
              {t("desc")}
            </p>

            {/* lists */}
            <div className="grid grid-cols-1 gap-y-3 md:grid-cols-2">
              {/* list item  */}
              <div className="flex items-center justify-start gap-1">
                <div>
                  <IoIosCheckmarkCircle className="text-lg text-primary" />
                </div>
                <p className="font-medium">{t("item1")}</p>
              </div>
              {/* list item  */}
              <div className="flex items-center justify-start gap-1">
                <div>
                  <IoIosCheckmarkCircle className="text-lg text-primary" />
                </div>
                <p className="font-medium">{t("item2")}</p>
              </div>
              {/* list item  */}
              <div className="flex items-center justify-start gap-1">
                <div>
                  <IoIosCheckmarkCircle className="text-lg text-primary" />
                </div>
                <p className="font-medium">{t("item3")}</p>
              </div>
              {/* list item  */}
              <div className="flex items-center justify-start gap-1">
                <div>
                  <IoIosCheckmarkCircle className="text-lg text-primary" />
                </div>
                <p className="font-medium">{t("item4")}</p>
              </div>
              {/* list item  */}
              <div className="flex items-center justify-start gap-1">
                <div>
                  <IoIosCheckmarkCircle className="text-lg text-primary" />
                </div>
                <p className="font-medium">{t("item5")}</p>
              </div>
              {/* list item  */}
              <div className="flex items-center justify-start gap-1">
                <div>
                  <IoIosCheckmarkCircle className="text-lg text-primary" />
                </div>
                <p className="font-medium">{t("item6")}</p>
              </div>
            </div>

            <div>
              <Link href="/contact">
                <Button className="bg-secondary">{t("btn")}</Button>
              </Link>
            </div>
          </FadeInLeftWithSlowBounce>
          <FadeInRightWithSlowBounce>
            <Image
              className="h-auto w-full rounded-2xl"
              width={450}
              height={700}
              src="/images/why.jpg"
              alt="Why Choose Us"
            />
          </FadeInRightWithSlowBounce>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
