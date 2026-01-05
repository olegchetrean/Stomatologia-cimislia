import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, FileText, AlertCircle, Check, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { openCookieSettings } from '../components/CookieConsent';

export const PrivacyPolicy = () => {
  const sections = [
    { id: 'introducere', title: '1. Introducere' },
    { id: 'operator', title: '2. Operatorul de Date' },
    { id: 'date-colectate', title: '3. Datele Colectate' },
    { id: 'scopuri', title: '4. Scopurile Prelucrării' },
    { id: 'temei-legal', title: '5. Temeiul Legal' },
    { id: 'destinatari', title: '6. Destinatarii Datelor' },
    { id: 'transfer', title: '7. Transferul Datelor' },
    { id: 'durata', title: '8. Durata Stocării' },
    { id: 'drepturi', title: '9. Drepturile Tale' },
    { id: 'cookies', title: '10. Cookie-uri' },
    { id: 'securitate', title: '11. Securitatea Datelor' },
    { id: 'minori', title: '12. Datele Minorilor' },
    { id: 'modificari', title: '13. Modificări' },
    { id: 'contact', title: '14. Contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-medical-blue-lighter/20 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-medical-blue-lighter" />
            </div>
            <div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold">Politica de Confidentialitate</h1>
              <p className="text-slate-400">Ultima actualizare: 01.01.2025</p>
            </div>
          </div>
          <p className="text-slate-300 max-w-2xl">
            Confidentialitatea datelor tale este importantă pentru noi. Această politică explică cum colectăm,
            utilizăm și protejăm informatiile personale, în conformitate cu legislatia Republicii Moldova și
            principiile GDPR.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="font-heading font-bold text-lg mb-4 text-slate-900">Cuprins</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm text-slate-600 hover:text-medical-blue-lighter hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
              {/* Quick Summary Box */}
              <div className="bg-medical-blue/5 border border-medical-blue/10 rounded-2xl p-6 mb-10">
                <h3 className="font-heading font-bold text-lg text-medical-blue mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Rezumat Rapid
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-trust-green mt-1 shrink-0" />
                    <span>Colectăm doar datele necesare pentru servicii medicale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-trust-green mt-1 shrink-0" />
                    <span>Nu vindem niciodată datele tale tertilor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-trust-green mt-1 shrink-0" />
                    <span>Ai dreptul de acces, rectificare și ștergere a datelor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-trust-green mt-1 shrink-0" />
                    <span>Datele medicale sunt stocate conform legislatiei în vigoare</span>
                  </li>
                </ul>
              </div>

              <div className="prose prose-slate max-w-none prose-headings:scroll-mt-28">
                {/* Section 1 */}
                <section id="introducere">
                  <h2>1. Introducere</h2>
                  <p>
                    ÎM CSR Cimișlia (denumit în continuare
                    "noi", "clinica") respectă confidentialitatea datelor dumneavoastră cu caracter
                    personal și se angajează să le protejeze în conformitate cu:
                  </p>
                  <ul>
                    <li>Legea nr. 133 din 08.07.2011 privind protectia datelor cu caracter personal a Republicii Moldova</li>
                    <li>Regulamentul General privind Protectia Datelor (GDPR) - principii aplicabile</li>
                    <li>Legea nr. 263 din 27.10.2005 cu privire la drepturile și responsabilitătile pacientului</li>
                    <li>Codul deontologic al lucrătorului medical și farmacistului</li>
                  </ul>
                  <p>
                    Această politică descrie modul în care colectăm, utilizăm, stocăm și protejăm informatiile
                    dumneavoastră personale când utilizati serviciile noastre medicale sau site-ul web.
                  </p>
                </section>

                {/* Section 2 */}
                <section id="operator">
                  <h2>2. Operatorul de Date</h2>
                  <p>Operatorul responsabil pentru prelucrarea datelor dumneavoastră cu caracter personal este:</p>
                  <div className="bg-slate-50 p-6 rounded-xl not-prose my-4">
                    <p className="font-bold text-slate-900 mb-2">ÎM CSR Cimișlia</p>
                    <div className="space-y-2 text-sm text-slate-600">
                      <p className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-medical-blue" />
                        Strada Alexandru cel Bun 135, Cimișlia, MD-4101, Republica Moldova
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-medical-blue" />
                        <a href="tel:079772488" className="hover:text-medical-blue">079 772 488</a>
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-medical-blue" />
                        <a href="mailto:nolaresu@bk.ru" className="hover:text-medical-blue">nolaresu@bk.ru</a>
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-medical-blue" />
                        <a href="mailto:centrustomcim@gmail.com" className="hover:text-medical-blue">centrustomcim@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="date-colectate">
                  <h2>3. Datele Colectate</h2>
                  <p>Colectăm următoarele categorii de date cu caracter personal:</p>

                  <h4>3.1 Date de identificare</h4>
                  <ul>
                    <li>Nume și prenume</li>
                    <li>IDNP (Numărul de Identificare de Stat al Persoanei)</li>
                    <li>Data nașterii</li>
                    <li>Seria și numărul actului de identitate</li>
                  </ul>

                  <h4>3.2 Date de contact</h4>
                  <ul>
                    <li>Adresa de domiciliu/reședintă</li>
                    <li>Număr de telefon</li>
                    <li>Adresă de email</li>
                  </ul>

                  <h4>3.3 Date medicale (categorii speciale)</h4>
                  <ul>
                    <li>Istoricul medical stomatologic</li>
                    <li>Radiografii și imagini medicale</li>
                    <li>Planuri de tratament</li>
                    <li>Alergii și contraindicatii</li>
                    <li>Medicatie curentă</li>
                    <li>Rezultate ale examinărilor</li>
                  </ul>

                  <h4>3.4 Date privind asigurarea</h4>
                  <ul>
                    <li>Numărul politei CNAM</li>
                    <li>Statutul de asigurat</li>
                  </ul>

                  <h4>3.5 Date tehnice (site web)</h4>
                  <ul>
                    <li>Adresa IP</li>
                    <li>Tipul browserului și dispozitivului</li>
                    <li>Paginile vizitate și durata vizitei</li>
                    <li>Cookie-uri (vezi sectiunea dedicată)</li>
                  </ul>
                </section>

                {/* Section 4 */}
                <section id="scopuri">
                  <h2>4. Scopurile Prelucrării</h2>
                  <p>Prelucrăm datele dumneavoastră pentru următoarele scopuri:</p>

                  <table className="w-full text-sm">
                    <thead>
                      <tr>
                        <th className="text-left p-3 bg-slate-50">Scop</th>
                        <th className="text-left p-3 bg-slate-50">Date utilizate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3">Prestarea serviciilor medicale stomatologice</td>
                        <td className="p-3">Identificare, contact, medicale</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Programarea și gestionarea vizitelor</td>
                        <td className="p-3">Identificare, contact</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Decontarea serviciilor cu CNAM</td>
                        <td className="p-3">Identificare, asigurare, medicale</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Comunicarea cu pacientul (reamintiri, rezultate)</td>
                        <td className="p-3">Contact</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Îndeplinirea obligatiilor legale</td>
                        <td className="p-3">Toate categoriile relevante</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">Îmbunătătirea serviciilor și site-ului</td>
                        <td className="p-3">Date tehnice (anonimizate)</td>
                      </tr>
                    </tbody>
                  </table>
                </section>

                {/* Section 5 */}
                <section id="temei-legal">
                  <h2>5. Temeiul Legal al Prelucrării</h2>
                  <p>Prelucrăm datele dumneavoastră pe baza următoarelor temeiuri legale:</p>
                  <ul>
                    <li>
                      <strong>Executarea contractului</strong> - pentru prestarea serviciilor medicale solicitate
                    </li>
                    <li>
                      <strong>Obligatie legală</strong> - pentru păstrarea dosarelor medicale conform legii, raportări
                      către autorităti
                    </li>
                    <li>
                      <strong>Interese vitale</strong> - în situatii de urgentă medicală
                    </li>
                    <li>
                      <strong>Consimtământ</strong> - pentru comunicări de marketing (dacă este cazul), cookie-uri
                      optionale
                    </li>
                    <li>
                      <strong>Interes legitim</strong> - pentru îmbunătătirea serviciilor, securitate
                    </li>
                  </ul>
                </section>

                {/* Section 6 */}
                <section id="destinatari">
                  <h2>6. Destinatarii Datelor</h2>
                  <p>Datele dumneavoastră pot fi partajate cu:</p>
                  <ul>
                    <li>
                      <strong>Personalul medical</strong> - medicii și asistentii implicati direct în tratamentul
                      dumneavoastră
                    </li>
                    <li>
                      <strong>CNAM</strong> - pentru decontarea serviciilor în baza asigurării obligatorii
                    </li>
                    <li>
                      <strong>Laboratoare partenere</strong> - pentru analize și lucrări protetice (doar datele necesare)
                    </li>
                    <li>
                      <strong>Autorităti</strong> - când legea o impune (Ministerul Sănătătii, organe de control)
                    </li>
                  </ul>
                  <p className="font-bold text-medical-blue">
                    Nu vindem și nu partajăm datele dumneavoastră cu terti în scopuri comerciale sau de marketing
                    fără consimtământul dumneavoastră explicit.
                  </p>
                </section>

                {/* Section 7 */}
                <section id="transfer">
                  <h2>7. Transferul Datelor</h2>
                  <p>
                    Datele dumneavoastră sunt stocate și prelucrate pe teritoriul Republicii Moldova. Nu transferăm
                    date cu caracter personal în afara tării, cu exceptia cazurilor în care:
                  </p>
                  <ul>
                    <li>Este necesar pentru tratamentul dumneavoastră (de ex. consultatii cu specialiști din străinătate)</li>
                    <li>Ati solicitat explicit acest lucru</li>
                    <li>Sunt aplicate garantii adecvate conform legislatiei</li>
                  </ul>
                </section>

                {/* Section 8 */}
                <section id="durata">
                  <h2>8. Durata Stocării</h2>
                  <p>Păstrăm datele dumneavoastră pentru perioade diferite, în functie de tipul datelor:</p>
                  <ul>
                    <li>
                      <strong>Dosare medicale</strong> - minimum 10 ani de la ultima vizită (conform legislatiei
                      medicale)
                    </li>
                    <li>
                      <strong>Radiografii și imagini</strong> - 10 ani
                    </li>
                    <li>
                      <strong>Date financiare/facturi</strong> - 5 ani (obligatii fiscale)
                    </li>
                    <li>
                      <strong>Solicitări de programare</strong> - 1 an după încheierea tratamentului
                    </li>
                    <li>
                      <strong>Cookie-uri</strong> - variază (vezi sectiunea Cookie-uri)
                    </li>
                  </ul>
                  <p>
                    După expirarea termenelor legale, datele sunt șterse în sigurantă sau anonimizate pentru
                    scopuri statistice.
                  </p>
                </section>

                {/* Section 9 */}
                <section id="drepturi">
                  <h2>9. Drepturile Dumneavoastră</h2>
                  <p>
                    În conformitate cu legislatia privind protectia datelor, aveti următoarele drepturi:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 not-prose my-6">
                    {[
                      {
                        title: 'Dreptul de acces',
                        desc: 'Puteti solicita o copie a datelor pe care le detinem despre dumneavoastră',
                      },
                      {
                        title: 'Dreptul la rectificare',
                        desc: 'Puteti solicita corectarea datelor inexacte sau incomplete',
                      },
                      {
                        title: 'Dreptul la ștergere',
                        desc: 'Puteti solicita ștergerea datelor (în limitele obligatiilor legale)',
                      },
                      {
                        title: 'Dreptul la restrictionare',
                        desc: 'Puteti solicita limitarea prelucrării în anumite situatii',
                      },
                      {
                        title: 'Dreptul la portabilitate',
                        desc: 'Puteti primi datele într-un format structurat, utilizat frecvent',
                      },
                      {
                        title: 'Dreptul de opozitie',
                        desc: 'Vă puteti opune prelucrării bazate pe interesul nostru legitim',
                      },
                      {
                        title: 'Retragerea consimtământului',
                        desc: 'Puteti retrage oricând consimtământul (fără a afecta legalitatea prelucrării anterioare)',
                      },
                      {
                        title: 'Dreptul de a depune plângere',
                        desc: 'Puteti depune plângere la Centrul National pentru Protectia Datelor cu Caracter Personal',
                      },
                    ].map((right, i) => (
                      <div key={i} className="bg-slate-50 p-4 rounded-xl">
                        <h4 className="font-bold text-slate-900 mb-1">{right.title}</h4>
                        <p className="text-sm text-slate-600">{right.desc}</p>
                      </div>
                    ))}
                  </div>

                  <p>
                    Pentru a vă exercita drepturile, ne puteti contacta la adresa de email sau fizic la receptia
                    clinicii. Vom răspunde în termen de 30 de zile de la primirea solicitării.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 not-prose my-4">
                    <p className="text-amber-800 text-sm">
                      <strong>Notă:</strong> Anumite date medicale nu pot fi șterse înainte de expirarea termenelor
                      legale de păstrare, pentru a proteja atât interesele dumneavoastră, cât și ale clinicii.
                    </p>
                  </div>
                </section>

                {/* Section 10 */}
                <section id="cookies">
                  <h2>10. Cookie-uri</h2>
                  <p>
                    Site-ul nostru utilizează cookie-uri pentru a îmbunătăti experienta dumneavoastră. Cookie-urile
                    sunt fișiere mici de text stocate pe dispozitivul dumneavoastră.
                  </p>

                  <h4>10.1 Tipuri de cookie-uri utilizate</h4>

                  <table className="w-full text-sm">
                    <thead>
                      <tr>
                        <th className="text-left p-3 bg-slate-50">Tip</th>
                        <th className="text-left p-3 bg-slate-50">Scop</th>
                        <th className="text-left p-3 bg-slate-50">Durată</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Necesare</td>
                        <td className="p-3">Functionarea site-ului, preferinte de sesiune</td>
                        <td className="p-3">Sesiune</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Analitice</td>
                        <td className="p-3">Întelegerea modului de utilizare a site-ului</td>
                        <td className="p-3">1 an</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Marketing</td>
                        <td className="p-3">Afișarea de reclame relevante</td>
                        <td className="p-3">90 zile</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="not-prose my-6">
                    <Button
                      variant="outline"
                      onClick={openCookieSettings}
                      className="gap-2"
                    >
                      <FileText className="w-4 h-4" />
                      Modifică Preferintele Cookie
                    </Button>
                  </div>
                </section>

                {/* Section 11 */}
                <section id="securitate">
                  <h2>11. Securitatea Datelor</h2>
                  <p>
                    Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele dumneavoastră:
                  </p>
                  <ul>
                    <li>Acces restrictionat la datele medicale (doar personal autorizat)</li>
                    <li>Sisteme informatice protejate cu parolă și firewall</li>
                    <li>Instruirea periodică a personalului privind confidentialitatea</li>
                    <li>Dosare fizice păstrate în spatii securizate</li>
                    <li>Proceduri de backup și recuperare a datelor</li>
                    <li>Criptarea comunicatiilor sensibile</li>
                  </ul>
                  <p>
                    În cazul unei breșe de securitate care vă poate afecta, vă vom notifica în conformitate cu
                    cerintele legale.
                  </p>
                </section>

                {/* Section 12 */}
                <section id="minori">
                  <h2>12. Datele Minorilor</h2>
                  <p>
                    Pentru pacientii minori (sub 18 ani), datele sunt prelucrate cu consimtământul părintelui sau
                    tutorelui legal. Părintele/tutorele poate exercita toate drepturile în numele minorului.
                  </p>
                  <p>
                    Minorii cu vârsta peste 16 ani pot consimti singuri la anumite tratamente conform legii,
                    însă datele de contact ale părintelui sunt păstrate pentru situatii de urgentă.
                  </p>
                </section>

                {/* Section 13 */}
                <section id="modificari">
                  <h2>13. Modificări ale Politicii</h2>
                  <p>
                    Ne rezervăm dreptul de a actualiza această politică de confidentialitate pentru a reflecta
                    modificări ale practicilor noastre sau cerinte legale noi.
                  </p>
                  <p>
                    În cazul unor modificări semnificative, vă vom informa prin:
                  </p>
                  <ul>
                    <li>Afișarea unei notificări pe site</li>
                    <li>Email (dacă avem adresa dumneavoastră și ati consimtit la comunicări)</li>
                    <li>Notificare la receptie în cadrul următoarei vizite</li>
                  </ul>
                  <p>
                    Data ultimei actualizări este afișată în partea de sus a acestei pagini.
                  </p>
                </section>

                {/* Section 14 */}
                <section id="contact">
                  <h2>14. Contact</h2>
                  <p>
                    Pentru orice întrebări legate de prelucrarea datelor dumneavoastră personale sau pentru a vă
                    exercita drepturile, ne puteti contacta:
                  </p>

                  <div className="bg-slate-50 p-6 rounded-xl not-prose my-4">
                    <h4 className="font-bold text-slate-900 mb-4">ÎM CSR Cimișlia</h4>
                    <div className="space-y-3 text-sm text-slate-600">
                      <p className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-medical-blue" />
                        Strada Alexandru cel Bun 135, Cimișlia, MD-4101
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-medical-blue" />
                        <a href="tel:079772488" className="hover:text-medical-blue font-medium">079 772 488</a>
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-medical-blue" />
                        <a href="mailto:nolaresu@bk.ru" className="hover:text-medical-blue">nolaresu@bk.ru</a>
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-medical-blue" />
                        <a href="mailto:centrustomcim@gmail.com" className="hover:text-medical-blue">centrustomcim@gmail.com</a>
                      </p>
                    </div>
                  </div>

                  <p>
                    De asemenea, puteti depune o plângere la autoritatea de supraveghere:
                  </p>

                  <div className="bg-slate-50 p-6 rounded-xl not-prose my-4">
                    <h4 className="font-bold text-slate-900 mb-2">
                      Centrul National pentru Protectia Datelor cu Caracter Personal (CNPDCP)
                    </h4>
                    <a
                      href="https://datepersonale.md"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-medical-blue-lighter hover:underline text-sm flex items-center gap-1"
                    >
                      datepersonale.md
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </section>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 bg-medical-blue/5 border border-medical-blue/10 rounded-2xl p-6 text-center">
              <p className="text-slate-700 mb-4">
                Ai întrebări despre datele tale personale sau vrei să soliciti informatii?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button as="div">Contactează-ne</Button>
                </Link>
                <Button variant="outline" onClick={openCookieSettings}>
                  Setări Cookie-uri
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
