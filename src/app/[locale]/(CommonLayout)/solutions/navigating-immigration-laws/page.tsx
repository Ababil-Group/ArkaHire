import Challenges from "@/components/pages/solutions/navigating-immigration-laws/Challenges";
import EmploymentAdministration from "@/components/pages/solutions/navigating-immigration-laws/EmploymentAdministration";
import Features from "@/components/pages/solutions/navigating-immigration-laws/Features";
import Hero from "@/components/pages/solutions/navigating-immigration-laws/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MigrateCloud | Navigating Immigration Laws",
};

const NavigatingImmigrationLawsPage = () => {
  return (
    <main>
      <Hero />
      <Challenges />
      <EmploymentAdministration />
      <Features />
    </main>
  );
};

export default NavigatingImmigrationLawsPage;
