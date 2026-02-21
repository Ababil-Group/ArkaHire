import FAQ from "@/components/pages/homepage/FAQ";
import TypeOfEmployees from "@/components/pages/homepage/TypeOfEmployees";
import ProcessSteps from "@/components/pages/how-to-hire-international-talent/ProcessSteps";
import TheProcess from "@/components/pages/how-to-hire-international-talent/TheProcess";




const HowToHireInternationalTalentPage = () => {
  return (
    <main>
      <TheProcess />
      <ProcessSteps />
      <TypeOfEmployees />
      <FAQ />
    </main>
  );
};

export default HowToHireInternationalTalentPage;
