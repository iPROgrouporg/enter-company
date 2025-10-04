import { useState } from "react";
import { IoChevronBack, IoChevronForward, IoStarSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Home = () => {
  const [current, setCurrent] = useState(0);

  const products = [
    {
      id: 1,
      title: "Trendy House Plant",
      desc: "Calathea plant",
      img: "./images/Image2.png",
    },
    {
      id: 2,
      title: "Modern Green Plant",
      desc: "Ficus plant",
      img: "./images/Image1.png",
    },
    {
      id: 3,
      title: "Tropical Leaf Plant",
      desc: "Monstera plant",
      img: "./images/Image2.png",
    },
  ];

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  return (
    <>
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6">
          <div className="flex-1 space-y-10">
            <div className="space-y-6">
              <h1 className="text-5xl font-extrabold text-white leading-tight">
                ENTER MCHJ
              </h1>
              <p className="text-gray-300 text-lg max-w-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti cum ut obcaecati est fuga facilis reiciendis illo totam
                ad! Alias.
              </p>
              <div className="flex items-center gap-6">
                <button className="bg-none text-white px-8 py-3 rounded-lg border border-white transition text-lg font-medium">
                  Explore
                </button>
                <div className="flex items-center gap-3 cursor-pointer">
                  <img
                    src="./images/Image1.png"
                    alt="Demo"
                    className="w-12 h-12 rounded-full border border-gray-300 object-cover"
                  />
                  <span className="text-white font-medium text-lg">
                    Live Demo...
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl max-w-md transition">
              <div className="flex gap-3 items-center mb-3">
                <img
                  src="./images/Image2.png"
                  className="w-12 h-12 rounded-full border border-white object-cover"
                  alt=""
                />
                <h1 className="text-lg font-semibold text-white">
                  Alina Patel
                </h1>
              </div>
              <div className="flex text-yellow-400 text-xl mb-3">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </div>
              <p className="text-white leading-relaxed text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                dolore voluptatibus reprehenderit dolores itaque cumque saepe
                inventore debitis dignissimos. Veritatis quas dolore ut qui
                non...
              </p>
            </div>
          </div>

          <div className="w-full md:w-[400px] flex flex-col items-center">
            <div className="relative w-full rounded-2xl shadow-2xl p-5 flex flex-col items-center bg-white/10 backdrop-blur-xl border border-white/20 transition">
              <>
                <img
                  src={products[current].img}
                  alt={products[current].title}
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="mt-6 space-y-3 text-center">
                  <h2 className="text-2xl font-bold text-white">
                    {products[current].title}
                  </h2>
                  <p className="text-gray-50">{products[current].desc}</p>
                  <Link
                    to="/products"
                    className="border border-white/20 text-white cursor-pointer px-6 py-2 rounded-lg font-medium"
                  >
                    Barcha Mahsulotlar
                  </Link>
                </div>
              </>
            </div>

            <div className="flex gap-6 mt-6">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full cursor-pointer text-white border border-white/20"
              >
                <IoChevronBack size={24} />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full cursor-pointer text-white border border-white/20"
              >
                <IoChevronForward size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Our Trendy Plants
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              excepturi vero, vel qui unde voluptates!
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center rounded-2xl shadow-lg overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20">
            <div className="md:w-1/2 w-full">
              <img
                src="./images/Image2.png"
                alt="Plant"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="md:w-1/2 w-full p-8 text-center md:text-left space-y-4">
              <h3 className="text-2xl font-bold text-white">
                For Small Desk Ai Plant
              </h3>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis rerum, neque cum quo magni tempora.
              </p>
              <button className="cursor-pointer text-white px-6 py-3 rounded-lg border border-white/20 transition">
                Barcha Mahsulotlar
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center rounded-2xl shadow-lg overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20">
            <div className="md:w-1/2 w-full p-8 text-center md:text-left space-y-4 order-2 md:order-1">
              <h3 className="text-2xl font-bold text-white">
                For Small Desk Ai Plant
              </h3>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nostrum, earum possimus asperiores sequi aliquid nobis.
              </p>
              <button className=" cursor-pointer text-white px-6 py-3 rounded-lg border border-white/20 transition">
                Barcha Mahsulotlar
              </button>
            </div>
            <div className="md:w-1/2 w-full order-1 md:order-2">
              <img
                src="./images/Image2.png"
                alt="Plant"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Our Top Selling
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Check out our most popular plants that customers love the most.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <img
                src="./images/Image2.png"
                alt="Plant"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center space-y-3">
                <h3 className="text-xl font-bold text-white">Cal 874 plant</h3>
                <p className="text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias, laudantium?
                </p>
                <div className="flex justify-between items-center mt-10">
                  <div>
                    <button className="mt-3 text-white cursor-pointer px-8 py-2 rounded-lg border border-white/20 transition">
                      Buy Now
                    </button>
                  </div>
                  <span className="text-white font-bold text-xl">$25</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <img
                src="./images/Image2.png"
                alt="Plant"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center space-y-3">
                <h3 className="text-xl font-bold text-white">Cal 874 plant</h3>
                <p className="text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias, laudantium?
                </p>
                <div className="flex justify-between items-center mt-10">
                  <div>
                    <button className="mt-3 text-white cursor-pointer px-8 py-2 rounded-lg border border-white/20 transition">
                      Buy Now
                    </button>
                  </div>
                  <span className="text-white font-bold text-xl">$25</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <img
                src="./images/Image2.png"
                alt="Plant"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center space-y-3">
                <h3 className="text-xl font-bold text-white">Cal 874 plant</h3>
                <p className="text-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias, laudantium?
                </p>
                <div className="flex justify-between items-center mt-10">
                  <div>
                    <button className="mt-3 text-white cursor-pointer px-8 py-2 rounded-lg border border-white/20 transition">
                      Buy Now
                    </button>
                  </div>
                  <span className="text-white font-bold text-xl">$25</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Hear from our happy customers who love our plants 🌿
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg p-6 space-y-4 hover:shadow-2xl transition">
              <div className="flex items-center gap-4">
                <img
                  src="./images/Image2.png"
                  alt="Customer"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold text-white">Maln Josi</h3>
                  <p className="text-sm text-white">Plant Enthusiast</p>
                </div>
              </div>
              <div className="flex text-yellow-400 text-lg">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </div>
              <p className="text-white">
                “Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
                dolorum molestias dolorem porro hic velit excepturi repellendus
                ipsa praesentium eum.”
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg p-6 space-y-4 hover:shadow-2xl transition">
              <div className="flex items-center gap-4">
                <img
                  src="./images/Image2.png"
                  alt="Customer"
                  className="w-14 h-14 rounded-full object-cover "
                />
                <div>
                  <h3 className="text-lg font-bold text-white">Maln Josi</h3>
                  <p className="text-sm text-white">Plant Enthusiast</p>
                </div>
              </div>
              <div className="flex text-yellow-400 text-lg">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </div>
              <p className="text-white">
                “Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
                dolorum molestias dolorem porro hic velit excepturi repellendus
                ipsa praesentium eum.”
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg p-6 space-y-4 hover:shadow-2xl transition">
              <div className="flex items-center gap-4">
                <img
                  src="./images/Image2.png"
                  alt="Customer"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold text-white">Maln Josi</h3>
                  <p className="text-sm text-white">Plant Enthusiast</p>
                </div>
              </div>
              <div className="flex text-yellow-400 text-lg">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </div>
              <p className="text-white">
                “Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
                dolorum molestias dolorem porro hic velit excepturi repellendus
                ipsa praesentium eum.”
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
