/**
 * Design: Aurora Scholar — Navbar
 * Glassmorphism nav with aurora glow accents, responsive mobile menu
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";

interface NavbarProps {
  onOpenLogin?: () => void;
  onOpenSignup?: () => void;
}

export default function Navbar({ onOpenLogin, onOpenSignup }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0F172A]/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <img
            src="/manus-storage/brand-logo_083737b7.png"
            alt="MyanPath AI"
            className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-xl font-semibold font-display tracking-tight">
            <span className="text-white">Myan</span>
            <span className="text-blue-500">Path</span>
            <span className="text-cyan-400"> AI</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm text-gray-300 hover:text-white transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="border-white/20 text-gray-300 hover:text-white hover:border-blue-500/50 bg-transparent"
            onClick={onOpenLogin}
          >
            Login
          </Button>
          <Button
            size="sm"
            className="btn-primary text-white"
            onClick={onOpenSignup}
          >
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden bg-[#0F172A]/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-3 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-white/20 text-gray-300 hover:text-white bg-transparent"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenLogin?.();
                  }}
                >
                  Login
                </Button>
                <Button
                  size="sm"
                  className="flex-1 btn-primary text-white"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenSignup?.();
                  }}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
