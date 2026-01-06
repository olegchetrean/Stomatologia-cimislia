import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Check, Shield, Clock, Users, Sparkles, Star,
  Heart, Award, Phone, Calendar, MapPin, ChevronRight,
  Stethoscope, Smile, Baby, Zap, Quote, CheckCircle,
  MessageCircle, ThumbsUp, FileText
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { GlassServiceCard } from '../components/cards/GlassServiceCard';
import { TeamCard3D } from '../components/cards/TeamCard3D';
import { loadServices, loadTeam } from '../lib/dataLoader';
import { TESTIMONIALS, FAQS } from '../constants';
import { Service, TeamMember } from '../types';

export const Home = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const [servicesData, teamData] = await Promise.all([
      loadServices(),
      loadTeam()
    ]);
    setServices(servicesData);
    setTeam(teamData);
  };

  const featuredServices = [
    services.find(s => s.id === '1.1'),
    services.find(s => s.id === '4.23'),
    services.find(s => s.id === '4.13'),
    services.find(s => s.id === '5.2'),
    services.find(s => s.id === '4.21'),
    services.find(s => s.id === '3.2')
  ].filter(Boolean);

  const stats = [
    { number: '15+', label: 'Ani Experientă', icon: Award },
    { number: '5000+', label: 'Pacienti Fericiti', icon: Users },
    { number: '270+', label: 'Servicii Disponibile', icon: Stethoscope },
    { number: '98%', label: 'Rata de Satisfactie', icon: ThumbsUp },
  ];

  const specialties = [
    { icon: Smile, title: 'Stomatologie Terapeutică', desc: 'Tratamentul gingivitelor, parodontitelor, cariilor, pulpitelor, periodontitelor, restaurări dentare și albire a dintilor', color: 'bg-blue-500' },
    { icon: Baby, title: 'Stomatologie Pediatrică', desc: 'Igienizarea cavitătii bucale, tratarea cariilor și complicatiilor dintilor temporari și permanenti, extractii', color: 'bg-green-500' },
    { icon: Shield, title: 'Chirurgie Dento-Alveolară', desc: 'Extractii dentare tipice și atipice, chirurgie de urgentă a traumatismelor, tratamentul complicatiilor proceselor inflamatorii', color: 'bg-orange-500' },
  ];

  const processSteps = [
    { step: '01', title: 'Programare', desc: 'Contactează-ne telefonic sau online pentru o programare la ora dorită.' },
    { step: '02', title: 'Consultație', desc: 'Medicul evaluează starea de sănătate orală și stabilește planul de tratament.' },
    { step: '03', title: 'Tratament', desc: 'Efectuăm tratamentele necesare cu cele mai moderne tehnici și materiale.' },
    { step: '04', title: 'Urmărire', desc: 'Monitorizăm evolutia și oferim sfaturi pentru mentinerea sănătătii orale.' },
  ];

  const benefits = [
    { icon: Clock, title: 'Program Flexibil', desc: 'Luni-Vineri 08:00-16:00' },
    { icon: Shield, title: 'Sterilizare Totală', desc: 'Standarde europene de igienă' },
    { icon: Award, title: 'Medici Certificati', desc: 'Echipă cu experientă vastă' },
    { icon: FileText, title: 'CNAM Acceptat', desc: 'Servicii decontate de stat' },
    { icon: Zap, title: 'Tehnologie Modernă', desc: 'Echipamente de ultimă generatie' },
    { icon: Heart, title: 'Fără Durere', desc: 'Tratamente atraumatice' },
  ];

  return (
    <div className="overflow-hidden bg-slate-50">
      {/* ============================================ */}
      {/* SECTIUNEA 1: HERO SECTION */}
      {/* ============================================ */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-medical-blue z-0">
          <div className="absolute inset-0 mesh-gradient opacity-90" />
          <div className="absolute inset-0 noise-overlay" />
        </div>

        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <Shield className="w-4 h-4 text-trust-green" />
              <span className="text-sm font-medium tracking-wide">Acreditat CNEAS & Ministerul Sănătătii</span>
            </div>

            <h1 className="font-heading font-bold text-5xl md:text-7xl leading-[1.1] drop-shadow-sm">
              Sănătatea <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-blue-lighter to-trust-teal drop-shadow-none">Zâmbetului Tău</span> <br/>
              Începe Aici.
            </h1>

            <p className="text-lg text-slate-200 max-w-xl leading-relaxed">
              Cea mai modernă clinică stomatologică din Cimișlia. Echipă de elită, tehnologie de ultimă generatie și o abordare empatică pentru întreaga familie.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" as="div" className="w-full sm:w-auto">Programează Consultație</Button>
              </Link>
              <Link to="/servicii" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" as="div" className="w-full sm:w-auto">Vezi Tarifele</Button>
              </Link>
            </div>

            <div className="pt-8 flex flex-wrap items-center gap-8 border-t border-white/10">
              {stats.slice(0, 3).map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-bold font-heading text-white">{stat.number}</p>
                  <p className="text-sm text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[500px] md:h-[600px] hidden md:block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-medical-blue-lighter/20 rounded-full blur-[100px]" />

             <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl animate-float">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                  alt="Modern Dental Clinic"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-medical-blue/80 via-transparent to-transparent" />
             </div>

             <div className="absolute left-0 bottom-24 z-20 bg-white p-4 rounded-xl flex items-center gap-3 shadow-lg">
                <div className="w-10 h-10 rounded-full bg-trust-green/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-trust-green" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Tratamente Fără Durere</p>
                  <p className="text-xs text-slate-500">Anestezie modernă</p>
                </div>
             </div>

             <div className="absolute right-0 top-24 z-20 bg-white p-4 rounded-xl flex items-center gap-3 shadow-lg">
                <div className="w-10 h-10 rounded-full bg-medical-blue-lighter/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-medical-blue-lighter" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Programare Rapidă</p>
                  <p className="text-xs text-slate-500">Fără timp de așteptare</p>
                </div>
             </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTIUNEA 2: STATISTICI & NUMERE */}
      {/* ============================================ */}
      <section className="py-20 bg-white relative z-10 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-medical-blue/5 rounded-2xl flex items-center justify-center group-hover:bg-medical-blue group-hover:text-white transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-medical-blue group-hover:text-white transition-colors" />
                </div>
                <p className="text-4xl font-bold font-heading text-medical-blue mb-2">{stat.number}</p>
                <p className="text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTIUNEA 3: DE CE SĂ NE ALEGI */}
      {/* ============================================ */}
      <section className="py-20 bg-slate-50 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-medical-blue-lighter font-bold tracking-wider uppercase text-sm">Avantajele Noastre</span>
            <h2 className="font-heading text-4xl font-bold text-slate-900 mt-2 mb-4">De ce să alegi <span className="text-medical-blue-lighter">ÎM CSR Cimișlia?</span></h2>
            <p className="text-slate-600 text-lg">Combinăm expertiza medicală cu tehnologia modernă pentru a oferi cele mai bune rezultate.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 group">
                <div className="w-14 h-14 bg-medical-blue/5 rounded-xl flex items-center justify-center mb-6 text-medical-blue group-hover:bg-medical-blue group-hover:text-white transition-colors duration-300">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTIUNEA 4: SPECIALITĂTILE NOASTRE */}
      {/* ============================================ */}
      <section className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-medical-blue-lighter font-bold tracking-wider uppercase text-sm">Domeniile Noastre</span>
            <h2 className="font-heading text-4xl font-bold text-slate-900 mt-2 mb-4">Specialităti Medicale</h2>
            <p className="text-slate-600 text-lg">Oferim o gamă completă de servicii stomatologice pentru toate vârstele și nevoile.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((item, i) => (
              <Link to="/servicii" key={i} className="group">
                <div className="bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100">
                  <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mb-6 text-white shadow-lg`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3 text-slate-900 group-hover:text-medical-blue transition-colors">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{item.desc}</p>
                  <span className="inline-flex items-center text-medical-blue-lighter font-medium text-sm group-hover:gap-2 transition-all">
                    Află mai multe <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTIUNEA 5: SERVICII POPULARE */}
      {/* ============================================ */}
      <section className="py-20 bg-slate-50 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <span className="text-medical-blue-lighter font-bold tracking-wider uppercase text-sm">Catalog de Servicii</span>
              <h2 className="font-heading text-4xl font-bold text-slate-900 mt-2">Servicii Populare</h2>
            </div>
            <Link to="/servicii" className="hidden md:block">
              <Button variant="secondary" as="div">Vezi Toate Serviciile</Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service: any) => (
              <GlassServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/servicii">
              <Button variant="secondary" as="div" className="w-full">Vezi Toate Serviciile</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTIUNEA 6: PROCESUL DE TRATAMENT */}
      {/* ============================================ */}
      <section className="py-20 bg-medical-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="absolute inset-0 noise-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-medical-blue-lighter font-bold tracking-wider uppercase text-sm">Cum Functionează</span>
            <h2 className="font-heading text-4xl font-bold mt-2 mb-4">Procesul de Tratament</h2>
            <p className="text-slate-300 text-lg">Patru pași simpli către un zâmbet sănătos și frumos.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, i) => (
              <div key={i} className="relative">
                <div className="text-7xl font-bold font-heading text-white/10 absolute -top-4 -left-2">{item.step}</div>
                <div className="relative z-10 pt-8">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm border border-white/20">
                    <span className="text-xl font-bold">{i + 1}</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-white/20" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/contact">
              <Button size="lg" as="div" className="bg-white text-medical-blue hover:bg-slate-100">
                Programează Prima Consultație
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTIUNEA 7: ECHIPA MEDICALĂ */}
      {/* ============================================ */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-20" />
        <div className="absolute inset-0 noise-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-medical-blue-lighter font-bold tracking-wider uppercase text-sm">Profesioniști Dedicati</span>
            <h2 className="font-heading text-4xl font-bold mt-2 mb-4">Cunoaște Echipa</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">Medici cu experientă vastă și pasiune pentru excelentă în stomatologie.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.filter(member => member.role === 'Medic Stomatolog' || member.role === 'Medic Stomatolog Generalist').map(member => (
              <TeamCard3D key={member.id} member={member} />
            ))}
          </div>

           <div className="mt-12 text-center">
            <Link to="/echipa">
              <Button variant="outline" as="div">Vezi Întreaga Echipă</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTIUNEA 8: TESTIMONIALE */}
      {/* ============================================ */}
      <section className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-medical-blue-lighter font-bold tracking-wider uppercase text-sm">Feedback</span>
            <h2 className="font-heading text-4xl font-bold text-slate-900 mt-2 mb-4">Ce Spun Pacientii</h2>
            <p className="text-slate-600 text-lg">Părerea pacientilor noștri contează cel mai mult pentru noi.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="bg-slate-50 p-8 rounded-2xl relative">
                <Quote className="w-10 h-10 text-medical-blue/10 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-medical-blue rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/sugestii">
              <Button variant="secondary" as="div">Lasă o Recenzie</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTIUNEA 9: FAQ - ÎNTREBĂRI FRECVENTE */}
      {/* ============================================ */}
      <section className="py-20 bg-slate-50 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-medical-blue-lighter font-bold tracking-wider uppercase text-sm">Întrebări Frecvente</span>
              <h2 className="font-heading text-4xl font-bold text-slate-900 mt-2 mb-4">Ai Întrebări?</h2>
              <p className="text-slate-600 text-lg mb-8">Găsește răspunsuri la cele mai frecvente întrebări despre serviciile noastre.</p>

              <div className="bg-gradient-to-br from-medical-blue to-medical-blue-light rounded-2xl p-8 text-white">
                <h3 className="font-heading font-bold text-xl mb-4">Nu ai găsit răspunsul?</h3>
                <p className="text-slate-200 mb-6">Echipa noastră este gata să te ajute cu orice întrebare.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:079772488" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-3 rounded-xl transition-colors">
                    <Phone className="w-5 h-5" />
                    <span>079 772 488</span>
                  </a>
                  <Link to="/contact" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-3 rounded-xl transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span>Trimite Mesaj</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl border border-slate-100 overflow-hidden">
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-heading font-bold text-slate-900">{faq.question}</span>
                    <ChevronRight className={`w-5 h-5 text-medical-blue transition-transform ${activeFaq === i ? 'rotate-90' : ''}`} />
                  </button>
                  {activeFaq === i && (
                    <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTIUNEA 10: CNAM & ASIGURĂRI */}
      {/* ============================================ */}
      <section className="py-20 bg-trust-green/5 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-trust-green/10 border border-trust-green/20 mb-6">
                <CheckCircle className="w-5 h-5 text-trust-green" />
                <span className="text-sm font-medium text-trust-green">Contract CNAM Activ</span>
              </div>
              <h2 className="font-heading text-4xl font-bold text-slate-900 mb-6">Acceptăm Asigurări Medicale CNAM</h2>
              <p className="text-slate-600 text-lg mb-8">
                ÎM CSR Cimișlia are contract cu Compania Natională de Asigurări în Medicină. Serviciile CNAM sunt disponibile pentru copiii până la 18 ani, femeile gravide și urgentele medicale pentru pacientii care detin polite de asigurare CNAM.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  'Copiii până la 18 ani',
                  'Femeile gravide',
                  'Urgente medicale (pacienti cu polită CNAM)'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-trust-green shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/informatii-utile">
                <Button as="div" className="bg-trust-green hover:bg-trust-green/90">
                  Află Mai Multe despre CNAM
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-trust-green/10 rounded-2xl flex items-center justify-center">
                    <FileText className="w-8 h-8 text-trust-green" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-slate-900">Documente Necesare</h3>
                    <p className="text-slate-500">Pentru servicii CNAM</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    'Buletin de identitate (original)',
                    'Adeverintă de naștere (pentru minori)'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-trust-green/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-trust-green">{i + 1}</span>
                      </div>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative element */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-trust-green/10 rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTIUNEA 11: LOCATIE & HARTĂ */}
      {/* ============================================ */}
      <section className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-medical-blue-lighter font-bold tracking-wider uppercase text-sm">Vizitează-ne</span>
            <h2 className="font-heading text-4xl font-bold text-slate-900 mt-2 mb-4">Locatia Noastră</h2>
            <p className="text-slate-600 text-lg">Suntem ușor de găsit în centrul orașului Cimișlia.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-medical-blue/10 rounded-xl flex items-center justify-center text-medical-blue shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-2">Adresa</h3>
                    <p className="text-slate-600">Strada Alexandru cel Bun 135,<br/>Cimișlia, Republica Moldova</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-medical-blue/10 rounded-xl flex items-center justify-center text-medical-blue shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-2">Program</h3>
                    <p className="text-slate-600">Luni - Vineri: 08:00 - 16:00<br/>Sâmbătă - Duminică: Închis</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-medical-blue/10 rounded-xl flex items-center justify-center text-medical-blue shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-2">Contact</h3>
                    <a href="tel:079772488" className="text-medical-blue font-bold text-lg hover:text-medical-blue-lighter">079 772 488</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2744.027042531362!2d28.7667!3d46.5417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDMyJzMwLjEiTiAyOMKwNDYnMDAuMSJF!5e0!3m2!1sen!2smd!4v1620000000000!5m2!1sen!2smd"
                width="100%"
                height="100%"
                style={{border:0}}
                allowFullScreen={true}
                loading="lazy"
                title="Locatia ÎM CSR Cimișlia"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTIUNEA 12: CTA FINAL */}
      {/* ============================================ */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-medical-blue to-medical-blue-light" />
        <div className="absolute inset-0 noise-overlay" />
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Pregătit pentru un zâmbet sănătos?</h2>
            <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto">
              Programează o consultație astăzi și beneficiază de tratamente la standarde europene, într-un mediu modern și prietenos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" as="div" className="bg-white text-medical-blue hover:bg-slate-100 w-full sm:w-auto shadow-xl">
                  <Calendar className="w-5 h-5 mr-2" />
                  Programează Acum
                </Button>
              </Link>
              <a href="tel:079772488">
                <Button variant="outline" size="lg" as="div" className="w-full sm:w-auto border-white/40 hover:bg-white/10">
                  <Phone className="w-5 h-5 mr-2" />
                  Sună: 079 772 488
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
