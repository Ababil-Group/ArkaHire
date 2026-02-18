import FadeInDownWithSlowBounce from "@/animation_wrappers/FadeInDownWithSlowBounce";
import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import { useTranslations } from "next-intl";

const Achievements = () => {
  const t = useTranslations("achievements"); 
  
  return (
    <section className="pb-10">
      <div className="container">
        <div className="mx-auto flex max-w-[800px] flex-col items-center justify-between gap-16 lg:flex-row">
          <FadeInLeftWithSlowBounce className="space-y-5">
            <h2 className="text-center text-5xl font-bold text-primary">{t("year1")}</h2>
            <p className="text-center font-semibold">{t("exp1")}</p>
          </FadeInLeftWithSlowBounce>
          <FadeInDownWithSlowBounce className="space-y-5">
            <h2 className="text-center text-5xl font-bold text-primary">
             {t("year2")}
            </h2>
            <p className="text-center font-semibold">{t("exp2")}</p>
          </FadeInDownWithSlowBounce>
          <FadeInRightWithSlowBounce className="space-y-5">
            <h2 className="text-center text-5xl font-bold text-primary">
             {t("year3")}
            </h2>
            <p className="text-center font-semibold">{t("exp3")}</p>
          </FadeInRightWithSlowBounce>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
