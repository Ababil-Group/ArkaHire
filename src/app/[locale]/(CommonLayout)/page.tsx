import Achievements from "@/components/pages/homepage/Achievements";
import BookConsultation from "@/components/pages/homepage/BookConsultation";
import BrandLogos from "@/components/pages/homepage/BrandLogos";
import FAQ from "@/components/pages/homepage/FAQ";
import GetInTouch from "@/components/pages/homepage/GetInTouch";
import Hero from "@/components/pages/homepage/Hero";
import HowToHire from "@/components/pages/homepage/HowToHire";
import TypeOfEmployees from "@/components/pages/homepage/TypeOfEmployees";
import WhyChoose from "@/components/pages/homepage/WhyChoose";
import WhyChooseUs from "@/components/pages/homepage/WhyChooseUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ArkaHire Agency | Hire Foreign Employees in 48 Hours",
};

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Achievements />
      <WhyChoose />
      <BrandLogos />
      <TypeOfEmployees />
      <HowToHire />
      <BookConsultation />
      <WhyChooseUs />
      <FAQ />
      <GetInTouch />
    </main>
  );
};

export default HomePage;
