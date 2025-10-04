import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-[#0e0e0e] sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            className="h-12 w-12 rounded-full"
            src="./images/Logo.svg"
            alt="Logo"
          />
          <span className="text-xl font-bold text-amber-500">ENTER MCHJ</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          <li>
            <Link
              to="/"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                closeMenu();
              }}
              className="transition-colors duration-300 hover:text-amber-500"
            >
              Bosh Sahifa
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                closeMenu();
              }}
              className="transition-colors duration-300 hover:text-amber-500"
            >
              Biz haqimizda
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                closeMenu();
              }}
              className="transition-colors duration-300 hover:text-amber-500"
            >
              Mahsulotlar
            </Link>
          </li>
        </ul>

        {/* Til tanlash (desktopda) */}
        <div className="hidden md:block">
          <select
            name="lang"
            id="lang"
            className="border bg-[#0e0e0e] appearance-none text-white border-white/20 rounded-md px-3 py-1 cursor-pointer focus:outline-none"
          >
            <option value="uz" className="bg-[#0e0e0e] text-white">
              UZ
            </option>
            <option value="ru" className="bg-[#0e0e0e] text-white">
              RU
            </option>
          </select>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-white text-3xl md:hidden focus:outline-none"
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-[#0e0e0e] text-white font-medium flex flex-col items-center gap-6 py-6 transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            closeMenu();
          }}
          className="hover:text-amber-500 transition-colors"
        >
          Bosh Sahifa
        </Link>
        <Link
          to="/about"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            closeMenu();
          }}
          className="hover:text-amber-500 transition-colors"
        >
          Biz haqimizda
        </Link>
        <Link
          to="/products"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            closeMenu();
          }}
          className="hover:text-amber-500 transition-colors"
        >
          Mahsulotlar
        </Link>

        {/* Mobile Til Tanlash */}
        <select
          name="lang"
          id="lang"
          className="border bg-[#0e0e0e] appearance-none text-white border-white/20 rounded-md px-3 py-1 cursor-pointer focus:outline-none"
        >
          <option value="uz" className="bg-[#0e0e0e] text-white">
            UZ
          </option>
          <option value="ru" className="bg-[#0e0e0e] text-white">
            RU
          </option>
        </select>
      </div>
    </header>
  );
};

export default Header;
