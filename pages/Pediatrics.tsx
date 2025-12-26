import React from 'react';
import { Baby, Heart, Smile, Shield, Star, Check, Phone, Calendar } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Igienizarea Cavității Bucale',
    description: 'Igienizarea profesională a cavității bucale a copiilor pentru menținerea sănătății dentare.',
    age: 'Toate vârstele',
    icon: Shield
  },
  {
    title: 'Tratarea Cariilor și Complicațiilor',
    description: 'Tratarea cariilor și complicațiilor ei a dinților temporari cu tehnici adaptate copiilor.',
    age: 'Dinți temporari',
    icon: Heart
  },
  {
    title: 'Tratamentul Afecțiunilor Dinților Permanenți',
    description: 'Tratamentul tuturor afecțiunilor dinților permanenți, inclusiv carii, pulpite și periodontite.',
    age: 'Dinți permanenți',
    icon: Smile
  },
  {
    title: 'Extracții Dentare',
    description: 'Extracția dinților temporari și a dinților permanenți care au indicații la extracții dentare.',
    age: 'Conform indicațiilor',
    icon: Baby
  },
];

const tips = [
  {
    title: 'Începeți devreme',
    desc: 'Prima vizită la dentist trebuie făcută până la vârsta de 1 an sau la apariția primului dinte.'
  },
  {
    title: 'Periaj corect',
    desc: 'Copiii trebuie supravegheați la periaj până la vârsta de 7-8 ani.'
  },
  {
    title: 'Alimentație sănătoasă',
    desc: 'Limitați dulciurile și băuturile acidulate care atacă smalțul.'
  },
  {
    title: 'Vizite regulate',
    desc: 'Control la dentist la fiecare 6 luni pentru prevenție.'
  },
];

export const Pediatrics = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <Star key={i} className="absolute animate-pulse" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 20}px`,
              animationDelay: `${Math.random() * 2}s`
            }} />
          ))}
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md mb-6">
            <Baby className="w-5 h-5" />
            <span className="text-sm font-medium">Stomatologie Pediatrică</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Îngrijire Dentară pentru Cei Mici
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            O experiență prietenoasă și fără teamă pentru copilul tău. Medicii noștri sunt specializați în lucrul cu copiii.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Why Choose Us */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6">
              De Ce Să Ne Alegi pentru Copilul Tău?
            </h2>
            <div className="space-y-4">
              {[
                'Medici cu experiență în stomatologie pediatrică',
                'Atmosferă prietenoasă și relaxantă pentru copii',
                'Tehnici de anestezie locală adaptate vârstei',
                'Tratamente fără durere cu anestezie adaptată vârstei',
                'Explicații pe înțelesul copiilor',
                'Recompense și certificate pentru cei curajoși'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-trust-green/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-trust-green" />
                  </div>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1588776813186-6f4667a12a9e?auto=format&fit=crop&q=80&w=800"
              alt="Stomatologie pentru copii"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Experiență Pozitivă</p>
                  <p className="text-sm text-slate-500">Pentru fiecare copil</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">Servicii pentru Copii</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Oferim o gamă completă de servicii stomatologice adaptate nevoilor copiilor de toate vârstele.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center text-white mb-4">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  {service.age}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tips for Parents */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">Sfaturi pentru Părinți</h2>
            <p className="text-slate-600">Cum să păstrați sănătatea dentară a copilului</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-medical-blue">{index + 1}</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">{tip.title}</h3>
                <p className="text-slate-600 text-sm">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Age Guide */}
        <div className="mb-20">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-8 text-center">
            Ghid pe Vârste
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border-t-4 border-pink-400">
              <h3 className="font-heading font-bold text-xl mb-4">0-3 ani</h3>
              <ul className="space-y-3 text-slate-600">
                <li>• Prima vizită la 1 an</li>
                <li>• Curățarea gingiilor cu tifon umed</li>
                <li>• Periuța de dinți moale de la primul dinte</li>
                <li>• Evitarea biberonului cu suc noaptea</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border-t-4 border-purple-400">
              <h3 className="font-heading font-bold text-xl mb-4">3-6 ani</h3>
              <ul className="space-y-3 text-slate-600">
                <li>• Vizite regulate la 6 luni</li>
                <li>• Învățarea periajului corect</li>
                <li>• Aplicare de fluoruri</li>
                <li>• Prima evaluare ortodontică</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border-t-4 border-blue-400">
              <h3 className="font-heading font-bold text-xl mb-4">6-12 ani</h3>
              <ul className="space-y-3 text-slate-600">
                <li>• Sigilarea molarilor permanenți</li>
                <li>• Monitorizarea erupției dinților</li>
                <li>• Tratament ortodontic dacă e necesar</li>
                <li>• Protecție la sport (gutiere)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <Baby className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="font-heading text-3xl font-bold mb-4">Programează o Vizită pentru Copilul Tău</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Echipa noastră prietenoasă va face din vizita la dentist o experiență plăcută pentru copilul tău.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/programare">
              <Button size="lg" as="div" className="bg-white text-purple-600 hover:bg-purple-50">
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
