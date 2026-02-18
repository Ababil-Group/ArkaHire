import Benefits from "@/components/pages/services/employment-mediation/Benefits";
import CommonFAQ from "@/components/pages/services/employment-mediation/CommonFAQ";
import FAQ from "@/components/pages/services/employment-mediation/FAQ";
import Features from "@/components/pages/services/employment-mediation/Features";
import Hero from "@/components/pages/services/employment-mediation/Hero";
import Process from "@/components/pages/services/employment-mediation/Process";
import What from "@/components/pages/services/employment-mediation/What";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MigrateCloud | Employment Mediation",
};

const EmploymentMediation = () => {
  return (
    <main>
      <Hero />
      <Features />
      <What />
      <CommonFAQ />
      <Benefits />
      <Process />
      <FAQ />
    </main>
  );
};

export default EmploymentMediation;
