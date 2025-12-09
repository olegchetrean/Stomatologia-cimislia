import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Cookie, Shield, Settings, Check } from 'lucide-react';
import { Button } from './ui/Button';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = 'csr_cookie_consent';
const COOKIE_PREFERENCES_KEY = 'csr_cookie_preferences';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (acceptAll: boolean = false) => {
    const finalPreferences = acceptAll
      ? { necessary: true, analytics: true, marketing: true }
      : preferences;

    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(finalPreferences));
    localStorage.setItem('csr_consent_date', new Date().toISOString());

    setIsVisible(false);

    // Here you would initialize analytics/marketing based on preferences
    if (finalPreferences.analytics) {
      // Initialize Google Analytics or similar
      console.log('Analytics cookies enabled');
    }
    if (finalPreferences.marketing) {
      // Initialize marketing pixels
      console.log('Marketing cookies enabled');
    }
  };

  const handleAcceptAll = () => {
    saveConsent(true);
  };

  const handleAcceptSelected = () => {
    saveConsent(false);
  };

  const handleRejectAll = () => {
    setPreferences({ necessary: true, analytics: false, marketing: false });
    saveConsent(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-overlay" />

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-modal p-4 md:p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
          {!showSettings ? (
            // Main Banner
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-medical-blue/10 rounded-xl flex items-center justify-center shrink-0">
                  <Cookie className="w-6 h-6 text-medical-blue" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">
                    Respectăm confidențialitatea datelor tale
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Folosim cookie-uri pentru a îmbunătăți experiența pe site, a analiza traficul și a personaliza conținutul.
                    Poți alege ce tipuri de cookie-uri accepți. Cookie-urile necesare sunt obligatorii pentru funcționarea site-ului.
                    <Link to="/confidentialitate" className="text-medical-blue-lighter hover:underline ml-1">
                      Află mai multe
                    </Link>
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
                <button
                  onClick={() => setShowSettings(true)}
                  className="text-sm text-slate-500 hover:text-medical-blue flex items-center gap-2 transition-colors"
                >
                  <Settings className="w-4 h-4" />
                  Personalizează preferințele
                </button>

                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleRejectAll}
                    className="w-full sm:w-auto"
                  >
                    Doar necesare
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleAcceptAll}
                    className="w-full sm:w-auto"
                  >
                    Acceptă toate
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            // Settings Panel
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-medical-blue" />
                  <h3 className="font-heading font-bold text-xl text-slate-900">
                    Preferințe Cookie-uri
                  </h3>
                </div>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {/* Necessary Cookies */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-trust-green/10 rounded-lg flex items-center justify-center">
                        <Check className="w-5 h-5 text-trust-green" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">Cookie-uri necesare</h4>
                        <p className="text-xs text-slate-500">Întotdeauna active</p>
                      </div>
                    </div>
                    <div className="w-12 h-6 bg-trust-green rounded-full relative cursor-not-allowed">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow" />
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mt-2">
                    Sunt esențiale pentru funcționarea site-ului. Includ preferințe de sesiune,
                    autentificare și securitate. Nu pot fi dezactivate.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">Cookie-uri de analiză</h4>
                        <p className="text-xs text-slate-500">Opțional</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                      className={`w-12 h-6 rounded-full relative transition-colors ${
                        preferences.analytics ? 'bg-medical-blue' : 'bg-slate-300'
                      }`}
                    >
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all ${
                        preferences.analytics ? 'right-1' : 'left-1'
                      }`} />
                    </button>
                  </div>
                  <p className="text-sm text-slate-600 mt-2">
                    Ne ajută să înțelegem cum utilizatorii interacționează cu site-ul pentru a îmbunătăți
                    experiența generală. Datele sunt anonimizate.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">Cookie-uri de marketing</h4>
                        <p className="text-xs text-slate-500">Opțional</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
                      className={`w-12 h-6 rounded-full relative transition-colors ${
                        preferences.marketing ? 'bg-medical-blue' : 'bg-slate-300'
                      }`}
                    >
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all ${
                        preferences.marketing ? 'right-1' : 'left-1'
                      }`} />
                    </button>
                  </div>
                  <p className="text-sm text-slate-600 mt-2">
                    Permit afișarea de reclame relevante pe alte platforme. Nu sunt utilizate pentru
                    vânzarea datelor personale către terți.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-end border-t border-slate-100 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRejectAll}
                >
                  Refuză opționale
                </Button>
                <Button
                  size="sm"
                  onClick={handleAcceptSelected}
                >
                  Salvează preferințele
                </Button>
              </div>

              <p className="text-xs text-slate-400 text-center mt-4">
                Poți modifica oricând preferințele din{' '}
                <Link to="/confidentialitate" className="text-medical-blue-lighter hover:underline">
                  Politica de Confidențialitate
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

// Hook to check cookie consent status
export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookiePreferences | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_PREFERENCES_KEY);
    if (stored) {
      setConsent(JSON.parse(stored));
    }
  }, []);

  return consent;
};

// Function to open cookie settings (can be called from footer link)
export const openCookieSettings = () => {
  localStorage.removeItem(COOKIE_CONSENT_KEY);
  window.location.reload();
};
