import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  IoChevronBackOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";
import Productlar from "../data/data.json";

const HomeTopSelling = () => {
  const [currentIndex, setCurrentIndex] = useState({});

  // Faqat 4ta mahsulotni olamiz
  const topProducts = Productlar.slice(0, 4);

  // Boshlang‘ich indexlarni sozlaymiz
  useEffect(() => {
    const initialIndexes = {};
    topProducts.forEach((item) => (initialIndexes[item.id] = 0));
    setCurrentIndex(initialIndexes);
  }, []);

  const nextImage = (id, total) => {
    setCurrentIndex((prev) => ({
      ...prev,
      [id]: (prev[id] + 1) % total,
    }));
  };

  const prevImage = (id, total) => {
    setCurrentIndex((prev) => ({
      ...prev,
      [id]: (prev[id] - 1 + total) % total,
    }));
  };

  return (
    <section className="w-full py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 sm:mb-4">
            Our Top Selling
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Check out our most popular products that customers love the most.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {topProducts.map((item) => (
            <div
              key={item.id}
              className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center transition-all duration-300 hover:shadow-green-700/30 hover:scale-[1.02]"
            >
              {/* Image */}
              <div className="relative w-full h-44 sm:h-52 md:h-60 overflow-hidden rounded-xl mb-4">
                {Array.isArray(item.image) ? (
                  <img
                    src={item.image[currentIndex[item.id] || 0]}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-xl transition-all duration-500"
                  />
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                )}

                {/* Prev / Next buttons */}
                {Array.isArray(item.image) && item.image.length > 1 && (
                  <>
                    <button
                      onClick={() => prevImage(item.id, item.image.length)}
                      className="absolute top-1/2 -translate-y-1/2 left-2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 sm:p-2 transition"
                    >
                      <IoChevronBackOutline size={18} />
                    </button>
                    <button
                      onClick={() => nextImage(item.id, item.image.length)}
                      className="absolute top-1/2 -translate-y-1/2 right-2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 sm:p-2 transition"
                    >
                      <IoChevronForwardOutline size={18} />
                    </button>

                    {/* Carousel dots */}
                    <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                      {item.image.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full ${
                            currentIndex[item.id] === index
                              ? "bg-green-500"
                              : "bg-gray-400/60"
                          }`}
                        ></div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Title */}
              <h2 className="text-base sm:text-lg font-semibold text-white mb-2">
                {item.title}
              </h2>

              {/* Description */}
              <p className="text-gray-300 text-xs sm:text-sm md:text-sm mb-3 line-clamp-2">
                {item.desc}
              </p>

              {/* Details */}
              <div className="w-full text-left text-gray-400 text-xs sm:text-sm mb-3 space-y-1">
                <p>
                  <span className="text-gray-300 font-medium">Razmer:</span>{" "}
                  {item.razmer}
                </p>
                <p>
                  <span className="text-gray-300 font-medium">Upakovka:</span>{" "}
                  {item.upakovka}
                </p>
                <p>
                  <span className="text-gray-300 font-medium">Artikul:</span>{" "}
                  {item.artikul}
                </p>
              </div>

              {/* Button */}
              <div className="flex justify-center w-full mt-auto">
                <button className="px-4 sm:px-5 py-2 bg-amber-500 cursor-pointer text-white text-sm sm:text-base rounded-full shadow-md transition-all duration-300 hover:scale-105">
                  Batafsil
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Barcha mahsulotlar tugmasi */}
        <div className="text-center mt-10 sm:mt-12">
          <Link
            to="/products"
            className="border border-white/30 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-medium hover:bg-white/20 transition-all"
          >
            Barcha Mahsulotlar
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeTopSelling;
