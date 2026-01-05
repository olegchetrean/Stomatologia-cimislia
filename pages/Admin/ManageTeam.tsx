import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Edit2, Check, X, Loader2 } from 'lucide-react';
import { Button } from '../../components/ui/Button';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  phone?: string;
  bio?: string;
  image?: string;
}

const ManageTeam = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<Partial<TeamMember>>({
    id: '',
    name: '',
    role: 'Medic Stomatolog',
    specialty: '',
    phone: '',
    bio: '',
  });

  useEffect(() => {
    loadTeam();
  }, []);

  const loadTeam = async () => {
    try {
      // Сначала пытаемся загрузить с сервера
      try {
        const response = await fetch('http://localhost:3001/api/team');
        if (response.ok) {
          const data = await response.json();
          setTeam(data.team);
          return;
        }
      } catch (error) {
        console.log('Сервер недоступен, загружаю из JSON файла');
      }
      
      // Fallback на JSON файл
      const response = await fetch('/data/team.json');
      const data = await response.json();
      setTeam(data.team);
    } catch (error) {
      console.error('Eroare la încărcarea echipei:', error);
    }
  };

  const saveToServer = async (teamToSave: TeamMember[]) => {
    setSaving(true);
    setSaveStatus('idle');
    try {
      const response = await fetch('http://localhost:3001/api/team', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ team: teamToSave }),
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

  const handleAddMember = async () => {
    if (!formData.name || !formData.role) {
      alert('Completați: Nume și Rol!');
      return;
    }

    let updatedTeam: TeamMember[];
    if (editingId) {
      updatedTeam = team.map(m => m.id === editingId ? { ...formData as TeamMember } : m);
      setTeam(updatedTeam);
      setEditingId(null);
    } else {
      const newId = formData.name.toLowerCase().replace(/\s+/g, '-');
      updatedTeam = [...team, { ...formData, id: formData.id || newId } as TeamMember];
      setTeam(updatedTeam);
    }

    // Автоматически сохраняем на сервер
    await saveToServer(updatedTeam);
    resetForm();
  };

  const handleEditMember = (member: TeamMember) => {
    setFormData(member);
    setEditingId(member.id);
    setShowForm(true);
  };

  const handleDeleteMember = async (id: string) => {
    if (confirm('Sigur doriți să ștergeți acest doctor?')) {
      const updatedTeam = team.filter(m => m.id !== id);
      setTeam(updatedTeam);
      // Автоматически сохраняем на сервер
      await saveToServer(updatedTeam);
    }
  };

  const resetForm = () => {
    setFormData({
      id: '',
      name: '',
      role: 'Medic Stomatolog',
      specialty: '',
      phone: '',
      bio: '',
    });
    setShowForm(false);
  };


  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-900">Gestionare Echipă</h2>
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
          <Button onClick={() => setShowForm(true)} className="gap-2">
            <Plus className="w-4 h-4" /> Adaugă Doctor
          </Button>
        </div>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
          <h3 className="font-bold text-lg">{editingId ? 'Editare' : 'Adaugă'} Doctor</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">ID</label>
              <input
                type="text"
                value={formData.id || ''}
                onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                placeholder="Ex: dr-ion-popescu"
                disabled={!!editingId}
                className="w-full px-3 py-2 rounded border border-slate-300 disabled:bg-slate-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Nume Complet</label>
              <input
                type="text"
                value={formData.name || ''}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ion Popescu"
                className="w-full px-3 py-2 rounded border border-slate-300"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Rol</label>
              <input
                type="text"
                value={formData.role || ''}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                placeholder="Medic Stomatolog"
                className="w-full px-3 py-2 rounded border border-slate-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Specialitate</label>
              <input
                type="text"
                value={formData.specialty || ''}
                onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                placeholder="Stomatologie Generală"
                className="w-full px-3 py-2 rounded border border-slate-300"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Telefon</label>
            <input
              type="tel"
              value={formData.phone || ''}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+373 69 123 456"
              className="w-full px-3 py-2 rounded border border-slate-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Biografie</label>
            <textarea
              value={formData.bio || ''}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              placeholder="Descriere scurtă..."
              rows={3}
              className="w-full px-3 py-2 rounded border border-slate-300"
            />
          </div>

          <div className="flex gap-2 justify-end">
            <Button onClick={resetForm} variant="outline">
              <X className="w-4 h-4" /> Anulează
            </Button>
            <Button onClick={handleAddMember}>
              <Check className="w-4 h-4" /> {editingId ? 'Actualizează' : 'Adaugă'}
            </Button>
          </div>
        </div>
      )}

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {team.map((member) => (
          <div key={member.id} className="bg-white border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <h3 className="font-bold text-slate-900">{member.name}</h3>
                <p className="text-xs text-slate-600">{member.role}</p>
                {member.specialty && <p className="text-xs text-medical-blue mt-1">{member.specialty}</p>}
              </div>
              <div className="flex gap-1">
                <button
                  onClick={() => handleEditMember(member)}
                  className="p-2 hover:bg-slate-100 rounded transition-colors"
                >
                  <Edit2 className="w-4 h-4 text-blue-600" />
                </button>
                <button
                  onClick={() => handleDeleteMember(member.id)}
                  className="p-2 hover:bg-slate-100 rounded transition-colors"
                >
                  <Trash2 className="w-4 h-4 text-red-600" />
                </button>
              </div>
            </div>
            {member.phone && (
              <p className="text-xs text-slate-600 mb-2">📞 {member.phone}</p>
            )}
            {member.bio && (
              <p className="text-xs text-slate-600 line-clamp-2">{member.bio}</p>
            )}
          </div>
        ))}
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-600">
        <p><strong>Total:</strong> {team.length} membri</p>
        <p className="mt-2 text-xs text-slate-500">
          💡 <strong>Notă:</strong> La fiecare modificare (adăugare/editare/ștergere), datele se salvează automat pe server și se actualizează pe site.
        </p>
      </div>
    </div>
  );
};

export default ManageTeam;
