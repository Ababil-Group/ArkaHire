import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

const FAQ = () => {
  const t = useTranslations("assignmentworkers.faq");
  return (
    <section className="py-20">
      <div className="container max-w-[1000px]">
        <h2 className="mb-5 text-4xl font-bold">{t("title")}</h2>

        <Accordion className="border" type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="px-5">
              {t("queation1")}
            </AccordionTrigger>
            <AccordionContent className="px-5">{t("ans1")}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="px-5">
              {t("queation2")}
            </AccordionTrigger>
            <AccordionContent className="px-5">
              {t("ans2.title1")}
              <ul className="list-disc pl-5">
                <li>{t("ans2.item1")}</li>
                <li>{t("ans2.item2")}</li>
                <li>{t("ans2.item3")}</li>
                <li>{t("ans2.item4")}</li>
                <li>{t("ans2.item5")}</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="px-5">
              {t("queation3")}
            </AccordionTrigger>
            <AccordionContent className="space-y-2 px-5">
              {t("ans3")}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
