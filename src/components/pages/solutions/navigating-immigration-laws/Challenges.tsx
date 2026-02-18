import { useTranslations } from "next-intl";
import Image from "next/image";

const Challenges = () => {
  const t = useTranslations("navigating.challenges");
  return (
    <section className="py-20">
      <div className="container flex flex-col items-center gap-20 lg:flex-row">
        <div>
          <Image
            className="h-auto max-w-[390px] rounded-2xl"
            src="/images/hr-when.jpg"
            alt="Challenges"
            height={575}
            width={390}
          />
        </div>
        <div className="space-y-5">
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
      </div>
    </section>
  );
};

export default Challenges;
