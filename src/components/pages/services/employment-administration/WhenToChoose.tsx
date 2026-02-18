import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";
import Image from "next/image";

const WhenToChoose = () => {
  const t = useTranslations("administration.whenToconsider");
  return (
    <section className="py-20">
      <div className="container grid max-w-[1100px] grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div className="space-y-7">
          <h2 className="text-4xl font-bold">
            {t("title")}
          </h2>
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
          </Accordion>
        </div>
        <div>
          <Image
            className="h-auto w-full rounded-2xl"
            src="/images/when.jpg"
            alt="faq"
            height={400}
            width={570}
          />
        </div>
      </div>
    </section>
  );
};

export default WhenToChoose;
