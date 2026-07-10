"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const pathname = usePathname();

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <nav className="flex flex-col w-[96%] sm:w-[94%] md:w-[88%] lg:w-[82%] xl:w-[78%] max-w-6xl mx-auto bg-[#335f92] text-white rounded-b-3xl">
        <div className="flex items-center justify-between md:justify-center px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 min-h-[52px] sm:min-h-[60px] md:min-h-[74px] w-full">
          {/* Logo + Text Branding (Mobile) */}
          <Link
            href="/"
            className="md:hidden relative group py-0.5 sm:py-1 px-0.5 sm:px-1 transition-all flex items-center gap-1.5 sm:gap-2"
          >
            <div className="relative h-[32px] w-[32px] sm:h-[40px] sm:w-[40px] flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="SkillKwiz Icon"
                fill
                priority
                sizes="(max-width: 640px) 32px, 40px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className="text-[16px] sm:text-[20px]"
                style={{
                  fontFamily: "'Aardvark Cafe', serif",
                  color: "#69226F",
                  lineHeight: "1.1",
                }}
              >
                SkillKwiz
              </span>
              <span
                className="text-[10px] sm:text-[13px]"
                style={{
                  fontFamily: "'GardensC', cursive",
                  color: "#000000",
                  lineHeight: "1.2",
                  fontStyle: "italic",
                }}
              >
                How much do you know?
              </span>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none z-20"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-center md:flex-1 gap-1 lg:gap-2">
            <Link
              href="/"
              className="relative group py-1 px-1 mr-4 lg:mr-6 transition-all flex items-center gap-3"
            >
              <div className="relative h-[52px] w-[52px] flex-shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5">
                <Image
                  src="/images/logo.png"
                  alt="SkillKwiz Icon"
                  fill
                  priority
                  sizes="52px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight transition-transform duration-300 group-hover:-translate-y-0.5">
                <span
                  style={{
                    fontFamily: "'Aardvark Cafe', serif",
                    color: "#69226F",
                    fontSize: "20px",
                    lineHeight: "1.1",
                  }}
                >
                  SkillKwiz
                </span>
                <span
                  style={{
                    fontFamily: "'GardensC', cursive",
                    color: "#000000",
                    fontSize: "12px",
                    lineHeight: "1.2",
                    fontStyle: "italic",
                  }}
                >
                  How much do you know?
                </span>
              </div>
            </Link>

            <Link
              href="/"
              className={`relative group py-3 px-2 text-sm md:px-3 lg:px-4 lg:text-base transition-all ${pathname === "/"
                ? "text-yellow-400 font-semibold"
                : "text-white"
                }`}
            >
              <span>Home</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/about"
              className={`relative group py-3 px-2 text-sm md:px-3 lg:px-4 lg:text-base transition-all ${pathname === "/about"
                ? "text-yellow-400 font-semibold"
                : "text-white"
                }`}
            >
              <span>About Us</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/services"
              className={`relative group py-3 px-2 text-sm md:px-3 lg:px-4 lg:text-base transition-all ${pathname === "/services"
                ? "text-yellow-400 font-semibold"
                : "text-white"
                }`}
            >
              <span>Services</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/blog"
              className={`relative group py-3 px-2 text-sm md:px-3 lg:px-4 lg:text-base transition-all ${pathname === "/blog"
                ? "text-yellow-400 font-semibold"
                : "text-white"
                }`}
            >
              <span>Blog</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center py-3 sm:py-4 bg-[#335f92] rounded-b-3xl absolute top-0 left-0 w-full pt-14 sm:pt-16 shadow-lg transition-all duration-300 ease-in-out">
            <Link
              href="/"
              className={`relative group py-2.5 sm:py-3 text-base sm:text-lg w-full text-center ${pathname === "/" ? "text-yellow-400 font-semibold" : "text-white"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Home</span>
              <span className="absolute left-1/4 right-1/4 bottom-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/about"
              className={`relative group py-2.5 sm:py-3 text-base sm:text-lg w-full text-center ${pathname === "/about" ? "text-yellow-400 font-semibold" : "text-white"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>About Us</span>
              <span className="absolute left-1/4 right-1/4 bottom-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/services"
              className={`relative group py-2.5 sm:py-3 text-base sm:text-lg w-full text-center ${pathname === "/services" ? "text-yellow-400 font-semibold" : "text-white"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Services</span>
              <span className="absolute left-1/4 right-1/4 bottom-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/blog"
              className={`relative group py-2.5 sm:py-3 text-base sm:text-lg w-full text-center ${pathname === "/blog" ? "text-yellow-400 font-semibold" : "text-white"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Blog</span>
              <span className="absolute left-1/4 right-1/4 bottom-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
