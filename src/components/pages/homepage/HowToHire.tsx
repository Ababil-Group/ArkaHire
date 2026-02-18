import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import { useTranslations } from "next-intl";

const HowToHire = () => {
  const t = useTranslations("wowtohire");
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-center text-4xl font-bold">{t("title")}</h2>
        <p className="mb-12 mt-5 text-center">{t("desc")}</p>

        <div className="flex flex-wrap items-center justify-center gap-10">
          {/* card  */}
          <FadeInLeftWithSlowBounce className="col-span-1 min-h-[350px] w-[280px] space-y-2 rounded-3xl border p-10 text-center shadow-xl">
            <h2 className="text-7xl font-extrabold text-primary">{t("no1")}</h2>
            <h3 className="text-2xl font-bold">{t("cardTitle1")}</h3>
            <p>
          {t("cardDesc1")}
            </p>
          </FadeInLeftWithSlowBounce>
          {/* card  */}
          <FadeInLeftWithSlowBounce className="col-span-1 min-h-[350px] w-[280px] space-y-2 rounded-3xl border p-10 text-center shadow-xl">
            <h2 className="text-7xl font-extrabold text-primary">{t("no2")}</h2>
            <h3 className="text-2xl font-bold">{t("cardTitle2")}</h3>
            <p>{t("cardDesc2")}</p>
          </FadeInLeftWithSlowBounce>
          {/* card  */}
          <FadeInRightWithSlowBounce className="col-span-1 min-h-[350px] w-[280px] space-y-2 rounded-3xl border p-10 text-center shadow-xl">
            <h2 className="text-7xl font-extrabold text-primary">{t("no3")}</h2>
            <h3 className="text-2xl font-bold">{t("cardTitle3")}</h3>
            <p>{t("cardDesc3")}</p>
          </FadeInRightWithSlowBounce>
          {/* card  */}
          <FadeInRightWithSlowBounce className="col-span-1 min-h-[350px] w-[280px] space-y-2 rounded-3xl border p-10 text-center shadow-xl">
            <h2 className="text-7xl font-extrabold text-primary">{t("no4")}</h2>
            <h3 className="text-2xl font-bold">{t("cardTitle4")}</h3>
            <p>{t("cardDesc4")}</p>
          </FadeInRightWithSlowBounce>
          {/* card  */}
          <FadeInLeftWithSlowBounce className="col-span-1 min-h-[350px] w-[280px] space-y-2 rounded-3xl border p-10 text-center shadow-xl">
            <h2 className="text-7xl font-extrabold text-primary">{t("no5")}</h2>
            <h3 className="text-2xl font-bold">Visas</h3>
            <p>{t("cardDesc5")}</p>
          </FadeInLeftWithSlowBounce>
          {/* card  */}
          <FadeInLeftWithSlowBounce className="col-span-1 min-h-[350px] w-[280px] space-y-2 rounded-3xl border p-10 text-center shadow-xl">
            <h2 className="text-7xl font-extrabold text-primary">{t("no6")}</h2>
            <h3 className="text-2xl font-bold">{t("cardTitle6")}</h3>
            <p>{t("cardDesc6")}</p>
          </FadeInLeftWithSlowBounce>
          {/* card  */}
          <FadeInRightWithSlowBounce className="col-span-1 min-h-[350px] w-[280px] space-y-2 rounded-3xl border p-10 text-center shadow-xl">
            <h2 className="text-7xl font-extrabold text-primary">{t("no7")}</h2>
            <h3 className="text-2xl font-bold">{t("cardTitle7")}</h3>
            <p>
              {t("cardDesc7")}
            </p>
          </FadeInRightWithSlowBounce>
          {/* card  */}
          <FadeInRightWithSlowBounce className="col-span-1 min-h-[350px] w-[280px] space-y-2 rounded-3xl border p-10 text-center shadow-xl">
            <h2 className="text-7xl font-extrabold text-primary">{t("no8")}</h2>
            <h3 className="text-2xl font-bold">{t("cardTitle8")}</h3>
            <p>
              {t("cardDesc8")}
            </p>
          </FadeInRightWithSlowBounce>
          {/* card  */}
        </div>
      </div>
    </section>
  );
};

export default HowToHire;
