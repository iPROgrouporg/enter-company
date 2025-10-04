import {
  IoLeafOutline,
  IoPeopleOutline,
  IoGlobeOutline,
  IoCall,
  IoMail,
  IoLocation,
} from "react-icons/io5";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold text-white mb-6">
          About <span className="text-green-400">ENTER MCHJ</span>
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          ENTER MCHJ — tabiiy o‘simliklar orqali yashil muhit yaratish va
          insonlar hayotiga tinchlik olib kirish maqsadida tashkil etilgan
          korxona. Bizning jamoamiz ekologiyani asrab-avaylash va go‘zal
          o‘simliklarni yetkazib berishga sodiqdir.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
        {[
          {
            icon: <IoLeafOutline size={40} className="text-green-400" />,
            title: "Bizning Missiyamiz",
            text: "Tabiat bilan uyg‘un yashashni targ‘ib qilib, ekologik muvozanatni saqlash va yashil hayot tarzini rivojlantirish.",
          },
          {
            icon: <IoGlobeOutline size={40} className="text-green-400" />,
            title: "Bizning Maqsadimiz",
            text: "O‘zbekiston bo‘ylab sifatli o‘simlik mahsulotlarini yetkazish va mijozlar ishonchini qozonish.",
          },
          {
            icon: <IoPeopleOutline size={40} className="text-green-400" />,
            title: "Bizning Jamoa",
            text: "Bizda har bir sohada tajribali mutaxassislar — bog‘bonlar, dizaynerlar va xizmat ko‘rsatish jamoasi faoliyat yuritadi.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center shadow-lg"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {item.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-4xl font-bold text-white mb-10">
          Mijozlar Fikrlari
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Aziza Qodirova",
              img: "./images/Image2.png",
              text: "ENTER MCHJ dan olingan o‘simliklar sifatli va juda chiroyli! Uyimni butunlay yangilab berdi.",
            },
            {
              name: "Javohir Sobirov",
              img: "./images/Image2.png",
              text: "Buyurtmalar tez yetkaziladi, har bir o‘simlik e’tibor bilan qadoqlangan. Juda mamnunman!",
            },
            {
              name: "Malika Tursunova",
              img: "./images/Image2.png",
              text: "Yashil o‘simliklar orqali shunchaki tinchlik his qildim! ENTER MCHJ — tabiatni uyingizga olib kiradi!",
            },
          ].map((review, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-left shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-12 h-12 rounded-full border border-white/30 object-cover"
                />
                <h4 className="text-white font-semibold">{review.name}</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-10">
          Biz bilan bog‘laning
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-md">
            <IoCall size={36} className="text-green-400 mx-auto mb-3" />
            <h4 className="text-white font-semibold mb-2">Telefon raqami</h4>
            <p className="text-gray-300">+998 90 123 45 67</p>
            <p className="text-gray-300">+998 97 765 43 21</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-md">
            <IoMail size={36} className="text-green-400 mx-auto mb-3" />
            <h4 className="text-white font-semibold mb-2">Email manzil</h4>
            <p className="text-gray-300">info@entermchj.uz</p>
            <p className="text-gray-300">support@entermchj.uz</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-md">
            <IoLocation size={36} className="text-green-400 mx-auto mb-3" />
            <h4 className="text-white font-semibold mb-2">Manzil</h4>
            <p className="text-gray-300">
              Toshkent shahri, Yunusobod tumani, Bog‘ishamol 24
            </p>
          </div>
        </div>

        <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-white/20 shadow-lg">
          <iframe
            title="ENTER MCHJ Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.518225699497!2d69.2401!3d41.2995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b123456789%3A0xabcdef123456789!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1697039393857!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default About;
