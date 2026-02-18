import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const GetInTouch = () => {
  const t = useTranslations("contactus");
  return (
    <section className="py-20">
      <div className="container grid max-w-[1100px] grid-cols-1 gap-10 lg:grid-cols-2">
        {/* ==== LEFT SECTION ==== */}
        <FadeInLeftWithSlowBounce className="rounded-3xl bg-[#F3F6F3] p-8">
          <div className="flex h-full flex-col items-start justify-center gap-5">
            <h2 className="text-4xl font-bold">{t("title")}</h2>
            <p className="font-semibold">{t("subtitle")}</p>

            {/* ==== CONTACT DETAILS ==== */}
            <div className="w-full space-y-4">
              {/* Email */}
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-xl text-primary" />
                <p className="font-semibold">info@arkaHire.com</p>
              </div>

              {/* Address list */}
              {[
                {
                  country: "Head Office - UK",
                  address: "Surbiton, United Kingdom, KT6 7TE",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex w-full items-start gap-2 text-[12px]"
                >
                  {/* Left side (icon + country) */}
                  <div className="flex min-w-[120px] items-start gap-2 font-bold">
                    <FaMapMarkerAlt className="shrink-0 text-xl text-primary" />
                    <span>{item.country}:</span>
                  </div>

                  {/* Right side (address) */}
                  <p className="text-[12px] font-semibold leading-snug">
                    {item.address}
                  </p>
                </div>
              ))}
            </div>

            {/* Opening Hours */}
            <p className="pt-2 font-semibold">{t("time")}</p>
          </div>
        </FadeInLeftWithSlowBounce>

        {/* ==== RIGHT SECTION ==== */}
        <FadeInRightWithSlowBounce className="space-y-5">
          <h2 className="text-2xl font-bold">
            Contact Us for Expert Assistance Have Questions? We’re Here to Help!
          </h2>

          <form className="space-y-3" action="">
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
              <Input type="text" placeholder="First name" required />
              <Input type="text" placeholder="Last name" required />
            </div>

            <Input type="text" placeholder="Company name" required />
            <Input type="email" placeholder="Email address" required />
            <Input type="tel" placeholder="Mobile number" required />
            <Textarea placeholder="Enter a message" rows={5} required />

            <div>
              <Button className="bg-secondary">Send inquiry</Button>
            </div>
          </form>
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default GetInTouch;
