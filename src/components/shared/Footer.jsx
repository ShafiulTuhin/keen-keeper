import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import FooterImg from "@/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white">
      <div className="max-w-[1320px] mx-auto px-5 py-8 flex flex-col items-center text-center gap-6">
        {/* Logo */}
        <h2 className="lg:text-5xl text-3xl font-bold">KeenKeeper</h2>

        <p className="text-sm md:text-base max-w-md">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <div className="flex gap-5 text-xl">
          <a href="#" className="hover:text-blue-400 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-blue-300 transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-pink-400 transition">
            <FaInstagram />
          </a>
        </div>

        <div className="w-full border-t border-white/30 pt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
