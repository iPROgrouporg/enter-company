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
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="./images/Logo.svg"
              alt="Logo"
              className="h-15 w-15 object-contain"
            />
            <span className="text-xl font-bold text-white">ENTER MCHJ</span>
          </div>
          <p className="text-sm text-gray-400">
            ENTER MCHJ – ishlab chiqarish va savdo sohasida faoliyat yurituvchi
            zamonaviy korxona.
          </p>
        </div>

        <div>
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

        <div>
          <h4 className="text-white font-semibold mb-4">Kontakt</h4>
          <p className="text-sm flex items-center gap-1">
            <IoLocationOutline /> Toshkent, O‘zbekiston
          </p>
          <p className="text-sm flex items-center gap-1">
            <FaPhoneAlt /> +998 90 123 45 67
          </p>
          <p className="text-sm flex items-center gap-1">
            <CiMail /> info@entermchj.uz
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Bizni kuzating</h4>
          <div className="flex gap-4">
            <a href="https://facebook.com" className=" transition">
              <FaFacebook size={20} />
            </a>
            <a href="https://instagram.com" className=" transition">
              <FaInstagram size={20} />
            </a>
            <a href="https://t.me" className=" transition">
              <FaTelegram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className=" mt-10 pt-6 text-center text-sm text-white">
        © {new Date().getFullYear()} ENTER MCHJ. Barcha huquqlar himoyalangan. |{" "}
        <span>
          <a href="https://Iprogroup.org" target="_blank">
            IPRO GROUP SUPPORT
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
