import React, { useState, useEffect } from 'react';
import { TEAM } from '../constants';
import { TeamCard3D } from '../components/cards/TeamCard3D';
import { Award, BookOpen, Users } from 'lucide-react';
import { TeamMember } from '../types';

export const Team = () => {
  const [team, setTeam] = useState<TeamMember[]>(TEAM);

  useEffect(() => {
    loadTeam();
  }, []);

  const loadTeam = async () => {
    try {
      // Сначала пытаемся загрузить с сервера
      try {
        const response = await fetch('http://localhost:3001/api/team');
        if (response.ok) {
          const data = await response.json();
          setTeam(data.team);
          return;
        }
      } catch (error) {
        // Сервер недоступен, используем данные из constants
        console.log('Сервер недоступен, используем данные из constants');
      }
    } catch (error) {
      console.error('Eroare la încărcarea echipei:', error);
    }
  };
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-20" />
        <div className="absolute inset-0 noise-overlay" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Echipa Noastră</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Medici dedicati, asistenti profesioniști și o administratie eficientă, toti lucrând pentru sănătatea ta.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Administrator */}
        <div className="mb-20">
          <h2 className="font-heading text-2xl font-bold text-slate-900 mb-8 border-l-4 border-medical-blue pl-4">Administratie</h2>
          <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
               <div>
                  <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">{team[0]?.name || ''}</h3>
                 <p className="text-medical-blue-lighter font-medium mb-4">{team[0]?.role || ''}</p>
                  <p className="text-slate-600 leading-relaxed italic mb-4">"{team[0]?.bio || ''}"</p>
                  {team[0]?.phone && (
                    <a 
                      href={`tel:${team[0].phone.replace(/\s/g, '')}`} 
                      className="text-medical-blue font-bold text-lg hover:text-medical-blue-lighter transition-colors"
                    >
                      {team[0].phone.match(/.{1,3}/g)?.join(' ') || team[0].phone}
                    </a>
                  )}
                 <div className="mt-6 flex gap-4">
                   <div className="flex items-center gap-2 text-sm text-slate-500">
                     <Award className="w-4 h-4 text-trust-green" /> 15+ Ani Experientă
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
            {team.filter(member => member.role === 'Medic Stomatolog' || member.role === 'Medic Stomatolog Generalist').map(member => (
              <TeamCard3D key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* Assistants */}
        <div>
          <h2 className="font-heading text-2xl font-bold text-slate-900 mb-8 border-l-4 border-medical-blue pl-4">Asistenti Medicali</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.filter(member => member.role === 'Asistent Superior' || member.role === 'Asistent Medical').map(member => (
              <div key={member.id} className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-all">
                <div className="text-center">
                  <h3 className="font-heading font-bold text-lg mb-2">{member.name}</h3>
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
          <h2 className="font-heading text-3xl font-bold mb-4 relative z-10">Educatie Medicală Continuă</h2>
          <p className="max-w-2xl mx-auto text-slate-200 relative z-10">
            Echipa noastră participă regulat la congrese și cursuri de specializare pentru a fi la curent cu cele mai noi tehnici și tratamente stomatologice.
          </p>
        </div>
      </div>
    </div>
  );
};