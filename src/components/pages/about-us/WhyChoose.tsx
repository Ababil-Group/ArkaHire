import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import { useTranslations } from "next-intl";

const WhyChoose = () => {
  const t = useTranslations("about.WhyChoose");
  return (
    <section className="bg-[#F3F6F3] py-20">
      <div className="container flex max-w-[1100px] flex-col items-center justify-between gap-10 lg:flex-row">
        <FadeInLeftWithSlowBounce>
          <h3 className="text-center text-3xl font-bold lg:text-left">
            <span>{t("title1")}</span> <br /> <span>{t("title2")}</span>
          </h3>
        </FadeInLeftWithSlowBounce>
        <FadeInRightWithSlowBounce className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="space-y-5">
            <h2 className="text-center text-5xl font-bold">7+</h2>
            <p className="text-center font-semibold">{t("desc1")}</p>
          </div>
          <div className="space-y-5">
            <h2 className="text-center text-5xl font-bold">600+</h2>
            <p className="text-center font-semibold">
              {t("desc2")}
            </p>
          </div>
          <div className="space-y-5">
            <h2 className="text-center text-5xl font-bold">100%</h2>
            <p className="text-center font-semibold">{t("desc3")}</p>
          </div>
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default WhyChoose;
