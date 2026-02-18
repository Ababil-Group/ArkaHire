import { FaBox } from "react-icons/fa6";
import { TiFlowMerge } from "react-icons/ti";
import { FaScrewdriver } from "react-icons/fa";
import { FaHammer } from "react-icons/fa";
import { FaChessBoard } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInUpWithSlowBounce from "@/animation_wrappers/FadeInUpWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import FadeInDownWithSlowBounce from "@/animation_wrappers/FadeInDownWithSlowBounce";
import { useTranslations } from "next-intl";

const TypeOfEmployees = () => {
  const t = useTranslations("typeofemployees");
  return (
    <section className="bg-[#F3F6F3] py-20">
      <div className="container space-y-10">
        <h2 className="text-center text-4xl font-bold">
          {t("title")}
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* card  */}
          <FadeInLeftWithSlowBounce className="space-y-3 rounded-3xl bg-white p-10">
            <FaBox className="text-5xl text-primary" />
            <h3 className="text-3xl font-semibold">{t("cardTitle1")}</h3>
            <p>
              {t("cardDesc1")}
            </p>
          </FadeInLeftWithSlowBounce>
          {/* card  */}
          <FadeInDownWithSlowBounce className="space-y-3 rounded-3xl bg-white p-10">
            <TiFlowMerge className="text-5xl text-secondary" />
            <h3 className="text-3xl font-semibold">{t("cardTitle2")}</h3>
            <p>
              {t("cardDesc2")}
            </p>
          </FadeInDownWithSlowBounce>
          {/* card  */}
          <FadeInRightWithSlowBounce className="space-y-3 rounded-3xl bg-white p-10">
            <FaScrewdriver className="text-5xl text-primary" />
            <h3 className="text-3xl font-semibold">{t("cardTitle3")}</h3>
            <p> {t("cardDesc3")}</p>
          </FadeInRightWithSlowBounce>
          {/* card  */}
          <FadeInLeftWithSlowBounce className="space-y-3 rounded-3xl bg-white p-10">
            <FaHammer className="text-5xl text-secondary" />
            <h3 className="text-3xl font-semibold">{t("cardTitle4")}</h3>
            <p>
              {t("cardDesc4")}
            </p>
          </FadeInLeftWithSlowBounce>
          {/* card  */}
          <FadeInUpWithSlowBounce className="space-y-3 rounded-3xl bg-white p-10">
            <FaChessBoard className="text-5xl text-primary" />
            <h3 className="text-3xl font-semibold">{t("cardTitle5")}</h3>
            <p>
              {t("cardDesc5")}
            </p>
          </FadeInUpWithSlowBounce>
          {/* card  */}
          <FadeInRightWithSlowBounce className="space-y-3 rounded-3xl bg-white p-10">
            <FaMailBulk className="text-5xl text-secondary" />
            <h3 className="text-3xl font-semibold">{t("cardTitle6")}</h3>
            <p> {t("cardDesc6")}</p>
          </FadeInRightWithSlowBounce>
        </div>

        <div className="flex items-center justify-center">
          <Link href="/contact">
            <Button>{t("btn")}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TypeOfEmployees;
