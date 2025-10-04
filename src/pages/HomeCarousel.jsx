import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProductCarousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else if (window.innerWidth < 1280) setVisibleCards(3);
      else setVisibleCards(4);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const nextSlide = () => {
    if (currentIndex < products.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(products.length - visibleCards);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="w-full py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col space-y-6 mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-500 leading-tight">
            ENTER MCHJ
          </h1>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute cursor-pointer left-2 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 sm:px-3 sm:py-2 rounded-full z-10"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 sm:px-3 sm:py-2 rounded-full z-10"
          >
            <FaChevronRight />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleCards)
                }%)`,
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 p-3 sm:p-4"
                >
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                    <ImageCarousel images={product.image} />
                    <div className="p-4 space-y-2">
                      <h2 className="text-lg sm:text-xl font-bold text-amber-400">
                        {product.title}
                      </h2>
                      <p className="text-gray-300 text-sm line-clamp-3">
                        {product.desc}
                      </p>
                      <p className="text-sm text-gray-400">
                        Artikul: {product.artikul}
                      </p>
                      <p className="text-sm text-gray-400">
                        {product.razmer} | {product.upakovka}
                      </p>
                      <span className="inline-block text-xs px-3 py-1 bg-amber-500 text-black rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ImageCarousel = ({ images }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const nextImg = () => {
    setImgIndex((prev) => (prev + 1) % images.length);
  };

  const prevImg = () => {
    setImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-40 sm:h-48 bg-black">
      <img
        src={images[imgIndex]}
        alt=""
        className="w-full h-full object-cover"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prevImg}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800/70 text-white px-2 py-1 rounded-full cursor-pointer"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextImg}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800/70 text-white px-2 py-1 rounded-full cursor-pointer"
          >
            <FaChevronRight />
          </button>
        </>
      )}
    </div>
  );
};

export default ProductCarousel;
