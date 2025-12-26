import React from 'react';
import { Info, Banknote, Clock, FileText, AlertCircle } from 'lucide-react';

export const UsefulInfo = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="bg-medical-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl font-bold mb-4">Informatii Utile</h1>
          <p className="text-xl text-slate-300">Ghidul pacientului pentru o experientă cât mai plăcută.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-12">
        
        {/* Pregatire */}
        <section id="pregatire" className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold mb-4">Pregătirea pentru Vizită</h2>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Vă rugăm să aveti la dumneavoastră buletinul de identitate (sau adeverinta de naștere pentru minori).</li>
                <li>Pentru serviciile decontate de CNAM, nu este obligatorie prezentarea politei de asigurare.</li>
                <li>Este recomandat să mâncati ușor înainte de vizită.</li>
                <li>Igienizati cavitatea bucală (periaj dentar) înainte de a vă prezenta la cabinet.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Asigurari */}
        <section id="cnam" className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-100 text-green-600 rounded-xl">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold mb-4">Asigurări Medicale (CNAM)</h2>
              <p className="text-slate-700 mb-4">
                IM CSR Cimișlia are contract cu Compania Natională de Asigurări în Medicină. Serviciile CNAM sunt disponibile pentru:
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-4">
                <h3 className="font-bold text-slate-900 mb-2">Cine poate beneficia de servicii CNAM:</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Copiii până la 18 ani</li>
                  <li>• Femeile gravide</li>
                  <li>• Urgentele medicale pentru pacientii care detin polite de asigurare CNAM</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                <h3 className="font-bold text-slate-900 mb-2">Documente necesare:</h3>
                <p className="text-sm text-slate-600">
                  Pentru servicii CNAM este necesar doar buletinul de identitate (sau adeverinta de naștere pentru minori). Nu este obligatorie prezentarea politei de asigurare.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Plata */}
        <section id="plata" className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
              <Banknote className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold mb-4">Metode de Plată</h2>
              <p className="text-slate-700 mb-4">
                Pentru serviciile contra cost, acceptăm doar plată în numerar (MDL). Nu detinem terminal pentru plata cu cardul.
              </p>
              <div className="flex gap-4">
                <span className="px-4 py-2 bg-slate-100 rounded-lg font-medium text-slate-700">Numerar (MDL)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Urgente */}
        <section id="urgente" className="bg-red-50 rounded-2xl p-8 shadow-sm border border-red-100">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-red-100 text-red-600 rounded-xl">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold mb-4 text-red-900">Urgente Stomatologice</h2>
              <p className="text-red-800 mb-4">
                Dacă aveti dureri acute, sângerări abundente sau ati suferit un traumatism dentar, vă rugăm să ne contactati imediat sau să vă prezentati la clinică.
              </p>
              <p className="font-bold text-red-900 text-lg">Telefon Urgente: 079 772 488</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};