'use client';

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Red icon component
const redIcon = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="28" height="28" rx="4" fill="#E10600" />
    <path
      d="M8 9.5C8 8.67157 8.67157 8 9.5 8H18.5C19.3284 8 20 8.67157 20 9.5V18.5C20 19.3284 19.3284 20 18.5 20H9.5C8.67157 20 8 19.3284 8 18.5V9.5Z"
      fill="white"
    />
    <rect x="11" y="12" width="6" height="2" rx="1" fill="#E10600" />
  </svg>
);

interface Update {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  videoLink?: string | null;
}

interface LatestUpdatesProps {
  updates: Update[];
}

export default function LatestUpdates({ updates }: LatestUpdatesProps) {
  // Format date for display
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date
        .toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
        .toUpperCase();
    } catch {
      return dateString;
    }
  };

  // Get image with fallback
  const getImageWithFallback = (update: Update, index: number) => {
    // Use fallback images based on index since updates.json doesn't have imageUrl
    const fallbackImages = [
      "/hero-healthcare-1.jpg",
      "/hero-healthcare-2.jpg", 
      "/hero-healthcare-3.jpg"
    ];
    return fallbackImages[index % fallbackImages.length];
  };

  // Get update type from tags or default
  const getUpdateType = (update: Update) => {
    if (update.tags && update.tags.length > 0) {
      return update.tags[0].replace('-', ' ').toUpperCase();
    }
    return 'UPDATE';
  };

  // If no updates, don't render the section
  if (!updates || updates.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 text-left">
            Latest Updates
          </h2>
          <div className="h-2 w-16 bg-ubuntu-orange mb-6" />
          <p className="text-xl text-gray-600">
            Stay informed about our latest initiatives, achievements, and impact stories from the field
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Featured Update */}
          <div className="flex-1 relative min-w-[340px] max-w-2xl">
            <Link href={`/updates/${updates[0].id}`}>
              <div className="relative h-[420px] rounded overflow-hidden cursor-pointer">
                <img
                  src={getImageWithFallback(updates[0], 0)}
                  alt={updates[0].title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                {/* Vertical Orange Bar */}
                <div className="absolute left-0 top-0 h-full w-2 bg-ubuntu-orange" />
                {/* Text */}
                <div className="absolute bottom-0 left-0 p-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-lg">
                    {updates[0].title}
                  </h2>
                  <div className="flex items-center gap-4 text-white text-base font-medium">
                    <span className="uppercase tracking-wide text-white/80">
                      {getUpdateType(updates[0])}
                    </span>
                    <span className="text-white/80">|</span>
                    <span>{formatDate(updates[0].date)}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Right: Updates List */}
          <div className="w-full lg:w-[420px] flex flex-col gap-6">
            {updates.slice(1, 5).map((update, idx) => (
              <Link key={update.id} href={`/updates/${update.id}`}>
                <div className="flex items-center gap-4 bg-transparent cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                  <div className="relative min-w-[100px] w-[100px] h-[100px] rounded overflow-hidden">
                    <img
                      src={getImageWithFallback(update, idx + 1)}
                      alt={update.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Orange Icon Overlay */}
                    <div className="absolute top-0 left-0">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="28" height="28" rx="4" fill="#F7941D" />
                        <path
                          d="M8 9.5C8 8.67157 8.67157 8 9.5 8H18.5C19.3284 8 20 8.67157 20 9.5V18.5C20 19.3284 19.3284 20 18.5 20H9.5C8.67157 20 8 19.3284 8 18.5V9.5Z"
                          fill="white"
                        />
                        <rect x="11" y="12" width="6" height="2" rx="1" fill="#F7941D" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 font-medium mb-1 uppercase">
                      {getUpdateType(update)} | {formatDate(update.date)}
                    </div>
                    <div className="text-base text-gray-900 font-semibold leading-snug">
                      {update.title}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            
            {/* View All Updates link at the bottom right */}
            <div className="flex justify-end mt-4">
              <Link
                href="/updates"
                className="text-ubuntu-orange font-medium hover:text-ubuntu-orange/80 inline-flex items-center transition-colors"
              >
                View All Updates <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
