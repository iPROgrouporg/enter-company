import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import { FaInstagram, FaPhone, FaTelegram } from "react-icons/fa";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";
import { useState } from "react";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="bg-[rgb(25,33,22)] container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
      <div className="fixed bottom-10 right-10 z-50 flex flex-col items-center">
        <div
          className={`flex flex-col items-center gap-3 mb-3 transition-all duration-300 ${
            toggle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"
          }`}
        >
          <a
            href="tel:+998901234567"
            target="_blank"
            className="p-3 rounded-full bg-gradient-to-br from-green-400 to-green-700 text-white shadow-md hover:scale-110 transition-transform duration-200"
          >
            <FaPhone size={20} />
          </a>

          <a
            href="https://t.me"
            target="_blank"
            className="p-3 rounded-full bg-gradient-to-br from-sky-400 to-blue-700 text-white shadow-md hover:scale-110 transition-transform duration-200"
          >
            <FaTelegram size={20} />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            className="p-3 rounded-full bg-gradient-to-br from-pink-500 to-purple-700 text-white shadow-md hover:scale-110 transition-transform duration-200"
          >
            <FaInstagram size={20} />
          </a>
        </div>

        <button
          onClick={handleToggle}
          className={`p-3 rounded-full text-white transition-all duration-300 shadow-lg 
          backdrop-blur-md border border-white/20 
          ${toggle ? "bg-green-600" : "bg-white/20"}
          `}
        >
          {
            toggle ? <IoChevronDown size={20} className="text-white cursor-pointer" /> : <IoChevronUp size={20} className="text-white cursor-pointer" />
          }
        </button>
      </div>
    </div>
  );
};

export default App;
