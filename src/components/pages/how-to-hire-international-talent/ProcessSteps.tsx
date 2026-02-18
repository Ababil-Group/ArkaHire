import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import { useTranslations } from "next-intl";

const ProcessSteps = () => {
  const t = useTranslations("wowtohire");
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-center text-4xl font-bold">{t("title")}</h2>
        <p className="mb-12 mt-5 text-center">{t("desc")}</p>

        <div className="flex flex-wrap items-center justify-center gap-10">
          {/* card  */}
          <FadeInLeftWithSlowBounce className="col-span-1 min-h-[350px] w-[280px] space-y-2 rounded-3xl border p-10 text-center shadow-xl">
            <h2 className="text-7xl font-extrabold text-primary">{t("no1")}</h2>
            <h3 className="text-2xl font-bold">{t("cardTitle1")}</h3>
            <p>{t("cardDesc1")}</p>
          </FadeInLeftWithSlowBounce>
          {/* card  */}
          <FadeInLeftWithSlowBounce className="col-span-1 min-h-[350px] w-[280px] space-y-2 rounded-3xl border p-10 text-center shadow-xl">
            <h2 className="text-7xl font-extrabold text-primary">{t("no2")}</h2>
            <h3 className="text-2xl font-bold">{t("cardTitle2")}</h3>
            <p>{t("cardDesc2")}</p>
          </FadeInLeftWithSlowBounce>
          {/* card  */}
          <FadeInRightWithSlowBounce className="col-span-1 min-h-[350px] w-[280px] space-y-2 rounded-3xl border p-10 text-center shadow-xl">
            <h2 className="text-7xl font-extrabold text-primary">{t("no3")}</h2>
            <h3 className="text-2xl font-bold">{t("cardTitle3")}</h3>
            <p>{t("cardDesc3")}</p>
          </FadeInRightWithSlowBounce>
          {/* card  */}
          <FadeInRightWithSlowBounce className="col-span-1 min-h-[350px] w-[280px] space-y-2 rounded-3xl border p-10 text-center shadow-xl">
            <h2 className="text-7xl font-extrabold text-primary">{t("no4")}</h2>
            <h3 className="text-2xl font-bold">{t("cardTitle4")}</h3>
            <p>{t("cardDesc4")}</p>
          </FadeInRightWithSlowBounce>
          {/* card  */}
          <FadeInLeftWithSlowBounce className="col-span-1 min-h-[350px] w-[280px] space-y-2 rounded-3xl border p-10 text-center shadow-xl">
            <h2 className="text-7xl font-extrabold text-primary">{t("no5")}</h2>
            <h3 className="text-2xl font-bold">Visas</h3>
            <p>{t("cardDesc5")}</p>
          </FadeInLeftWithSlowBounce>
          {/* card  */}
          <FadeInLeftWithSlowBounce className="col-span-1 min-h-[350px] w-[280px] space-y-2 rounded-3xl border p-10 text-center shadow-xl">
            <h2 className="text-7xl font-extrabold text-primary">{t("no6")}</h2>
            <h3 className="text-2xl font-bold">{t("cardTitle6")}</h3>
            <p>{t("cardDesc6")}</p>
          </FadeInLeftWithSlowBounce>
          {/* card  */}
          <FadeInRightWithSlowBounce className="col-span-1 min-h-[350px] w-[280px] space-y-2 rounded-3xl border p-10 text-center shadow-xl">
            <h2 className="text-7xl font-extrabold text-primary">{t("no7")}</h2>
            <h3 className="text-2xl font-bold">{t("cardTitle7")}</h3>
            <p>{t("cardDesc7")}</p>
          </FadeInRightWithSlowBounce>
          {/* card  */}
          <FadeInRightWithSlowBounce className="col-span-1 min-h-[350px] w-[280px] space-y-2 rounded-3xl border p-10 text-center shadow-xl">
            <h2 className="text-7xl font-extrabold text-primary">{t("no8")}</h2>
            <h3 className="text-2xl font-bold">{t("cardTitle8")}</h3>
            <p>{t("cardDesc8")}</p>
          </FadeInRightWithSlowBounce>
          {/* card  */}
        </div>
      </div>
    </section>
    // <section className="py-20">
    //   <div className="container">
    //     <div className="flex flex-wrap items-center justify-center gap-10">
    //       {/* card  */}
    //       <div className="col-span-1 min-h-[350px] w-[280px] space-y-2 rounded-3xl border p-10 text-center shadow-xl">
    //         <h2 className="text-7xl font-extrabold text-primary">01</h2>
    //         <h3 className="text-2xl font-bold">Workforce Sourcing</h3>
    //         <p>
    //           We find candidates tailored to your needs. Online interviews are
    //           available.
    //         </p>
    //       </div>
    //       {/* card  */}
    //       <div className="col-span-1 min-h-[350px] w-[280px] space-y-2 rounded-3xl border p-10 text-center shadow-xl">
    //         <h2 className="text-7xl font-extrabold text-primary">02</h2>
    //         <h3 className="text-2xl font-bold">Contracts</h3>
    //         <p>We draft and manage employment contracts.</p>
    //       </div>
    //       {/* card  */}
    //       <div className="col-span-1 min-h-[350px] w-[280px] space-y-2 rounded-3xl border p-10 text-center shadow-xl">
    //         <h2 className="text-7xl font-extrabold text-primary">03</h2>
    //         <h3 className="text-2xl font-bold">Accommodation</h3>
    //         <p>We assist in finding suitable housing for workers.</p>
    //       </div>
    //       {/* card  */}
    //       <div className="col-span-1 min-h-[350px] w-[280px] space-y-2 rounded-3xl border p-10 text-center shadow-xl">
    //         <h2 className="text-7xl font-extrabold text-primary">04</h2>
    //         <h3 className="text-2xl font-bold">Work Permits</h3>
    //         <p>We handle the submission of work permit applications.</p>
    //       </div>
    //       {/* card  */}
    //       <div className="col-span-1 min-h-[350px] w-[280px] space-y-2 rounded-3xl border p-10 text-center shadow-xl">
    //         <h2 className="text-7xl font-extrabold text-primary">05</h2>
    //         <h3 className="text-2xl font-bold">Visas</h3>
    //         <p>We manage visa applications, which typically take 4-6 weeks.</p>
    //       </div>
    //       {/* card  */}
    //       <div className="col-span-1 min-h-[350px] w-[280px] space-y-2 rounded-3xl border p-10 text-center shadow-xl">
    //         <h2 className="text-7xl font-extrabold text-primary">06</h2>
    //         <h3 className="text-2xl font-bold">Travel Arrangements</h3>
    //         <p>We book flights and ensure workers arrive safely.</p>
    //       </div>
    //       {/* card  */}
    //       <div className="col-span-1 min-h-[350px] w-[280px] space-y-2 rounded-3xl border p-10 text-center shadow-xl">
    //         <h2 className="text-7xl font-extrabold text-primary">07</h2>
    //         <h3 className="text-2xl font-bold">Documentation</h3>
    //         <p>
    //           We assist with ID cards, medical exams, and bank account setup.
    //         </p>
    //       </div>
    //       {/* card  */}
    //       <div className="col-span-1 min-h-[350px] w-[280px] space-y-2 rounded-3xl border p-10 text-center shadow-xl">
    //         <h2 className="text-7xl font-extrabold text-primary">08</h2>
    //         <h3 className="text-2xl font-bold">Satisfaction</h3>
    //         <p>
    //           Our goal is to ensure both employers and employees are satisfied.
    //         </p>
    //       </div>
    //       {/* card  */}
    //     </div>
    //   </div>
    // </section>
  );
};

export default ProcessSteps;
