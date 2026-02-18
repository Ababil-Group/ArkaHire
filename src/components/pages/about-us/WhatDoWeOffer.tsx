import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const WhatDoWeOffer = () => {
  const t = useTranslations("about.WhatDoWeOffer");
  return (
    <section className="py-20">
      <div className="container grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
        {/* column */}
        <div className="flex flex-col items-center gap-4 lg:items-start">
          <h6 className="font-bold">{t("title1")}</h6>
          <h2 className="text-center text-4xl font-bold lg:text-left">
            {t("title2")}
          </h2>
          <p className="text-center lg:text-left">
            {t("desc1")}
          </p>
          <div>
            <Button>{t("btn")}</Button>
          </div>
        </div>
        {/* column */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* grid item  */}
          <div>
            <h3 className="text-center text-2xl font-bold">
             {t("title3")}
            </h3>
            <p className="text-center">
              {t("desc2")}
            </p>
          </div>
          {/* grid item  */}
          <div>
            <h3 className="text-center text-2xl font-bold">
              {t("title4")}
            </h3>
            <p className="text-center">
              {t("desc3")}
            </p>
          </div>
          {/* grid item  */}
          <div>
            <h3 className="text-center text-2xl font-bold">{t("title5")}</h3>
            <p className="text-center">
              {t("desc4")}
            </p>
          </div>
          {/* grid item  */}
          <div>
            <h3 className="text-center text-2xl font-bold">
              {t("title6")}
            </h3>
            <p className="text-center">
              {t("desc5")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatDoWeOffer;
