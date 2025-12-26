import React, { useState } from 'react';
import { Search, Download, Filter, Check, Info } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SERVICES } from '../constants';
import { ServiceCategory } from '../types';
import { Link } from 'react-router-dom';

const categoryLabels: Record<ServiceCategory, string> = {
  consultatii: 'Consultații',
  cabinet: 'Activități Cabinet',
  anestezie: 'Anestezie',
  terapie: 'Terapie Dentară',
  chirurgie: 'Chirurgie Dento-Alveolară',
  imagistica: 'Imagistică',
  cnam: 'Servicii CNAM',
};

export const Prices = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | 'all'>('all');
  const [showCnamOnly, setShowCnamOnly] = useState(false);

  const filteredServices = SERVICES.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesCnam = !showCnamOnly || service.cnamEligible;
    return matchesSearch && matchesCategory && matchesCnam;
  });

  const groupedServices = filteredServices.reduce((acc, service) => {
    const category = service.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(service);
    return acc;
  }, {} as Record<string, typeof SERVICES>);

  const formatPrice = (price: number | string) => {
    if (typeof price === 'string') return price + ' MDL';
    return price.toLocaleString('ro-MD') + ' MDL';
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Header */}
      <div className="bg-medical-blue text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-40" />
        <div className="absolute inset-0 noise-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Lista de Prețuri</h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Prețuri transparente conform Catalogului Tarifelor Unice aprobat de Guvernul Republicii Moldova.
            </p>
          </div>

          {/* Search & Filter */}
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative md:col-span-2">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Caută serviciu..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-medical-blue-lighter"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as ServiceCategory | 'all')}
                className="px-4 py-3 rounded-xl bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-medical-blue-lighter"
              >
                <option value="all">Toate Categoriile</option>
                {Object.entries(categoryLabels).map(([key, label]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/20">
              <label className="flex items-center gap-2 text-white cursor-pointer">
                <input
                  type="checkbox"
                  checked={showCnamOnly}
                  onChange={(e) => setShowCnamOnly(e.target.checked)}
                  className="w-4 h-4 rounded"
                />
                <span>Arată doar servicii CNAM</span>
              </label>
              <Button variant="outline" size="sm" className="border-white/40 text-white hover:bg-white/10">
                <Download className="w-4 h-4 mr-2" /> Descarcă PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* CNAM Info */}
        <div className="bg-trust-green/10 border border-trust-green/20 rounded-2xl p-6 mb-12 flex items-start gap-4">
          <div className="p-3 bg-trust-green rounded-full text-white shrink-0">
            <Check className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">Servicii Decontate de CNAM</h3>
            <p className="text-slate-700 mb-4">
              Serviciile marcate cu badge-ul verde sunt eligibile pentru decontare prin Compania Națională de Asigurări în Medicină.
              Serviciile CNAM sunt disponibile pentru copiii până la 18 ani, femeile gravide și urgențele medicale pentru pacienții care dețin polițe de asigurare CNAM.
            </p>
            <Link to="/informatii-utile#cnam" className="text-trust-green font-medium hover:underline">
              Află mai multe despre CNAM →
            </Link>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-slate-600">
            <span className="font-bold text-slate-900">{filteredServices.length}</span> servicii găsite
          </p>
        </div>

        {/* Price Tables by Category */}
        {Object.entries(groupedServices).map(([category, services]) => (
          <div key={category} className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-medical-blue rounded-full" />
              {categoryLabels[category as ServiceCategory]}
            </h2>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-slate-700">Serviciu</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-slate-700 hidden md:table-cell">Unitate</th>
                    <th className="px-6 py-4 text-right text-sm font-bold text-slate-700">Preț</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, index) => (
                    <tr key={service.id} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-slate-900">{service.name}</span>
                          {service.cnamEligible && (
                            <span className="px-2 py-0.5 bg-trust-green/10 text-trust-green text-xs font-bold rounded-full">
                              CNAM
                            </span>
                          )}
                        </div>
                        {service.subcategory && (
                          <span className="text-xs text-slate-500">{service.subcategory}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-slate-600 hidden md:table-cell">{service.unit}</td>
                      <td className="px-6 py-4 text-right">
                        <span className="font-mono font-bold text-medical-blue">{formatPrice(service.price)}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {filteredServices.length === 0 && (
          <div className="text-center py-20">
            <Info className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">Niciun serviciu găsit</h3>
            <p className="text-slate-600">Încercați să modificați criteriile de căutare.</p>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-12 bg-slate-100 rounded-2xl p-6">
          <h3 className="font-heading font-bold text-slate-900 mb-2">Notă Importantă</h3>
          <p className="text-slate-600 text-sm">
            Prețurile afișate sunt orientative și pot varia în funcție de complexitatea cazului.
            Pentru un cost exact, vă recomandăm o consultație cu medicul specialist.
            Tarifele sunt conforme cu Catalogul Tarifelor Unice aprobat de Guvernul Republicii Moldova.
          </p>
        </div>
      </div>
    </div>
  );
};
