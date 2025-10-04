import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" bg-[#0e0e0e] sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center gap-2">
          <img
            className="h-15 w-15 rounded-full"
            src="./images/Logo.svg"
            alt="Logo"
          />
          <span className="text-xl font-bold text-amber-500">ENTER MCHJ</span>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          <li>
            <Link to="/" onClick={() => window.scrollTo({top:0,behavior:"smooth"})} className="transition-colors duration-300 hover:text-amber-500">
              Bosh Sahifa
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => window.scrollTo({top:0,behavior:"smooth"})} className="transition-colors duration-300 hover:text-amber-500">
              Biz haqimizda
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={() => window.scrollTo({top:0,behavior:"smooth"})} className=" transition-colors duration-300 hover:text-amber-500">
              Mahsulotlar
            </Link>
          </li>
        </ul>

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
      </nav>
    </header>
  );
};

export default Header;
