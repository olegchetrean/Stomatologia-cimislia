import React from 'react';
import { Shield, Users, Heart, Award, CheckCircle } from 'lucide-react';

export const About = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="bg-medical-blue text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Despre Noi</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            ÎM CSR Cimișlia este pilonul sănătătii orale în regiune, combinând traditia cu inovatia.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Mission */}
        <div className="mb-20">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6 text-center">Misiunea Noastră</h2>
            <p className="text-lg text-slate-600 leading-relaxed text-center max-w-4xl mx-auto">
              Mentinerea și ameliorarea continuă a stării sănătătii orale a populatiei deservite din Cimișlia și sectoarele adiacente prin oferirea serviciilor stomatologice de înaltă calitate, centrate pe pacient, într-un mediu sigur, confortabil și modern. Ne dedicăm promovării sănătătii orale prin preventie, educatie și tratamente personalizate.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: Shield, title: 'Sigurantă', text: 'Respectăm cele mai riguroase standarde de sterilizare și igienă.' },
            { icon: Heart, title: 'Empatie', text: 'Tratăm fiecare pacient cu grijă, respect și întelegere.' },
            { icon: Award, title: 'Profesionalism', text: 'Echipă medicală calificată și în continuă perfectionare.' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-100">
              <div className="w-12 h-12 bg-medical-blue/10 rounded-xl flex items-center justify-center text-medical-blue mb-6">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">{item.title}</h3>
              <p className="text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Objectives */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6">Obiectivele Noastre</h2>
            <div className="space-y-4">
              {[
                'Furnizarea serviciilor stomatologice de calitate superioară',
                'Asigurarea unui act medical sigur și eficient',
                'Utilizarea tehnologiilor moderne și materialelor calitative',
                'Creșterea gradului de satisfactie a pacientilor',
                'Promovarea sănătătii orale în comunitate',
                'Dezvoltarea profesională continuă a echipei'
              ].map((obj, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-trust-green shrink-0 mt-1" />
                  <p className="text-slate-700">{obj}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
             <img 
               src="https://images.unsplash.com/photo-1588776813186-6f4667a12a9e?auto=format&fit=crop&q=80&w=800" 
               alt="Modern Equipment" 
               className="absolute inset-0 w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-medical-blue/80 to-transparent flex items-end p-8">
               <div className="text-white">
                 <p className="font-bold text-2xl mb-1">Tehnologie Modernă</p>
                 <p className="text-white/80">Investim constant în dotări de ultimă generatie.</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};