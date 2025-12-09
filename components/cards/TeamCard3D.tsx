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
      className="perspective-1000 w-full h-[450px]"
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
        <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200 bg-white group">
          <div className="relative h-3/4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 z-20">
              <h3 className="text-white font-heading text-2xl font-bold">{member.name}</h3>
              <p className="text-white/80 font-medium">{member.role}</p>
            </div>
          </div>
          <div className="h-1/4 p-6 bg-white flex flex-col justify-center">
            <p className="text-slate-600 text-sm line-clamp-2">{member.bio || 'Specialist dedicat cu experiență vastă în domeniu, orientat către confortul pacientului.'}</p>
            <p className="text-medical-blue-lighter font-semibold text-sm mt-2">{member.specialty}</p>
          </div>
        </div>
      </div>
    </div>
  );
};