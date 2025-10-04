import { useEffect, useState } from "react";
import { IoStarSharp, IoSearchOutline } from "react-icons/io5";
import Productlar from "../data/data.json";

const Products = () => {
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Servers",
    "Networking",
    "Storage",
    "Computers",
    "Power",
    "Components",
  ];

  useEffect(() => {
    let result =
      category === "All"
        ? Productlar
        : Productlar.filter(
            (item) => item.category.toLowerCase() === category.toLowerCase()
          );

    if (search.trim() !== "") {
      result = result.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(result);
  }, [category, search]);

  return (
    <section className="min-h-screen bg-gradient-to-b py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Our Top Selling Plants
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Discover our best indoor and outdoor plants that bring natural beauty
          and clean air to your home.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-5 cursor-pointer py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                category === cat
                  ? "bg-green-600 text-white shadow-md scale-105"
                  : "bg-white/10 backdrop-blur-md text-gray-200 hover:bg-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-64">
          <IoSearchOutline
            size={20}
            className="absolute left-4 top-3.5 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 flex flex-col items-center text-center"
            >
              <div className="w-full h-56 overflow-hidden rounded-xl mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-xl transform group-hover:scale-110 transition-all duration-500"
                />
              </div>

              <h2 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h2>
              <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                {item.desc}
              </p>

              <div className="flex justify-center mb-3 text-yellow-400">
                {[...Array(item.rating)].map((_, i) => (
                  <IoStarSharp key={i} />
                ))}
              </div>

              <div className="flex items-center justify-between w-full mt-auto">
                <p className="text-green-400 font-semibold text-lg">
                  ${item.price}
                </p>
                <button className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-md transition-all duration-300 hover:scale-105">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400 text-center text-lg">
          Qidiruvda hech qanday mahsulot topilmadi.
        </p>
      )}
    </section>
  );
};

export default Products;
