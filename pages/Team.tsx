import React from 'react';
import { TEAM } from '../constants';
import { TeamCard3D } from '../components/cards/TeamCard3D';
import { Award, BookOpen, Users } from 'lucide-react';

export const Team = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-20" />
        <div className="absolute inset-0 noise-overlay" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Echipa Noastră</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Medici dedicați, asistenți profesioniști și o administrație eficientă, toți lucrând pentru sănătatea ta.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Administrator */}
        <div className="mb-20">
          <h2 className="font-heading text-2xl font-bold text-slate-900 mb-8 border-l-4 border-medical-blue pl-4">Administrație</h2>
          <div className="max-w-4xl mx-auto">
             <div className="bg-white rounded-3xl p-8 shadow-xl flex flex-col md:flex-row gap-8 items-center">
               <div className="w-48 h-48 shrink-0 rounded-2xl overflow-hidden shadow-lg">
                 <img src={TEAM[0].image} alt={TEAM[0].name} className="w-full h-full object-cover" />
               </div>
               <div>
                 <h3 className="font-heading text-2xl font-bold text-slate-900">{TEAM[0].name}</h3>
                 <p className="text-medical-blue-lighter font-medium mb-4">{TEAM[0].role}</p>
                 <p className="text-slate-600 leading-relaxed italic">"{TEAM[0].bio}"</p>
                 <div className="mt-6 flex gap-4">
                   <div className="flex items-center gap-2 text-sm text-slate-500">
                     <Award className="w-4 h-4 text-trust-green" /> 15+ Ani Experiență
                   </div>
                   <div className="flex items-center gap-2 text-sm text-slate-500">
                     <BookOpen className="w-4 h-4 text-medical-blue" /> Master în Sănătate Publică
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </div>

        {/* Doctors */}
        <div className="mb-20">
          <h2 className="font-heading text-2xl font-bold text-slate-900 mb-8 border-l-4 border-medical-blue pl-4">Medici Stomatologi</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.slice(1, 5).map(member => (
              <TeamCard3D key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* Assistants */}
        <div>
          <h2 className="font-heading text-2xl font-bold text-slate-900 mb-8 border-l-4 border-medical-blue pl-4">Asistenți Medicali</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TEAM.slice(5).map(member => (
              <div key={member.id} className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-all">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-slate-50">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-center">
                  <h3 className="font-heading font-bold text-lg">{member.name}</h3>
                  <p className="text-slate-500 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continuous Education Banner */}
        <div className="mt-24 bg-gradient-to-r from-medical-blue to-medical-blue-light rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Users className="w-64 h-64" />
          </div>
          <h2 className="font-heading text-3xl font-bold mb-4 relative z-10">Educație Medicală Continuă</h2>
          <p className="max-w-2xl mx-auto text-slate-200 relative z-10">
            Echipa noastră participă regulat la congrese și cursuri de specializare pentru a fi la curent cu cele mai noi tehnici și tratamente stomatologice.
          </p>
        </div>
      </div>
    </div>
  );
};