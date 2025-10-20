'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

export interface TeamMember {
  name: string;
  title: string;
  description: string;
  image: string;
}

interface BoardOfDirectorsClientProps {
  members: TeamMember[];
}

export default function BoardOfDirectorsClient({ members }: BoardOfDirectorsClientProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const ProfileCircle = ({ member }: { member: TeamMember }) => (
    <div 
      className="flex flex-col items-center cursor-pointer group"
      onClick={() => setSelectedMember(member)}
    >
      <div className="relative mb-4">
        <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-white shadow-lg transition-all duration-300 group-hover:ring-ubuntu-orange group-hover:scale-105">
          <Image
            src={member.image}
            alt={member.name}
            width={160}
            height={160}
            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
            style={{ objectPosition: 'center 30%' }}
          />
        </div>
        <div className="absolute inset-0 rounded-full bg-ubuntu-orange opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      </div>
      <h4 className="text-lg font-bold text-ubuntu-blue text-center mb-1 group-hover:text-ubuntu-orange transition-colors">
        {member.name}
      </h4>
      <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide text-center px-4">
        {member.title}
      </p>
    </div>
  );

  const MemberModal = () => {
    if (!selectedMember) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div 
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={() => setSelectedMember(null)}
        />
        
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          <button
            onClick={() => setSelectedMember(null)}
            className="absolute top-4 right-4 z-10 bg-ubuntu-orange hover:bg-ubuntu-orange/90 text-white p-2 rounded-lg transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5 flex items-center justify-center p-8 bg-gray-50">
              <div className="w-64 h-64 rounded-full overflow-hidden ring-8 ring-white shadow-xl">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  width={256}
                  height={256}
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>
            </div>
            
            <div className="lg:w-3/5 p-8 flex flex-col justify-center overflow-y-auto max-h-[90vh]">
              <h2 className="text-3xl font-bold text-ubuntu-blue mb-4">
                {selectedMember.name}
              </h2>
              <h3 className="text-lg font-semibold text-ubuntu-orange mb-6">
                {selectedMember.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base whitespace-pre-line">
                {selectedMember.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {members.map((member, index) => (
          <ProfileCircle key={index} member={member} />
        ))}
      </div>
      <MemberModal />
    </>
  );
}


