import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, Mail, FileText, Check, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { TEAM } from '../constants';
import { TeamMember } from '../types';

const services = [
  'Consultație Generală',
  'Tratament Carie',
  'Detartraj și Igienizare',
  'Extracție Dentară',
  'Tratament de Canal',
  'Proteză Dentară',
  'Implant Dentar',
  'Ortodontie',
  'Albire Dentară',
  'Urgentă Stomatologică',
  'Consultație Copii',
  'Altele',
];

const timeSlots = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '12:00', '13:00', '13:30', '14:00',
  '14:30', '15:00', '15:30', '16:00'
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

export const Appointments = () => {
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

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: '',
    firstVisit: 'da',
    cnam: 'nu',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulare trimitere formular
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 pt-20 flex items-center justify-center">
        <div className="bg-white rounded-3xl p-12 shadow-xl max-w-lg text-center">
          <div className="w-20 h-20 bg-trust-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-trust-green" />
          </div>
          <h1 className="font-heading text-3xl font-bold text-slate-900 mb-4">Cerere Trimisă!</h1>
          <p className="text-slate-600 mb-8">
            Multumim pentru cererea de programare! Vă vom contacta în cel mai scurt timp pentru confirmare.
          </p>
          <div className="bg-slate-50 rounded-xl p-4 text-left mb-8">
            <p className="text-sm text-slate-500 mb-2">Detalii programare:</p>
            <p className="font-medium">{formData.service}</p>
            <p className="text-slate-600">{formData.date} la ora {formData.time}</p>
          </div>
          <Link to="/">
            <Button as="div" className="w-full">Înapoi la Pagina Principală</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Header */}
      <div className="bg-medical-blue text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-40" />
        <div className="absolute inset-0 noise-overlay" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">Programare Online</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Programează o Consultație</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Completează formularul de mai jos și te vom contacta pentru confirmare.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="font-heading text-2xl font-bold mb-8">Completează Datele</h2>

              {/* Personal Info */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Nume Complet *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-medical-blue-lighter/50"
                    placeholder="Ion Popescu"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-medical-blue-lighter/50"
                    placeholder="079 xxx xxx"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-medical-blue-lighter/50"
                  placeholder="email@exemplu.md"
                />
              </div>

              {/* Service Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <FileText className="w-4 h-4 inline mr-2" />
                  Serviciul Dorit *
                </label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-medical-blue-lighter/50 bg-white"
                >
                  <option value="">Selectează serviciul</option>
                  {services.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Data Preferată *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-medical-blue-lighter/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Ora Preferată *
                  </label>
                  <select
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-medical-blue-lighter/50 bg-white"
                  >
                    <option value="">Selectează ora</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Additional Options */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Prima vizită la clinica noastră?</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="firstVisit"
                        value="da"
                        checked={formData.firstVisit === 'da'}
                        onChange={(e) => setFormData({ ...formData, firstVisit: e.target.value })}
                        className="w-4 h-4 text-medical-blue"
                      />
                      <span>Da</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="firstVisit"
                        value="nu"
                        checked={formData.firstVisit === 'nu'}
                        onChange={(e) => setFormData({ ...formData, firstVisit: e.target.value })}
                        className="w-4 h-4 text-medical-blue"
                      />
                      <span>Nu</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Aveti asigurare CNAM?</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="cnam"
                        value="da"
                        checked={formData.cnam === 'da'}
                        onChange={(e) => setFormData({ ...formData, cnam: e.target.value })}
                        className="w-4 h-4 text-medical-blue"
                      />
                      <span>Da</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="cnam"
                        value="nu"
                        checked={formData.cnam === 'nu'}
                        onChange={(e) => setFormData({ ...formData, cnam: e.target.value })}
                        className="w-4 h-4 text-medical-blue"
                      />
                      <span>Nu</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-slate-700 mb-2">Mesaj Aditional</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-medical-blue-lighter/50"
                  placeholder="Descrieti pe scurt motivul vizitei sau orice informatii relevante..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Calendar className="w-5 h-5 mr-2" />
                Trimite Cererea de Programare
              </Button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="font-heading font-bold text-lg mb-4">Program de Lucru</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Luni - Vineri</span>
                  <span className="font-bold">08:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Sâmbătă</span>
                  <span className="font-bold text-red-500">Închis</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Duminică</span>
                  <span className="font-bold text-red-500">Închis</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="font-heading font-bold text-lg mb-4">Contact Direct</h3>
              <p className="text-slate-600 text-sm mb-4">
                Preferi să ne suni? Contactează direct medicul tău pentru programări:
              </p>
              <div className="space-y-3">
                {doctorsWithPhones.map(member => (
                  <a 
                    key={member.id}
                    href={`tel:${member.phone?.replace(/\s/g, '') || ''}`} 
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-medical-blue/5 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-slate-400 group-hover:text-medical-blue" />
                      <div>
                        <p className="font-medium text-slate-900 text-sm">{member.name}</p>
                        <p className="text-xs text-slate-500">{member.role}</p>
                      </div>
                    </div>
                    <span className="text-medical-blue font-bold text-sm group-hover:text-medical-blue-lighter">
                      {formatPhone(member.phone)}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
              <div className="flex gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 shrink-0" />
                <div>
                  <h3 className="font-heading font-bold text-amber-900 mb-2">Notă Importantă</h3>
                  <p className="text-amber-800 text-sm">
                    Aceasta este o cerere de programare. Vă vom contacta pentru a confirma disponibilitatea și data exactă.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
