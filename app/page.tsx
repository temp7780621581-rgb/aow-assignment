"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AuthenticateSkillsSection from "@/components/authenticate-skills-section";
import WhyChooseSection from "@/components/why-choose-section";
import LoginSection from "@/components/login-section";
import TestimonialsSection from "@/components/testimonials-section";
import LetterCarousel from "@/components/letter-carousel";

const BANNER_SLIDES = [
  {
    image: "/images/homepage/Carousel/Drivers License.jpg",
    title: "Skill Assessment",
  },
  {
    image: "/images/homepage/Carousel/Pick - Laptop.jpg",
    title: "Online Testing",
  },
  {
    image: "/images/homepage/Carousel/Secure Center.jpg",
    title: "Secure Centers",
  },
  {
    image: "/images/homepage/Carousel/Skill Library.jpg",
    title: "Skill Library",
  },
];

export default function HomePage() {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const bannerInterval = setInterval(() => {
      setCurrentBannerIndex((prev) => (prev + 1) % BANNER_SLIDES.length);
    }, 3000);
    return () => clearInterval(bannerInterval);
  }, []);

  const prevSlide = () => {
    setCurrentBannerIndex((prev) =>
      prev === 0 ? BANNER_SLIDES.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentBannerIndex((prev) =>
      prev === BANNER_SLIDES.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Carousel */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        {/* Carousel Images */}
        {BANNER_SLIDES.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
              index === currentBannerIndex
                ? "opacity-100 translate-x-0"
                : index < currentBannerIndex
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}

        {/* Title text on top of the image */}
        <div className="absolute top-24 left-0 z-10 px-6 md:px-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-[#00418d]">
              {BANNER_SLIDES[currentBannerIndex].title.split(" ")[0]}{" "}
            </span>
            <span className="text-[#f73e5d]">
              {BANNER_SLIDES[currentBannerIndex].title
                .split(" ")
                .slice(1)
                .join(" ")}
            </span>
          </h1>
        </div>

        {/* Left arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-[#00418d]" />
        </button>

        {/* Right arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-[#00418d]" />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
          {BANNER_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBannerIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentBannerIndex
                  ? "bg-[#f73e5d] w-8"
                  : "bg-white/70 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* SkillKwiz Tag */}
      <div className="relative" style={{ zIndex: 3 }}>
        <div className="bg-[#f6c648] text-[#00418d] py-4 px-6 inline-block transform skew-x-12 -ml-4">
          <div className="transform -skew-x-12">
            <h2 className="text-xl font-bold">
              SkillKwiz – Verified Skills, Simplified Hiring
            </h2>
          </div>
        </div>

        {/* Letter Carousel */}
        <div className="mt-8 mb-12">
          <LetterCarousel />
        </div>
      </div>

      {/* Rest of the content */}
      <div className="bg-white relative" style={{ zIndex: 3 }}>
        <AuthenticateSkillsSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <LoginSection />
      </div>
    </div>
  );
}
