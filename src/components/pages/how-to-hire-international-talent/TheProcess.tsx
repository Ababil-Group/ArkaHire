import Image from "next/image";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useTranslations } from "next-intl";

const TheProcess = () => {
  const t = useTranslations("HireAForeigner");
  return (
    <section className="py-20">
      <div className="container max-w-[1100px]">
        <h1 className="mb-20 text-center text-5xl font-bold">{t("title")}</h1>

        <div className="flex flex-col items-center justify-center gap-20 lg:flex-row">
          <div className="basis-full lg:basis-1/2">
            <Image
              className="h-auto w-full rounded-2xl"
              src="/images/the-process.png"
              alt="The Process"
              width={500}
              height={550}
            />
          </div>
          <div className="basis-full space-y-5 lg:basis-1/2">
            <h2 className="text-4xl font-bold">{t("subtitle")}</h2>
            <p className="">{t("desc1")}</p>

            {/* lists */}
            <div className="grid grid-cols-1 gap-y-3">
              {/* list item  */}
              <div className="flex items-start justify-start gap-1">
                <div>
                  <IoIosCheckmarkCircle className="mt-[3px] text-lg text-primary" />
                </div>
                <p className="font-medium">{t("desc2")}</p>
              </div>
              {/* list item  */}
              <div className="flex items-start justify-start gap-1">
                <div>
                  <IoIosCheckmarkCircle className="mt-[3px] text-lg text-primary" />
                </div>
                <p className="font-medium">{t("desc3")}</p>
              </div>
              {/* list item  */}
              <div className="flex items-start justify-start gap-1">
                <div>
                  <IoIosCheckmarkCircle className="mt-[3px] text-lg text-primary" />
                </div>
                <p className="font-medium">{t("desc4")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheProcess;
