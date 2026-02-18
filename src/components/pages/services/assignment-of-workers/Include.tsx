import { useTranslations } from "next-intl";

const Include = () => {
  const t = useTranslations("assignmentworkers.include");
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
          {t("desc2")}
        </p>

        <p>
          {t("desc3")}
        </p>

        <p>
          {t("desc4")}
        </p>

        <p>
          {t("desc5")}
        </p>
      </div>
    </section>
  );
};

export default Include;
