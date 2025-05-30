// src/App.tsx
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Modern from "./Modern/Modern";
import EcommerceDashboard from "./Ecommerce/Ecommerce";
import Loading from "./Components/Loading";
import { useEffect, useState } from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Nftmain from "./NFT/Nftmain";
import CardSilo from "./Silo/CardSilo";
import SettingsPage from "./Silo/SettingsPage";
 import SiloDetailPage from "./Silo/SiloDetailPage";



function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // โหลด 1 วินาทีหลังเปลี่ยนหน้า
    return () => clearTimeout(timer);
  }, [location.pathname]);
  if (isLoading) return <Loading />;

  return (
    <Routes>
      <Route path="/" element={<Modern />} />
      <Route path="/ecommerce" element={<EcommerceDashboard />} />
      <Route path="/nft" element={<Nftmain />} />
      <Route path="/Silo" element={<CardSilo id={"1"} range={""} percent={0} />} />
      <Route path="/settings/:id" element={<SettingsPage />} /> 
      <Route path="/silo/:id/detail" element={<SiloDetailPage />} />
      
    </Routes>
  );
}

export default App;
