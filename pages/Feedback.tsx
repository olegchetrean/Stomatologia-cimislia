import React from 'react';
import { Button } from '../components/ui/Button';
import { MessageSquare, ThumbsUp, AlertTriangle } from 'lucide-react';

export const Feedback = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="bg-medical-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl font-bold mb-4">Sugestii și Reclamații</h1>
          <p className="text-xl text-slate-200">Opinia ta contează pentru noi.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
          <p className="text-slate-600 mb-8 text-center">
            Centrul Stomatologic Raional Cimișlia prețuiește opinia pacienților săi. Feedback-ul dumneavoastră constructiv ne ajută să ne îmbunătățim continuu serviciile medicale.
          </p>

          <form className="space-y-8">
            {/* Type */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-4">Tipul Feedback-ului</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <label className="cursor-pointer">
                  <input type="radio" name="type" className="peer sr-only" />
                  <div className="p-4 rounded-xl border-2 border-slate-200 peer-checked:border-green-500 peer-checked:bg-green-50 hover:bg-slate-50 transition-all text-center">
                    <ThumbsUp className="w-6 h-6 mx-auto mb-2 text-slate-400 peer-checked:text-green-600" />
                    <span className="font-medium text-slate-700 peer-checked:text-green-800">Apreciere</span>
                  </div>
                </label>
                <label className="cursor-pointer">
                  <input type="radio" name="type" className="peer sr-only" />
                  <div className="p-4 rounded-xl border-2 border-slate-200 peer-checked:border-blue-500 peer-checked:bg-blue-50 hover:bg-slate-50 transition-all text-center">
                    <MessageSquare className="w-6 h-6 mx-auto mb-2 text-slate-400 peer-checked:text-blue-600" />
                    <span className="font-medium text-slate-700 peer-checked:text-blue-800">Sugestie</span>
                  </div>
                </label>
                <label className="cursor-pointer">
                  <input type="radio" name="type" className="peer sr-only" />
                  <div className="p-4 rounded-xl border-2 border-slate-200 peer-checked:border-red-500 peer-checked:bg-red-50 hover:bg-slate-50 transition-all text-center">
                    <AlertTriangle className="w-6 h-6 mx-auto mb-2 text-slate-400 peer-checked:text-red-600" />
                    <span className="font-medium text-slate-700 peer-checked:text-red-800">Reclamație</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Nume și Prenume</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-medical-blue" placeholder="Opțional" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Telefon / Email</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-medical-blue" placeholder="Pentru răspuns" />
              </div>
            </div>

            {/* Details */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Detalii</label>
              <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-medical-blue" placeholder="Vă rugăm să descrieți situația..."></textarea>
            </div>

            <Button size="lg" className="w-full">Trimite Feedback</Button>
          </form>
        </div>
      </div>
    </div>
  );
};