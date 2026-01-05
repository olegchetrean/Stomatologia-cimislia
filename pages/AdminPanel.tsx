import React, { useState } from 'react';
import { Lock, LogOut, Settings, Users, Package } from 'lucide-react';
import { Button } from '../components/ui/Button';
import ManageServices from './Admin/ManageServices';
import ManageTeam from './Admin/ManageTeam';

export const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('adminAuth') === 'true'
  );
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'services' | 'team'>('services');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Просто для демонстрации - измените на реальный пароль
    if (password === 'admin123') {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuth', 'true');
      setPassword('');
    } else {
      alert('Пароль неправильный!');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuth');
    setActiveTab('services');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-medical-blue to-medical-blue-light flex items-center justify-center pt-20 pb-20">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-medical-blue/10 rounded-2xl flex items-center justify-center">
              <Lock className="w-8 h-8 text-medical-blue" />
            </div>
          </div>
          
          <h1 className="font-heading text-3xl font-bold text-center text-slate-900 mb-2">
            Admin Panel
          </h1>
          <p className="text-center text-slate-600 mb-8">
            ÎM CSR Cimișlia - Management Panel
          </p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Parolă
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Introduceți parola"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:outline-none focus:border-medical-blue transition-colors"
              />
            </div>

            <Button type="submit" className="w-full">
              Intră în Admin Panel
            </Button>
          </form>

          <p className="text-xs text-slate-500 text-center mt-6">
            Doar pentru administratori autorizați
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-20">
      {/* Header */}
      <div className="bg-medical-blue text-white py-8 mb-8">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="font-heading text-3xl font-bold">Admin Panel</h1>
            <p className="text-slate-200 text-sm mt-1">Gestionare servicii și echipă</p>
          </div>
          <Button
            variant="outline"
            className="gap-2 border-white/40 hover:bg-white/10"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4" /> Logout
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-slate-200">
          <button
            onClick={() => setActiveTab('services')}
            className={`px-6 py-3 font-semibold flex items-center gap-2 transition-all border-b-2 ${
              activeTab === 'services'
                ? 'border-medical-blue text-medical-blue'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Package className="w-5 h-5" /> Servicii
          </button>
          <button
            onClick={() => setActiveTab('team')}
            className={`px-6 py-3 font-semibold flex items-center gap-2 transition-all border-b-2 ${
              activeTab === 'team'
                ? 'border-medical-blue text-medical-blue'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Users className="w-5 h-5" /> Echipa
          </button>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          {activeTab === 'services' && <ManageServices />}
          {activeTab === 'team' && <ManageTeam />}
        </div>
      </div>
    </div>
  );
};
