import React from 'react';
import { Button } from '../components/ui/Button';
import { FileText, Download, ExternalLink } from 'lucide-react';

export const Transparency = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl font-bold mb-4">Transparentă și Responsabilitate</h1>
          <p className="text-xl text-slate-300">Informatii publice conform legislatiei Republicii Moldova.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* General Info */}
          <section>
            <h2 className="font-heading text-2xl font-bold mb-6 flex items-center gap-2">
              <FileText className="text-medical-blue" /> Informatii Generale
            </h2>
            <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-500">Denumire Completă</p>
                  <p className="font-medium">ÎM CSR Cimișlia</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Fondator</p>
                  <p className="font-medium">Consiliul Raional Cimișlia</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Cod Fiscal</p>
                  <p className="font-medium">100xxxxxxxxxxx (Placeholder)</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Statut</p>
                  <p className="font-medium">Institutie Publică la Autogestiune</p>
                </div>
              </div>
            </div>
          </section>

          {/* Docs */}
          <section>
             <h2 className="font-heading text-2xl font-bold mb-6 flex items-center gap-2">
              <Download className="text-medical-blue" /> Documente Publice
            </h2>
            <div className="bg-white p-6 rounded-2xl shadow-sm space-y-3">
              {[
                'Statutul Institutiei',
                'Regulament de Activitate',
                'Catalogul Tarifelor Unice',
                'Raport Activitate 2024'
              ].map((doc, i) => (
                <div key={i} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors border border-slate-100">
                  <span className="font-medium text-slate-700">{doc}</span>
                  <Button variant="outline" size="sm" className="text-medical-blue border-medical-blue/20">PDF</Button>
                </div>
              ))}
            </div>
          </section>

          {/* Achizitii */}
          <section className="md:col-span-2">
            <h2 className="font-heading text-2xl font-bold mb-6 flex items-center gap-2">
              <ExternalLink className="text-medical-blue" /> Achizitii Publice
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-bold text-lg mb-2">Monitorizare Achizitii</h3>
                <p className="text-slate-600 max-w-xl">
                  Toate achizitiile publice efectuate de institutia noastră sunt transparente și pot fi verificate pe platforma MTender.
                </p>
              </div>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button className="gap-2">Vezi pe MTender <ExternalLink className="w-4 h-4" /></Button>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};