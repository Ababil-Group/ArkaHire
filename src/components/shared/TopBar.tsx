import { FaClock } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaPinterest,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const TopBar = () => {
  return (
    <header className="hidden bg-secondary py-2 text-sm text-white lg:block">
      <div className="container flex items-center justify-start gap-5">
        <div className="flex items-center gap-1">
          <div>
            <FaClock />
          </div>
          <p>Pon - Pet: 8 - 16h</p>
        </div>
        <div className="flex items-center gap-1">
          <div>
            <FaEnvelope />
          </div>
          <Link href="mailto:info@arkahire.com">info@arkahire.com</Link>
        </div>

        <div className="ml-auto flex items-center gap-2 text-lg">
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
    </header>
  );
};

export default TopBar;
