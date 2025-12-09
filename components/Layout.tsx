import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, ChevronUp, ChevronDown, AlertTriangle, Clock, Calendar, Cookie } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './ui/Button';
import { CookieConsent, openCookieSettings } from './CookieConsent';

interface NavItem {
  name: string;
  path: string;
  children?: { name: string; path: string; description?: string }[];
}

const navItems: NavItem[] = [
  { name: 'Acasă', path: '/' },
  { name: 'Despre Noi', path: '/despre' },
  {
    name: 'Servicii',
    path: '/servicii',
    children: [
      { name: 'Toate Serviciile', path: '/servicii', description: 'Lista completă de servicii' },
      { name: 'Lista de Prețuri', path: '/preturi', description: 'Tarife și costuri' },
      { name: 'Implantologie', path: '/implantologie', description: 'Implanturi dentare' },
      { name: 'Ortodonție', path: '/ortodontie', description: 'Aparate dentare' },
      { name: 'Pediatrie', path: '/pediatrie', description: 'Pentru copii' },
    ]
  },
  { name: 'Echipa', path: '/echipa' },
  { name: 'Galerie', path: '/galerie' },
  { name: 'Contact', path: '/contact' }
];

const footerLinks = {
  servicii: [
    { name: 'Toate Serviciile', path: '/servicii' },
    { name: 'Implantologie', path: '/implantologie' },
    { name: 'Ortodonție', path: '/ortodontie' },
    { name: 'Pediatrie', path: '/pediatrie' },
    { name: 'Lista de Prețuri', path: '/preturi' },
  ],
  informatii: [
    { name: 'Despre Noi', path: '/despre' },
    { name: 'Echipa Medicală', path: '/echipa' },
    { name: 'Galerie Foto', path: '/galerie' },
    { name: 'Testimoniale', path: '/testimoniale' },
    { name: 'Întrebări Frecvente', path: '/intrebari-frecvente' },
    { name: 'Informații Utile', path: '/informatii-utile' },
  ],
  legal: [
    { name: 'Transparență', path: '/transparenta' },
    { name: 'Termeni și Condiții', path: '/termeni' },
    { name: 'Politica de Confidențialitate', path: '/confidentialitate' },
    { name: 'Sugestii și Reclamații', path: '/sugestii' },
  ]
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-2 text-sm z-sticky relative">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 animate-pulse" />
            <span className="font-medium">Urgențe Stomatologice:</span>
          </div>
          <a href="tel:079044016" className="font-bold hover:underline">079 044 016</a>
          <Link to="/urgente" className="text-red-200 hover:text-white text-xs">Mai multe info →</Link>
        </div>
      </div>

      {/* Top Bar */}
      <div className="bg-medical-blue text-white py-2 text-xs md:text-sm z-sticky relative">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="tel:079044016" className="flex items-center gap-1 hover:text-medical-blue-lighter transition-colors">
              <Phone className="w-3 h-3" /> 079 044 016
            </a>
            <span className="hidden md:flex items-center gap-1">
              <MapPin className="w-3 h-3" /> Cimișlia, str. Alexandru cel Bun 135
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> Luni-Vineri: 08:00 - 17:00
            </span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className={cn(
        'sticky top-0 w-full z-navbar transition-all duration-200',
        isScrolled
          ? 'bg-white shadow-md py-3 border-b border-slate-100'
          : 'bg-medical-blue/95 backdrop-blur-sm py-4 border-b border-white/10'
      )}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group relative">
            <div className="w-10 h-10 bg-gradient-to-br from-medical-blue to-medical-blue-light rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
              C
            </div>
            <div className={cn("leading-tight transition-colors", isScrolled ? 'text-slate-900' : 'text-white')}>
              <h1 className="font-heading font-bold text-lg">CSR Cimișlia</h1>
              <p className="text-xs opacity-80">Centrul Stomatologic Raional</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <div key={item.path} className="relative group">
                {item.children ? (
                  <>
                    <button
                      className={cn(
                        'font-medium text-sm transition-colors relative py-2 flex items-center gap-1',
                        isActive(item.path)
                          ? (isScrolled ? 'text-medical-blue-lighter' : 'text-trust-teal')
                          : (isScrolled ? 'text-slate-700 hover:text-medical-blue-lighter' : 'text-white/90 hover:text-white')
                      )}
                      onMouseEnter={() => setOpenDropdown(item.name)}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    {/* Dropdown */}
                    <div
                      className={cn(
                        "absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200",
                      )}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2 min-w-[220px]">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block px-4 py-3 hover:bg-slate-50 transition-colors"
                          >
                            <span className="font-medium text-slate-900 block">{child.name}</span>
                            {child.description && (
                              <span className="text-xs text-slate-500">{child.description}</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={cn(
                      'font-medium text-sm transition-colors relative group py-2',
                      isActive(item.path)
                        ? (isScrolled ? 'text-medical-blue-lighter' : 'text-trust-teal')
                        : (isScrolled ? 'text-slate-700 hover:text-medical-blue-lighter' : 'text-white/90 hover:text-white')
                    )}
                  >
                    {item.name}
                    <span className={cn(
                      "absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform group-hover:scale-x-100",
                      isScrolled ? 'bg-medical-blue-lighter' : 'bg-trust-teal',
                      isActive(item.path) && "scale-x-100"
                    )} />
                  </Link>
                )}
              </div>
            ))}
            <Link to="/programare">
              <Button size="sm" as="div" className={isScrolled ? '' : 'shadow-none border-white/20 hover:bg-white/20'}>
                <Calendar className="w-4 h-4 mr-1" /> Programează
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn(
              "lg:hidden p-2 z-mobile-menu relative rounded-lg transition-colors",
              isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Închide meniu' : 'Deschide meniu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-navbar bg-black/20 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          {/* Menu Content */}
          <div className="fixed inset-0 z-mobile-menu bg-white pt-32 px-6 lg:hidden animate-fade-in-up overflow-y-auto">
            <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <div key={item.path}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      className="w-full text-left text-xl font-heading font-bold text-slate-900 flex items-center justify-between py-2"
                    >
                      {item.name}
                      <ChevronDown className={cn("w-5 h-5 transition-transform", openDropdown === item.name && "rotate-180")} />
                    </button>
                    {openDropdown === item.name && (
                      <div className="pl-4 space-y-2 mt-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 text-slate-600 hover:text-medical-blue-lighter"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xl font-heading font-bold text-slate-900 hover:text-medical-blue-lighter transition-colors block py-2"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <div className="border-t border-slate-200 pt-4 mt-4">
              <Link to="/urgente" onClick={() => setMobileMenuOpen(false)} className="text-red-600 font-bold flex items-center gap-2 py-2">
                <AlertTriangle className="w-5 h-5" /> Urgențe
              </Link>
              <Link to="/intrebari-frecvente" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 py-2 block">
                Întrebări Frecvente
              </Link>
              <Link to="/testimoniale" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 py-2 block">
                Testimoniale
              </Link>
            </div>

            <Link to="/programare" className="mt-4" onClick={() => setMobileMenuOpen(false)}>
              <Button as="div" className="w-full">
                <Calendar className="w-5 h-5 mr-2" /> Programează Acum
              </Button>
            </Link>
          </div>
        </div>
        </>
      )}

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-medical-blue/10 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-medical-blue-lighter rounded-lg flex items-center justify-center font-bold text-lg">C</div>
                <span className="font-heading font-bold text-xl">CSR Cimișlia</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Excelență în stomatologie pentru comunitatea din Cimișlia și împrejurimi.
                Servicii complete, tehnologie modernă și o echipă dedicată sănătății dumneavoastră orale.
              </p>
              <div className="flex gap-4 mb-6">
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-medical-blue-lighter transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-medical-blue-lighter transition-colors"><Instagram className="w-5 h-5" /></a>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="font-bold mb-2">Program de Lucru</p>
                <p className="text-slate-400 text-sm">Luni - Vineri: 08:00 - 17:00</p>
                <p className="text-slate-400 text-sm">Sâmbătă - Duminică: Închis</p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-6">Servicii</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                {footerLinks.servicii.map(link => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-medical-blue-lighter transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-6">Informații</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                {footerLinks.informatii.map(link => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-medical-blue-lighter transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-6">Contact</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 text-medical-blue-lighter shrink-0" />
                  <span>Strada Alexandru cel Bun 135,<br/>Cimișlia, Republica Moldova</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="w-5 h-5 text-medical-blue-lighter shrink-0" />
                  <a href="tel:079044016" className="hover:text-white font-bold">079 044 016</a>
                </li>
                <li className="flex gap-3">
                  <Mail className="w-5 h-5 text-medical-blue-lighter shrink-0" />
                  <a href="mailto:victoras1984@mail.ru" className="hover:text-white">victoras1984@mail.ru</a>
                </li>
              </ul>

              <div className="mt-6">
                <Link to="/programare">
                  <Button as="div" size="sm" className="w-full">
                    <Calendar className="w-4 h-4 mr-2" /> Programează Online
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="border-t border-white/10 pt-8 mb-8">
            <div className="flex flex-wrap gap-4 justify-center text-sm text-slate-500">
              {footerLinks.legal.map(link => (
                <Link key={link.path} to={link.path} className="hover:text-medical-blue-lighter transition-colors">
                  {link.name}
                </Link>
              ))}
              <a href="http://cnam.md" target="_blank" rel="noopener noreferrer" className="hover:text-medical-blue-lighter transition-colors">
                CNAM
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; 2025 IM Centrul Stomatologic Raional Cimișlia. Toate drepturile rezervate.</p>
            <div className="flex items-center gap-4 mt-2 md:mt-0">
              <button
                onClick={openCookieSettings}
                className="flex items-center gap-1 hover:text-medical-blue-lighter transition-colors"
              >
                <Cookie className="w-3 h-3" />
                Setări Cookie-uri
              </button>
              <span>Creat cu profesionalism pentru sănătatea ta.</span>
            </div>
          </div>
        </div>
      </footer>

      {/* GDPR Cookie Consent Banner */}
      <CookieConsent />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-fab">
        <a
          href="https://wa.me/37379044016"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform text-white"
          title="WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        </a>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={cn(
            "w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center shadow transition-all",
            isScrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
          )}
          title="Sus"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
