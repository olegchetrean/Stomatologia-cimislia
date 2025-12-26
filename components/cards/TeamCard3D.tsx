import React, { useRef, useState, useEffect } from 'react';
import { TeamMember } from '../../types';

export const TeamCard3D: React.FC<{ member: TeamMember }> = ({ member }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [canHover, setCanHover] = useState(true);

  // Detect if device supports hover
  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setCanHover(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setCanHover(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !canHover) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8; // Max 8 deg (reduced for subtlety)
    const rotateY = ((x - centerX) / centerX) * 8;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      className="perspective-1000 w-full h-[320px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        className="relative w-full h-full transition-transform duration-200 ease-out preserve-3d"
        style={{
          transform: canHover
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
            : 'none'
        }}
      >
        <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200 bg-white group border border-slate-100">
          <div className="flex flex-col h-full p-6">
            <div className="mb-4 border-b border-slate-200 pb-4">
              <h3 className="text-slate-900 font-heading text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-medical-blue-lighter font-medium">{member.role}</p>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                {member.specialty && (
                  <p className="text-medical-blue font-semibold text-sm mb-3">{member.specialty}</p>
                )}
                <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed">
                  {member.bio || 'Specialist dedicat cu experientă vastă în domeniu, orientat către confortul pacientului.'}
                </p>
              </div>
              {member.phone && (
                <a 
                  href={`tel:${member.phone.replace(/\s/g, '')}`} 
                  className="mt-4 inline-flex items-center gap-2 text-medical-blue font-bold text-sm hover:text-medical-blue-lighter transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {member.phone.match(/.{1,3}/g)?.join(' ') || member.phone}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};