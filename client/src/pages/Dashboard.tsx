/**
 * Design: Aurora Scholar — Dashboard
 * Aurora atmosphere visible at every section via flowing light fields
 * Compass + AI node brand motif throughout
 */
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const switchToLogin = () => setIsLogin(true);
  const switchToSignup = () => setIsLogin(false);

  const handleOpenLogin = () => { setIsLogin(true); openModal(); };
  const handleOpenSignup = () => { setIsLogin(false); openModal(); };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0F172A]">
      {/* Global aurora atmosphere — layered light fields */}
      {/* Top-left large blue orb */}
      <div className="aurora-glow w-[600px] h-[600px] bg-blue-600/20 top-[-150px] left-[-150px]" />
      {/* Mid-right cyan orb */}
      <div className="aurora-glow w-[450px] h-[450px] bg-cyan-500/15 bottom-[30%] right-[-100px]" style={{ animationDelay: "-5s" }} />
      {/* Center purple orb */}
      <div className="aurora-glow w-[350px] h-[350px] bg-purple-600/15 top-[45%] left-[25%]" style={{ animationDelay: "-10s" }} />
      {/* Bottom-left deep blue */}
      <div className="aurora-glow w-[500px] h-[500px] bg-blue-800/15 bottom-[-100px] left-[10%]" style={{ animationDelay: "-15s" }} />
      {/* Small accent orbs for constellation feel */}
      <div className="aurora-glow w-[150px] h-[150px] bg-cyan-400/20 top-[20%] right-[15%]" style={{ animationDelay: "-3s" }} />
      <div className="aurora-glow w-[120px] h-[120px] bg-purple-500/15 top-[70%] left-[60%]" style={{ animationDelay: "-8s" }} />

      {/* Constellation path lines (decorative SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <path d="M100,200 Q400,100 700,300 T1200,200" stroke="#3B82F6" fill="none" strokeWidth="1" />
        <path d="M50,500 Q500,400 900,600 T1400,500" stroke="#06B6D4" fill="none" strokeWidth="1" />
        <path d="M200,800 Q600,700 1000,900 T1300,750" stroke="#8B5CF6" fill="none" strokeWidth="1" />
      </svg>

      <Navbar onOpenLogin={handleOpenLogin} onOpenSignup={handleOpenSignup} />
      <Hero onGetStarted={handleOpenSignup} />
      <Features />
      <Stats />
      <Footer />
      <AuthModal
        isOpen={isModalOpen}
        isLogin={isLogin}
        onClose={closeModal}
        onSwitchToLogin={switchToLogin}
        onSwitchToSignup={switchToSignup}
      />
    </div>
  );
}
