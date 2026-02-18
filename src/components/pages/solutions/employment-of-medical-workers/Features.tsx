import { useTranslations } from "next-intl";

const Features = () => {
  const t = useTranslations("medical.features");
  return (
    <section className="py-20">
      <div className="container grid max-w-[1100px] grid-cols-1 divide-y lg:grid-cols-3 lg:divide-x lg:divide-y-0">
        {/* card */}
        <div className="space-y-2 p-10">
          <h4 className="text-center text-2xl font-bold">
            {t("title1")}
          </h4>
          <p className="text-center">
            {t("desc1")}
          </p>
        </div>

        {/* card */}
        <div className="space-y-2 p-10">
          <h4 className="text-center text-2xl font-bold">
            {t("title2")}
          </h4>
          <p className="text-center">
            {t("desc2")}
          </p>
        </div>

        {/* card */}
        <div className="space-y-2 p-10">
          <h4 className="text-center text-2xl font-bold">
            {t("title3")}
          </h4>
          <p className="text-center">
            {t("desc3")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
