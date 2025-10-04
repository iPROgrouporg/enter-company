import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaTelegram,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-[#0e0e0e] text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <img
              src="./images/Logo.svg"
              alt="Logo"
              className="h-15 w-15 object-contain"
            />
            <span className="text-xl font-bold text-white">ENTER MCHJ</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            ENTER MCHJ – ishlab chiqarish va savdo sohasida faoliyat yurituvchi
            zamonaviy korxona.
          </p>
        </div>

        <div className="text-center md:text-left">
          <h4 className="text-white font-semibold mb-4">Navigatsiya</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="hover:text-white transition-colors duration-300"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Bosh Sahifa
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-white transition-colors duration-300"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Biz haqimizda
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-white transition-colors duration-300"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Mahsulotlar
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h4 className="text-white font-semibold mb-4">Kontakt</h4>
          <div className="space-y-2">
            <p className="text-sm flex justify-center md:justify-start items-center gap-2">
              <IoLocationOutline className="text-amber-500" /> Toshkent,
              O‘zbekiston
            </p>
            <p className="text-sm flex justify-center md:justify-start items-center gap-2">
              <FaPhoneAlt className="text-amber-500" /> +998 90 123 45 67
            </p>
            <p className="text-sm flex justify-center md:justify-start items-center gap-2">
              <CiMail className="text-amber-500" /> info@entermchj.uz
            </p>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h4 className="text-white font-semibold mb-4">Bizni kuzating</h4>
          <div className="flex justify-center md:justify-start gap-5">
            <a
              href="https://facebook.com"
              className="hover:text-amber-500 transition-colors"
              target="_blank"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://instagram.com"
              className="hover:text-amber-500 transition-colors"
              target="_blank"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://t.me"
              className="hover:text-amber-500 transition-colors"
              target="_blank"
            >
              <FaTelegram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 text-center text-sm text-white border-t border-gray-700">
        © {new Date().getFullYear()} ENTER MCHJ. Barcha huquqlar himoyalangan. |{" "}
        <span>
          <a
            href="https://Iprogroup.org"
            target="_blank"
            className="text-amber-500 hover:underline"
          >
            IPRO GROUP SUPPORT
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
