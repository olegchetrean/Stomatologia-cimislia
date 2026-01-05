import { Service, TeamMember, Testimonial, FAQ } from './types';

// ==========================================
// TEAM DATA
// ==========================================
export const TEAM: TeamMember[] = [
  {
    id: 'nina-olarescu',
    name: 'Nina Olărescu',
    role: 'Administrator Interimar',
    specialty: 'Management Medical',
    image: 'https://picsum.photos/400/500?random=1',
    bio: 'Cu o experientă vastă în managementul institutiilor medicale, asigură buna functionare a centrului.',
    phone: '079772488'
  },
  {
    id: 'dr-galina-godoroja',
    name: 'Dr. Galina Godoroja',
    role: 'Medic Stomatolog',
    specialty: 'Stomatologie Generală',
    image: 'https://picsum.photos/400/500?random=2',
    phone: '069363366'
  },
  {
    id: 'dr-petru-godoroja',
    name: 'Dr. Petru Godoroja',
    role: 'Medic Stomatolog',
    specialty: 'Stomatologie Generală',
    image: 'https://picsum.photos/400/500?random=3',
    phone: '069271212'
  },
  {
    id: 'dr-veaceslav-cosmariuc',
    name: 'Dr. Veaceslav Coșmariuc',
    role: 'Medic Stomatolog',
    specialty: 'Stomatologie Generală',
    image: 'https://picsum.photos/400/500?random=4',
    phone: '069003408'
  },
  {
    id: 'dr-ion-teaca',
    name: 'Dr. Ion Teaca',
    role: 'Medic Stomatolog',
    specialty: 'Stomatologie Generală',
    image: 'https://picsum.photos/400/500?random=5',
    phone: '069596089'
  },
  {
    id: 'dr-nina-olarescu',
    name: 'Dr. Nina Olărescu',
    role: 'Medic Stomatolog Generalist',
    specialty: 'Stomatologie Generală, Categorie Superioară',
    image: 'https://picsum.photos/400/500?random=9',
    phone: '079772488'
  },
  {
    id: 'angela-covadji',
    name: 'Angela Covadji',
    role: 'Asistent Superior',
    image: 'https://picsum.photos/400/500?random=6'
  },
  {
    id: 'constantin-lascu',
    name: 'Constantin Lașcu',
    role: 'Asistent Medical',
    image: 'https://picsum.photos/400/500?random=7'
  },
  {
    id: 'svetlana-tataru',
    name: 'Svetlana Tataru',
    role: 'Asistent Medical',
    image: 'https://picsum.photos/400/500?random=8'
  }
];

// ==========================================
// TESTIMONIALS
// ==========================================
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Maria Ciobanu',
    content: 'Am venit cu frica de dentist, dar doamna doctor Godoroja a fost extraordinară. Nu am simtit nimic!',
    rating: 5,
    service: 'Tratament Carie'
  },
  {
    id: '2',
    name: 'Ion Rusu',
    content: 'Am făcut tratamentul cariilor și restaurări dentare. Servicii de calitate la prețuri corecte. Apreciez transparenta și faptul că acceptă asigurarea CNAM.',
    rating: 5,
    service: 'Stomatologie Terapeutică'
  },
  {
    id: '3',
    name: 'Elena Munteanu',
    content: 'Clinică modernă și foarte curată. Am făcut un detartraj și diferenta este vizibilă imediat.',
    rating: 5,
    service: 'Profilaxie'
  },
  {
    id: '4',
    name: 'Vasile Popescu',
    content: 'Am adus copilul pentru prima vizită. Personalul a fost foarte răbdător și prietenos.',
    rating: 5,
    service: 'Pediatrie'
  },
  {
    id: '5',
    name: 'Ana Sîrbu',
    content: 'Am făcut tratamentul pulpitei și periodontitei. Recomand cu încredere pentru tratamente terapeutice. Totul a decurs perfect și recuperarea a fost rapidă.',
    rating: 5,
    service: 'Stomatologie Terapeutică'
  }
];

// ==========================================
// FAQ
// ==========================================
export const FAQS: FAQ[] = [
  {
    question: 'Acceptati asigurări medicale CNAM?',
    answer: 'Da, acceptăm asigurarea obligatorie de asistentă medicală (CNAM). Serviciile CNAM sunt disponibile pentru: copiii până la 18 ani, femeile gravide și urgentele medicale pentru pacientii care detin polite de asigurare CNAM. Vă rugăm să prezentati buletinul de identitate (sau adeverinta de naștere pentru minori) la receptie.'
  },
  {
    question: 'Care este programul clinicii?',
    answer: 'Clinica este deschisă de Luni până Vineri, între orele 08:00 și 16:00. Pentru urgente în afara programului, vă rugăm să ne contactati telefonic.'
  },
  {
    question: 'Cum pot face o programare?',
    answer: 'Puteti face o programare telefonic la 079772488, prin email la nolaresu@bk.ru sau centrustomcim@gmail.com, sau completând formularul de pe acest site.'
  },
  {
    question: 'Oferiti servicii pentru copii?',
    answer: 'Da, oferim servicii complete de stomatologie pediatrică. Copiii până la 18 ani pot beneficia de servicii decontate de CNAM.'
  },
  {
    question: 'Cât durează o consultație?',
    answer: 'O consultație standard durează aproximativ 20-30 de minute, timp în care medicul evaluează starea de sănătate orală și stabilește planul de tratament.'
  },
  {
    question: 'Ce documente sunt necesare pentru servicii CNAM?',
    answer: 'Pentru servicii decontate CNAM aveti nevoie doar de: buletin de identitate în original (sau adeverinta de naștere pentru minori). Nu este obligatorie prezentarea politei de asigurare.'
  }
];

// ==========================================
// COMPLETE SERVICE CATALOG - Conform Catalogului Tarifelor Unice
// aprobat de Guvernul Republicii Moldova
// ==========================================
export const SERVICES: Service[] = [
  // ============================================
  // I. CONSULTATII STOMATOLOGICE
  // ============================================
  { id: '1.1', category: 'consultatii', name: 'Consultația medicului stomatolog', price: 253, unit: 'vizită' },

  // ============================================
  // II. ACTIVITĂTI EFECTUATE ÎN CABINETUL STOMATOLOGIC
  // ============================================
  { id: '2.1', category: 'cabinet', subcategory: 'Imagistică', name: 'Analiza ortopantomogramei', price: 317, unit: 'investigație' },

  // ============================================
  // III. ANESTEZIE ÎN STOMATOLOGIE
  // ============================================
  // 1. Anestezie locală
  { id: '3.1', category: 'anestezie', subcategory: 'Locală', name: 'Anestezie locală (infiltrație plexală)', price: 184, unit: 'anestezie' },
  { id: '3.2', category: 'anestezie', subcategory: 'Locală', name: 'Anestezie locală/loco-regională cu carpule', price: 196, unit: 'anestezie' },
  { id: '3.3', category: 'anestezie', subcategory: 'Locală', name: 'Anestezie topică', price: 135, unit: 'anestezie' },

  // ============================================
  // IV. TRATAMENTUL DINTILOR
  // ============================================
  // 1. Tratament endodontic
  { id: '4.1', category: 'terapie', subcategory: 'Endodontie', name: 'Tratamentul canalului radicular cu ultrasunet', price: 93, unit: 'ședintă' },
  { id: '4.2', category: 'terapie', subcategory: 'Endodontie', name: 'Reconstrucție perete-pre-endo', price: 140, unit: 'dinte' },
  { id: '4.3', category: 'terapie', subcategory: 'Endodontie', name: 'Tratament endodontic monocanalar (obturație temporară de canal)', price: 283, unit: 'ședintă' },
  { id: '4.4', category: 'terapie', subcategory: 'Endodontie', name: 'Tratament endodontic bicanalar (obturație temporară de canal)', price: 362, unit: 'ședintă' },
  { id: '4.5', category: 'terapie', subcategory: 'Endodontie', name: 'Tratament endodontic pluricanalar (obturație temporară de canal)', price: 445, unit: 'ședintă' },
  { id: '4.6', category: 'terapie', subcategory: 'Endodontie', name: 'Tratament endodontic monocanalar (obturație definitivă de canal)', price: 325, unit: 'ședintă' },
  { id: '4.7', category: 'terapie', subcategory: 'Endodontie', name: 'Tratament endodontic bicanalar (obturație definitivă de canal)', price: 458, unit: 'ședintă' },
  { id: '4.8', category: 'terapie', subcategory: 'Endodontie', name: 'Tratament endodontic pluricanalar (obturație definitivă de canal)', price: 541, unit: 'ședintă' },
  { id: '4.9', category: 'terapie', subcategory: 'Endodontie', name: 'Tratament endodontic asistat de microscop stomatologic al unui canal', price: 743, unit: 'ședintă' },
  { id: '4.10', category: 'terapie', subcategory: 'Endodontie', name: 'Dezobturarea canalului radicular (un canal) / Înlăturare corp străin din canal', price: 419, unit: 'ședintă' },
  { id: '4.11', category: 'terapie', subcategory: 'Endodontie', name: 'Aplicarea pastei devitalizante', price: 159, unit: 'dinte' },
  { id: '4.12', category: 'terapie', subcategory: 'Endodontie', name: 'Tratament endodontic prin amputarea pulpei coronare (partială/subtotală/totală)', price: 379, unit: 'dinte' },

  // 2. Tratament coronar
  { id: "4.14", category: 'terapie', subcategory: 'Coronar', name: 'Tratamentul cariei dentare cu material ciment glassionomer', price: 355, unit: 'ședință' },
  { id: "4.15", category: 'terapie', subcategory: 'Coronar', name: 'Tratamentul cariei dentare cu material compozit autopolimerizabil', price: 338, unit: 'ședință' },
  { id: "4.15", category: 'terapie', subcategory: 'Coronar', name: 'Tratamentul cariei dentare cu material compozit fotopolimeric', price: 409, unit: 'ședință' },
  { id: "4.16", category: 'terapie', subcategory: 'Coronar', name: 'Restaurare coronară dentară din material glassionomer fără pivot', price: 466, unit: 'ședință' },
  { id: "4.17", category: 'terapie', subcategory: 'Coronar', name: 'Restaurare coronară dentară din material compozit autopolimerizabil fără pivot', price: 573, unit: 'ședință' },
  { id: "4.18", category: 'terapie', subcategory: 'Coronar', name: 'Restaurare coronară dentară din material compozit fotopolimeric fără pivot', price: 582, unit: 'ședință' },
  { id: "4.19", category: 'terapie', subcategory: 'Coronar', name: 'Restaurare coronară dentară din material compozit autopolimerizabil cu pivot metalic', price: 710, unit: 'ședință' },
  { id: "4.20", category: 'terapie', subcategory: 'Coronar', name: 'Restaurare coronară dentară din material compozit fotopolimeric cu pivot metalic', price: 768, unit: 'ședință' },
  { id: "4.21", category: 'terapie', subcategory: 'Coronar', name: 'Restaurare coronară dentară din material compozit fotopolimeric cu pivot de fibră optică', price: 935, unit: 'ședință' },

  // 3. Profilaxie stomatologică
  { id: "4.23", category: 'terapie', subcategory: 'Profilaxie', name: 'Detartraj cu ultrasunei', price: 435, unit: 'ședință' },
  { id: "4.24", category: 'terapie', subcategory: 'Profilaxie', name: 'Iştehrizarea cavităţii bucale cu ajutorul air flow-ului', price: 323, unit: 'ședință' },
  { id: "4.25", category: 'terapie', subcategory: 'Profilaxie', name: 'Periaj dentar profesional', price: 211, unit: 'ședință' },
  { id: "4.26", category: 'terapie', subcategory: 'Profilaxie', name: 'Sigilarea fisurilor unui dinte cu scop profilactic cu material element glasionere', price: 176, unit: 'dinte' },
  { id: "4.27", category: 'terapie', subcategory: 'Profilaxie', name: 'Sigilarea fisurilor unui dinte cu scop profilactic cu material compozit fotopolimeric', price: 232, unit: 'dinte' },
  { id: "4.28", category: 'terapie', subcategory: 'Profilaxie', name: 'Profilaxia cartei dentare (prin remineralizare şi infiltrare)', price: 226, unit: 'ședință' },
  { id: "4.29", category: 'terapie', subcategory: 'Profilaxie', name: 'Confecţionarea gutierei (bruxism)', price: 503, unit: 'maxilar' },
  { id: "4.30", category: 'terapie', subcategory: 'Profilaxie', name: 'Tratamentul sensibilităţii (1 arcadă), cu aplicarea gutierei individuale', price: 1508, unit: 'caz tratat' },

  // 4. Tratamente ale afectiunilor muco-parodontale
  { id: '4.31', category: 'terapie', subcategory: 'Parodontologie', name: 'Tratamentul afectiunilor mucoasei cavitătii bucale', price: 277, unit: 'ședintă' },
  { id: '4.32', category: 'terapie', subcategory: 'Parodontologie', name: 'Tratamentul parodontitei', price: 322, unit: 'ședintă' },
  { id: '4.33', category: 'terapie', subcategory: 'Parodontologie', name: 'Chiuretaj subgingival (2-3 dinti) în câmp închis', price: 345, unit: 'ședintă' },
  { id: '4.34', category: 'terapie', subcategory: 'Parodontologie', name: 'Atelizarea (șinarea) dintilor cu fibră optică', price: 394, unit: 'dinte' },

  // 5. Tratamentul discromiilor dentare / manipulări stomatologice estetice
  { id: "4.35", category: 'terapie', subcategory: 'Estetică', name: 'Albirea dimilor în cabinet (1 dinte)', price: 267, unit: 'sedință' },
  { id: "4.36", category: 'terapie', subcategory: 'Estetică', name: 'Albirea dimilor cu aplicarea gutierei individuale', price: 1488, unit: 'caz tratat' },
  { id: "4.37", category: 'terapie', subcategory: 'Estetică', name: 'Microabrazintasa dentară', price: 388, unit: 'dinte' },
  { id: "4.38", category: 'terapie', subcategory: 'Estetică', name: 'Aplicarea coferdamului', price: 164, unit: 'ședință' },
  { id: "4.39", category: 'terapie', subcategory: 'Estetică', name: 'Albie interna (intracoronarii)', price: 459, unit: 'ședință' },
  { id: "4.40", category: 'terapie', subcategory: 'Estetică', name: 'Aplicarea bijuteriei dentare', price: 493, unit: 'dinte' },
  { id: "4.41", category: 'terapie', subcategory: 'Estetică', name: 'Fajetare directă (din compozit)', price: 582, unit: 'dinte' },

  // 6. Profilaxie stomatologică (sectiunea 6 din lista)
  { id: '4.42', category: 'terapie', subcategory: 'Profilaxie', name: 'Examinare cavitătii bucale cu recomandări privind igiena și profilaxia', price: 121, unit: 'ședintă' },
  { id: '4.43', category: 'terapie', subcategory: 'Profilaxie', name: 'Detartraj cu ultrasunet (complet)', price: 632, unit: 'ședintă' },
  { id: '4.44', category: 'terapie', subcategory: 'Profilaxie', name: 'Reînnoirea cavitătii bucale cu ajutorul air flow-ului', price: 526, unit: 'ședintă' },
  { id: '4.45', category: 'terapie', subcategory: 'Profilaxie', name: 'Periaj dentar profesional (complet)', price: 200, unit: 'ședintă' },
  { id: '4.46', category: 'terapie', subcategory: 'Profilaxie', name: 'Sigilarea fisurilor unui dinte cu scop profilactic (complet)', price: 200, unit: 'dinte' },
  { id: '4.47', category: 'terapie', subcategory: 'Profilaxie', name: 'Profilaxia cariilor dentare (prin remineralizare și infiltrare) (complet)', price: 226, unit: 'ședintă' },
  { id: '4.48', category: 'terapie', subcategory: 'Profilaxie', name: 'Prevenirea complicatiilor afectiunilor mucoasei bucale', price: 162, unit: 'procedură' },

  // ============================================
  // V. CHIRURGIE ORO-MAXILO-FACIALĂ
  // ============================================
  // 1. Activităti în cabinetul chirurgical
  { id: '5.1', category: 'chirurgie', subcategory: 'Extractii', name: 'Extracția dintelui fără anestezie', price: 262, unit: 'extracție' },
  { id: '5.2', category: 'chirurgie', subcategory: 'Extractii', name: 'Extracția dintelui cu anestezie', price: 452, unit: 'extracție' },
  { id: '5.3', category: 'chirurgie', subcategory: 'Extractii', name: 'Extracție dentară atipică', price: 828, unit: 'extracție' },
  { id: '5.6', category: 'chirurgie', subcategory: 'Interventii', name: 'Hemostază', price: 535, unit: 'procedură' },
  { id: '5.15', category: 'chirurgie', subcategory: 'Interventii', name: 'Tratarea proceselor inflamatorii odontogene cu extracție dentară', price: 1094, unit: 'intervenție' },
  { id: '5.16', category: 'chirurgie', subcategory: 'Interventii', name: 'Tratarea proceselor inflamatorii fără extracție dentară', price: 618, unit: 'intervenție' },
  { id: '5.17', category: 'chirurgie', subcategory: 'Interventii', name: 'Operculectomie (decapisonare)', price: 438, unit: 'intervenție' },
  { id: '5.38', category: 'chirurgie', subcategory: 'Interventii', name: 'Tratarea alveolitei', price: 275, unit: 'procedură' },
  { id: '5.42', category: 'chirurgie', subcategory: 'Interventii', name: 'Pansament', price: 258, unit: 'procedură' },

  // ============================================
  // VI. IMAGISTICĂ
  // ============================================
  { id: '6.3', category: 'imagistica', name: 'Viziografie dentară', price: 82, unit: 'investigație' },

  // ============================================
  // VII. SERVICII CNAM (Selectie)
  // ============================================
  // 1. Consultatii stomatologice
  { id: '7.1', category: 'cnam', name: 'Consultația medicului stomatolog', price: 368, unit: 'consultație', cnamEligible: true },
  
  // 2. Tratamentul dintilor permanenti
  { id: '7.2', category: 'cnam', name: 'Obtuarea defectelor coronariene', price: 386, unit: 'caz tratat', cnamEligible: true },
  { id: '7.3', category: 'cnam', name: 'Tratarea pulpitei acute a dintelui monoradicular', price: 734, unit: 'caz tratat', cnamEligible: true },
  { id: '7.4', category: 'cnam', name: 'Tratarea pulpitei acute a dintelui biradicular', price: 877, unit: 'caz tratat', cnamEligible: true },
  { id: '7.5', category: 'cnam', name: 'Tratarea pulpitei acute a dintelui pluriradicular', price: 1012, unit: 'caz tratat', cnamEligible: true },
  { id: '7.6', category: 'cnam', name: 'Tratarea periodontitei acute a dintelui monoradicular', price: 1077, unit: 'caz tratat', cnamEligible: true },
  { id: '7.7', category: 'cnam', name: 'Tratarea periodontitei acute a dintelui biradicular', price: 1287, unit: 'caz tratat', cnamEligible: true },
  { id: '7.8', category: 'cnam', name: 'Tratarea periodontitei acute a dintelui pluriradicular', price: 1504, unit: 'caz tratat', cnamEligible: true },
  { id: '7.9', category: 'cnam', name: 'Tratarea periodontitei exacerbate a dintelui monoradicular', price: 1168, unit: 'caz tratat', cnamEligible: true },
  { id: '7.10', category: 'cnam', name: 'Tratarea periodontitei exacerbate a dintelui biradicular', price: 1401, unit: 'caz tratat', cnamEligible: true },
  { id: '7.11', category: 'cnam', name: 'Tratarea periodontitei exacerbate a dintelui pluriradicular', price: 1618, unit: 'caz tratat', cnamEligible: true },

  // 3. Tratamentul dintilor temporari
  { id: '7.12', category: 'cnam', name: 'Obtuarea defectelor coronariene', price: 378, unit: 'caz tratat', cnamEligible: true },
  { id: '7.13', category: 'cnam', name: 'Tratarea pulpitei dintelui monoradicular', price: 588, unit: 'caz tratat', cnamEligible: true },
  { id: '7.14', category: 'cnam', name: 'Tratarea pulpitei dintelui biradicular', price: 665, unit: 'caz tratat', cnamEligible: true },
  { id: '7.15', category: 'cnam', name: 'Tratarea pulpitei dintelui plurirradicular', price: 747, unit: 'caz tratat', cnamEligible: true },
  { id: '7.16', category: 'cnam', name: 'Tratarea periodontitei dintelui monoradicular', price: 642, unit: 'caz tratat', cnamEligible: true },
  { id: '7.17', category: 'cnam', name: 'Tratarea periodontitei dintelui biradicular', price: 720, unit: 'caz tratat', cnamEligible: true },
  { id: '7.18', category: 'cnam', name: 'Tratarea periodontitei dintelui plurirradicular', price: 801, unit: 'caz tratat', cnamEligible: true },
  { id: '7.19', category: 'cnam', name: 'Tratament endodontic prin metoda amputării (parțială/subtotală/totală)', price: 429, unit: 'dinte', cnamEligible: true },

  // 4. Chirurgie stomatologică
  { id: '7.20', category: 'cnam', name: 'Hemostază', price: 535, unit: 'procedură', cnamEligible: true },
  { id: '7.21', category: 'cnam', name: 'Plastă comunicării trosimasale', price: 1114, unit: 'caz tratat', cnamEligible: true },
  { id: '7.22', category: 'cnam', name: 'Operaţie pericoronariana – decapisonare', price: 755, unit: 'caz tratat', cnamEligible: true },
  { id: '7.23', category: 'cnam', name: 'Prelucrarea chirurgicală primară a plăgii', price: 982, unit: 'caz tratat', cnamEligible: true },
  { id: '7.24', category: 'cnam', name: 'Tratamentul chirurgical al abcesului, periodstici fără extracţie dentară', price: 1094, unit: 'caz tratat', cnamEligible: true },
  { id: '7.25', category: 'cnam', name: 'Tratamentul chirurgical al abcesului, periodstici cu extracţie dentară', price: 1570, unit: 'caz tratat', cnamEligible: true },
  
  // 5. Anestezie în stomatologie
  { id: '7.25', category: 'cnam', name: 'Anestezie locală (infiltrație plexală)', price: 184, unit: 'anestezie', cnamEligible: true },
  { id: '7.26', category: 'cnam', name: 'Anestezie locală/loco-regională cu carpule', price: 196, unit: 'anestezie', cnamEligible: true },
  { id: '7.27', category: 'cnam', name: 'Anestezie topică', price: 135, unit: 'anestezie', cnamEligible: true },
];
