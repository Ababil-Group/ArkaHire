import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  return (
    <footer className="mt-auto border-t bg-primary pt-20">
      <div className="container grid grid-cols-1 items-center justify-center gap-28 lg:grid-cols-3">
        <div className="flex items-start justify-center lg:justify-start">
          <Link className="" href="/">
            <Image
              className="h-auto w-[200px]"
              src="/logo.png"
              alt="ArkaHire Logo"
              width={200}
              height={75}
            />
          </Link>
        </div>
        <div className="space-y-3">
          <h4 className="text-center text-xl font-bold text-white">
            {t("title")}
          </h4>
          <p className="text-center text-white">{t("desc")}</p>
        </div>
        <div className="flex justify-center space-x-4 text-white lg:justify-end">
          <Link className="hover:underline" href="/">
            {nav("home")}
          </Link>
          <Link
            className="hover:underline"
            href="/how-to-hire-international-talent"
          >
            {nav("howToHire")}
          </Link>
          <Link className="hover:underline" href="/contact">
            {nav("contact")}
          </Link>
        </div>
      </div>

      <div className="container">
        <hr className="my-7" />
      </div>

      <div className="container flex items-center justify-between pb-7">
        <p className="text-center text-white">
          Copyright &copy; {new Date().getFullYear()} ArkaHire.
        </p>

        <div className="flex items-center justify-end gap-2 text-2xl text-white">
          <Link href="https://www.facebook.com/ArkaHire">
            <FaFacebookSquare />
          </Link>
          <Link href="https://www.instagram.com/arka.hire.b2b/">
            <FaInstagram />
          </Link>
          <Link href="https://x.com/ArkaHire">
            <FaXTwitter />
          </Link>
          <Link href="https://www.linkedin.com/company/arka-hire/">
            <FaLinkedin />
          </Link>
          <Link href="https://www.pinterest.com/arkahireb2b/">
            <FaPinterest />
          </Link>
          <Link href="https://www.youtube.com/channel/UCUBIlFJjRENFb04CYFMQTug">
            <FaYoutube />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
