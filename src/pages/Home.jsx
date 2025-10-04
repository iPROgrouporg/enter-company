import {  IoStarSharp } from "react-icons/io5";
import HomeTopSelling from "./HomeTopSelling";
import Products from "../data/data.json"
import HomeCarousel from "./HomeCarousel"

const Home = () => {

  

  return (
    <>
      <HomeCarousel products={Products} />
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Bizning Mashhur Mahsulotlarimiz
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              ENTER MCHJ — sifatli himoya vositalari va bog‘-qurilish uchun
              qulay mahsulotlar ishlab chiqaruvchi ishonchli hamkor.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center rounded-2xl shadow-lg overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20">
            <div className="md:w-1/2 w-full">
              <img
                src="./images/perchatki.jpg"
                alt="Qo‘lqop"
                className="w-full h-80"
              />
            </div>
            <div className="md:w-1/2 w-full p-8 text-center md:text-left space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Bog‘ Ishlari Uchun Qulay Qo‘lqoplar
              </h3>
              <p className="text-white">
                Sirpanmas qoplamali, havo o‘tkazuvchi matodan tayyorlangan
                qo‘lqoplar qo‘llarni ifloslanish va jarohatlardan himoya qiladi.
                Har xil o‘lcham va ranglarda mavjud.
              </p>
              <button className="cursor-pointer text-white px-6 py-3 rounded-lg border border-white/20 transition hover:bg-white/20">
                Barcha Mahsulotlar
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center rounded-2xl shadow-lg overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20">
            <div className="md:w-1/2 w-full p-8 text-center md:text-left space-y-4 order-2 md:order-1">
              <h3 className="text-2xl font-bold text-white">
                Qulay va mustahkam Plastmassa Kuraklar
              </h3>
              <p className="text-white">
                ENTER MCHJ tomonidan ishlab chiqarilgan plastmassa kuraklar —
                yengil, bardoshli va zanglamaydi. Qor tozalash, chiqindi yig‘ish
                yoki bog‘ ishlarida ishlatish uchun juda qulay. Sovuq haroratda
                ham shaklini yo‘qotmaydi va uzoq muddat xizmat qiladi.
              </p>
              <button className="cursor-pointer text-white px-6 py-3 rounded-lg border border-white/20 transition hover:bg-white/20">
                Barcha Mahsulotlar
              </button>
            </div>
            <div className="md:w-1/2 w-full order-1 md:order-2">
              <img
                src="./images/plastmassa_kurak.jpg"
                alt="Metall Kurak"
                className="w-full h-80"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center rounded-2xl shadow-lg overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20">
            <div className="md:w-1/2 w-full">
              <img
                src="./images/meva_pichoq.jpg"
                alt="Pichoqlar"
                className="w-full h-80 "
              />
            </div>
            <div className="md:w-1/2 w-full p-8 text-center md:text-left space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Sifatli va Ishonchli Pichoqlar
              </h3>
              <p className="text-white">
                ENTER MCHJ sizga yuqori sifatli pichoqlarni taqdim etadi. Har
                xil o‘lcham va maqsadlar uchun mo‘ljallangan — bog‘ ishlari,
                uy-ro‘zg‘or ehtiyojlari yoki ishlab chiqarish jarayonlarida
                foydalanish uchun qulay. Pichoqlar zanglamaydigan po‘latdan
                tayyorlanib, uzoq muddat o'tkirligini saqlaydi.
              </p>
              <button className="cursor-pointer text-white px-6 py-3 rounded-lg border border-white/20 transition hover:bg-white/20">
                Barcha Mahsulotlar
              </button>
            </div>
          </div>
        </div>
      </section>
      <HomeTopSelling />
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Mijozlarimiz Fikrlari
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              ENTER MCHJ mahsulotlaridan foydalangan mijozlarimizning samimiy
              fikrlarini o‘qing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1 - Fikr */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg p-6 space-y-4 hover:shadow-2xl transition">
              <div className="flex items-center gap-4">
                <img
                  src="./images/slide-2.png"
                  alt="Customer"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Jasur Karimov
                  </h3>
                  <p className="text-sm text-white">Quruvchi</p>
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
                “ENTER MCHJ dan olgan qo‘lqoplar juda sifatli va qulay.
                Issiqlikda ham, sovuqda ham ishlatishga qulay. Har bir mahsulot
                o‘z narxiga arziydi!”
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg p-6 space-y-4 hover:shadow-2xl transition">
              <div className="flex items-center gap-4">
                <img
                  src="./images/slide-2.png"
                  alt="Customer"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Dilnoza Yusupova
                  </h3>
                  <p className="text-sm text-white">Bog‘bon</p>
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
                “Bog‘ ishlari uchun qo‘lqoplar va asboblar juda zo‘r! Qulay,
                bardoshli va qo‘llarni himoya qiladi. Shunchaki tavsiya
                qilaman!”
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg p-6 space-y-4 hover:shadow-2xl transition">
              <div className="flex items-center gap-4">
                <img
                  src="./images/slide-2.png"
                  alt="Customer"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Olim Rahmatov
                  </h3>
                  <p className="text-sm text-white">Do‘kon egasi</p>
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
                “ENTER mahsulotlarini do‘konimda sotaman. Xaridorlar doim
                mamnun, sifati juda yaxshi. Yetkazib berish ham tez va
                ishonchli.”
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
