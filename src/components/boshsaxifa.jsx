import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Users, Megaphone, Bell, ArrowLeft, Heart, ShoppingBag } from "lucide-react";
import { RiToothLine } from "react-icons/ri";
import { MdGridView } from "react-icons/md";

// Rasmlarni import qilish
import Chair from "../assets/chair.png";
import Logo from "../assets/logo.png";

const products = [
  { id: 1, name: "Lampa yonadi rejimlari bor", price: "260 000", img: "https://i.ibb.co/prz4dbJ4/images.jpg", artikul: "22222222" },
  { id: 2, name: "Shipsi bolalar uchun", price: "1 500 000", img: "https://i.ibb.co/mFCVPgvP/download.jpg", artikul: "33333333" },
  { id: 3, name: "Arktikain", price: "430 000", img: "https://i.ibb.co/n916Dnp/download.jpg", artikul: "44444444" },
];

const categories = [
  { id: 'barchasi', label: 'Barchasi', Icon: MdGridView, path: '/' },
  { id: 'elonlar', label: 'Elonlar', Icon: Megaphone, path: '/elonlar' },
  { id: 'texniklar', label: 'Texniklar', Icon: RiToothLine, path: '/texniklar' },
  { id: 'ustalar', label: 'Ustalar', Icon: Users, path: '/ustalar' },
];

function Boshsaxifa() {
  const [activeTab, setActiveTab] = useState("barchasi");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal holati
  const navigate = useNavigate();

  const slides = [
    { title: "Eng yaxshi uskunalarni\nbizdan topasiz", description: "Bizning mahsulotlar sifatli, ishonchli va qulay narxlarda!" },
    { title: "Professional stomatologiya\nasboblari", description: "Yuqori sifatli texnika va ishonchli xizmat." },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
const notification = () => {
  navigate('/notification');
}
  return (
    <div className="min-h-screen bg-white relative">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <header className="p-4 sticky top-0 bg-white z-30">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Shifokor qidirish..."
                className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-2xl outline-none"
              />
            </div>
            <button
            onClick={notification}
            className="p-3 bg-gray-100 rounded-xl cursor-pointer">
              <Bell />
            </button>
          </div>
        </header>
 {/* Hero Banner with Swiper */}
         <section className="px-4 md:px-8 py-6">
          <div className="relative group">
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 h-[300px] md:h-[450px] p-8 md:p-16 flex items-center relative">

                      <div className="w-full md:w-1/2 z-10">
                      <img src={Logo} className="w-52 transform max-sm:w-32 translate-x-[-12px]" alt="" />
                        <h2 className="text-2xl md:text-5xl   text-white mb-4 leading-tight whitespace-pre-line">
                          {slide.title}
                        </h2>
                        <p className="text-sm md:text-lg text-cyan-50 mb-8 max-w-md">
                          {slide.description}
                        </p>
                      </div>
                      {/* Dental Chair Illustration */}
                      <div className="absolute right-4 md:right-16 top-1/2 -translate-y-1/2 w-1/2 flex justify-end">
                        <img
                          src={Chair}
                          alt="Dental Chair"
                          className="h-48 md:h-[350px] object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Navigation Buttons (Visible on Hover) */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/30 hover:bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center z-20 transition-all opacity-0 group-hover:opacity-100 shadow-lg">
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/30 hover:bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center z-20 transition-all opacity-0 group-hover:opacity-100 shadow-lg">
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
          {/* Pagination dots */}
          <div className="flex justify-center gap-3 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'w-10 bg-cyan-500' : 'w-2.5 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </section> 

        {/* Categories */}
        <section className="px-4 md:px-8 pb-12">
          <div className="grid grid-cols-4 gap-4 md:gap-8">
            {categories.map(({ id, label, Icon, path }) => (
              <Link key={id} to={path} onClick={() => setActiveTab(id)} className="flex flex-col items-center gap-4">
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex border-2 items-center justify-center transition-all ${activeTab === id ? 'bg-cyan-500 border-cyan-500 text-white shadow-lg' : 'bg-white border-cyan-500 text-cyan-500'}`}>
                  <Icon className="text-3xl md:text-4xl" />
                </div>
                <span className={`text-sm md:text-lg font-semibold ${activeTab === id ? 'text-cyan-700' : 'text-gray-600'}`}>{label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Ommabop Title & Barchasi Button */}
        <div className="flex items-center justify-between px-4 md:px-8">
          <h1 className="font-bold text-[22px] md:text-[25px]">Ommabop mahsulotlar</h1>
          <div 
            onClick={() => setIsModalOpen(true)} // Modalni ochish
            className="px-6 py-2 font-medium text-[16px] bg-[#BDF3FF] rounded-[10px] cursor-pointer text-black hover:bg-[#a2e9f7] transition-colors"
          >
            Barchasi
          </div>
        </div>

        {/* Main Grid (Mini ro'yxat) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-8 mt-6 pb-10">
          {products.slice(0, 4).map((product) => (
             <ProductCard key={product.id} product={product} navigate={navigate} />
          ))}
        </div>
      </div>

      {/* ================= MODAL (FULL SCREEN) ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-white z-[100] overflow-y-auto animate-in slide-in-from-bottom duration-300">
          {/* Modal Header */}
          <div className="sticky top-0 bg-white p-4 flex items-center gap-4 border-b border-gray-100 z-10">
            <button 
              onClick={() => setIsModalOpen(false)} // Modalni yopish
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft size={28} className="text-black" />
            </button>
            <h2 className="text-xl md:text-2xl font-bold">Barcha Mahsulotlar</h2>
          </div>

          {/* Modal Content - Barcha mahsulotlar chiqadigan joy */}
          <div className="max-w-7xl mx-auto p-4 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} navigate={navigate} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Qayta ishlatiladigan Card komponenti (Kod takrorlanmasligi uchun)
function ProductCard({ product, navigate }) {
  return (
    <div 
      onClick={() => navigate(`/mahsulot/${product.id}`)} 
      className="bg-white cursor-pointer rounded-[30px] p-4 shadow-sm border border-gray-100 flex flex-col relative group transition-all hover:shadow-md h-full"
    >
      <button 
        onClick={(e) => e.stopPropagation()} 
        className="absolute right-4 top-4 z-10 text-gray-400 hover:text-red-500"
      >
        <Heart size={22} />
      </button>

      <div className="bg-gray-50 rounded-[20px] overflow-hidden mb-4 flex items-center justify-center h-40 md:h-48">
        <img src={product.img} alt={product.name} className="object-contain h-full w-full p-4 group-hover:scale-110 transition-transform duration-300" />
      </div>

      <h3 className="text-gray-800 font-semibold text-[15px] md:text-[17px] mb-2 leading-tight min-h-[40px]">{product.name}</h3>

      <div className="mt-auto">
        <p className="text-black font-bold text-[18px] md:text-[20px] mb-3">{product.price} <span className="text-sm font-medium text-gray-600">sum</span></p>
        <button 
          onClick={(e) => e.stopPropagation()} 
          className="w-full bg-[#00C2FF] text-white py-3 rounded-[15px] flex items-center justify-center gap-2 font-bold active:scale-95 transition-all"
        >
          <ShoppingBag size={18} /> Savatga
        </button>
      </div>
    </div>
  );
}

export default Boshsaxifa;