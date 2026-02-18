import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";
import Image from "next/image";

const FAQ = () => {
  const t = useTranslations("faq");
  return (
    <section className="py-20">
      <div className="container grid max-w-[1100px] grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <FadeInLeftWithSlowBounce>
          <Image
            className="h-auto w-full rounded-2xl"
            src="/images/faq.jpg"
            alt="faq"
            height={600}
            width={450}
          />
        </FadeInLeftWithSlowBounce>
        <FadeInRightWithSlowBounce className="space-y-7">
          <h2 className="text-4xl font-bold">{t("title")}</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                {t("faq1")}
              </AccordionTrigger>
              <AccordionContent>
                {t("ans1")}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                {t("faq2")}
              </AccordionTrigger>
              <AccordionContent>
                {t("ans2")}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                {t("faq3")}
              </AccordionTrigger>
              <AccordionContent>
                {t("ans3")}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                {t("faq4")}
              </AccordionTrigger>
              <AccordionContent>
                {t("ans4")}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                {t("faq5")}
              </AccordionTrigger>
              <AccordionContent>
                {t("ans5")}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                {t("faq6")}
              </AccordionTrigger>
              <AccordionContent>
                {t("ans6")}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default FAQ;
