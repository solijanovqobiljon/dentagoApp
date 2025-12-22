import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BottomNavbar from './Sitebar'
import { CartProvider } from './CartContext' // 1. Providerni import qiling

// Komponentlar
import Kategoriyalar from './Qidiruv/Kategoriyalar'
import KichikKategoriyalar from './Qidiruv/KichikKategoriyalar'
import Mahsulotlar from './Qidiruv/Mahsulotlar'
import MahsulotDetallar from './Qidiruv/MahsulotDetallar'
import Boshsaxifa from './components/boshsaxifa.jsx'
import Savat from './Savat/Savat'
import ProductDetail from './pages/ProductDetail.jsx'
import Elonlar from './components/elonlar.jsx'
import Ustalar from './components/ustalar.jsx'
import Notification from './components/notification.jsx'
import DetailDoctors from './Texniklar/DetailDoctors.jsx'
import MalumotBerish from './Texniklar/MalumotBerish.jsx'
import Texniklar from './Texniklar/Texniklar.jsx'
function App() {
  return (
    // 2. Hammasini CartProvider bilan o'rab chiqing
    <CartProvider>
      <div className="bg-white min-h-screen">
        <div className="px-1 lg:px-10 pb-24 pt-4">
          <Routes>
            <Route index element={<Boshsaxifa />} />
            <Route path="/kategoriyalar" element={<Kategoriyalar />} />
            <Route path="/kategoriyalar/:categoryKey" element={<KichikKategoriyalar />} />
                      <Route path="texniklar" element={<Texniklar />} />

            <Route path="/kategoriyalar/:categoryKey/:subKey" element={<Mahsulotlar />} />
            <Route path="/mahsulot/:categoryKey/:subKey/:productId" element={<MahsulotDetallar />} />
            <Route path="/savatcha" element={<Savat />} />
            <Route path="/profil" element={<div>Profil sahifasi</div>} />
              <Route path="shifokorlar" element={<DetailDoctors />} />
          <Route path="malumot" element={<MalumotBerish />} />
          <Route path="mahsulot/:id" element={<ProductDetail />} />
          <Route path="elonlar" element={<Elonlar />} />
          <Route path="ustalar" element={<Ustalar />} />
          <Route path="notification" element={<Notification />} />
          </Routes>
        </div>
        <BottomNavbar />
      </div>
    </CartProvider>
  )
}

export default App
