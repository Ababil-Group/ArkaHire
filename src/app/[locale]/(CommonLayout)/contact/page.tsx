import FAQ from "@/components/pages/homepage/FAQ";
import GetInTouch from "@/components/pages/homepage/GetInTouch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MigrateCloud | Contact",
};

const ContactPage = () => {
  return (
    <main>
      <GetInTouch />
      <FAQ />
    </main>
  );
};

export default ContactPage;
