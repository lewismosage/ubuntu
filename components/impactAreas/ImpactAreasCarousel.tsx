'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import healthImage from '../../public/hero-healthcare-1.jpg';

interface Statistic {
  value: string;
  label: string;
}

interface ImpactAreaCarousel {
  id: string;
  title: string;
  description: string;
  details: string;
  link: string;
  statistics: Statistic[];
}

interface ImpactAreasCarouselProps {
  areas: ImpactAreaCarousel[];
  image: string;
  heading: string;
  subheading: string;
  autoRotate?: boolean;
  autoRotateInterval?: number;
}

export default function ImpactAreasCarousel({
  areas,
  image,
  heading,
  subheading,
  autoRotate = true,
  autoRotateInterval = 5000,
}: ImpactAreasCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(autoRotate);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % areas.length);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [autoPlay, areas.length, autoRotateInterval]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + areas.length) % areas.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), autoRotateInterval);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % areas.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), autoRotateInterval);
  };

  return (
    <section className="py-12 bg-ubuntu-blue overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[400px]">
          {/* Left Side - Image */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-lg mx-auto">
              <img
                src={healthImage.src}
                alt={heading}
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:col-span-1 text-white flex flex-col justify-center h-full">
            {/* Heading and Subheading */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-tight">
                {heading}
              </h2>
              <p className="text-sm md:text-base opacity-95 leading-relaxed">
                {subheading}
              </p>
            </div>

            {/* Cards Section */}
            <div className="relative">
              {/* Cards Container */}
              <div className="space-y-4 relative h-64">
                {areas.map((area, index) => (
                  <div
                    key={area.id}
                    className={`absolute inset-x-0 transition-all duration-500 ease-out transform ${
                      index === currentIndex
                        ? 'opacity-100 translate-y-0 z-20'
                        : index === (currentIndex + 1) % areas.length
                        ? 'opacity-0 translate-y-6 z-10'
                        : 'opacity-0 -translate-y-6 z-0'
                    }`}
                  >
                    <div className="bg-white/15 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      {/* Number */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-white opacity-80">
                          {index + 1}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-white mb-2">
                        {area.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-white/90 mb-3 leading-relaxed line-clamp-2">
                        {area.description}
                      </p>

                      {/* Statistics */}
                      {area.statistics && (
                        <div className="grid grid-cols-3 gap-2 mb-3">
                          {area.statistics.map((stat, statIndex) => (
                            <div key={statIndex} className="text-center">
                              <div className="text-sm font-bold text-white">
                                {stat.value}
                              </div>
                              <div className="text-xs text-white/80">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Read More Link */}
                      <Link
                        href={area.link}
                        className="inline-flex items-center gap-1 text-white font-semibold hover:text-white/80 transition-colors text-xs"
                      >
                        Learn More
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8 gap-3">
                <button
                  onClick={goToPrevious}
                  className="bg-white text-ubuntu-blue p-2 rounded-full hover:bg-white/90 transition-all duration-200 shadow-lg"
                  aria-label="Previous impact area"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {/* Dot Indicators */}
                <div className="flex items-center justify-center gap-2">
                  {areas.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentIndex(index);
                        setAutoPlay(false);
                        setTimeout(() => setAutoPlay(true), autoRotateInterval);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-white w-6'
                          : 'bg-white/50 hover:bg-white/70 w-2'
                      }`}
                      aria-label={`Go to impact area ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={goToNext}
                  className="bg-white text-ubuntu-blue p-2 rounded-full hover:bg-white/90 transition-all duration-200 shadow-lg"
                  aria-label="Next impact area"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}