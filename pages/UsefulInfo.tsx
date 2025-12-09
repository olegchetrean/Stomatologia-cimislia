import React from 'react';
import { Info, CreditCard, Clock, FileText, AlertCircle } from 'lucide-react';

export const UsefulInfo = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="bg-medical-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl font-bold mb-4">Informații Utile</h1>
          <p className="text-xl text-slate-300">Ghidul pacientului pentru o experiență cât mai plăcută.</p>
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
                <li>Vă rugăm să aveți la dumneavoastră buletinul de identitate.</li>
                <li>Pentru serviciile decontate de CNAM, este obligatorie prezentarea poliței de asigurare valabile.</li>
                <li>Este recomandat să mâncați ușor înainte de vizită, cu excepția cazurilor în care medicul specifică altfel (ex: anestezie generală).</li>
                <li>Igienizați cavitatea bucală (periaj dentar) înainte de a vă prezenta la cabinet.</li>
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
                IM CSR Cimișlia are contract cu Compania Națională de Asigurări în Medicină. Persoanele asigurate beneficiază de servicii gratuite conform Programului Unic.
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Servicii incluse:</h3>
                <ul className="grid md:grid-cols-2 gap-2 text-sm text-slate-600">
                  <li>• Consultații profilactice (o dată pe an)</li>
                  <li>• Tratamentul cariilor simple și complicate</li>
                  <li>• Detartraj și periaj profesional (indicație medicală)</li>
                  <li>• Urgențe stomatologice (abcese, traumatisme)</li>
                  <li>• Extracții dentare</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Plata */}
        <section id="plata" className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold mb-4">Metode de Plată</h2>
              <p className="text-slate-700 mb-4">
                Pentru serviciile contra cost, plata se poate efectua:
              </p>
              <div className="flex gap-4">
                <span className="px-4 py-2 bg-slate-100 rounded-lg font-medium text-slate-700">Numerar (MDL)</span>
                <span className="px-4 py-2 bg-slate-100 rounded-lg font-medium text-slate-700">Card Bancar (Visa/Mastercard)</span>
                <span className="px-4 py-2 bg-slate-100 rounded-lg font-medium text-slate-700">Transfer Bancar</span>
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
              <h2 className="font-heading text-2xl font-bold mb-4 text-red-900">Urgențe Stomatologice</h2>
              <p className="text-red-800 mb-4">
                Dacă aveți dureri acute, sângerări abundente sau ați suferit un traumatism dentar, vă rugăm să ne contactați imediat sau să vă prezentați la clinică.
              </p>
              <p className="font-bold text-red-900 text-lg">Telefon Urgențe: 079 044 016</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};