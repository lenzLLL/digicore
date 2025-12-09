"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      title: "Solutions Énergétiques Durables",
      subtitle: "Découvrez nos produits écologiques pour un avenir meilleur",
      bg: "from-green-600 to-blue-600",
      image: "🌱"
    },
    {
      title: "Technologie Innovante",
      subtitle: "Les meilleures solutions pour votre consommation énergétique",
      bg: "from-blue-600 to-purple-600",
      image: "⚡"
    },
    {
      title: "Service Premium",
      subtitle: "Nous vous accompagnons dans votre transition énergétique",
      bg: "from-purple-600 to-pink-600",
      image: "✨"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-96 bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden rounded-lg">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className={`bg-gradient-to-r ${slide.bg} w-full h-full flex items-center justify-center`}>
            <div className="text-center text-white">
              <div className="text-6xl mb-4">{slide.image}</div>
              <h2 className="text-4xl font-bold mb-2">{slide.title}</h2>
              <p className="text-xl text-gray-100">{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-100 text-gray-900 p-2 rounded-full transition z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-100 text-gray-900 p-2 rounded-full transition z-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition ${
              index === current ? "bg-white w-8" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
