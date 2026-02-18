import Challenges from "@/components/pages/solutions/employment-of-construction-workers/Challenges";
import EmploymentMediation from "@/components/pages/solutions/employment-of-construction-workers/EmploymentMediation";
import Features from "@/components/pages/solutions/employment-of-construction-workers/Features";
import Hero from "@/components/pages/solutions/employment-of-construction-workers/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MigrateCloud | Employment of construction workers",
};

const EmploymentOfConstructionWorkersPage = () => {
  return (
    <main>
      <Hero />
      <Challenges />
      <EmploymentMediation />
      <Features />
    </main>
  );
};

export default EmploymentOfConstructionWorkersPage;
