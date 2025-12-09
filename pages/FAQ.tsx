import React, { useState } from 'react';
import { ChevronDown, Search, Phone, MessageCircle, HelpCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const faqData = [
  {
    category: 'General',
    questions: [
      {
        q: 'Care este programul clinicii?',
        a: 'Clinica este deschisă de Luni până Vineri, între orele 08:00 și 17:00. În weekend, clinica este închisă, dar pentru urgențe ne puteți contacta telefonic.'
      },
      {
        q: 'Cum pot face o programare?',
        a: 'Puteți face o programare în mai multe moduri: telefonic la numărul 079 044 016, prin formularul de programare online de pe site, sau prezentându-vă direct la clinică.'
      },
      {
        q: 'Unde este situată clinica?',
        a: 'Clinica se află pe strada Alexandru cel Bun 135, în orașul Cimișlia, Republica Moldova. Suntem ușor de găsit în centrul orașului.'
      },
      {
        q: 'Cât timp durează o consultație?',
        a: 'O consultație standard durează aproximativ 30 de minute. În funcție de complexitatea cazului, poate dura mai mult sau mai puțin.'
      }
    ]
  },
  {
    category: 'Asigurări și Plăți',
    questions: [
      {
        q: 'Acceptați asigurări medicale CNAM?',
        a: 'Da, IM CSR Cimișlia are contract cu Compania Națională de Asigurări în Medicină. Pacienții asigurați beneficiază de servicii gratuite conform Programului Unic, pe baza poliței de asigurare valabile.'
      },
      {
        q: 'Ce documente am nevoie pentru servicii CNAM?',
        a: 'Pentru a beneficia de servicii CNAM, aveți nevoie de buletinul de identitate (original) și polița de asigurare medicală validă. În unele cazuri poate fi necesară și o trimitere de la medicul de familie.'
      },
      {
        q: 'Ce metode de plată acceptați?',
        a: 'Acceptăm plată în numerar (MDL), card bancar (Visa/Mastercard), și transfer bancar. Pentru tratamente costisitoare, discutați cu noi despre posibilitatea eșalonării plății.'
      },
      {
        q: 'Pot plăti în rate?',
        a: 'Pentru tratamente complexe și costisitoare, oferim posibilitatea de a eșalona plata în mai multe tranșe. Discutați cu recepția pentru detalii.'
      }
    ]
  },
  {
    category: 'Tratamente',
    questions: [
      {
        q: 'Este dureros tratamentul stomatologic?',
        a: 'Folosim tehnici moderne de anestezie care fac tratamentele practic nedureroase. Avem inclusiv opțiuni de sedare pentru pacienții anxioși. Confortul dumneavoastră este prioritatea noastră.'
      },
      {
        q: 'Cât durează un tratament de canal?',
        a: 'Un tratament de canal durează de obicei între 1-2 ședințe, în funcție de complexitatea cazului. Fiecare ședință durează aproximativ 45-90 de minute.'
      },
      {
        q: 'Oferiți servicii pentru copii?',
        a: 'Da, oferim servicii complete de stomatologie pediatrică. Medicii noștri sunt experimentați în lucrul cu copiii și creează o atmosferă prietenoasă pentru micii pacienți.'
      },
      {
        q: 'Ce fac în caz de urgență stomatologică?',
        a: 'Pentru urgențe stomatologice (durere acută, traumatisme, sângerări), contactați-ne imediat la 079 044 016. Vom face tot posibilul să vă programăm în aceeași zi.'
      },
      {
        q: 'Cât de des trebuie să merg la dentist?',
        a: 'Recomandăm controale profilactice la fiecare 6 luni. Acest lucru permite detectarea timpurie a problemelor și menținerea sănătății orale optime.'
      }
    ]
  },
  {
    category: 'Prețuri și Servicii',
    questions: [
      {
        q: 'De unde aflu prețurile serviciilor?',
        a: 'Lista completă de prețuri este disponibilă pe pagina noastră de Servicii și Prețuri. Toate tarifele sunt conforme cu Catalogul Tarifelor Unice aprobat de Guvernul RM.'
      },
      {
        q: 'Sunt incluse materialele în preț?',
        a: 'Da, prețurile afișate includ de obicei materialele standard. Pentru materiale premium sau importate, poate exista un cost suplimentar care va fi comunicat înainte de tratament.'
      },
      {
        q: 'Oferiți garanție pentru lucrări?',
        a: 'Da, oferim garanție pentru lucrările protetice și tratamentele efectuate. Perioada de garanție variază în funcție de tipul lucrării.'
      }
    ]
  },
  {
    category: 'Pregătire și Recuperare',
    questions: [
      {
        q: 'Cum mă pregătesc pentru vizită?',
        a: 'Vă rugăm să aveți la dumneavoastră buletinul de identitate și polița CNAM (dacă este cazul). Este recomandat să periați dinții înainte de vizită și să mâncați ușor.'
      },
      {
        q: 'Pot mânca după o extracție?',
        a: 'După o extracție, evitați să mâncați în primele 2-3 ore. Apoi, consumați alimente moi și evitați zona extracției. Evitați alimentele fierbinți în prima zi.'
      },
      {
        q: 'Ce trebuie să fac după un tratament de canal?',
        a: 'Evitați să mestecați pe partea tratată până la dispariția anesteziei. Un disconfort ușor este normal și poate fi tratat cu analgezice recomandate de medic.'
      }
    ]
  }
];

export const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const allQuestions = faqData.flatMap(cat =>
    cat.questions.map(q => ({ ...q, category: cat.category }))
  );

  const filteredQuestions = searchTerm
    ? allQuestions.filter(q =>
        q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.a.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : activeCategory === 'all'
      ? allQuestions
      : allQuestions.filter(q => q.category === activeCategory);

  const toggleQuestion = (question: string) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Header */}
      <div className="bg-medical-blue text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-40" />
        <div className="absolute inset-0 noise-overlay" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Întrebări Frecvente</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Ai Întrebări?</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto mb-8">
            Găsește răspunsuri la cele mai frecvente întrebări despre serviciile noastre.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Caută o întrebare..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-medical-blue-lighter shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 sticky top-24">
              <h3 className="font-heading font-bold text-lg mb-4">Categorii</h3>
              <div className="space-y-2">
                <button
                  onClick={() => { setActiveCategory('all'); setSearchTerm(''); }}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-colors ${
                    activeCategory === 'all' && !searchTerm
                      ? 'bg-medical-blue text-white'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  Toate ({allQuestions.length})
                </button>
                {faqData.map(cat => (
                  <button
                    key={cat.category}
                    onClick={() => { setActiveCategory(cat.category); setSearchTerm(''); }}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-colors ${
                      activeCategory === cat.category && !searchTerm
                        ? 'bg-medical-blue text-white'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {cat.category} ({cat.questions.length})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Questions */}
          <div className="lg:col-span-3 space-y-4">
            {searchTerm && (
              <p className="text-slate-600 mb-4">
                {filteredQuestions.length} rezultate pentru "{searchTerm}"
              </p>
            )}

            {filteredQuestions.map((item, index) => (
              <div key={index} className="bg-white rounded-xl border border-slate-100 overflow-hidden">
                <button
                  onClick={() => toggleQuestion(item.q)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <div>
                    <span className="font-heading font-bold text-slate-900">{item.q}</span>
                    {searchTerm && (
                      <span className="ml-3 text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                    )}
                  </div>
                  <ChevronDown className={`w-5 h-5 text-medical-blue transition-transform shrink-0 ml-4 ${
                    openQuestion === item.q ? 'rotate-180' : ''
                  }`} />
                </button>
                {openQuestion === item.q && (
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            ))}

            {filteredQuestions.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">Nu am găsit rezultate</h3>
                <p className="text-slate-600">Încercați alte cuvinte cheie sau contactați-ne direct.</p>
              </div>
            )}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-medical-blue to-medical-blue-light rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">Nu ai găsit răspunsul?</h2>
          <p className="text-slate-200 mb-8 max-w-2xl mx-auto">
            Echipa noastră este pregătită să răspundă la orice întrebare. Contactează-ne direct!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:079044016">
              <Button size="lg" as="div" className="bg-white text-medical-blue hover:bg-slate-100">
                <Phone className="w-5 h-5 mr-2" /> 079 044 016
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="outline" size="lg" as="div" className="border-white/40 hover:bg-white/10">
                <MessageCircle className="w-5 h-5 mr-2" /> Trimite Mesaj
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
