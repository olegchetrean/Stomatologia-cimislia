import React, { useState, useEffect, useMemo } from 'react';
import { Plus, Trash2, Edit2, Check, X, ChevronDown, ChevronUp, Save, Loader2 } from 'lucide-react';
import { Button } from '../../components/ui/Button';

interface Service {
  id: string;
  category: string;
  name: string;
  price: number;
  unit: string;
  cnamEligible: boolean;
  subcategory?: string;
}

interface CategoryGroup {
  name: string;
  label: string;
  color: string;
}

const CATEGORIES: Record<string, CategoryGroup> = {
  consultatii: { name: 'consultatii', label: 'Consultații', color: 'bg-blue-100 border-blue-300 text-blue-900' },
  cabinet: { name: 'cabinet', label: 'Cabinet', color: 'bg-green-100 border-green-300 text-green-900' },
  anestezie: { name: 'anestezie', label: 'Anestezie', color: 'bg-purple-100 border-purple-300 text-purple-900' },
  terapie: { name: 'terapie', label: 'Terapie', color: 'bg-amber-100 border-amber-300 text-amber-900' },
  chirurgie: { name: 'chirurgie', label: 'Chirurgie', color: 'bg-red-100 border-red-300 text-red-900' },
  imagistica: { name: 'imagistica', label: 'Imagistică', color: 'bg-indigo-100 border-indigo-300 text-indigo-900' },
  cnam: { name: 'cnam', label: 'CNAM', color: 'bg-emerald-100 border-emerald-300 text-emerald-900' },
};

const ManageServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('terapie');
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(Object.keys(CATEGORIES)));
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<Partial<Service>>({
    id: '',
    category: 'terapie',
    name: '',
    price: 0,
    unit: 'ședintă',
    cnamEligible: false,
    subcategory: '',
  });

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
        console.log('Сервер недоступен, загружаю из JSON файла');
      }
      
      // Fallback на JSON файл
      const response = await fetch('/data/services.json');
      const data = await response.json();
      setServices(data.services);
    } catch (error) {
      console.error('Eroare la încărcarea serviciilor:', error);
    }
  };

  const saveToServer = async (servicesToSave: Service[]) => {
    setSaving(true);
    setSaveStatus('idle');
    try {
      const response = await fetch('http://localhost:3001/api/services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ services: servicesToSave }),
      });

      if (response.ok) {
        setSaveStatus('success');
        setTimeout(() => setSaveStatus('idle'), 3000);
      } else {
        setSaveStatus('error');
        setTimeout(() => setSaveStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Eroare de conexiune:', error);
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 3000);
    } finally {
      setSaving(false);
    }
  };

  const groupedServices = useMemo(() => {
    const grouped: Record<string, Service[]> = {};
    Object.keys(CATEGORIES).forEach(cat => grouped[cat] = []);
    services.forEach(s => {
      if (!grouped[s.category]) grouped[s.category] = [];
      grouped[s.category].push(s);
    });
    return grouped;
  }, [services]);

  const toggleCategory = (cat: string) => {
    const newSet = new Set(expandedCategories);
    if (newSet.has(cat)) newSet.delete(cat);
    else newSet.add(cat);
    setExpandedCategories(newSet);
  };

  const handleAddService = async () => {
    if (!formData.name || !formData.price || !formData.id) {
      alert('Completați toate câmpurile obligatorii!');
      return;
    }

    let updatedServices: Service[];
    if (editingId) {
      updatedServices = services.map(s => s.id === editingId ? { ...formData as Service } : s);
      setServices(updatedServices);
      setEditingId(null);
    } else {
      updatedServices = [...services, { ...formData as Service }];
      setServices(updatedServices);
    }

    // Автоматически сохраняем на сервер
    await saveToServer(updatedServices);
    resetForm();
  };

  const handleEditService = (service: Service) => {
    setFormData(service);
    setEditingId(service.id);
    setSelectedCategory(service.category);
    setShowForm(true);
  };

  const handleDeleteService = async (id: string) => {
    if (confirm('Sigur doriți să ștergeți acest serviciu?')) {
      const updatedServices = services.filter(s => s.id !== id);
      setServices(updatedServices);
      // Автоматически сохраняем на сервер
      await saveToServer(updatedServices);
    }
  };

  const resetForm = () => {
    setFormData({
      id: '',
      category: selectedCategory,
      name: '',
      price: 0,
      unit: 'ședintă',
      cnamEligible: false,
      subcategory: '',
    });
    setShowForm(false);
  };


  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-900">Gestionare Servicii pe Categorii</h2>
        <div className="flex gap-2 items-center">
          {saveStatus === 'success' && (
            <span className="text-sm text-green-600 font-semibold flex items-center gap-1">
              <Check className="w-4 h-4" /> Salvat cu succes!
            </span>
          )}
          {saveStatus === 'error' && (
            <span className="text-sm text-red-600 font-semibold">
              Eroare la salvare
            </span>
          )}
          {saving && (
            <span className="text-sm text-slate-600 flex items-center gap-1">
              <Loader2 className="w-4 h-4 animate-spin" /> Se salvează...
            </span>
          )}
          <Button 
            onClick={() => {
              setEditingId(null);
              setShowForm(true);
            }} 
            className="gap-2"
          >
            <Plus className="w-4 h-4" /> Adaugă Serviciu
          </Button>
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="bg-slate-50 p-6 rounded-xl border-2 border-medical-blue space-y-4 sticky top-0 z-10">
          <h3 className="font-bold text-lg text-slate-900">{editingId ? 'Editare serviciu' : 'Adaugă serviciu nou'}</h3>

          <div className="grid md:grid-cols-4 gap-3">
            <div>
              <label className="block text-xs font-semibold mb-1 text-slate-700">ID *</label>
              <input
                type="text"
                value={formData.id || ''}
                onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                placeholder="Ex: 4.23"
                disabled={!!editingId}
                className="w-full px-3 py-2 text-sm rounded border border-slate-300 disabled:bg-slate-100 disabled:text-slate-500"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold mb-1 text-slate-700">Nume *</label>
              <input
                type="text"
                value={formData.name || ''}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Nume serviciu"
                className="w-full px-3 py-2 text-sm rounded border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1 text-slate-700">Categorie *</label>
              <select
                value={formData.category || 'terapie'}
                onChange={(e) => {
                  setFormData({ ...formData, category: e.target.value });
                  setSelectedCategory(e.target.value);
                }}
                className="w-full px-3 py-2 text-sm rounded border border-slate-300"
              >
                {Object.entries(CATEGORIES).map(([key, val]) => (
                  <option key={key} value={key}>{val.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-3">
            <div>
              <label className="block text-xs font-semibold mb-1 text-slate-700">Preț (MDL) *</label>
              <input
                type="number"
                value={formData.price || 0}
                onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                className="w-full px-3 py-2 text-sm rounded border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1 text-slate-700">Unitate *</label>
              <input
                type="text"
                value={formData.unit || ''}
                onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                placeholder="ședintă"
                className="w-full px-3 py-2 text-sm rounded border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1 text-slate-700">Subcategorie</label>
              <input
                type="text"
                value={formData.subcategory || ''}
                onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
                placeholder="Ex: Endodontie"
                className="w-full px-3 py-2 text-sm rounded border border-slate-300"
              />
            </div>
            <div className="flex items-end">
              <label className="flex items-center gap-2 w-full h-10 px-3 bg-white rounded border border-slate-300 cursor-pointer hover:bg-slate-50">
                <input
                  type="checkbox"
                  checked={formData.cnamEligible || false}
                  onChange={(e) => setFormData({ ...formData, cnamEligible: e.target.checked })}
                />
                <span className="text-xs font-semibold">CNAM</span>
              </label>
            </div>
          </div>

          <div className="flex gap-2 justify-end pt-2">
            <Button onClick={resetForm} variant="outline" className="gap-2">
              <X className="w-4 h-4" /> Anulează
            </Button>
            <Button onClick={handleAddService} className="gap-2 bg-medical-blue">
              <Check className="w-4 h-4" /> {editingId ? 'Actualizează' : 'Adaugă'}
            </Button>
          </div>
        </div>
      )}

      {/* Categories with services */}
      <div className="space-y-4">
        {Object.entries(CATEGORIES).map(([catKey, category]) => {
          const catServices = groupedServices[catKey] || [];
          const isExpanded = expandedCategories.has(catKey);
          return (
            <div key={catKey} className="rounded-lg border-2 border-slate-200 overflow-hidden">
              {/* Category header */}
              <button
                onClick={() => toggleCategory(catKey)}
                className={`w-full px-4 py-3 flex items-center justify-between font-bold text-left border-b ${category.color} transition-colors hover:opacity-90`}
              >
                <div className="flex items-center gap-3">
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  <span>{category.label}</span>
                  <span className="text-sm font-normal opacity-75">({catServices.length})</span>
                </div>
              </button>

              {/* Category services */}
              {isExpanded && (
                <div className="bg-white divide-y">
                  {catServices.length === 0 ? (
                    <div className="px-4 py-8 text-center text-slate-500">
                      <p>Nu sunt servicii în această categorie</p>
                      <Button 
                        onClick={() => {
                          setSelectedCategory(catKey);
                          setEditingId(null);
                          setFormData({ ...formData, category: catKey });
                          setShowForm(true);
                        }}
                        className="mt-2 gap-2 text-sm"
                      >
                        <Plus className="w-4 h-4" /> Adaugă serviciu
                      </Button>
                    </div>
                  ) : (
                    catServices.map((service) => (
                      <div key={service.id} className="px-4 py-3 hover:bg-slate-50 transition-colors">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-baseline gap-3 flex-wrap">
                              <span className="font-mono text-xs font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded">{service.id}</span>
                              <h4 className="font-semibold text-slate-900 flex-1">{service.name}</h4>
                              {service.subcategory && (
                                <span className="text-xs bg-slate-200 text-slate-700 px-2 py-1 rounded">{service.subcategory}</span>
                              )}
                            </div>
                            <div className="flex items-center gap-4 mt-2 text-sm text-slate-600 flex-wrap">
                              <span><strong>Preț:</strong> {service.price} MDL</span>
                              <span><strong>Unitate:</strong> {service.unit}</span>
                              {service.cnamEligible && (
                                <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-900 px-2 py-1 rounded text-xs font-semibold">
                                  ✓ CNAM
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="flex gap-2 shrink-0">
                            <button
                              onClick={() => handleEditService(service)}
                              className="p-2 hover:bg-blue-100 rounded transition-colors"
                              title="Editează"
                            >
                              <Edit2 className="w-4 h-4 text-blue-600" />
                            </button>
                            <button
                              onClick={() => handleDeleteService(service.id)}
                              className="p-2 hover:bg-red-100 rounded transition-colors"
                              title="Șterge"
                            >
                              <Trash2 className="w-4 h-4 text-red-600" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-600">
        <p><strong>Total:</strong> {services.length} servicii</p>
        <p className="mt-2 text-xs text-slate-500">
          💡 <strong>Notă:</strong> La fiecare modificare (adăugare/editare/ștergere), datele se salvează automat pe server și se actualizează pe site.
        </p>
      </div>
    </div>
  );
};

export default ManageServices;
