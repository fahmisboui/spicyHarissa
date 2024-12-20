"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  if (!isClient) {
    return null;
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#230202]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 font-khand">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="#Hero"
              className="text-white font-bold text-xl"
            >
              <img src="/Svgs/Logo.svg" alt="Logo" width={140} height={40} />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden sm:flex space-x-4">
            <Link
              href="#Services"
              className="text-sm sm:text-base md:text-lg text-white hover:text-gray-300 px-3 py-2 rounded-md"
            >
              Services
            </Link>
            <Link
              href="#Games"
              className="text-sm sm:text-base md:text-lg text-white hover:text-gray-300 px-3 py-2 rounded-md"
            >
              Games
            </Link>
            <Link
              href="#AboutUs"
              className="text-sm sm:text-base md:text-lg text-white hover:text-gray-300 px-3 py-2 rounded-md"
            >
              About Us
            </Link>
            <Link
              href="#Contact"
              className="text-sm sm:text-base md:text-lg text-white hover:text-gray-300 px-3 py-2 rounded-md"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button className="bg-[#800A07] text-white focus:outline-none p-2 rounded-md" onClick={toggleMenu}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-[#230202] text-white p-4 space-y-4">
          <Link href="#Services" className="block text-sm sm:text-base md:text-lg px-3 py-2 rounded-md" onClick={closeMenu}>
            Services
          </Link>
          <Link href="#Games" className="block text-sm sm:text-base md:text-lg px-3 py-2 rounded-md" onClick={closeMenu}>
            Games
          </Link>
          <Link href="#AboutUs" className="block text-sm sm:text-base md:text-lg px-3 py-2 rounded-md" onClick={closeMenu}>
            About Us
          </Link>
          <Link href="#Contact" className="block text-sm sm:text-base md:text-lg px-3 py-2 rounded-md" onClick={closeMenu}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}