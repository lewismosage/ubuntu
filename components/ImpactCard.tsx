'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ImpactCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  link: string;
  className?: string;
}

export default function ImpactCard({ 
  title, 
  description, 
  features, 
  icon, 
  link, 
  className = "" 
}: ImpactCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${className}`}>
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div className="p-4 rounded-full bg-ubuntu-orange/10 text-ubuntu-orange">
          {icon}
        </div>
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-bold text-ubuntu-blue mb-3 text-center">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 mb-4 text-center">
        {description}
      </p>
      
      {/* Features */}
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-700">
            <div className="w-2 h-2 bg-ubuntu-orange rounded-full mr-3 flex-shrink-0"></div>
            {feature}
          </li>
        ))}
      </ul>
      
      {/* Learn More Button */}
      <div className="text-center">
        <Button asChild variant="outline" className="border-ubuntu-blue text-ubuntu-blue hover:bg-ubuntu-blue hover:text-white">
          <Link href={link} className="flex items-center gap-2">
            Learn More
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
