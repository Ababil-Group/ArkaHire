import { FaRegFlag } from "react-icons/fa";
import { FaRegChartBar } from "react-icons/fa";
import { IoDocumentsOutline } from "react-icons/io5";
import { FaRegFolderOpen } from "react-icons/fa";
import { useTranslations } from "next-intl";

const Process = () => {
  const t = useTranslations("employmentmediation.process");
  return (
    <section className="bg-[#F5F5F5] py-20">
      <div className="container grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* grid item  */}
          <div className="flex flex-col items-center justify-start gap-2 rounded-md bg-white p-10 shadow-lg">
            <FaRegFolderOpen className="text-5xl" />
            <h5 className="text-center text-xl font-bold">{t("title1")}</h5>
            <p className="text-center">
              {t("desc1")}
            </p>
          </div>
          {/* grid item  */}
          <div className="flex flex-col items-center justify-start gap-2 rounded-md bg-white p-10 shadow-lg">
            <IoDocumentsOutline className="text-5xl" />
            <h5 className="text-center text-xl font-bold">
              {t("title2")}
            </h5>
            <p className="text-center">
              {t("desc2")}
            </p>
          </div>
          {/* grid item  */}
          <div className="flex flex-col items-center justify-start gap-2 rounded-md bg-white p-10 shadow-lg">
            <FaRegFlag className="text-5xl" />
            <h5 className="text-center text-xl font-bold">
              {t("title3")}
            </h5>
            <p className="text-center">
              {t("desc3")}
            </p>
          </div>
          {/* grid item  */}
          <div className="flex flex-col items-center justify-start gap-2 rounded-md bg-white p-10 shadow-lg">
            <FaRegChartBar className="text-5xl" />
            <h5 className="text-center text-xl font-bold">
              {t("title4")}
            </h5>
            <p className="text-center">
              {t("desc4")}
            </p>
          </div>
        </div>
        <div className="space-y-5">
          <h2 className="text-4xl font-bold">
            {t("title5")}
          </h2>
          <p>
            {t("desc5")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
