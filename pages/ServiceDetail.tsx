import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Shield, Check, Phone, Calendar } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SERVICES } from '../constants';
import { GlassServiceCard } from '../components/cards/GlassServiceCard';

const categoryInfo: Record<string, { title: string; description: string; image: string }> = {
  consultatii: {
    title: 'Consultații Stomatologice',
    description: 'Consultații profesionale pentru diagnosticarea și planificarea tratamentului stomatologic. Medicii noștri experimentați vă vor evalua starea de sănătate orală și vă vor oferi cele mai bune recomandări.',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800'
  },
  cabinet: {
    title: 'Activități de Cabinet',
    description: 'Proceduri de cabinet inclusiv amprentare și preparare pentru diverse tratamente stomatologice. Folosim materiale de cea mai înaltă calitate pentru rezultate precise.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800'
  },
  anestezie: {
    title: 'Anestezie Stomatologică',
    description: 'Servicii complete de anestezie locală și generală pentru tratamente fără durere. Siguranța și confortul pacienților sunt prioritatea noastră.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800'
  },
  terapie: {
    title: 'Terapie Dentară',
    description: 'Tratamente endodontice, coronare și de profilaxie pentru menținerea sănătății dinților. De la tratarea cariilor până la proceduri de canal radicular.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800'
  },
  chirurgie: {
    title: 'Chirurgie Orală',
    description: 'Intervenții chirurgicale de la extracții simple până la implanturi complexe. Echipa noastră de chirurgi orali are experiență vastă în toate tipurile de proceduri.',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800'
  },
  protetica: {
    title: 'Protetică Dentară',
    description: 'Soluții complete de protezare, de la proteze mobile la coroane fixe și restaurări pe implanturi. Redăm funcționalitatea și estetica zâmbetului.',
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=800'
  },
  ortodontie: {
    title: 'Ortodonție',
    description: 'Tratamente ortodontice pentru copii și adulți. Brackets metalici, ceramici și aparate funcționale pentru un zâmbet perfect aliniat.',
    image: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&q=80&w=800'
  },
  imagistica: {
    title: 'Imagistică Dentară',
    description: 'Diagnostic modern cu radiografii digitale și ortopantomografii pentru o evaluare precisă a stării dentare.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
  },
  cnam: {
    title: 'Servicii CNAM',
    description: 'Servicii decontate de Compania Națională de Asigurări în Medicină pentru pacienții asigurați.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
  }
};

export const ServiceDetail = () => {
  const { category } = useParams<{ category: string }>();

  const info = category ? categoryInfo[category] : null;
  const services = SERVICES.filter(s => s.category === category);
  const relatedCategories = Object.keys(categoryInfo).filter(c => c !== category).slice(0, 3);

  if (!info) {
    return (
      <div className="min-h-screen bg-slate-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold text-slate-900 mb-4">Categoria nu a fost găsită</h1>
          <Link to="/servicii">
            <Button as="div">Înapoi la Servicii</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Header */}
      <div className="relative h-[400px] overflow-hidden">
        <img src={info.image} alt={info.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-medical-blue via-medical-blue/70 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <Link to="/servicii" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Înapoi la toate serviciile
            </Link>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">{info.title}</h1>
            <p className="text-xl text-slate-200 max-w-2xl">{info.description}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-medical-blue/10 rounded-xl flex items-center justify-center text-medical-blue mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">Timp de Tratament</h3>
            <p className="text-slate-600">Variază în funcție de complexitate, de la 30 minute la mai multe ședințe.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-trust-green/10 rounded-xl flex items-center justify-center text-trust-green mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">Siguranță Garantată</h3>
            <p className="text-slate-600">Toate procedurile respectă standardele internaționale de siguranță.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">Garanție</h3>
            <p className="text-slate-600">Oferim garanție pentru toate lucrările protetice și tratamentele efectuate.</p>
          </div>
        </div>

        {/* Services List */}
        <div className="mb-16">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-8">
            Servicii Disponibile ({services.length})
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => (
              <GlassServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-medical-blue to-medical-blue-light rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">Ai nevoie de acest serviciu?</h2>
          <p className="text-slate-200 mb-8 max-w-2xl mx-auto">
            Programează o consultație pentru a discuta cu medicul despre opțiunile de tratament.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
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

        {/* Related Categories */}
        <div className="mt-16">
          <h2 className="font-heading text-2xl font-bold text-slate-900 mb-8">Alte Categorii de Servicii</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedCategories.map(cat => (
              <Link key={cat} to={`/servicii/${cat}`} className="group">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <img src={categoryInfo[cat].image} alt={categoryInfo[cat].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                    <h3 className="font-heading font-bold text-xl text-white">{categoryInfo[cat].title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
