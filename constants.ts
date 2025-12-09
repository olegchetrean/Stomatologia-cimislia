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
    bio: 'Cu o experiență vastă în managementul instituțiilor medicale, asigură buna funcționare a centrului.'
  },
  {
    id: 'dr-galina-godoroja',
    name: 'Dr. Galina Godoroja',
    role: 'Medic Stomatolog',
    specialty: 'Stomatologie Generală',
    image: 'https://picsum.photos/400/500?random=2'
  },
  {
    id: 'dr-petru-godoroja',
    name: 'Dr. Petru Godoroja',
    role: 'Medic Stomatolog',
    specialty: 'Stomatologie Generală',
    image: 'https://picsum.photos/400/500?random=3'
  },
  {
    id: 'dr-veaceslav-cosmariuc',
    name: 'Dr. Veaceslav Coșmariuc',
    role: 'Medic Stomatolog',
    specialty: 'Stomatologie Generală',
    image: 'https://picsum.photos/400/500?random=4'
  },
  {
    id: 'dr-ion-teaca',
    name: 'Dr. Ion Teaca',
    role: 'Medic Stomatolog',
    specialty: 'Stomatologie Generală',
    image: 'https://picsum.photos/400/500?random=5'
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
    content: 'Servicii de calitate la prețuri corecte. Apreciez transparența și faptul că acceptă asigurarea CNAM.',
    rating: 5,
    service: 'Protezare'
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
    content: 'Recomand cu încredere pentru implanturi. Totul a decurs perfect și recuperarea a fost rapidă.',
    rating: 5,
    service: 'Implantologie'
  }
];

// ==========================================
// FAQ
// ==========================================
export const FAQS: FAQ[] = [
  {
    question: 'Acceptați asigurări medicale CNAM?',
    answer: 'Da, acceptăm asigurarea obligatorie de asistență medicală (CNAM) pentru serviciile incluse în Programul Unic. Vă rugăm să prezentați buletinul și polița la recepție.'
  },
  {
    question: 'Care este programul clinicii?',
    answer: 'Clinica este deschisă de Luni până Vineri, între orele 08:00 și 17:00. Pentru urgențe în afara programului, vă rugăm să ne contactați telefonic.'
  },
  {
    question: 'Cum pot face o programare?',
    answer: 'Puteți face o programare telefonic la 079044016, prin email la victoras1984@mail.ru, sau completând formularul de pe acest site.'
  },
  {
    question: 'Oferiți servicii pentru copii?',
    answer: 'Da, oferim servicii complete de stomatologie pediatrică, inclusiv în baza asigurării CNAM pentru copii.'
  },
  {
    question: 'Cât durează o consultație?',
    answer: 'O consultație standard durează aproximativ 20-30 de minute, timp în care medicul evaluează starea de sănătate orală și stabilește planul de tratament.'
  },
  {
    question: 'Ce documente sunt necesare pentru servicii CNAM?',
    answer: 'Pentru servicii decontate CNAM aveți nevoie de: buletin de identitate în original, poliță de asigurare CNAM validă, și eventual trimitere de la medicul de familie.'
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

  // 2. Anestezie generală
  { id: '3.4', category: 'anestezie', subcategory: 'Generală', name: 'Consultația medicului anesteziolog', price: 205, unit: 'consultație' },
  { id: '3.5', category: 'anestezie', subcategory: 'Generală', name: 'Consultația medicului anesteziolog, conferențiar-doctor în științe medicale', price: 243, unit: 'consultație' },
  { id: '3.6', category: 'anestezie', subcategory: 'Generală', name: 'Consultația medicului anesteziolog, profesor-doctor habilitat', price: 301, unit: 'consultație' },
  { id: '3.7', category: 'anestezie', subcategory: 'Generală', name: 'Anestezie generală inhalatorie de scurtă durată cu Sevofluran', price: 1044, unit: 'procedură' },
  { id: '3.8', category: 'anestezie', subcategory: 'Generală', name: 'Anestezie generală de scurtă durată cu Propofol', price: 905, unit: 'procedură' },
  { id: '3.9', category: 'anestezie', subcategory: 'Generală', name: 'Anestezie generală combinată de scurtă durată cu Sevofluran și Propofol', price: 1073, unit: 'procedură' },
  { id: '3.10', category: 'anestezie', subcategory: 'Generală', name: 'Anestezie generală combinată de scurtă durată cu Sevofluran și Kalipsol', price: 2061, unit: 'procedură' },
  { id: '3.11', category: 'anestezie', subcategory: 'Generală', name: 'Anestezie generală de lungă durată cu Propofol', price: 1644, unit: 'procedură' },
  { id: '3.12', category: 'anestezie', subcategory: 'Generală', name: 'Anestezie generală combinată de lungă durată cu Propofol și Kalipsol', price: 2687, unit: 'procedură' },
  { id: '3.13', category: 'anestezie', subcategory: 'Generală', name: 'Anestezie generală de lungă durată cu Kalipsol', price: 1451, unit: 'procedură' },
  { id: '3.14', category: 'anestezie', subcategory: 'Generală', name: 'Anestezie generală combinată de lungă durată cu Sevofluran și Propofol', price: 3058, unit: 'procedură' },
  { id: '3.15', category: 'anestezie', subcategory: 'Generală', name: 'Anestezie generală combinată de lungă durată cu Sevofluran și Kalipsol', price: 3075, unit: 'procedură' },
  { id: '3.16', category: 'anestezie', subcategory: 'Generală', name: 'Premedicație', price: 433, unit: 'procedură' },

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

  // 2. Implantologie dentară
  { id: '5.43', category: 'chirurgie', subcategory: 'Implantologie', name: 'Inserarea implantului de stadiul I (monolit)', price: 3837, unit: 'intervenție' },
  { id: '5.44', category: 'chirurgie', subcategory: 'Implantologie', name: 'Inserarea implantului de stadiul II într-o etapă chirurgicală', price: 5137, unit: 'intervenție' },
  { id: '5.45', category: 'chirurgie', subcategory: 'Implantologie', name: 'Inserarea implantului de stadiul II în două etape chirurgicale', price: 5577, unit: 'intervenție' },
  { id: '5.46', category: 'chirurgie', subcategory: 'Implantologie', name: 'Sinus Lifting lateral cu utilizarea materialelor sintetice de augmentare și a membranei rezorbabile', price: 7103, unit: 'intervenție' },
  { id: '5.47', category: 'chirurgie', subcategory: 'Implantologie', name: 'Sinus Lifting crestal', price: 1827, unit: 'intervenție' },
  { id: '5.48', category: 'chirurgie', subcategory: 'Implantologie', name: 'Transpoziția nervului alveolar inferior cu inserarea simultană a implanturilor', price: 7765, unit: 'intervenție' },
  { id: '5.49', category: 'chirurgie', subcategory: 'Implantologie', name: 'Sinus lifting lateral cu utilizarea materialelor xenogene de augmentare și a membranei rezorbabile, cu inserarea simultană a implanturilor', price: 8532, unit: 'intervenție' },
  { id: '5.50', category: 'chirurgie', subcategory: 'Implantologie', name: 'Sinus lifting crestal cu utilizarea materialelor xenogene de augmentare și inserarea simultană a implantului', price: 5183, unit: 'intervenție' },
  { id: '5.51', category: 'chirurgie', subcategory: 'Implantologie', name: 'Osteoplastia defectelor osoase în zona crestei alveolare cu grefă liberă de țesut osos autogen', price: 4495, unit: 'intervenție' },
  { id: '5.52', category: 'chirurgie', subcategory: 'Implantologie', name: 'Osteoplastia defectelor osoase în zona crestei alveolare cu plasă din titan și material de augmentare sintetic', price: 4812, unit: 'intervenție' },
  { id: '5.53', category: 'chirurgie', subcategory: 'Implantologie', name: 'Sinus Lifting lateral cu utilizarea materialelor sintetice de augmentare și a membranei rezorbabile fără inserarea simultană a implanturilor', price: 2381, unit: 'intervenție' },
  { id: '5.54', category: 'chirurgie', subcategory: 'Implantologie', name: 'Crearea ofertei osoase prin metoda regenerării osoase ghidate (GBR)', price: 4864, unit: 'intervenție' },
  { id: '5.55', category: 'chirurgie', subcategory: 'Implantologie', name: 'Plastia defectelor osoase în zona apofizei alveolare prin metoda Splitting', price: 4562, unit: 'intervenție' },
  { id: '5.56', category: 'chirurgie', subcategory: 'Implantologie', name: 'Crearea ofertei osoase prin metoda de osteodistracție', price: 4864, unit: 'intervenție' },
  { id: '5.57', category: 'chirurgie', subcategory: 'Implantologie', name: 'Augmentarea defectelor cavitare cu utilizarea materialelor sintetice', price: 4070, unit: 'intervenție' },
  { id: '5.58', category: 'chirurgie', subcategory: 'Implantologie', name: 'Augmentarea defectelor cavitare cu utilizarea materialelor xenogene', price: 3440, unit: 'intervenție' },
  { id: '5.59', category: 'chirurgie', subcategory: 'Implantologie', name: 'Osteoplastia defectelor osoase în zona crestei alveolare cu plasă din titan și material de augmentare xenogen', price: 6025, unit: 'intervenție' },
  { id: '5.60', category: 'chirurgie', subcategory: 'Implantologie', name: 'Sinus lifting lateral cu utilizarea materialelor xenogene de augmentare și a membranei rezorbabile, fără inserarea simultană a implanturilor', price: 8056, unit: 'intervenție' },
  { id: '5.61', category: 'chirurgie', subcategory: 'Implantologie', name: 'Vestibuloplastie', price: 1579, unit: 'intervenție' },
  { id: '5.62', category: 'chirurgie', subcategory: 'Implantologie', name: 'Gingivoplastia cu grefă liberă epitelială (1-3 dinți)', price: 2631, unit: 'intervenție' },
  { id: '5.63', category: 'chirurgie', subcategory: 'Implantologie', name: 'Gingivoplastia cu grefă liberă epitelială (4-6 dinți)', price: 3117, unit: 'intervenție' },
  { id: '5.64', category: 'chirurgie', subcategory: 'Implantologie', name: 'Plastia comunicării orosinusale', price: 1114, unit: 'intervenție' },
  { id: '5.65', category: 'chirurgie', subcategory: 'Implantologie', name: 'Utilizarea PRF-ului în calitate de material autogen de regenerare', price: 4469, unit: 'intervenție' },
  { id: '5.66', category: 'chirurgie', subcategory: 'Implantologie', name: 'Utilizarea PRP-ului în calitate de material autogen de regenerare', price: 2789, unit: 'intervenție' },
  { id: '5.67', category: 'chirurgie', subcategory: 'Traumatologie', name: 'Înlăturarea atelei la un maxilar după consolidarea fracturii posttraumatice', price: 532, unit: 'intervenție' },

  // ============================================
  // VI. TRATAMENTE PROTETICE DENTARE
  // ============================================
  // 1. Proteze mobilizabile acrilice cu dinți din acrilat
  { id: '6.1', category: 'protetica', subcategory: 'Proteze mobilizabile', name: 'Microproteză (până la 3 dinți)', price: 1165, unit: 'proteză' },
  { id: '6.2', category: 'protetica', subcategory: 'Proteze mobilizabile', name: 'Proteză parțială (4-10 dinți)', price: 2053, unit: 'proteză' },
  { id: '6.3', category: 'protetica', subcategory: 'Proteze mobilizabile', name: 'Proteză totală', price: 2333, unit: 'proteză' },
  { id: '6.4', category: 'protetica', subcategory: 'Proteze mobilizabile', name: 'Proteză parțială cu bază elastică', price: 4496, unit: 'proteză' },
  { id: '6.5', category: 'protetica', subcategory: 'Proteze mobilizabile', name: 'Proteză totală cu bază elastică', price: 4755, unit: 'proteză' },
  { id: '6.6', category: 'protetica', subcategory: 'Proteze mobilizabile', name: 'Confecționarea șinei pentru pugiliști', price: 3321, unit: 'proteză' },
  { id: '6.7', category: 'protetica', subcategory: 'Proteze mobilizabile', name: 'Confecționarea protezei parțiale sau totale cu bază metalică turnată', price: 4687, unit: 'proteză' },
  { id: '6.8', category: 'protetica', subcategory: 'Proteze mobilizabile', name: 'Confecționarea protezelor scheletate din biodentoplast', price: 5487, unit: 'proteză' },
  { id: '6.9', category: 'protetica', subcategory: 'Proteze mobilizabile', name: 'Confecționarea lingurii individuale', price: 352, unit: 'lingură' },

  // 2. Lucrări suplimentare la protezele mobilizabile
  { id: '6.10', category: 'protetica', subcategory: 'Lucrări suplimentare', name: 'Izolarea torusului', price: 138, unit: 'torus' },
  { id: '6.11', category: 'protetica', subcategory: 'Lucrări suplimentare', name: 'Armarea bazei cu rețea metalică', price: 409, unit: 'bază' },
  { id: '6.12', category: 'protetica', subcategory: 'Lucrări suplimentare', name: 'Ajustarea și aplicarea mezostructurii pe implant (proteză mobilizabilă)', price: 420, unit: 'unitate' },
  { id: '6.13', category: 'protetica', subcategory: 'Lucrări suplimentare', name: 'Aprecierea și fixarea RIM în ocluzie stabilă cu blocuri ocluzale', price: 283, unit: 'vizită' },
  { id: '6.14', category: 'protetica', subcategory: 'Lucrări suplimentare', name: 'Aprecierea și fixarea RIM în ocluzie instabilă (cu blocuri ocluzale sau borduri de ocluzie)', price: 309, unit: 'vizită' },
  { id: '6.15', category: 'protetica', subcategory: 'Lucrări suplimentare', name: 'Aprecierea și fixarea RC la dentat în lipsa ocluziei (cu borduri de ocluzie)', price: 593, unit: 'vizită' },
  { id: '6.16', category: 'protetica', subcategory: 'Lucrări suplimentare', name: 'Aprecierea și fixarea RC la edentatul total (cu borduri de ocluzie)', price: 722, unit: 'vizită' },
  { id: '6.17', category: 'protetica', subcategory: 'Lucrări suplimentare', name: 'Rebazarea protezei mobilizabile', price: 417, unit: 'proteză' },
  { id: '6.18', category: 'protetica', subcategory: 'Lucrări suplimentare', name: 'Reparația protezei mobilizabile', price: 494, unit: 'proteză' },
  { id: '6.19', category: 'protetica', subcategory: 'Lucrări suplimentare', name: 'Alipirea unei croșete', price: 411, unit: 'croșetă' },
  { id: '6.20', category: 'protetica', subcategory: 'Lucrări suplimentare', name: 'Vizită secundară la fiecare etapă de confecționare și ajustare a protezelor dentare', price: 137, unit: 'vizită' },

  // 3. Proteze fixe
  { id: '6.21', category: 'protetica', subcategory: 'Proteze fixe', name: 'Vinir din ceramică prin tehnica de laborator', price: 4028, unit: 'unitate' },
  { id: '6.22', category: 'protetica', subcategory: 'Proteze fixe', name: 'Coroană cu înveliș din metal inoxidabil', price: 802, unit: 'coroană' },
  { id: '6.23', category: 'protetica', subcategory: 'Proteze fixe', name: 'Coroană cu înveliș din acril', price: 1095, unit: 'coroană' },
  { id: '6.24', category: 'protetica', subcategory: 'Proteze fixe', name: 'Coroană/Dinte mixt cu înveliș din acril', price: 1139, unit: 'coroană' },
  { id: '6.25', category: 'protetica', subcategory: 'Proteze fixe', name: 'Coroană de porțelan', price: 2985, unit: 'coroană' },
  { id: '6.26', category: 'protetica', subcategory: 'Proteze fixe', name: 'Incrustație cu pivot din oțel', price: 474, unit: 'incrustație' },
  { id: '6.27', category: 'protetica', subcategory: 'Proteze fixe', name: 'Dinte turnat din oțel', price: 687, unit: 'dinte' },
  { id: '6.28', category: 'protetica', subcategory: 'Proteze fixe', name: 'Reparația fațetei', price: 260, unit: 'fațetă' },
  { id: '6.29', category: 'protetica', subcategory: 'Proteze fixe', name: 'Fixarea coroanei', price: 203, unit: 'coroană' },
  { id: '6.30', category: 'protetica', subcategory: 'Proteze fixe', name: 'Ablațiunea coroanei turnate (descimentare)', price: 210, unit: 'unitate' },
  { id: '6.31', category: 'protetica', subcategory: 'Proteze fixe', name: 'Fixarea provizorie a unei coroane', price: 144, unit: 'coroană' },

  // 4. Proteze scheletate turnate din cobalt–crom
  { id: '6.32', category: 'protetica', subcategory: 'Proteze scheletate', name: 'Proteze scheletate', price: 4815, unit: 'proteză' },
  { id: '6.33', category: 'protetica', subcategory: 'Proteze scheletate', name: 'Proteze scheletate pe culise', price: 6470, unit: 'proteză' },

  // 5. Confecționarea protezelor turnate
  { id: '6.34', category: 'protetica', subcategory: 'Proteze turnate', name: 'Coroană/Dinte metalic turnat', price: 737, unit: 'coroană/dinte' },
  { id: '6.35', category: 'protetica', subcategory: 'Proteze turnate', name: 'Coroană/Dinte metalo-acrilic', price: 1077, unit: 'coroană/dinte' },
  { id: '6.36', category: 'protetica', subcategory: 'Proteze turnate', name: 'Coroană/Dinte metalo-ceramic', price: 1437, unit: 'coroană/dinte' },
  { id: '6.37', category: 'protetica', subcategory: 'Proteze turnate', name: 'Coroană/Dinte metalic turnat (Cr.Ni/Cr.Co.)', price: 791, unit: 'coroană/dinte' },
  { id: '6.38', category: 'protetica', subcategory: 'Proteze turnate', name: 'Coroană/Dinte metalo-acrilic din (Cr.Ni/Cr.Co.)', price: 1084, unit: 'coroană/dinte' },
  { id: '6.39', category: 'protetica', subcategory: 'Proteze turnate', name: 'Coroană/Dinte metalo-ceramic din (Cr.Ni/Cr.Co.)', price: 1444, unit: 'coroană/dinte' },
  { id: '6.40', category: 'protetica', subcategory: 'Proteze turnate', name: 'Coroană/Dinte frezat din titan', price: 2088, unit: 'coroană' },
  { id: '6.41', category: 'protetica', subcategory: 'Proteze turnate', name: 'Coroană/Dinte din titan acoperit cu ceramică', price: 2428, unit: 'coroană/dinte' },
  { id: '6.42', category: 'protetica', subcategory: 'Proteze turnate', name: 'Coroană/Dinte frezat din oxid de zirconiu', price: 3195, unit: 'coroană/dinte' },
  { id: '6.43', category: 'protetica', subcategory: 'Proteze turnate', name: 'Coroană/Dinte din oxid de zirconiu acoperit cu ceramică', price: 4113, unit: 'coroană/dinte' },
  { id: '6.44', category: 'protetica', subcategory: 'Proteze turnate', name: 'Coroană/Dinte din ceramică presată', price: 3101, unit: 'coroană/dinte' },

  // 6. Confecționarea protezelor turnate fixate pe implant
  { id: '6.45', category: 'protetica', subcategory: 'Proteze pe implant', name: 'Coroană metalică turnată (oțel/Cr.Ni/Cr.Co) fixată pe implant', price: 1915, unit: 'coroană' },
  { id: '6.46', category: 'protetica', subcategory: 'Proteze pe implant', name: 'Coroană metalo-ceramică turnată (oțel/Cr.Ni/Cr.Co) fixată pe implant', price: 2899, unit: 'coroană' },
  { id: '6.47', category: 'protetica', subcategory: 'Proteze pe implant', name: 'Coroană metalo-ceramică turnată din titan fixată pe implant', price: 3415, unit: 'coroană' },
  { id: '6.48', category: 'protetica', subcategory: 'Proteze pe implant', name: 'Coroană metalo-ceramică din zirconiu fixată pe implant', price: 3996, unit: 'coroană' },
  { id: '6.49', category: 'protetica', subcategory: 'Proteze pe implant', name: 'Coroană ceramică presată fixată pe implant', price: 3224, unit: 'coroană' },

  // 7. Proteze fixe suflate Ti-N (nitrit-titan)
  { id: '6.50', category: 'protetica', subcategory: 'Proteze Ti-N', name: 'Coroană/dinte mixt cu înveliș din acril (Ti-N)', price: 1149, unit: 'unitate' },
  { id: '6.51', category: 'protetica', subcategory: 'Proteze Ti-N', name: 'Coroană/dinte de înveliș din oțel inoxidabil (Ti-N)', price: 850, unit: 'coroană/dinte' },
  { id: '6.52', category: 'protetica', subcategory: 'Proteze Ti-N', name: 'Coroană/Dinte metalic turnat (Ti-N)', price: 833, unit: 'coroană/dinte' },

  // 8. Servicii de turnătorie
  { id: '6.53', category: 'protetica', subcategory: 'Turnătorie', name: 'Turnare corpuri de punte simple', price: 97, unit: 'corp de punte' },
  { id: '6.54', category: 'protetica', subcategory: 'Turnătorie', name: 'Pivoți', price: 97, unit: 'pivot' },
  { id: '6.55', category: 'protetica', subcategory: 'Turnătorie', name: 'Turnare corpuri de punte pentru protezele MC, MA și coroane turnate', price: 194, unit: 'corp de punte/coroană' },
  { id: '6.56', category: 'protetica', subcategory: 'Turnătorie', name: 'Turnare proteze arcate simple din Cr/Co', price: 971, unit: 'proteză' },
  { id: '6.57', category: 'protetica', subcategory: 'Turnătorie', name: 'Turnare proteze arcate dublate Co/Cr', price: 1942, unit: 'proteză' },

  // ============================================
  // VII. TRATAMENTE ORTODONTICE
  // ============================================
  // 1. Activități efectuate în cabinetul ortodontic
  { id: '7.1', category: 'ortodontie', subcategory: 'Cabinet', name: 'Amprentă cu masa termoplastică Stens pentru obturator la nou-născuți', price: 291, unit: 'amprentă' },
  { id: '7.2', category: 'ortodontie', subcategory: 'Cabinet', name: 'Soclarea unui model în ghips pentru o arcadă dentară în soclu de plastic sau elastic', price: 253, unit: 'model' },
  { id: '7.3', category: 'ortodontie', subcategory: 'Cabinet', name: 'Studierea biometrică a modelelor de diagnostic', price: 309, unit: 'model' },
  { id: '7.4', category: 'ortodontie', subcategory: 'Cabinet', name: 'Analiză fotostatică', price: 317, unit: 'investigație' },
  { id: '7.5', category: 'ortodontie', subcategory: 'Cabinet', name: 'Alcătuirea planului de tratament și construirea aparatului ortodontic', price: 950, unit: 'model' },
  { id: '7.6', category: 'ortodontie', subcategory: 'Cabinet', name: 'Analiză cefalometrică', price: 317, unit: 'investigație' },
  { id: '7.7', category: 'ortodontie', subcategory: 'Cabinet', name: 'Stabilirea ocluziei corectate', price: 325, unit: 'investigație' },
  { id: '7.8', category: 'ortodontie', subcategory: 'Cabinet', name: 'Exerciții de miogimnastică și corectarea viciilor', price: 158, unit: 'exercițiu' },
  { id: '7.9', category: 'ortodontie', subcategory: 'Cabinet', name: 'Reeducarea funcțională pentru înlăturarea obiceiurilor vicioase', price: 475, unit: 'ședință' },
  { id: '7.10', category: 'ortodontie', subcategory: 'Cabinet', name: 'Șlefuirea unui dinte', price: 277, unit: 'dinte' },
  { id: '7.11', category: 'ortodontie', subcategory: 'Cabinet', name: 'Aderarea arcului facial la aparatul dentar (fix, mobil)', price: 382, unit: 'arc' },
  { id: '7.12', category: 'ortodontie', subcategory: 'Cabinet', name: 'Activarea elementelor active (resorturilor) a arcurilor principale și secundare, a șuruburilor', price: 343, unit: 'arc' },
  { id: '7.13', category: 'ortodontie', subcategory: 'Cabinet', name: 'Activarea unui arc de expansiune Coffin', price: 237, unit: 'arc' },
  { id: '7.14', category: 'ortodontie', subcategory: 'Cabinet', name: 'Aplicarea unui inel elastic pentru separarea fiziologică', price: 183, unit: 'inel' },
  { id: '7.15', category: 'ortodontie', subcategory: 'Cabinet', name: 'Aplicarea unui inel ortodontic', price: 353, unit: 'cimentare' },
  { id: '7.16', category: 'ortodontie', subcategory: 'Cabinet', name: 'Aplicarea rășinilor ocluzale', price: 209, unit: 'dinte' },
  { id: '7.17', category: 'ortodontie', subcategory: 'Cabinet', name: 'Aplicarea pintenilor linguali', price: 759, unit: 'arcadă' },
  { id: '7.18', category: 'ortodontie', subcategory: 'Cabinet', name: 'Sudarea unui element', price: 144, unit: 'sudare' },

  // 2. Confecționarea și instalarea aparatelor ortodontice (vor fi adăugate când se continuă catalogul)
  { id: '7.19', category: 'ortodontie', subcategory: 'Brackets', name: 'Brackets metalici ligaturabili (o arcadă)', price: 5440, unit: 'arcadă' },
  { id: '7.20', category: 'ortodontie', subcategory: 'Brackets', name: 'Brackets ceramică ligaturabili (o arcadă)', price: 8332, unit: 'arcadă' },
  { id: '7.21', category: 'ortodontie', subcategory: 'Brackets', name: 'Brackets metalici autoligaturabili (o arcadă)', price: 7922, unit: 'arcadă' },
  { id: '7.22', category: 'ortodontie', subcategory: 'Brackets', name: 'Brackets ceramică autoligaturabili (o arcadă)', price: 11171, unit: 'arcadă' },
  { id: '7.23', category: 'ortodontie', subcategory: 'Aparate mobilizabile', name: 'Placă palatinală/linguală', price: 786, unit: 'aparat' },
  { id: '7.24', category: 'ortodontie', subcategory: 'Aparate mobilizabile', name: 'Aparat Hawley', price: 862, unit: 'aparat' },
  { id: '7.25', category: 'ortodontie', subcategory: 'Aparate mobilizabile', name: 'Trainer funcțional', price: 1605, unit: 'aparat' },
  { id: '7.26', category: 'ortodontie', subcategory: 'Aparate mobilizabile', name: 'Twin-block', price: 1956, unit: 'aparat' },
  { id: '7.27', category: 'ortodontie', subcategory: 'Aparate mobilizabile', name: 'Disjunctor', price: 2792, unit: 'aparat' },

  // ============================================
  // VIII. IMAGISTICĂ
  // ============================================
  { id: '8.1', category: 'imagistica', name: 'Ortopantomografie', price: 177, unit: 'film' },
  { id: '8.2', category: 'imagistica', name: 'Ortopantomografie sectorială', price: 106, unit: 'film' },
  { id: '8.3', category: 'imagistica', name: 'Viziografie dentară', price: 82, unit: 'investigație' },
  { id: '8.4', category: 'imagistica', name: 'Radiografia dinților (3x4cm)', price: 25, unit: 'film' },
  { id: '8.5', category: 'imagistica', name: 'Teleradiografia maxilarelor', price: 200, unit: 'film' },

  // ============================================
  // IX. SERVICII CNAM (Selectie)
  // ============================================
  { id: '9.1', category: 'cnam', name: 'Consultație medic stomatolog (CNAM)', price: 368, unit: 'vizită', cnamEligible: true },
  { id: '9.2', category: 'cnam', name: 'Obturarea defectelor coronariene (CNAM)', price: '378-386', unit: 'dinte', cnamEligible: true },
  { id: '9.3', category: 'cnam', name: 'Tratament pulpită acută (CNAM)', price: '734-1012', unit: 'dinte', cnamEligible: true },
  { id: '9.4', category: 'cnam', name: 'Extracție dentară (CNAM)', price: '452-1593', unit: 'dinte', cnamEligible: true },
  { id: '9.5', category: 'cnam', name: 'Detartraj ultrasunet (CNAM)', price: 632, unit: 'ședință', cnamEligible: true },
  { id: '9.6', category: 'cnam', name: 'Tratament parodontită (CNAM)', price: 322, unit: 'ședință', cnamEligible: true },
  { id: '9.7', category: 'cnam', name: 'Tratament urgențe stomatologice (CNAM)', price: 275, unit: 'vizită', cnamEligible: true },
];
