import FAQ from "@/components/pages/services/full-service-hr/FAQ";
import Features from "@/components/pages/services/full-service-hr/Features";
import Hero from "@/components/pages/services/full-service-hr/Hero";
import Mean from "@/components/pages/services/full-service-hr/Mean";
import WhenToChoose from "@/components/pages/services/full-service-hr/WhenToChoose";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MigrateCloud | Full Service HR",
};

const FullServiceHr = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Mean />
      <WhenToChoose />
      <FAQ />
    </main>
  );
};

export default FullServiceHr;
