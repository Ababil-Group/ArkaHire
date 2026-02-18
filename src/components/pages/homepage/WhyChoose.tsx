import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

const WhyChoose = () => {
  const t = useTranslations("whyChoose")
  return (
    <section className="py-20">
      <div className="container grid grid-cols-1 gap-10 lg:grid-cols-2">
        <FadeInLeftWithSlowBounce className="space-y-5">
          <h2 className="text-center text-4xl font-bold leading-[60px] xl:text-left">
            {t("title")}
          </h2>
          <p className="text-center xl:text-left">
            {t("desc")}
          </p>
        </FadeInLeftWithSlowBounce>
        <FadeInRightWithSlowBounce>
          <Accordion className="border" type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-5">
                {t("question1")}
              </AccordionTrigger>
              <AccordionContent className="px-5">
                {t("ans1")}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-5">
                {t("question2")}
              </AccordionTrigger>
              <AccordionContent className="px-5">
                {t("ans2")}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="px-5">
                {t("question3")}
              </AccordionTrigger>
              <AccordionContent className="px-5">
                {t("ans3")}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="px-5">
                {t("question4")}
              </AccordionTrigger>
              <AccordionContent className="px-5">
                {t("ans4")}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default WhyChoose;
