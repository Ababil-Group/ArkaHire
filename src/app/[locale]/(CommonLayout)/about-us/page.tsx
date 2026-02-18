import ContactOurTeam from "@/components/pages/about-us/ContactOurTeam";
import HireAForeigner from "@/components/pages/about-us/HireAForeigner";
import WhatDoWeOffer from "@/components/pages/about-us/WhatDoWeOffer";
import WhoWeAre from "@/components/pages/about-us/WhoWeAre";
import WhyChoose from "@/components/pages/about-us/WhyChoose";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MigrateCloud | About Us",
};

const AboutUsPage = () => {
  return (
    <main>
      <HireAForeigner />
      <WhoWeAre />
      <WhyChoose />
      <WhatDoWeOffer />
      <ContactOurTeam />
    </main>
  );
};

export default AboutUsPage;
