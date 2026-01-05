import React, { useState, useMemo, useEffect } from 'react';
import { SERVICES } from '../constants';
import { GlassServiceCard } from '../components/cards/GlassServiceCard';
import { Button } from '../components/ui/Button';
import { Download, Search, Check, Filter, Grid, List, ChevronRight, Phone, Calendar } from 'lucide-react';
import { ServiceCategory, Service } from '../types';
import { Link } from 'react-router-dom';

const categoryInfo: Record<ServiceCategory, { label: string; description: string; color: string }> = {
  consultatii: { label: 'Consultații stomatologice', description: 'Evaluare și diagnostic profesional', color: 'bg-blue-500' },
  cabinet: { label: 'Activități efectuate în cabinetul stomatologic', description: 'Proceduri și preparare', color: 'bg-indigo-500' },
  anestezie: { label: 'Anestezie în stomatologie', description: 'Tratamente fără durere', color: 'bg-purple-500' },
  terapie: { label: 'Tratamentul dinților', description: 'Tratamentul gingivitelor, parodontitelor, cariilor, pulpitelor, restaurări dentare și albire', color: 'bg-pink-500' },
  chirurgie: { label: 'Chirurgie oro-maxilo-facială', description: 'Extractii și interventii', color: 'bg-red-500' },
  imagistica: { label: 'Investigații rontgenologice', description: 'Radiografii și diagnostic', color: 'bg-cyan-500' },
  cnam: { label: 'Servicii stomatologice prestate în cadrul „Programului Unic al Asigurărilor Obligatorii de asistență medicală"', description: 'Servicii decontate', color: 'bg-green-500' },
};

export const Services = () => {
  const [services, setServices] = useState<Service[]>(SERVICES);
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showCnamOnly, setShowCnamOnly] = useState(false);
  const [priceRange, setPriceRange] = useState<'all' | 'low' | 'medium' | 'high'>('all');

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      // Сначала пытаемся загрузить с сервера
      try {
        const response = await fetch('http://localhost:3001/api/services');
        if (response.ok) {
          const data = await response.json();
          setServices(data.services);
          return;
        }
      } catch (error) {
        // Сервер недоступен, используем данные из constants
        console.log('Сервер недоступен, используем данные из constants');
      }
    } catch (error) {
      console.error('Eroare la încărcarea serviciilor:', error);
    }
  };

  const categories: { id: ServiceCategory | 'all', label: string }[] = [
    { id: 'all', label: 'Toate' },
    { id: 'consultatii', label: 'Consultații stomatologice' },
    { id: 'cabinet', label: 'Activități efectuate în cabinetul stomatologic' },
    { id: 'anestezie', label: 'Anestezie în stomatologie' },
    { id: 'terapie', label: 'Tratamentul dinților' },
    { id: 'chirurgie', label: 'Chirurgie oro-maxilo-facială' },
    { id: 'imagistica', label: 'Investigații rontgenologice' },
    { id: 'cnam', label: 'Servicii stomatologice prestate în cadrul „Programului Unic al Asigurărilor Obligatorii de asistență medicală"' },
  ];

  // Функция для нормализации румынских символов для поиска
  // Преобразует и ț и t в одно и то же для поиска
  const normalizeForSearch = (text: string): string => {
    return text
      .toLowerCase()
      // Заменяем все румынские символы на базовые латинские
      .replace(/ă/g, 'a')
      .replace(/â/g, 'a')
      .replace(/î/g, 'i')
      .replace(/ș/g, 's')
      .replace(/ț/g, 't') // Преобразуем ț в t для поиска
      // Нормализуем остальные диакритические знаки
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, ''); // Удаляем диакритические знаки
  };

  const filteredServices = useMemo(() => {
    const normalizedSearchTerm = normalizeForSearch(searchTerm);
    
    return services.filter(service => {
      const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
      const normalizedServiceName = normalizeForSearch(service.name);
      const matchesSearch = normalizedServiceName.includes(normalizedSearchTerm);
      const matchesCnam = !showCnamOnly || service.cnamEligible;

      let matchesPrice = true;
      if (priceRange !== 'all' && typeof service.price === 'number') {
        if (priceRange === 'low') matchesPrice = service.price < 500;
        else if (priceRange === 'medium') matchesPrice = service.price >= 500 && service.price < 2000;
        else if (priceRange === 'high') matchesPrice = service.price >= 2000;
      }

      return matchesCategory && matchesSearch && matchesCnam && matchesPrice;
    });
  }, [activeCategory, searchTerm, showCnamOnly, priceRange]);

  const groupedServices = useMemo(() => {
    if (activeCategory !== 'all') return null;

    return filteredServices.reduce((acc, service) => {
      if (!acc[service.category]) {
        acc[service.category] = [];
      }
      acc[service.category].push(service);
      return acc;
    }, {} as Record<ServiceCategory, Service[]>);
  }, [filteredServices, activeCategory]);

  const formatPrice = (price: number | string) => {
    if (typeof price === 'string') return price + ' MDL';
    return price.toLocaleString('ro-MD') + ' MDL';
  };

  const serviceCount = filteredServices.length;
  const cnamCount = services.filter(s => s.cnamEligible).length;

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-24">
      {/* Header */}
      <div className="bg-medical-blue text-white py-16 mb-8 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-40" />
        <div className="absolute inset-0 noise-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Servicii și Tarife</h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto mb-6">
              Prețuri transparente conform Catalogului Tarifelor Unice aprobat de Guvernul RM.
              Peste {services.length} de servicii disponibile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="gap-2 border-white/40 hover:bg-white/10">
                <Download className="w-4 h-4" /> Descarcă Catalog PDF
              </Button>
              <Link to="/preturi">
                <Button as="div" className="gap-2 bg-white text-medical-blue hover:bg-slate-100">
                  <List className="w-4 h-4" /> Vezi Tabelul de Prețuri
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* CNAM Info Box */}
        <div className="bg-trust-green/10 border border-trust-green/20 rounded-2xl p-6 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-trust-green rounded-full text-white shrink-0">
              <Check className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-slate-900">Acceptăm Asigurări CNAM</h3>
              <p className="text-slate-700">
                Servicii CNAM disponibile pentru copiii până la 18 ani, femeile gravide și urgentele medicale. Prezentati buletinul de identitate (sau adeverinta de naștere pentru minori) la receptie.
              </p>
            </div>
          </div>
          <Link to="/informatii-utile#cnam">
            <Button variant="secondary" size="sm" as="div">
              Află Mai Multe <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {Object.entries(categoryInfo).slice(0, 5).map(([key, info]) => (
            <Link
              key={key}
              to={`/servicii/${key}`}
              className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
            >
              <div className={`w-10 h-10 ${info.color} rounded-lg flex items-center justify-center text-white mb-3`}>
                <span className="font-bold">{services.filter(s => s.category === key).length}</span>
              </div>
              <h3 className="font-heading font-bold text-slate-900 group-hover:text-medical-blue transition-colors">
                {info.label}
              </h3>
              <p className="text-xs text-slate-500">{info.description}</p>
            </Link>
          ))}
        </div>

        {/* Filters Bar */}
        <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg border border-slate-200 p-4 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Caută serviciu..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-medical-blue-lighter/50"
              />
            </div>

            {/* Price Range */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value as any)}
              className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-medical-blue-lighter/50 bg-white"
            >
              <option value="all">Toate Prețurile</option>
              <option value="low">Sub 500 MDL</option>
              <option value="medium">500 - 2000 MDL</option>
              <option value="high">Peste 2000 MDL</option>
            </select>

            {/* CNAM Toggle */}
            <label className="flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors">
              <input
                type="checkbox"
                checked={showCnamOnly}
                onChange={(e) => setShowCnamOnly(e.target.checked)}
                className="w-4 h-4 rounded text-trust-green"
              />
              <span className="text-sm font-medium text-slate-700 whitespace-nowrap">Doar CNAM</span>
            </label>

            {/* View Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-xl transition-colors ${
                  viewMode === 'grid' ? 'bg-medical-blue text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-xl transition-colors ${
                  viewMode === 'list' ? 'bg-medical-blue text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex gap-2 overflow-x-auto pt-4 hide-scrollbar">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all
                  ${activeCategory === cat.id
                    ? 'bg-medical-blue text-white shadow-lg shadow-medical-blue/20'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}
                `}
              >
                {cat.label}
                {cat.id !== 'all' && (
                  <span className="ml-1 opacity-70">
                    ({services.filter(s => s.category === cat.id).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-slate-600">
            <span className="font-bold text-slate-900">{serviceCount}</span> servicii găsite
            {searchTerm && <span className="text-slate-500"> pentru "{searchTerm}"</span>}
          </p>
        </div>

        {/* Services Display */}
        {viewMode === 'grid' ? (
          activeCategory === 'all' && groupedServices ? (
            // Grouped by category
            Object.entries(groupedServices).map(([category, services]: [string, Service[]]) => (
              <div key={category} className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-8 ${categoryInfo[category as ServiceCategory].color} rounded-full`} />
                    <div>
                      <h2 className="font-heading text-2xl font-bold text-slate-900">
                        {categoryInfo[category as ServiceCategory].label}
                      </h2>
                      <p className="text-slate-500 text-sm">{services.length} servicii</p>
                    </div>
                  </div>
                  <Link to={`/servicii/${category}`}>
                    <Button variant="secondary" size="sm" as="div">
                      Vezi Toate <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.slice(0, 6).map(service => (
                    <GlassServiceCard key={service.id} service={service} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            // Regular grid
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.length > 0 ? (
                filteredServices.map(service => (
                  <GlassServiceCard key={service.id} service={service} />
                ))
              ) : (
                <div className="col-span-full text-center py-20 text-slate-500">
                  <Filter className="w-16 h-16 mx-auto mb-4 text-slate-300" />
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">Nu am găsit servicii</h3>
                  <p>Încercati să modificati criteriile de căutare.</p>
                </div>
              )}
            </div>
          )
        ) : (
          // List view
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-700">Serviciu</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-700 hidden md:table-cell">Categorie</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-700 hidden lg:table-cell">Unitate</th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-slate-700">Preț</th>
                </tr>
              </thead>
              <tbody>
                {filteredServices.map((service, index) => (
                  <tr key={service.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} hover:bg-slate-50 transition-colors`}>
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
                    <td className="px-6 py-4 hidden md:table-cell">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${categoryInfo[service.category].color}`}>
                        {categoryInfo[service.category].label}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-600 hidden lg:table-cell">{service.unit}</td>
                    <td className="px-6 py-4 text-right">
                      <span className="font-mono font-bold text-medical-blue">{formatPrice(service.price)}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-medical-blue to-medical-blue-light rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">Ai nevoie de ajutor?</h2>
          <p className="text-slate-200 mb-8 max-w-2xl mx-auto">
            Nu ești sigur ce serviciu ai nevoie? Programează o consultație și medicul nostru te va ghida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/programare">
              <Button size="lg" as="div" className="bg-white text-medical-blue hover:bg-slate-100">
                <Calendar className="w-5 h-5 mr-2" /> Programează Consultație
              </Button>
            </Link>
            <a href="tel:079772488">
              <Button variant="outline" size="lg" as="div" className="border-white/40 hover:bg-white/10">
                <Phone className="w-5 h-5 mr-2" /> 079 772 488
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
