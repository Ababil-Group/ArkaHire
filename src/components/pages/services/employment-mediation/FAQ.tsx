import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="py-20">
      <div className="container max-w-[1000px]">
        <h2 className="mb-5 text-4xl font-bold">Frequently Asked Questions</h2>

        <Accordion className="border" type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="px-5">
              What Are Our Responsibilities in the Mediation Process?
            </AccordionTrigger>
            <AccordionContent className="px-5">
              The duties of agencies involved in foreign worker employment
              mediation include: – Identifying a suitable worker based on the
              client’s criteria, conducting the selection process, and providing
              the required documentation. – Preparing and submitting all
              necessary documentation to obtain temporary residence and work
              permits for third-country nationals. – Covering the costs of
              travel insurance for the workers. – Arranging the visa for
              residence and work in Europe. – Covering the cost of the
              worker&apos;s airfare.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="px-5">
              What Are Your Responsibilities Towards a Foreign Worker?
            </AccordionTrigger>
            <AccordionContent className="px-5">
              Once a work permit is obtained for a foreign worker, accommodation
              and meals must be provided upon their arrival. Accommodation
              should meet basic living standards. If meals cannot be provided, a
              food allowance must be given. Additionally, it is mandatory to
              register the worker for pension and health insurance, just like
              any local employee.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="px-5">
              What Conditions Must Be Met to Obtain a Residence and Work Permit?
            </AccordionTrigger>
            <AccordionContent className="space-y-2 px-5">
              To obtain the necessary permits, the following conditions must be
              met: – Your business must be registered in Europe. – You must
              employ at least one-quarter of local citizens compared to
              third-country nationals on a full-time, indefinite basis for the
              past six months. – A certificate from the Tax Administration
              confirming no outstanding debts due to public benefits, dated
              within a recent period before applying for the permits. – There
              must be no legal convictions related to labor relations or social
              security.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="px-5">
              Can the Worker Start Immediately?
            </AccordionTrigger>
            <AccordionContent className="space-y-2 px-5">
              Unfortunately, no. Since these workers are from third countries,
              they must first obtain a work permit and visa before entering
              Europe. The entire process can take anywhere from 45 to 90 days,
              depending on the speed of the involved institutions (CES, MUP, and
              MFA). Document preparation and negotiations typically take 4 to 10
              days, depending on the employer’s readiness. Recruitment and
              candidate selection can range from 1 to 30 days (up to 7 days for
              low-skilled workers, up to 30 days for skilled workers), or longer
              if specific professions are required (up to 60 days). The labor
              market test (for professions with no shortage) typically lasts 15
              days. Obtaining a work permit usually takes between 15 to 30 days,
              depending on the police station. Visa processing takes an
              additional 15 to 30 days, depending on the embassy. Organizing
              travel and the worker’s arrival in Europe generally takes 1 to 10
              days.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
