import AssignmentOfWorkers from "@/components/pages/solutions/employment-of-seasonal-workers/AssignmentOfWorkers";
import Challenges from "@/components/pages/solutions/employment-of-seasonal-workers/Challenges";
import Features from "@/components/pages/solutions/employment-of-seasonal-workers/Features";
import Hero from "@/components/pages/solutions/employment-of-seasonal-workers/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MigrateCloud | Employment of seasonal workers",
};

const EmploymentOfSeasonalWorkersPage = () => {
  return (
    <main>
      <Hero />
      <Challenges />
      <AssignmentOfWorkers />
      <Features />
    </main>
  );
};

export default EmploymentOfSeasonalWorkersPage;
