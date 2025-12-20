import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Share2, Truck } from "lucide-react";

// Ma'lumotlar bazasi (Buni aslida alohida faylda saqlash yaxshi)
const products = [
    {
      id: 1,
      name: "Lampa yonadi rejimlari bor",
      price: "260 000",
      img: "https://i.ibb.co/prz4dbJ4/images.jpg",
      artikul: "22222222"
    },
    {
      id: 2,
      name: "Shipsi bolalar uchun",
      price: "1 500 000",
      img: "https://i.ibb.co/mFCVPgvP/download.jpg",
      artikul: "33333333"
    },
    {
      id: 3,
      name: "Arktikain",
      price: "430 000",
      img: "https://i.ibb.co/n916Dnp/download.jpg",
      artikul: "44444444"
    }
  ];

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) return <div className="p-10 text-center">Mahsulot topilmadi</div>;

    return (
        <div className="min-h-screen bg-white pb-24">
            {/* Header */}
            <div className="flex justify-between items-center p-4">
                <button onClick={() => navigate(-1)} className="p-2 cursor-pointer"><ArrowLeft /></button>
                <div className="flex gap-4">
                    <button className="p-2 cursor-pointer"><Heart /></button>
                    <button className="p-2 cursor-pointer"><Share2 /></button>
                </div>
            </div>

            {/* Rasm */}
            <div className="w-full h-80 flex items-center justify-center p-4">
                <img src={product.img} alt={product.name} className="max-h-full object-contain" />
            </div>

            {/* Ma'lumotlar */}
            <div className="px-6 mt-4">
                <h1 className="text-2xl font-bold text-black">{product.name}</h1>
                <p className="text-gray-400 mt-1">Artikul: <span className="text-cyan-400">{product.artikul}</span></p>
                <h2 className="text-3xl font-bold mt-4">{product.price} sum</h2>
            </div>

            {/* Yetkazib berish */}
            <div className="mx-6 mt-6 p-4 bg-gray-50 rounded-2xl flex items-center gap-4">
                <div className="bg-green-100 p-2 rounded-lg text-green-600"><Truck size={24} /></div>
                <div>
                    <p className="font-bold text-gray-800">Доставка</p>
                    <p className="text-sm text-gray-500">Стандартная доставка — от 3 дней</p>
                </div>
            </div>

            <div className="px-6 mt-8">
                <h3 className="font-bold text-xl">Описание товара</h3>
                <div className="h-2 w-full bg-gray-100 rounded-full mt-2"></div>
            </div>

            {/* Pastki tugma */}
            <div className="fixed bottom-20 left-0 right-0 p-4 bg-white bottom-[66px]">
                <button className="w-full cursor-pointer bg-[#00C2FF] text-white py-4 rounded-2xl font-bold text-lg active:scale-95 transition-all">
                    В корзину
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;