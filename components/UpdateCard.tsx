'use client';

import Link from 'next/link';
import { Update } from '@/lib/types';
import { Calendar, ArrowRight } from 'lucide-react';
import { formatDate } from '@/lib/formatDate';

interface UpdateCardProps {
  update: Update;
  className?: string;
}

export default function UpdateCard({ update, className = "" }: UpdateCardProps) {
  return (
    <article className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {/* Content */}
      <div className="p-6">
        {/* Date */}
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <Calendar className="h-4 w-4 mr-2" />
          <time dateTime={update.date}>
            {formatDate(update.date)}
          </time>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-ubuntu-blue mb-3 line-clamp-2">
          {update.title}
        </h3>
        
        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {update.excerpt}
        </p>
        
        {/* Tags */}
        {update.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {update.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-ubuntu-blue/10 text-ubuntu-blue text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {/* Read More Link */}
        <Link
          href={`/updates/${update.slug}`}
          className="inline-flex items-center text-ubuntu-orange hover:text-ubuntu-orange/80 font-semibold transition-colors duration-200"
        >
          Read More
          <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </article>
  );
}
