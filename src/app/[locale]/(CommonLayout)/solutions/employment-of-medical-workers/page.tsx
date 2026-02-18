import Challenges from "@/components/pages/solutions/employment-of-medical-workers/Challenges";
import EmploymentMediation from "@/components/pages/solutions/employment-of-medical-workers/EmploymentMediation";
import Features from "@/components/pages/solutions/employment-of-medical-workers/Features";
import Hero from "@/components/pages/solutions/employment-of-medical-workers/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MigrateCloud | Employment of medical workers",
};

const EmploymentOfMedicalWorkersPage = () => {
  return (
    <main>
      <Hero />
      <Challenges />
      <EmploymentMediation />
      <Features />
    </main>
  );
};

export default EmploymentOfMedicalWorkersPage;
