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
    bio: 'Cu o experiență vastă în managementul instituțiilor medicale, asigură buna funcționare a centrului.',
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
    content: 'Am venit cu frica de dentist, dar doamna doctor Godoroja a fost extraordinară. Nu am simțit nimic!',
    rating: 5,
    service: 'Tratament Carie'
  },
  {
    id: '2',
    name: 'Ion Rusu',
    content: 'Am făcut tratamentul cariilor și restaurări dentare. Servicii de calitate la prețuri corecte. Apreciez transparența și faptul că acceptă asigurarea CNAM.',
    rating: 5,
    service: 'Stomatologie Terapeutică'
  },
  {
    id: '3',
    name: 'Elena Munteanu',
    content: 'Clinică modernă și foarte curată. Am făcut un detartraj și diferența este vizibilă imediat.',
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
    question: 'Acceptați asigurări medicale CNAM?',
    answer: 'Da, acceptăm asigurarea obligatorie de asistență medicală (CNAM). Serviciile CNAM sunt disponibile pentru: copiii până la 18 ani, femeile gravide și urgențele medicale pentru pacienții care dețin polițe de asigurare CNAM. Vă rugăm să prezentați buletinul de identitate (sau adeverința de naștere pentru minori) la recepție.'
  },
  {
    question: 'Care este programul clinicii?',
    answer: 'Clinica este deschisă de Luni până Vineri, între orele 08:00 și 17:00. Pentru urgențe în afara programului, vă rugăm să ne contactați telefonic.'
  },
  {
    question: 'Cum pot face o programare?',
    answer: 'Puteți face o programare telefonic la 079772488, prin email la nolaresu@bk.ru sau centrustomcim@gmail.com, sau completând formularul de pe acest site.'
  },
  {
    question: 'Oferiți servicii pentru copii?',
    answer: 'Da, oferim servicii complete de stomatologie pediatrică. Copiii până la 18 ani pot beneficia de servicii decontate de CNAM.'
  },
  {
    question: 'Cât durează o consultație?',
    answer: 'O consultație standard durează aproximativ 20-30 de minute, timp în care medicul evaluează starea de sănătate orală și stabilește planul de tratament.'
  },
  {
    question: 'Ce documente sunt necesare pentru servicii CNAM?',
    answer: 'Pentru servicii decontate CNAM aveți nevoie doar de: buletin de identitate în original (sau adeverința de naștere pentru minori). Nu este obligatorie prezentarea poliței de asigurare.'
  }
];

// ==========================================
// COMPLETE SERVICE CATALOG - Conform Catalogului Tarifelor Unice
// aprobat de Guvernul Republicii Moldova
// ==========================================
export const SERVICES: Service[] = [
  // ============================================
  // I. CONSULTAȚII STOMATOLOGICE
  // ============================================
  { id: '1.1', category: 'consultatii', name: 'Consultația medicului stomatolog', price: 253, unit: 'vizită' },
  { id: '1.2', category: 'consultatii', name: 'Consultația medicului stomatolog, conferențiar-doctor în științe medicale', price: 320, unit: 'vizită' },
  { id: '1.3', category: 'consultatii', name: 'Consultația medicului stomatolog, profesor-doctor habilitat', price: 383, unit: 'vizită' },

  // ============================================
  // II. ACTIVITĂȚI EFECTUATE ÎN CABINETUL STOMATOLOGIC
  // ============================================
  { id: '2.1', category: 'cabinet', name: 'Amprentă cu masă amprentară pe bază de silicon', price: 238, unit: 'amprentă' },
  { id: '2.2', category: 'cabinet', name: 'Amprentă în două straturi', price: 270, unit: 'amprentă' },
  { id: '2.3', category: 'cabinet', name: 'Amprentă cu masă amprentară pe bază de alginat', price: 176, unit: 'amprentă' },
  { id: '2.4', category: 'cabinet', name: 'Turnarea modelului de studiu/de lucru/de control în ghips pentru o arcadă dentară', price: 169, unit: 'model' },
  { id: '2.5', category: 'cabinet', subcategory: 'Imagistică', name: 'Analiza ortopantomogramei', price: 317, unit: 'investigație' },
  { id: '2.6', category: 'cabinet', subcategory: 'Imagistică', name: 'Analiza tomografiei totale a maxilei/mandibulei', price: 317, unit: 'investigație' },
  { id: '2.7', category: 'cabinet', subcategory: 'Imagistică', name: 'Analiza tomografiei segmentare', price: 211, unit: 'investigație' },

  // ============================================
  // III. ANESTEZIE ÎN STOMATOLOGIE
  // ============================================
  // 1. Anestezie locală
  { id: '3.1', category: 'anestezie', subcategory: 'Locală', name: 'Anestezie locală (infiltrație plexală)', price: 184, unit: 'anestezie' },
  { id: '3.2', category: 'anestezie', subcategory: 'Locală', name: 'Anestezie locală/loco-regională cu carpule', price: 196, unit: 'anestezie' },
  { id: '3.3', category: 'anestezie', subcategory: 'Locală', name: 'Anestezie topică', price: 135, unit: 'anestezie' },

  // ============================================
  // IV. TRATAMENTUL DINȚILOR
  // ============================================
  // 1. Tratament endodontic
  { id: '4.1', category: 'terapie', subcategory: 'Endodonție', name: 'Tratamentul canalului radicular cu ultrasunet', price: 93, unit: 'ședință' },
  { id: '4.2', category: 'terapie', subcategory: 'Endodonție', name: 'Reconstrucție perete-pre-endo', price: 140, unit: 'dinte' },
  { id: '4.3', category: 'terapie', subcategory: 'Endodonție', name: 'Tratament endodontic monocanalar (obturație temporară de canal)', price: 283, unit: 'ședință' },
  { id: '4.4', category: 'terapie', subcategory: 'Endodonție', name: 'Tratament endodontic bicanalar (obturație temporară de canal)', price: 362, unit: 'ședință' },
  { id: '4.5', category: 'terapie', subcategory: 'Endodonție', name: 'Tratament endodontic pluricanalar (obturație temporară de canal)', price: 445, unit: 'ședință' },
  { id: '4.6', category: 'terapie', subcategory: 'Endodonție', name: 'Tratament endodontic monocanalar (obturație definitivă de canal)', price: 325, unit: 'ședință' },
  { id: '4.7', category: 'terapie', subcategory: 'Endodonție', name: 'Tratament endodontic bicanalar (obturație definitivă de canal)', price: 458, unit: 'ședință' },
  { id: '4.8', category: 'terapie', subcategory: 'Endodonție', name: 'Tratament endodontic pluricanalar (obturație definitivă de canal)', price: 541, unit: 'ședință' },
  { id: '4.9', category: 'terapie', subcategory: 'Endodonție', name: 'Tratament endodontic asistat de microscop stomatologic al unui canal', price: 743, unit: 'ședință' },
  { id: '4.10', category: 'terapie', subcategory: 'Endodonție', name: 'Dezobturarea canalului radicular (un canal) / Înlăturare corp străin din canal', price: 419, unit: 'ședință' },
  { id: '4.11', category: 'terapie', subcategory: 'Endodonție', name: 'Aplicarea pastei devitalizante', price: 159, unit: 'dinte' },
  { id: '4.12', category: 'terapie', subcategory: 'Endodonție', name: 'Tratament endodontic prin amputarea pulpei coronare (parțială/subtotală/totală)', price: 379, unit: 'dinte' },

  // 2. Tratament coronar
  { id: '4.13', category: 'terapie', subcategory: 'Coronar', name: 'Tratamentul cariei dentare cu material ciment glassionomer', price: 355, unit: 'ședință' },
  { id: '4.14', category: 'terapie', subcategory: 'Coronar', name: 'Tratamentul cariei dentare cu material compozit autopolimerizabil', price: 338, unit: 'ședință' },
  { id: '4.15', category: 'terapie', subcategory: 'Coronar', name: 'Tratamentul cariei dentare cu material compozit fotopolimeric', price: 409, unit: 'ședință' },
  { id: '4.16', category: 'terapie', subcategory: 'Coronar', name: 'Restaurare coronară dentară din material glassionomer fără pivot', price: 466, unit: 'ședință' },
  { id: '4.17', category: 'terapie', subcategory: 'Coronar', name: 'Restaurare coronară dentară din material compozit autopolimerizabil fără pivot', price: 573, unit: 'ședință' },
  { id: '4.18', category: 'terapie', subcategory: 'Coronar', name: 'Restaurare coronară dentară din material compozit fotopolimeric fără pivot', price: 582, unit: 'ședință' },
  { id: '4.19', category: 'terapie', subcategory: 'Coronar', name: 'Restaurare coronară dentară din material compozit autopolimerizabil cu pivot metalic', price: 710, unit: 'ședință' },
  { id: '4.20', category: 'terapie', subcategory: 'Coronar', name: 'Restaurare coronară dentară din material compozit fotopolimeric cu pivot metalic', price: 768, unit: 'ședință' },
  { id: '4.21', category: 'terapie', subcategory: 'Coronar', name: 'Restaurare coronară dentară din material compozit fotopolimeric cu pivot de fibră optică', price: 935, unit: 'ședință' },
  { id: '4.22', category: 'terapie', subcategory: 'Coronar', name: 'Restaurarea breșei unidentare cu punți adezive', price: 1438, unit: 'caz tratat' },

  // 3. Profilaxie stomatologică
  { id: '4.23', category: 'terapie', subcategory: 'Profilaxie', name: 'Detartraj cu ultrasunet', price: 435, unit: 'ședință' },
  { id: '4.24', category: 'terapie', subcategory: 'Profilaxie', name: 'Igienizarea cavității bucale cu ajutorul air flow-ului', price: 323, unit: 'ședință' },
  { id: '4.25', category: 'terapie', subcategory: 'Profilaxie', name: 'Periaj dentar profesional', price: 211, unit: 'ședință' },
  { id: '4.26', category: 'terapie', subcategory: 'Profilaxie', name: 'Sigilarea fisurilor unui dinte cu scop profilactic cu material ciment glassionomer', price: 176, unit: 'dinte' },
  { id: '4.27', category: 'terapie', subcategory: 'Profilaxie', name: 'Sigilarea fisurilor unui dinte cu scop profilactic cu material compozit fotopolimeric', price: 232, unit: 'dinte' },
  { id: '4.28', category: 'terapie', subcategory: 'Profilaxie', name: 'Profilaxia cariei dentare (prin remineralizare și infiltrare)', price: 226, unit: 'ședință' },
  { id: '4.29', category: 'terapie', subcategory: 'Profilaxie', name: 'Confecționarea gutierei (bruxism)', price: 503, unit: 'maxilar' },
  { id: '4.30', category: 'terapie', subcategory: 'Profilaxie', name: 'Tratamentul sensibilității (1 arcadă), cu aplicarea gutierei individuale', price: 1508, unit: 'caz tratat' },

  // 4. Tratamente ale afecțiunilor muco-parodontale
  { id: '4.31', category: 'terapie', subcategory: 'Parodontologie', name: 'Tratamentul afecțiunilor mucoasei cavității bucale', price: 277, unit: 'ședință' },
  { id: '4.32', category: 'terapie', subcategory: 'Parodontologie', name: 'Tratamentul parodontitei', price: 322, unit: 'ședință' },
  { id: '4.33', category: 'terapie', subcategory: 'Parodontologie', name: 'Chiuretaj subgingival (2-3 dinți) în câmp închis', price: 345, unit: 'ședință' },
  { id: '4.34', category: 'terapie', subcategory: 'Parodontologie', name: 'Atelizarea (șinarea) dinților cu fibră optică', price: 394, unit: 'dinte' },

  // 5. Tratamentul discromiilor dentare / manipulări stomatologice estetice
  { id: '4.35', category: 'terapie', subcategory: 'Estetică', name: 'Albirea dinților în cabinet (1 dinte)', price: 267, unit: 'ședință' },
  { id: '4.36', category: 'terapie', subcategory: 'Estetică', name: 'Albirea dinților cu aplicarea gutierei individuale', price: 1488, unit: 'caz tratat' },
  { id: '4.37', category: 'terapie', subcategory: 'Estetică', name: 'Microabraziunea dentară', price: 388, unit: 'dinte' },
  { id: '4.38', category: 'terapie', subcategory: 'Estetică', name: 'Aplicarea coferdamului', price: 164, unit: 'ședință' },
  { id: '4.39', category: 'terapie', subcategory: 'Estetică', name: 'Albire internă (intracoronară)', price: 459, unit: 'ședință' },
  { id: '4.40', category: 'terapie', subcategory: 'Estetică', name: 'Aplicarea bijuteriei dentare', price: 493, unit: 'dinte' },
  { id: '4.41', category: 'terapie', subcategory: 'Estetică', name: 'Fațetare directă (din compozit)', price: 582, unit: 'dinte' },

  // ============================================
  // V. CHIRURGIE ORO-MAXILO-FACIALĂ
  // ============================================
  // 1. Activități în cabinetul chirurgical
  { id: '5.1', category: 'chirurgie', subcategory: 'Extracții', name: 'Extracția dintelui fără anestezie', price: 262, unit: 'extracție' },
  { id: '5.2', category: 'chirurgie', subcategory: 'Extracții', name: 'Extracția dintelui cu anestezie', price: 452, unit: 'extracție' },
  { id: '5.3', category: 'chirurgie', subcategory: 'Extracții', name: 'Extracție dentară atipică', price: 828, unit: 'extracție' },
  { id: '5.4', category: 'chirurgie', subcategory: 'Extracții', name: 'Extracția dintelui inclus', price: 1434, unit: 'extracție' },
  { id: '5.5', category: 'chirurgie', subcategory: 'Extracții', name: 'Extracția dintelui inclavat', price: 1593, unit: 'extracție' },
  { id: '5.6', category: 'chirurgie', subcategory: 'Intervenții', name: 'Hemostază', price: 535, unit: 'procedură' },
  { id: '5.7', category: 'chirurgie', subcategory: 'Intervenții', name: 'Alveolotomie', price: 606, unit: 'intervenție' },
  { id: '5.8', category: 'chirurgie', subcategory: 'Tumori', name: 'Înlăturarea tumorii benigne a țesuturilor moi (cu diametrul sub 0,5 cm)', price: 767, unit: 'intervenție' },
  { id: '5.9', category: 'chirurgie', subcategory: 'Tumori', name: 'Înlăturarea tumorii benigne a țesuturilor moi (cu diametrul mai mare de 0,5 cm)', price: 925, unit: 'intervenție' },
  { id: '5.10', category: 'chirurgie', subcategory: 'Intervenții', name: 'Rezecție apicală', price: 1009, unit: 'intervenție' },
  { id: '5.11', category: 'chirurgie', subcategory: 'Intervenții', name: 'Chistectomie (cu diametrul până la 0,5 cm)', price: 760, unit: 'intervenție' },
  { id: '5.12', category: 'chirurgie', subcategory: 'Intervenții', name: 'Chistectomie (cu diametrul mai mare de 0,5 cm)', price: 1238, unit: 'intervenție' },
  { id: '5.13', category: 'chirurgie', subcategory: 'Intervenții', name: 'Frenuloplastie', price: 835, unit: 'intervenție' },
  { id: '5.14', category: 'chirurgie', subcategory: 'Intervenții', name: 'Gingivectomie', price: 380, unit: 'intervenție' },
  { id: '5.15', category: 'chirurgie', subcategory: 'Intervenții', name: 'Tratarea proceselor inflamatorii odontogene cu extracție dentară', price: 1094, unit: 'intervenție' },
  { id: '5.16', category: 'chirurgie', subcategory: 'Intervenții', name: 'Tratarea proceselor inflamatorii fără extracție dentară', price: 618, unit: 'intervenție' },
  { id: '5.17', category: 'chirurgie', subcategory: 'Intervenții', name: 'Operculectomie (decapisonare)', price: 438, unit: 'intervenție' },
  { id: '5.18', category: 'chirurgie', subcategory: 'Intervenții', name: 'Sinusotomie', price: 1114, unit: 'intervenție' },
  { id: '5.19', category: 'chirurgie', subcategory: 'Tumori', name: 'Înlăturarea ateromului', price: 835, unit: 'intervenție' },
  { id: '5.20', category: 'chirurgie', subcategory: 'Tumori', name: 'Înlăturarea papilomului', price: 835, unit: 'intervenție' },
  { id: '5.21', category: 'chirurgie', subcategory: 'Tumori', name: 'Înlăturarea lipomului', price: 755, unit: 'intervenție' },
  { id: '5.22', category: 'chirurgie', subcategory: 'Tumori', name: 'Înlăturarea fibromului', price: 755, unit: 'intervenție' },
  { id: '5.23', category: 'chirurgie', subcategory: 'Intervenții', name: 'Secvestrectomie', price: 1553, unit: 'intervenție' },
  { id: '5.24', category: 'chirurgie', subcategory: 'Intervenții', name: 'Prelucrarea chirurgicală primară a plăgii', price: 982, unit: 'intervenție' },
  { id: '5.25', category: 'chirurgie', subcategory: 'Intervenții', name: 'Deschiderea și drenarea furunculului', price: 618, unit: 'intervenție' },
  { id: '5.26', category: 'chirurgie', subcategory: 'Intervenții', name: 'Limfadenită acută – deschiderea și drenarea abcesului', price: 618, unit: 'intervenție' },
  { id: '5.27', category: 'chirurgie', subcategory: 'Intervenții', name: 'Sialodenită – înlăturarea calculului din ductul salivar', price: 776, unit: 'intervenție' },
  { id: '5.28', category: 'chirurgie', subcategory: 'Parodontologie chirurgicală', name: 'Chiuretaj pe câmp deschis în zona a 2-3 dinți', price: 1066, unit: 'intervenție' },
  { id: '5.29', category: 'chirurgie', subcategory: 'Parodontologie chirurgicală', name: 'Chiuretaj pe câmp deschis în zona a 4-5 dinți', price: 1593, unit: 'intervenție' },
  { id: '5.30', category: 'chirurgie', subcategory: 'Osteoplastie', name: 'Osteoplastia osului cu hidroxiapatită la 2-3 dinți', price: 2154, unit: 'intervenție' },
  { id: '5.31', category: 'chirurgie', subcategory: 'Osteoplastie', name: 'Osteoplastia osului cu hidroxiapatită la 4-5 dinți', price: 2640, unit: 'intervenție' },
  { id: '5.32', category: 'chirurgie', subcategory: 'Osteoplastie', name: 'Osteoplastia osului cu material de augmentare sintetic la 2-3 dinți', price: 2154, unit: 'intervenție' },
  { id: '5.33', category: 'chirurgie', subcategory: 'Osteoplastie', name: 'Osteoplastia osului cu material de augmentare sintetic la 4-5 dinți', price: 2640, unit: 'intervenție' },
  { id: '5.34', category: 'chirurgie', subcategory: 'Osteoplastie', name: 'Osteoplastia osului cu augmentare și membrană în zona a 2-3 dinți', price: 2154, unit: 'intervenție' },
  { id: '5.35', category: 'chirurgie', subcategory: 'Osteoplastie', name: 'Osteoplastia osului cu augmentare și membrană în zona a 4-5 dinți', price: 2640, unit: 'intervenție' },
  { id: '5.36', category: 'chirurgie', subcategory: 'ATM', name: 'Tratamentul afecțiunilor articulației temporo-mandibulare cu introducerea medicamentelor în cavitatea articulară, prin injectare', price: 513, unit: 'procedură' },
  { id: '5.37', category: 'chirurgie', subcategory: 'Intervenții', name: 'Premolarizare', price: 1096, unit: 'intervenție' },
  { id: '5.38', category: 'chirurgie', subcategory: 'Intervenții', name: 'Tratarea alveolitei', price: 275, unit: 'procedură' },
  { id: '5.39', category: 'chirurgie', subcategory: 'Intervenții', name: 'Tratarea nevralgiei prin metoda de blocare', price: 275, unit: 'procedură' },
  { id: '5.40', category: 'chirurgie', subcategory: 'ATM', name: 'Repoziționarea luxației acute a articulației temporo-mandibulare', price: 337, unit: 'procedură' },
  { id: '5.41', category: 'chirurgie', subcategory: 'Traumatologie', name: 'Imobilizarea fracturilor', price: 3003, unit: 'șinare' },
  { id: '5.42', category: 'chirurgie', subcategory: 'Intervenții', name: 'Pansament', price: 258, unit: 'procedură' },
  { id: '5.43', category: 'chirurgie', subcategory: 'Traumatologie', name: 'Înlăturarea atelei la un maxilar după consolidarea fracturii posttraumatice', price: 532, unit: 'intervenție' },

  // ============================================
  // VI. IMAGISTICĂ
  // ============================================
  { id: '6.1', category: 'imagistica', name: 'Ortopantomografie', price: 177, unit: 'film' },
  { id: '6.2', category: 'imagistica', name: 'Ortopantomografie sectorială', price: 106, unit: 'film' },
  { id: '6.3', category: 'imagistica', name: 'Viziografie dentară', price: 82, unit: 'investigație' },
  { id: '6.4', category: 'imagistica', name: 'Radiografia dinților (3x4cm)', price: 25, unit: 'film' },
  { id: '6.5', category: 'imagistica', name: 'Teleradiografia maxilarelor', price: 200, unit: 'film' },

  // ============================================
  // VII. SERVICII CNAM (Selectie)
  // ============================================
  { id: '7.1', category: 'cnam', name: 'Consultație medic stomatolog (CNAM)', price: 368, unit: 'vizită', cnamEligible: true },
  { id: '7.2', category: 'cnam', name: 'Obturarea defectelor coronariene (CNAM)', price: '378-386', unit: 'dinte', cnamEligible: true },
  { id: '7.3', category: 'cnam', name: 'Tratament pulpită acută (CNAM)', price: '734-1012', unit: 'dinte', cnamEligible: true },
  { id: '7.4', category: 'cnam', name: 'Extracție dentară (CNAM)', price: '452-1593', unit: 'dinte', cnamEligible: true },
  { id: '7.5', category: 'cnam', name: 'Detartraj ultrasunet (CNAM)', price: 632, unit: 'ședință', cnamEligible: true },
  { id: '7.6', category: 'cnam', name: 'Tratament parodontită (CNAM)', price: 322, unit: 'ședință', cnamEligible: true },
  { id: '7.7', category: 'cnam', name: 'Tratament urgențe stomatologice (CNAM)', price: 275, unit: 'vizită', cnamEligible: true },
];
