import { useTranslations } from "next-intl";

const Include = () => {
  const t = useTranslations("administration.include");
  return (
    <section className="py-10">
      <div className="container max-w-[1000px] space-y-7">
        <h2 className="text-4xl font-bold">
          {t("title")}
        </h2>

        <p className="border-l-2 border-l-black pl-5 font-bold">
          {t("desc1")}
        </p>

        <p>
          {t("title1")}
        </p>
        <ul className="pl-5 list-disc">
          <li>{t("desc2.item1")}</li>
          <li>{t("desc2.item2")}</li>
          <li>{t("desc2.item3")}</li>
          <li>{t("desc2.item4")}</li>
        </ul>
      </div>
    </section>
  );
};

export default Include;
