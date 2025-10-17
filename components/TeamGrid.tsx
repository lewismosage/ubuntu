'use client';

import Image from 'next/image';
import { TeamMember } from '@/lib/types';

interface TeamGridProps {
  team: TeamMember[];
  className?: string;
}

export default function TeamGrid({ team, className = "" }: TeamGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}>
      {team.map((member) => (
        <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          {/* Photo */}
          <div className="relative h-64 w-full">
            <Image
              src={member.photoURL}
              alt={`${member.name} - ${member.role}`}
              fill
              className="object-cover"
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                const target = e.target as HTMLImageElement;
                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=084B8A&color=fff&size=256`;
              }}
            />
          </div>
          
          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-ubuntu-blue mb-1">
              {member.name}
            </h3>
            <p className="text-ubuntu-orange font-semibold mb-3">
              {member.role}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {member.bio}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
