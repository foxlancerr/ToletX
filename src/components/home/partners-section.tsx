// src/components/sections/partners-section.tsx
"use client"

import * as React from "react"
import Image from "next/image"

const partners = [
  {
    id: 1,
    name: "Lorem Lorem",
    logo: "/assets/images/partners/partners (1).png",
    alt: "Lorem Lorem"
  },
  {
    id: 2,
    name: "Walt Disney World",
    logo: "/assets/images/partners/partners (2).png",
    alt: "Walt Disney World"
  },
  {
    id: 3,
    name: "Truck Logue",
    logo: "/assets/images/partners/partners (3).png",

    alt: "Truck Logue"
  },
  {
    id: 4,
    name: "Hotel Cox Today",
    logo: "/assets/images/partners/partners (4).png",

    alt: "Hotel Cox Today"
  },
  {
    id: 5,
    name: "Uber",
    logo: "/assets/images/partners/partners (5).png",

    alt: "Uber"
  },
  {
    id: 6,
    name: "Lorem Lorem",
    logo: "/assets/images/partners/partners (6).png",

    alt: "Lorem Lorem"
  },
  {
    id: 7,
    name: "Lorem Lorem",
    logo: "/assets/images/partners/partners (7).png",

    alt: "Lorem Lorem"
  }
]

export function PartnersSection() {
  return (
    <section className="relative w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333333]">
            ToletX Happy Partners
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-12 w-32 sm:h-14 sm:w-36 md:h-16 md:w-40 flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, 160px"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Infinite Scroll Animation */}
        <style jsx>{`
          @media (max-width: 768px) {
            .partners-scroll {
              animation: scroll 20s linear infinite;
            }
          }
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </section>
  )
}