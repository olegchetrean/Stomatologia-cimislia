import React from 'react';
import { Button } from '../components/ui/Button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="bg-medical-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Contactează-ne</h1>
          <p className="text-xl text-slate-200">Suntem aici să răspundem la întrebările tale.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-10 h-10 bg-medical-blue/10 rounded-lg flex items-center justify-center text-medical-blue mb-4">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg mb-2">Telefon</h3>
                <p className="text-slate-600 mb-2">Pentru programări rapide:</p>
                <a href="tel:079044016" className="text-xl font-bold text-medical-blue hover:text-medical-blue-lighter">079 044 016</a>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-10 h-10 bg-medical-blue/10 rounded-lg flex items-center justify-center text-medical-blue mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <p className="text-slate-600 mb-2">Pentru informații:</p>
                <a href="mailto:victoras1984@mail.ru" className="text-lg font-bold text-medical-blue hover:text-medical-blue-lighter break-all">victoras1984@mail.ru</a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 text-medical-blue shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Locație</h3>
                  <p className="text-slate-600">Strada Alexandru cel Bun 135,<br/>Cimișlia, Republica Moldova</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-medical-blue shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Program de Lucru</h3>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                    <span className="text-slate-600">Luni - Vineri:</span>
                    <span className="font-bold">08:00 - 17:00</span>
                    <span className="text-slate-600">Sâmbătă - Duminică:</span>
                    <span className="font-bold text-red-500">Închis</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="h-[300px] bg-slate-200 rounded-2xl overflow-hidden shadow-inner">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2744.027042531362!2d28.7667!3d46.5417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDMyJzMwLjEiTiAyOMKwNDYnMDAuMSJF!5e0!3m2!1sen!2smd!4v1620000000000!5m2!1sen!2smd" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <h2 className="font-heading text-2xl font-bold mb-6">Trimite un Mesaj</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Nume Complet</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-medical-blue" placeholder="Ion Popescu" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Telefon</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-medical-blue" placeholder="079 xxx xxx" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-medical-blue" placeholder="exemplu@mail.ru" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Subiect</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-medical-blue bg-white">
                  <option>Programare Consultație</option>
                  <option>Informații Prețuri</option>
                  <option>Servicii CNAM</option>
                  <option>Altele</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Mesaj</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-medical-blue" placeholder="Descrieți cu ce vă putem ajuta..."></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm text-slate-500">Sunt de acord cu prelucrarea datelor cu caracter personal conform Politicii de Confidențialitate.</span>
              </div>

              <Button size="lg" className="w-full">Trimite Mesajul</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};