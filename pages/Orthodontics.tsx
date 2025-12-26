import React from 'react';
import { Check, Clock, Phone, Calendar, Star, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const bracketTypes = [
  {
    name: 'Brackets Metalici Ligaturabili',
    price: '5,440 MDL',
    description: 'Opțiunea clasică și accesibilă. Eficiență dovedită în corectarea tuturor problemelor de aliniere.',
    pros: ['Cel mai accesibil preț', 'Foarte eficiente', 'Durabile'],
    image: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Brackets Ceramici Ligaturabili',
    price: '8,332 MDL',
    description: 'Discreție maximă cu eficiență similară metalicilor. Ideali pentru cei care doresc estetică.',
    pros: ['Aproape invizibili', 'Nu se pătează ușor', 'Estetici'],
    image: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Brackets Metalici Autoligaturabili',
    price: '7,922 MDL',
    description: 'Tehnologie avansată care reduce frecvența vizitelor și timpul de tratament.',
    pros: ['Mai puține vizite', 'Tratament mai rapid', 'Confort crescut'],
    image: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Brackets Ceramici Autoligaturabili',
    price: '11,171 MDL',
    description: 'Combinația perfectă între estetică și tehnologie modernă.',
    pros: ['Discreți și eficienți', 'Premium', 'Cel mai rapid tratament'],
    image: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&q=80&w=400'
  },
];

const problems = [
  { name: 'Suprapunere', desc: 'Dinți înghesuiți sau suprapuși' },
  { name: 'Spații', desc: 'Distanțe mari între dinți' },
  { name: 'Mușcătură adâncă', desc: 'Dinții superiori acoperă prea mult dinții inferiori' },
  { name: 'Mușcătură deschisă', desc: 'Dinții nu se ating când gura e închisă' },
  { name: 'Prognatism', desc: 'Maxilarul inferior în față' },
  { name: 'Retrognatism', desc: 'Maxilarul inferior în spate' },
];

export const Orthodontics = () => {
  const orthodonticsServices = SERVICES.filter(s => s.category === 'ortodontie');

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-white rounded-full" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 border-4 border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Zâmbete Perfecte</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Ortodonție
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Corectarea alinierii dinților pentru un zâmbet sănătos și estetic. Soluții pentru copii și adulți.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/programare">
              <Button size="lg" as="div" className="bg-white text-teal-600 hover:bg-teal-50">
                Consultație Ortodontică
              </Button>
            </Link>
            <Link to="/preturi">
              <Button variant="outline" size="lg" as="div" className="border-white/40 hover:bg-white/10">
                Vezi Prețurile
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Why Orthodontics */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&q=80&w=800"
              alt="Ortodonție"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-teal-500" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Rezultate Garantate</p>
                  <p className="text-sm text-slate-500">La finalul tratamentului</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6">
              De Ce Este Important Tratamentul Ortodontic?
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Ortodonția nu este doar despre estetică. Dinții corect aliniați sunt mai ușor de curățat, reducând riscul de carii și boli gingivale. O mușcătură corectă previne problemele articulației temporo-mandibulare și uzura prematură a dinților.
            </p>
            <div className="space-y-4">
              {[
                'Zâmbet estetic și armonios',
                'Igienă orală mai ușoară',
                'Prevenirea uzurii dentare',
                'Îmbunătățirea masticației',
                'Creșterea încrederii în sine'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-teal-500" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Problems We Treat */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">
              Ce Probleme Tratăm?
            </h2>
            <p className="text-slate-600">Corectăm o gamă largă de probleme de aliniere</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">{problem.name}</h3>
                <p className="text-slate-600">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bracket Types */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">
              Tipuri de Aparate Dentare
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Alegem împreună cel mai potrivit tip de aparat în funcție de nevoile și preferințele tale.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {bracketTypes.map((bracket, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-heading font-bold text-xl text-slate-900">{bracket.name}</h3>
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full font-bold text-sm">
                      {bracket.price}/arcadă
                    </span>
                  </div>
                  <p className="text-slate-600 mb-4">{bracket.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {bracket.pros.map((pro, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                        <Check className="w-3 h-3 inline mr-1" /> {pro}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Treatment Duration */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 mb-20 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6">
                Cât Durează Tratamentul?
              </h2>
              <p className="text-slate-300 mb-6">
                Durata tratamentului ortodontic variază în funcție de complexitatea cazului și tipul de aparat ales.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold">Cazuri Simple</p>
                    <p className="text-slate-400">12-18 luni</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold">Cazuri Moderate</p>
                    <p className="text-slate-400">18-24 luni</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold">Cazuri Complexe</p>
                    <p className="text-slate-400">24-36 luni</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <h3 className="font-heading font-bold text-xl mb-6">Etapele Tratamentului</h3>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Consultație și diagnostic', desc: 'Evaluare, radiografii, amprente' },
                  { step: '2', title: 'Plan de tratament', desc: 'Alegerea tipului de aparat' },
                  { step: '3', title: 'Montarea aparatului', desc: 'Aplicarea brackeților' },
                  { step: '4', title: 'Controale lunare', desc: 'Ajustări și monitorizare' },
                  { step: '5', title: 'Demontare și retenție', desc: 'Aparat de menținere' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center shrink-0 text-sm font-bold">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-bold">{item.title}</p>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* All Prices */}
        <div className="mb-20">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-8 text-center">
            Lista Completă de Prețuri
          </h2>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-slate-700">Serviciu</th>
                  <th className="px-6 py-4 text-right font-bold text-slate-700">Preț (MDL)</th>
                </tr>
              </thead>
              <tbody>
                {orthodonticsServices.map((service, index) => (
                  <tr key={service.id} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                    <td className="px-6 py-4">
                      <span className="text-slate-900">{service.name}</span>
                      {service.subcategory && (
                        <span className="ml-2 text-xs text-slate-500">({service.subcategory})</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right font-mono font-bold text-medical-blue">
                      {typeof service.price === 'number' ? service.price.toLocaleString() : service.price} MDL
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="font-heading text-3xl font-bold mb-4">
            Începe Transformarea Zâmbetului Tău
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Programează o consultație ortodontică pentru a afla care este cel mai potrivit tratament pentru tine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/programare">
              <Button size="lg" as="div" className="bg-white text-teal-600 hover:bg-teal-50">
                <Calendar className="w-5 h-5 mr-2" /> Programează Acum
              </Button>
            </Link>
            <a href="tel:079772488">
              <Button variant="outline" size="lg" as="div" className="border-white/40 hover:bg-white/10">
                <Phone className="w-5 h-5 mr-2" /> 079 772 488
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
