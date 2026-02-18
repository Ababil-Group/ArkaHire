import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AssignmentOfWorkers = () => {
  const t = useTranslations("seasonal.assignment");
  return (
    <section className="py-10">
      <div className="container grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div>
          <Image
            className="h-auto w-full rounded-2xl"
            src="/images/assignment-workers.jpg"
            alt="Employment Administration"
            height={380}
            width={565}
          />
        </div>
        <div className="space-y-5">
          <h2 className="text-4xl font-bold">{t("title")}</h2>

          <p>
            {t("desc")}
          </p>

          <Button>{t("btn")}</Button>
        </div>
      </div>
    </section>
  );
};

export default AssignmentOfWorkers;
