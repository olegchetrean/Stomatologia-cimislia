import React, { useState, useEffect } from 'react';
import { AlertTriangle, Phone, Clock, MapPin, CheckCircle, ArrowRight, User } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { TEAM } from '../constants';
import { TeamMember } from '../types';

const emergencyTypes = [
  {
    title: 'Durere Dentară Acută',
    description: 'Durere puternică, pulsatilă care nu cedează la analgezice obișnuite.',
    urgency: 'high',
    advice: 'Contactati-ne imediat. Între timp, puteti lua un analgezic și aplicati comprese reci pe obraz.'
  },
  {
    title: 'Dinte Scos/Avulsionat',
    description: 'Un dinte permanent a fost complet scos din alveolă în urma unui traumatism.',
    urgency: 'critical',
    advice: 'Timp esential! Păstrati dintele în lapte sau salivă și prezentati-vă în max 30 minute pentru reimplantare.'
  },
  {
    title: 'Dinte Fracturat',
    description: 'Dinte rupt sau fisurat în urma unui accident sau mușcării de ceva dur.',
    urgency: 'high',
    advice: 'Clătiti ușor gura. Păstrati fragmentele dacă le găsiti. Prezentati-vă cât mai curând.'
  },
  {
    title: 'Sângerare Abundentă',
    description: 'Sângerare care nu se oprește după extracție sau traumatism.',
    urgency: 'critical',
    advice: 'Aplicati presiune cu o compresă sterilă. Dacă nu se oprește în 20 de minute, prezentati-vă urgent.'
  },
  {
    title: 'Abces Dentar',
    description: 'Umflătură dureroasă la gingii sau fată, posibil cu febră.',
    urgency: 'high',
    advice: 'Necesită tratament urgent pentru a preveni răspândirea infectiei. Nu încercati să spargeti abcesul!'
  },
  {
    title: 'Coroană/Obturație Căzută',
    description: 'Lucrare protetică sau plomba s-a desprins de dinte.',
    urgency: 'medium',
    advice: 'Păstrati lucrarea și programati-vă în următoarele zile. Evitati să mestecati pe acea parte.'
  },
];

const firstAidTips = [
  'Rămâneti calm și evaluati situatia',
  'Opriti sângerarea aplicând presiune cu o compresă curată',
  'Aplicati gheată pe fată pentru a reduce umflătura',
  'Nu luati aspirină în caz de sângerare (subtiază sângele)',
  'Păstrati orice fragment dentar în lapte sau salivă',
  'Contactati medicul stomatolog cât mai curând',
];

const formatPhone = (phone: string | undefined): string => {
  if (!phone) return '';
  const cleaned = phone.replace(/\s/g, '');
  // Formatare pentru numere moldovenești
  if (cleaned.startsWith('0690')) {
    return cleaned.replace(/(\d{4})(\d{2})(\d{3})/, '$1 $2 $3');
  } else if (cleaned.startsWith('0692')) {
    return cleaned.replace(/(\d{4})(\d{2})(\d{3})/, '$1 $2 $3');
  } else if (cleaned.length === 9) {
    return cleaned.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
  }
  return phone;
};

export const Emergency = () => {
  const [team, setTeam] = useState<TeamMember[]>(TEAM);

  useEffect(() => {
    loadTeam();
  }, []);

  const loadTeam = async () => {
    try {
      try {
        const response = await fetch('http://localhost:3001/api/team');
        if (response.ok) {
          const data = await response.json();
          setTeam(data.team);
          return;
        }
      } catch (error) {
        console.log('Сервер недоступен, используем данные из constants');
      }
    } catch (error) {
      console.error('Eroare la încărcarea echipei:', error);
    }
  };

  // Получаем уникальных врачей с номерами (убираем дубликаты по номеру)
  const doctorsWithPhones = team.filter(member => 
    member.phone && 
    (member.role === 'Medic Stomatolog' || 
     member.role === 'Medic Stomatolog Generalist' || 
     member.role === 'Administrator Interimar')
  ).reduce((acc, member) => {
    // Если номер уже есть, пропускаем (приоритет врачам перед администратором)
    if (!acc.find(m => m.phone === member.phone)) {
      acc.push(member);
    } else {
      // Если это врач, заменяем администратора
      const existingIndex = acc.findIndex(m => m.phone === member.phone);
      if (member.role !== 'Administrator Interimar' && acc[existingIndex].role === 'Administrator Interimar') {
        acc[existingIndex] = member;
      }
    }
    return acc;
  }, [] as TeamMember[]);

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Emergency Banner */}
      <div className="bg-gradient-to-br from-red-600 via-red-600 to-red-700 text-white py-10 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 animate-pulse" />
              </div>
              <div className="text-center sm:text-left">
                <h2 className="font-heading font-bold text-2xl sm:text-3xl">Urgentă Stomatologică?</h2>
                <p className="text-red-100 text-sm sm:text-base mt-1">Sunati acum pentru asistentă imediată</p>
              </div>
            </div>
            {/* Основной номер для срочных случаев - Galina Godoroja */}
            <a 
              href="tel:069363336"
              className="group bg-white text-red-600 hover:bg-red-50 rounded-2xl px-10 py-5 transition-all border-2 border-white/40 hover:border-white shadow-2xl hover:shadow-3xl hover:scale-105 transform"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div className="text-center">
                  <div className="font-bold text-xl sm:text-2xl">Dr. Galina Godoroja</div>
                  <div className="text-lg sm:text-xl font-semibold mt-1.5 text-red-700">069 363 336</div>
                </div>
              </div>
            </a>
            {/* Остальные врачи */}
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {doctorsWithPhones.filter(member => member.id !== 'dr-galina-godoroja').map(member => (
                <a 
                  key={member.id} 
                  href={`tel:${member.phone.replace(/\s/g, '')}`}
                  className="group bg-white/15 hover:bg-white/25 backdrop-blur-md rounded-xl px-6 py-3 transition-all border border-white/25 hover:border-white/40 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-sm">{member.name.split(' ').pop()}</span>
                      <span className="font-bold text-sm">{formatPhone(member.phone)}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Urgente Stomatologice</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            În caz de urgentă dentară, contactati-ne imediat. Vă vom acorda prioritate și vă vom programa în cel mai scurt timp posibil.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 -mt-8 relative z-10">
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-4">Telefon Urgente</h3>
            {/* Основной номер для срочных случаев - Galina Godoroja */}
            <a 
              href="tel:069363336"
              className="block mb-4 p-4 bg-red-50 rounded-xl border-2 border-red-200 hover:bg-red-100 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium text-slate-700">Dr. Galina Godoroja</span>
                  <span className="block text-xs text-slate-500 mt-1">Pentru urgente</span>
                </div>
                <span className="text-xl font-bold text-red-600">069 363 336</span>
              </div>
            </a>
            <div className="space-y-3">
              {doctorsWithPhones.filter(member => member.id !== 'dr-galina-godoroja').map(member => (
                <a 
                  key={member.id} 
                  href={`tel:${member.phone.replace(/\s/g, '')}`}
                  className="block text-lg font-semibold text-red-600 hover:text-red-700 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">{member.name}</span>
                    <span className="font-bold">{formatPhone(member.phone)}</span>
                  </div>
                </a>
              ))}
            </div>
            <p className="text-slate-600 text-sm mt-4">Disponibil în orele de program</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">Program Urgente</h3>
            <p className="text-xl font-bold text-slate-900">Luni - Vineri</p>
            <p className="text-slate-600">08:00 - 16:00</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">Adresa Clinicii</h3>
            <p className="text-slate-900 font-medium">Str. Alexandru cel Bun 135</p>
            <p className="text-slate-600">Cimișlia, Moldova</p>
          </div>
        </div>

        {/* Doctors Contact */}
        <div className="mb-16">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-8">Contactati Medicul Dvs.</h2>
          <p className="text-slate-600 mb-6 max-w-3xl">
            În caz de urgentă, puteti contacta direct medicul dvs. pentru a evita întârzierile. Dacă medicul dvs. nu este disponibil, contactati alt medic din echipă.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctorsWithPhones.map(member => (
              <div key={member.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-medical-blue/10 rounded-xl flex items-center justify-center text-medical-blue shrink-0">
                    <User className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-lg text-slate-900 mb-1">{member.name}</h3>
                    <p className="text-sm text-slate-500 mb-3">{member.role}</p>
                    {member.phone && (
                      <a 
                        href={`tel:${member.phone.replace(/\s/g, '')}`} 
                        className="flex items-center gap-2 text-medical-blue font-bold hover:text-medical-blue-lighter transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        {formatPhone(member.phone)}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Types */}
        <div className="mb-16">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-8">Tipuri de Urgente</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {emergencyTypes.map((emergency, index) => (
              <div key={index} className={`bg-white rounded-2xl p-6 border-l-4 ${
                emergency.urgency === 'critical' ? 'border-red-500' :
                emergency.urgency === 'high' ? 'border-orange-500' : 'border-yellow-500'
              } shadow-sm`}>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-heading font-bold text-xl text-slate-900">{emergency.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    emergency.urgency === 'critical' ? 'bg-red-100 text-red-700' :
                    emergency.urgency === 'high' ? 'bg-orange-100 text-orange-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {emergency.urgency === 'critical' ? 'CRITIC' :
                     emergency.urgency === 'high' ? 'URGENT' : 'MODERAT'}
                  </span>
                </div>
                <p className="text-slate-600 mb-4">{emergency.description}</p>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-sm font-medium text-slate-700">
                    <strong>Sfat:</strong> {emergency.advice}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* First Aid Tips */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-8">Primul Ajutor</h2>
            <div className="space-y-4">
              {firstAidTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm">
                  <div className="w-8 h-8 bg-trust-green/10 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-trust-green" />
                  </div>
                  <p className="text-slate-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-8">Ce Să NU Faceti</h2>
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <ul className="space-y-4">
                {[
                  'Nu ignorati durerea severă - poate indica o infectie gravă',
                  'Nu aplicati aspirină direct pe dinte sau gingii',
                  'Nu încercati să extrageti singur un dinte mobil',
                  'Nu folositi obiecte ascutite pentru a îndepărta resturi alimentare',
                  'Nu amânati vizita la medic dacă aveti febră asociată cu durere dentară',
                  'Nu consumati alimente sau băuturi foarte fierbinti/reci pe zona afectată',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-red-800">
                    <span className="text-red-500 font-bold">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 md:p-12 text-white text-center">
          <AlertTriangle className="w-16 h-16 mx-auto mb-6 opacity-50" />
          <h2 className="font-heading text-3xl font-bold mb-4">Nu Așteptati!</h2>
          <p className="text-red-100 mb-8 max-w-2xl mx-auto text-lg">
            În caz de urgentă stomatologică, timpul contează. Contactati-ne imediat pentru a primi ajutorul de care aveti nevoie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Основной номер для срочных случаев - Galina Godoroja */}
            <a href="tel:069363336">
              <Button size="lg" as="div" className="bg-white text-red-600 hover:bg-red-50">
                <Phone className="w-5 h-5 mr-2" /> Dr. Galina Godoroja: 069 363 336
              </Button>
            </a>
            <div className="flex flex-wrap justify-center gap-2">
              {doctorsWithPhones.filter(member => member.id !== 'dr-galina-godoroja').map(member => (
                <a key={member.id} href={`tel:${member.phone.replace(/\s/g, '')}`}>
                  <Button size="lg" as="div" className="bg-white/10 text-white hover:bg-white/20 border border-white/30">
                    <Phone className="w-5 h-5 mr-2" /> {member.name.split(' ').pop()}: {formatPhone(member.phone)}
                  </Button>
                </a>
              ))}
            </div>
            <Link to="/programare">
              <Button variant="outline" size="lg" as="div" className="border-white/40 hover:bg-white/10">
                Programare Normală <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
