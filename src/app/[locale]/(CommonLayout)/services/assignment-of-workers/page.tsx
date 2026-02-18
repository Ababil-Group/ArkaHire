import Advantages from "@/components/pages/services/assignment-of-workers/Advantages";
import FAQ from "@/components/pages/services/assignment-of-workers/FAQ";
import Features from "@/components/pages/services/assignment-of-workers/Features";
import Hero from "@/components/pages/services/assignment-of-workers/Hero";
import Include from "@/components/pages/services/assignment-of-workers/Include";
import WhenToConsider from "@/components/pages/services/assignment-of-workers/WhenToConsider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MigrateCloud | Worker Assignment Services",
};

const AssignmentOfWorkers = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Include />
      <WhenToConsider />
      <Advantages />
      <FAQ />
    </main>
  );
};

export default AssignmentOfWorkers;
