import { useTranslations } from "next-intl";
import { FaRegKeyboard } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import { FaRegObjectUngroup } from "react-icons/fa";

const Advantages = () => {
  const t = useTranslations("assignmentworkers.advantages");
  return (
    <section className="bg-[#F5F5F5] py-20">
      <div className="container grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div className="space-y-5">
          <h2 className="text-4xl font-bold">
            {t("title1")}
          </h2>
          <p>
            {t("desc1")}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* grid item  */}
          <div className="flex flex-col items-center justify-start gap-2 rounded-md bg-white p-10 shadow-lg">
            <FaRegKeyboard className="text-5xl" />
            <h5 className="text-center text-xl font-bold">{t("title2")}</h5>
            <p className="text-center">
              {t("desc2")}
            </p>
          </div>
          {/* grid item  */}
          <div className="flex flex-col items-center justify-start gap-2 rounded-md bg-white p-10 shadow-lg">
            <FaRegListAlt className="text-5xl" />
            <h5 className="text-center text-xl font-bold">
              {t("title3")}
            </h5>
            <p className="text-center">
              {t("desc3")}
            </p>
          </div>
          {/* grid item  */}
          <div className="flex flex-col items-center justify-start gap-2 rounded-md bg-white p-10 shadow-lg">
            <FaRegNewspaper className="text-5xl" />
            <h5 className="text-center text-xl font-bold">
              {t("title4")}
            </h5>
            <p className="text-center">
              {t("desc4")}
            </p>
          </div>
          {/* grid item  */}
          <div className="flex flex-col items-center justify-start gap-2 rounded-md bg-white p-10 shadow-lg">
            <FaRegObjectUngroup className="text-5xl" />
            <h5 className="text-center text-xl font-bold"> {t("title5")}</h5>
            <p className="text-center">
              {t("desc5")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
