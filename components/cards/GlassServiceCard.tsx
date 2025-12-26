import React from 'react';
import { Link } from 'react-router-dom';
import { Service } from '../../types';
import { ArrowRight, Stethoscope, Scissors, HeartPulse, Sparkles, Smile, ShieldCheck, Microscope, BriefcaseMedical } from 'lucide-react';
import { formatPrice } from '../../lib/utils';

const getIcon = (category: string) => {
  switch (category) {
    case 'terapie': return HeartPulse;
    case 'chirurgie': return Scissors;
    case 'ortodontie': return Smile;
    case 'protetica': return Sparkles;
    case 'imagistica': return Microscope;
    case 'cnam': return ShieldCheck;
    case 'cabinet': return BriefcaseMedical;
    default: return Stethoscope;
  }
};

export const GlassServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const Icon = getIcon(service.category);

  return (
    <div className="group relative p-[1px] rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1">
      {/* Border Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
      <div className="absolute inset-0 bg-gradient-to-r from-medical-blue-lighter via-trust-teal to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-beam" />

      {/* Card Content */}
      <div className="relative h-full bg-white/50 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-md group-hover:shadow-lg group-hover:shadow-medical-blue/10 transition-all duration-200">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-medical-blue-lighter/10 to-trust-teal/10 group-hover:from-medical-blue-lighter group-hover:to-trust-teal transition-colors duration-300">
            <Icon className="w-6 h-6 text-medical-blue group-hover:text-white transition-colors" />
          </div>
          {service.cnamEligible && (
            <span className="text-xs font-bold px-2 py-1 rounded-full bg-trust-green/10 text-trust-green border border-trust-green/20">
              CNAM
            </span>
          )}
        </div>
        
        <h3 className="font-heading text-lg font-bold text-slate-900 mb-2 group-hover:text-medical-blue-lighter transition-colors">
          {service.name}
        </h3>
        
        <div className="mt-auto pt-4 border-t border-slate-200/50">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Preț</p>
              <p className="font-mono text-xl font-bold text-medical-blue">
                {formatPrice(service.price)}
              </p>
            </div>
            <Link 
              to="/programare" 
              className="p-2 rounded-full bg-slate-100 group-hover:bg-medical-blue-lighter group-hover:text-white transition-all"
            >
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};