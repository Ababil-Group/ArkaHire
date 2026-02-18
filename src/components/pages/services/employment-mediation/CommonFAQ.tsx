import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";
import Image from "next/image";

const CommonFAQ = () => {
  const t = useTranslations("employmentmediation.commonfaq");
  return (
    <section className="py-20">
      <div className="container grid max-w-[1100px] grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div className="space-y-7">
          <h2 className="text-4xl font-bold">{t("title")}</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>{t("queation1")}</AccordionTrigger>
              <AccordionContent>
                {t("ans1.title1")}
                <ul className="list-disc pl-5">
                  <li>{t("ans1.item1")}</li>
                  <li>{t("ans1.item2")}</li>
                  <li>{t("ans1.item3")}</li>
                  <li>{t("ans1.item4")}</li>
                  <li>{t("ans1.item5")}</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>{t("queation2")}</AccordionTrigger>
              <AccordionContent>{t("ans2")}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>{t("queation3")}</AccordionTrigger>
              <AccordionContent>
                {t("ans3.title2")}
                <ul className="list-disc pl-5">
                  <li>
                   {t("ans3.item1")}
                  </li>
                  <li>
                    {t("ans3.item2")}
                  </li>
                  <li>
                    {t("ans3.item3")}
                  </li>
                  <li>
                    {t("ans3.item4")}
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Image
            className="h-auto w-full rounded-2xl"
            src="/images/hr-when.jpg"
            alt="faq"
            height={400}
            width={570}
          />
        </div>
      </div>
    </section>
  );
};

export default CommonFAQ;
