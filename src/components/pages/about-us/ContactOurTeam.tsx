import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaHandshakeSimple } from "react-icons/fa6";

const ContactOurTeam = () => {
  const t = useTranslations("about.contactourteam");
  return (
    <section className="bg-gradient-310deg py-20">
      <div className="container flex max-w-[1200px] flex-col items-center justify-between gap-44 rounded-xl p-10 shadow-2xl lg:flex-row">
        <div className="flex flex-col items-center justify-center space-y-3 lg:items-start">
          <h2 className="text-center text-4xl font-bold text-white lg:text-left">
            {t("title")}
          </h2>
          <p className="text-center text-white lg:text-left">
            <span>{t("desc1")}</span>
            <br /> {t("desc2")}
          </p>
          <div>
            <Link href="/contact">
              <Button className="border">{t("btn")}</Button>
            </Link>
          </div>
        </div>
        <div>
          <div className="inline-flex size-[200px] items-center justify-center rounded-full border bg-secondary">
            <FaHandshakeSimple className="text-8xl text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactOurTeam;
