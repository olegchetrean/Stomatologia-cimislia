import React from 'react';
import { AlertTriangle, Phone, Clock, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const emergencyTypes = [
  {
    title: 'Durere Dentară Acută',
    description: 'Durere puternică, pulsatilă care nu cedează la analgezice obișnuite.',
    urgency: 'high',
    advice: 'Contactați-ne imediat. Între timp, puteți lua un analgezic și aplicați comprese reci pe obraz.'
  },
  {
    title: 'Dinte Scos/Avulsionat',
    description: 'Un dinte permanent a fost complet scos din alveolă în urma unui traumatism.',
    urgency: 'critical',
    advice: 'Timp esențial! Păstrați dintele în lapte sau salivă și prezentați-vă în max 30 minute pentru reimplantare.'
  },
  {
    title: 'Dinte Fracturat',
    description: 'Dinte rupt sau fisurat în urma unui accident sau mușcării de ceva dur.',
    urgency: 'high',
    advice: 'Clătiți ușor gura. Păstrați fragmentele dacă le găsiți. Prezentați-vă cât mai curând.'
  },
  {
    title: 'Sângerare Abundentă',
    description: 'Sângerare care nu se oprește după extracție sau traumatism.',
    urgency: 'critical',
    advice: 'Aplicați presiune cu o compresă sterilă. Dacă nu se oprește în 20 de minute, prezentați-vă urgent.'
  },
  {
    title: 'Abces Dentar',
    description: 'Umflătură dureroasă la gingii sau față, posibil cu febră.',
    urgency: 'high',
    advice: 'Necesită tratament urgent pentru a preveni răspândirea infecției. Nu încercați să spargeți abcesul!'
  },
  {
    title: 'Coroană/Obturație Căzută',
    description: 'Lucrare protetică sau plomba s-a desprins de dinte.',
    urgency: 'medium',
    advice: 'Păstrați lucrarea și programați-vă în următoarele zile. Evitați să mestecați pe acea parte.'
  },
];

const firstAidTips = [
  'Rămâneți calm și evaluați situația',
  'Opriți sângerarea aplicând presiune cu o compresă curată',
  'Aplicați gheață pe față pentru a reduce umflătura',
  'Nu luați aspirină în caz de sângerare (subțiază sângele)',
  'Păstrați orice fragment dentar în lapte sau salivă',
  'Contactați medicul stomatolog cât mai curând',
];

export const Emergency = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <AlertTriangle className="w-8 h-8 animate-pulse" />
              <div>
                <h2 className="font-heading font-bold text-xl">Urgență Stomatologică?</h2>
                <p className="text-red-100">Sunați acum pentru asistență imediată</p>
              </div>
            </div>
            <a href="tel:079044016">
              <Button as="div" className="bg-white text-red-600 hover:bg-red-50 font-bold text-lg">
                <Phone className="w-5 h-5 mr-2" /> 079 044 016
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Urgențe Stomatologice</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            În caz de urgență dentară, contactați-ne imediat. Vă vom acorda prioritate și vă vom programa în cel mai scurt timp posibil.
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
            <h3 className="font-heading font-bold text-lg mb-2">Telefon Urgențe</h3>
            <a href="tel:079044016" className="text-2xl font-bold text-red-600 hover:text-red-700">
              079 044 016
            </a>
            <p className="text-slate-600 text-sm mt-2">Disponibil în orele de program</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">Program Urgențe</h3>
            <p className="text-xl font-bold text-slate-900">Luni - Vineri</p>
            <p className="text-slate-600">08:00 - 17:00</p>
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

        {/* Emergency Types */}
        <div className="mb-16">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-8">Tipuri de Urgențe</h2>
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
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-8">Ce Să NU Faceți</h2>
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <ul className="space-y-4">
                {[
                  'Nu ignorați durerea severă - poate indica o infecție gravă',
                  'Nu aplicați aspirină direct pe dinte sau gingii',
                  'Nu încercați să extrageți singur un dinte mobil',
                  'Nu folosiți obiecte ascuțite pentru a îndepărta resturi alimentare',
                  'Nu amânați vizita la medic dacă aveți febră asociată cu durere dentară',
                  'Nu consumați alimente sau băuturi foarte fierbinți/reci pe zona afectată',
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
          <h2 className="font-heading text-3xl font-bold mb-4">Nu Așteptați!</h2>
          <p className="text-red-100 mb-8 max-w-2xl mx-auto text-lg">
            În caz de urgență stomatologică, timpul contează. Contactați-ne imediat pentru a primi ajutorul de care aveți nevoie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:079044016">
              <Button size="lg" as="div" className="bg-white text-red-600 hover:bg-red-50">
                <Phone className="w-5 h-5 mr-2" /> Sună Acum: 079 044 016
              </Button>
            </a>
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
