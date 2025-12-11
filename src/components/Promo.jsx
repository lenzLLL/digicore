"use client";

import React from "react";

export default function Promo({
  title,
  description,
  bullets = [],
  imageSrc,
  imageAlt = "",
  imageLeft = false,
  ctaText = "En savoir plus",
  ctaHref = "/services",
  wrapperClass = "bg-white",
  imageClass = "rounded-2xl shadow-2xl w-full h-72 object-cover",
  titleClass = "text-3xl md:text-4xl",
  descriptionClass = "text-gray-700",
  ctaClass = "inline-block bg-[#E6C34A] text-[#1E5FA8] px-6 py-3 rounded-lg font-bold hover:bg-[#d4a028] transition-all",
}) {
  return (
    <section className={`py-16 px-4 ${wrapperClass}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {imageLeft && imageSrc && (
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={imageSrc} alt={imageAlt} className={imageClass} />
          </div>
        )}

        <div>
          <h3 className={`${titleClass} font-bold text-[#1E5FA8] mb-4`}>{title}</h3>
          <p className={`${descriptionClass} mb-4 leading-relaxed`}>{description}</p>

          {bullets.length > 0 && (
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              {bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}

          <a
            href={ctaHref}
            className={ctaClass}
          >
            {ctaText}
          </a>
        </div>

        {!imageLeft && imageSrc && (
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={imageSrc} alt={imageAlt} className={imageClass} />
          </div>
        )}
      </div>
    </section>
  );
}
