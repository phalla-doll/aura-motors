"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? "bg-white/80 backdrop-blur-md border-b border-gray-200/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 -ml-2 ${
                  isScrolled || mobileMenuOpen ? "text-gray-900" : "text-white"
                }`}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center justify-center md:justify-start flex-1 md:flex-none">
              <Link
                href="/"
                className={`text-xl font-semibold tracking-tight ${
                  isScrolled || mobileMenuOpen ? "text-gray-900" : "text-white"
                }`}
              >
                Aura
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-center flex-1 space-x-8">
              {["Vehicles", "Energy", "Charging", "Discover"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className={`text-sm font-medium transition-colors hover:opacity-70 ${
                    isScrolled ? "text-gray-800" : "text-gray-100"
                  }`}
                >
                  {item}
                </Link>
              ))}
            </nav>

            {/* Right icons */}
            <div
              className={`flex items-center space-x-4 ${
                isScrolled || mobileMenuOpen ? "text-gray-900" : "text-white"
              }`}
            >
              <button className="p-2 -mr-2 hover:opacity-70 transition-opacity">
                <Search size={18} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-14"
          >
            <div className="px-4 pt-4 pb-6 space-y-1">
              {["Vehicles", "Energy", "Charging", "Discover", "Support"].map(
                (item) => (
                  <Link
                    key={item}
                    href="#"
                    className="block px-3 py-4 text-lg font-medium text-gray-900 border-b border-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
