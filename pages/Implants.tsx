import React from 'react';
import { Check, Shield, Award, Clock, Phone, Calendar, ArrowRight, Star } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const benefits = [
  {
    title: 'Aspect Natural',
    description: 'Implanturile arată și funcționează exact ca dinții naturali.'
  },
  {
    title: 'Durabilitate',
    description: 'Cu îngrijire corespunzătoare, implanturile pot dura toată viața.'
  },
  {
    title: 'Protejare Osoasă',
    description: 'Previn atrofia osului maxilar care apare la lipsa dinților.'
  },
  {
    title: 'Funcționalitate',
    description: 'Permitem mestecarea normală a tuturor alimentelor.'
  },
  {
    title: 'Confort',
    description: 'Nu necesită adezivi și nu se mișcă ca protezele mobile.'
  },
  {
    title: 'Încredere',
    description: 'Zâmbești și vorbești cu încredere, fără griji.'
  },
];

const process = [
  {
    step: 1,
    title: 'Consultație și Planificare',
    description: 'Evaluare completă, radiografii și CT pentru planificarea implantului.',
    duration: '1-2 vizite'
  },
  {
    step: 2,
    title: 'Inserarea Implantului',
    description: 'Procedură chirurgicală sub anestezie locală pentru plasarea implantului în os.',
    duration: '1-2 ore'
  },
  {
    step: 3,
    title: 'Perioada de Osteointegrare',
    description: 'Timpul necesar pentru integrarea implantului cu osul.',
    duration: '3-6 luni'
  },
  {
    step: 4,
    title: 'Coroana Definitivă',
    description: 'Montarea coroanei pe implant pentru un rezultat estetic perfect.',
    duration: '2-3 vizite'
  },
];

const faqs = [
  {
    q: 'Este dureroasă procedura de implant?',
    a: 'Nu. Procedura se efectuează sub anestezie locală și nu veți simți durere. După intervenție, un disconfort ușor este normal și se tratează cu analgezice.'
  },
  {
    q: 'Cât durează întreaga procedură?',
    a: 'De la prima consultație până la coroana definitivă, procesul durează în medie 4-6 luni, în funcție de caz.'
  },
  {
    q: 'Cât costă un implant dentar?',
    a: 'Prețul variază în funcție de tipul implantului și complexitatea cazului. Consultați lista noastră de prețuri sau programați o consultație pentru o evaluare personalizată.'
  },
  {
    q: 'Cât durează un implant?',
    a: 'Cu îngrijire corespunzătoare, un implant dentar poate dura toată viața. Rata de succes pe termen lung este de peste 95%.'
  },
];

export const Implants = () => {
  const implantServices = SERVICES.filter(s => s.subcategory === 'Implantologie' || s.id.startsWith('5.2'));

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Header */}
      <div className="relative h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=1200"
          alt="Implantologie"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-medical-blue/95 to-medical-blue/70" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md mb-6">
                <Award className="w-4 h-4" />
                <span className="text-sm font-medium">Tehnologie de Ultimă Generație</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Implantologie Dentară
              </h1>
              <p className="text-xl text-slate-200 mb-8">
                Soluția permanentă pentru înlocuirea dinților lipsă. Redescoperă plăcerea de a zâmbi și mesteca fără restricții.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/programare">
                  <Button size="lg" as="div" className="bg-white text-medical-blue hover:bg-slate-100">
                    Consultație Gratuită
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
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* What is an Implant */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6">
              Ce Este un Implant Dentar?
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Un implant dentar este o rădăcină artificială din titan care se inserează în osul maxilar pentru a susține o coroană dentară, o punte sau o proteză. Este cea mai avansată metodă de înlocuire a dinților pierduți, oferind rezultate care arată, se simt și funcționează ca dinții naturali.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Titanul utilizat este biocompatibil și se integrează natural cu osul într-un proces numit osteointegrare, creând o fundație solidă și durabilă pentru restaurarea protetică.
            </p>
            <div className="bg-trust-green/10 rounded-xl p-6 border border-trust-green/20">
              <div className="flex items-center gap-3 mb-2">
                <Check className="w-5 h-5 text-trust-green" />
                <span className="font-bold text-slate-900">Rata de succes: peste 95%</span>
              </div>
              <p className="text-slate-600 text-sm">
                Implanturile dentare au una dintre cele mai mari rate de succes din medicina modernă.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
              alt="Implant dentar"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">
              Avantajele Implanturilor Dentare
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              De ce tot mai mulți pacienți aleg implanturile ca soluție pentru dinții lipsă.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <div className="w-10 h-10 bg-medical-blue/10 rounded-xl flex items-center justify-center text-medical-blue mb-4">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden">
          <div className="absolute inset-0 mesh-gradient opacity-20" />
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-white mb-4">
                Etapele Tratamentului
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Un proces structurat pentru rezultate predictibile și durabile.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  <div className="text-6xl font-bold text-white/5 absolute -top-4 -left-2 font-heading">
                    0{item.step}
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-medical-blue-lighter rounded-xl flex items-center justify-center text-white mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-heading font-bold text-xl text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 mb-4">{item.description}</p>
                    <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm text-slate-300">
                      <Clock className="w-3 h-3 inline mr-1" /> {item.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Prices */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">
              Prețuri Implantologie
            </h2>
            <p className="text-slate-600">Tarife conform Catalogului Tarifelor Unice</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-slate-700">Serviciu</th>
                  <th className="px-6 py-4 text-right font-bold text-slate-700">Preț (MDL)</th>
                </tr>
              </thead>
              <tbody>
                {implantServices.map((service, index) => (
                  <tr key={service.id} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                    <td className="px-6 py-4 text-slate-900">{service.name}</td>
                    <td className="px-6 py-4 text-right font-mono font-bold text-medical-blue">
                      {typeof service.price === 'number' ? service.price.toLocaleString() : service.price} MDL
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-sm mt-4 text-center">
            * Prețul final poate varia în funcție de complexitatea cazului. Programați o consultație pentru o evaluare personalizată.
          </p>
        </div>

        {/* FAQs */}
        <div className="mb-20">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-8 text-center">
            Întrebări Frecvente
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <h3 className="font-heading font-bold text-lg text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-medical-blue to-medical-blue-light rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Pregătit să Îți Recuperezi Zâmbetul?
          </h2>
          <p className="text-slate-200 mb-8 max-w-2xl mx-auto">
            Programează o consultație pentru a discuta despre opțiunile de tratament și a primi un plan personalizat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/programare">
              <Button size="lg" as="div" className="bg-white text-medical-blue hover:bg-slate-100">
                <Calendar className="w-5 h-5 mr-2" /> Programează Consultație
              </Button>
            </Link>
            <a href="tel:079044016">
              <Button variant="outline" size="lg" as="div" className="border-white/40 hover:bg-white/10">
                <Phone className="w-5 h-5 mr-2" /> 079 044 016
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
