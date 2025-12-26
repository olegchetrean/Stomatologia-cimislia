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
    answer: 'Clinica este deschisă de Luni până Vineri, între orele 08:00 și 17:00. Pentru urgente în afara programului, vă rugăm să ne contactati telefonic.'
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
  { id: '1.2', category: 'consultatii', name: 'Consultația medicului stomatolog, conferentiar-doctor în știinte medicale', price: 320, unit: 'vizită' },
  { id: '1.3', category: 'consultatii', name: 'Consultația medicului stomatolog, profesor-doctor habilitat', price: 383, unit: 'vizită' },

  // ============================================
  // II. ACTIVITĂTI EFECTUATE ÎN CABINETUL STOMATOLOGIC
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
  // IV. TRATAMENTUL DINTILOR
  // ============================================
  // 1. Tratament endodontic
  { id: '4.1', category: 'terapie', subcategory: 'Endodontie', name: 'Tratamentul canalului radicular cu ultrasunet', price: 93, unit: 'ședintă' },
  { id: '4.2', category: 'terapie', subcategory: 'Endodontie', name: 'Reconstrucție perete-pre-endo', price: 140, unit: 'dinte' },
  { id: '4.3', category: 'terapie', subcategory: 'Endodontie', name: 'Tratament endodontic monocanalar (obturație temporară de canal)', price: 325, unit: 'ședintă' },
  { id: '4.4', category: 'terapie', subcategory: 'Endodontie', name: 'Tratament endodontic bicanalar (obturație temporară de canal)', price: 362, unit: 'ședintă' },
  { id: '4.5', category: 'terapie', subcategory: 'Endodontie', name: 'Tratament endodontic pluricanalar (obturație temporară de canal)', price: 445, unit: 'ședintă' },
  { id: '4.6', category: 'terapie', subcategory: 'Endodontie', name: 'Tratament endodontic monocanalar (obturație definitivă de canal)', price: 419, unit: 'ședintă' },
  { id: '4.7', category: 'terapie', subcategory: 'Endodontie', name: 'Tratament endodontic bicanalar (obturație definitivă de canal)', price: 458, unit: 'ședintă' },
  { id: '4.8', category: 'terapie', subcategory: 'Endodontie', name: 'Tratament endodontic pluricanalar (obturație definitivă de canal)', price: 541, unit: 'ședintă' },
  { id: '4.9', category: 'terapie', subcategory: 'Endodontie', name: 'Tratament endodontic asistat de microscop stomatologic al unui canal', price: 743, unit: 'ședintă' },
  { id: '4.10', category: 'terapie', subcategory: 'Endodontie', name: 'Dezobturarea canalului radicular (un canal) / Înlăturare corp străin din canal', price: 419, unit: 'ședintă' },
  { id: '4.11', category: 'terapie', subcategory: 'Endodontie', name: 'Aplicarea pastei devitalizante', price: 159, unit: 'dinte' },
  { id: '4.12', category: 'terapie', subcategory: 'Endodontie', name: 'Tratament endodontic prin amputarea pulpei coronare (partială/subtotală/totală)', price: 379, unit: 'dinte' },

  // 2. Tratament coronar
  { id: '4.13', category: 'terapie', subcategory: 'Coronar', name: 'Tratamentul cariilor dentare cu material compozit', price: 355, unit: 'ședintă' },
  { id: '4.14', category: 'terapie', subcategory: 'Coronar', name: 'Tratamentul cariei dentare cu material ciment glassionomer', price: 355, unit: 'ședintă' },
  { id: '4.15', category: 'terapie', subcategory: 'Coronar', name: 'Tratamentul cariei dentare cu material compozit autopolimerizabil', price: 338, unit: 'ședintă' },
  { id: '4.15b', category: 'terapie', subcategory: 'Coronar', name: 'Tratamentul cariei dentare cu material compozit fotopolimeric', price: 409, unit: 'ședintă' },
  { id: '4.16', category: 'terapie', subcategory: 'Coronar', name: 'Restaurare coronară dentară din material glassionomer fără pivot', price: 466, unit: 'ședintă' },
  { id: '4.17', category: 'terapie', subcategory: 'Coronar', name: 'Restaurare coronară dentară din material compozit autopolimerizabil', price: 573, unit: 'ședintă' },
  { id: '4.18', category: 'terapie', subcategory: 'Coronar', name: 'Restaurare coronară dentară din material compozit fotopolimerizabil', price: 582, unit: 'ședintă' },
  { id: '4.19', category: 'terapie', subcategory: 'Coronar', name: 'Restaurare coronară dentară din material compozit fotopolimerizabil cu pivot metalic', price: 710, unit: 'ședintă' },
  { id: '4.20', category: 'terapie', subcategory: 'Coronar', name: 'Restaurare coronară dentară din material compozit fotopolimerizabil cu pivot optic', price: 935, unit: 'ședintă' },
  { id: '4.22', category: 'terapie', subcategory: 'Coronar', name: 'Restaurarea breșei unidentare cu punti adezive', price: 1438, unit: 'caz tratat' },

  // 3. Profilaxie stomatologică
  { id: '4.23', category: 'terapie', subcategory: 'Profilaxie', name: 'Detartraj cu ultrasunet', price: 435, unit: 'ședintă' },
  { id: '4.24', category: 'terapie', subcategory: 'Profilaxie', name: 'Igienizarea cavitătii bucale cu ajutorul air flow-ului', price: 323, unit: 'ședintă' },
  { id: '4.25', category: 'terapie', subcategory: 'Profilaxie', name: 'Periaj dentar profesional', price: 211, unit: 'ședintă' },
  { id: '4.26', category: 'terapie', subcategory: 'Profilaxie', name: 'Sigilarea fisurilor unui dinte cu scop profilactic', price: 176, unit: 'dinte' },
  { id: '4.27', category: 'terapie', subcategory: 'Profilaxie', name: 'Sigilarea fisurilor unui dinte cu scop profilactic cu material compozit fotopolimerizabil', price: 232, unit: 'ședintă' },
  { id: '4.28', category: 'terapie', subcategory: 'Profilaxie', name: 'Profilaxia cariei dentare (prin remineralizare și infiltrare)', price: 226, unit: 'ședintă' },
  { id: '4.29', category: 'terapie', subcategory: 'Profilaxie', name: 'Confectionarea gutierei (bruxism)', price: 503, unit: 'maxilar' },
  { id: '4.30', category: 'terapie', subcategory: 'Profilaxie', name: 'Tratamentul sensibilitătii (1 arcadă), cu aplicarea gutierei individuale', price: 1508, unit: 'caz tratat' },

  // 4. Tratamente ale afectiunilor muco-parodontale
  { id: '4.31', category: 'terapie', subcategory: 'Parodontologie', name: 'Tratamentul afectiunilor mucoasei cavitătii bucale', price: 277, unit: 'ședintă' },
  { id: '4.32', category: 'terapie', subcategory: 'Parodontologie', name: 'Tratamentul parodontitei', price: 322, unit: 'ședintă' },
  { id: '4.33', category: 'terapie', subcategory: 'Parodontologie', name: 'Chiuretaj subgingival (2-3 dinti) în câmp închis', price: 345, unit: 'ședintă' },
  { id: '4.34', category: 'terapie', subcategory: 'Parodontologie', name: 'Atelizarea (șinarea) dintilor cu fibră optică', price: 394, unit: 'dinte' },

  // 5. Tratamentul discromiilor dentare / manipulări stomatologice estetice
  { id: '4.35', category: 'terapie', subcategory: 'Estetică', name: 'Albirea dintilor în cabinet (1 dinte)', price: 267, unit: 'ședintă' },
  { id: '4.36', category: 'terapie', subcategory: 'Estetică', name: 'Albirea dintilor cu aplicarea gutierei individuale', price: 1488, unit: 'caz tratat' },
  { id: '4.37', category: 'terapie', subcategory: 'Estetică', name: 'Microabraziunea dentară', price: 388, unit: 'dinte' },
  { id: '4.38', category: 'terapie', subcategory: 'Estetică', name: 'Aplicarea coferdamului', price: 164, unit: 'ședintă' },
  { id: '4.39', category: 'terapie', subcategory: 'Estetică', name: 'Albire internă (intracoronară)', price: 459, unit: 'ședintă' },
  { id: '4.40', category: 'terapie', subcategory: 'Estetică', name: 'Aplicarea bijuteriei dentare', price: 493, unit: 'dinte' },
  { id: '4.41', category: 'terapie', subcategory: 'Estetică', name: 'Fatetare directă (din compozit)', price: 582, unit: 'dinte' },

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
  { id: '5.1', category: 'chirurgie', subcategory: 'Extractii', name: 'Extractia dintelui fără anestezie', price: 262, unit: 'extracție' },
  { id: '5.2', category: 'chirurgie', subcategory: 'Extractii', name: 'Extractia dintelui cu anestezie', price: 452, unit: 'extracție' },
  { id: '5.3', category: 'chirurgie', subcategory: 'Extractii', name: 'Extractie dentară atipică', price: 828, unit: 'extracție' },
  { id: '5.4', category: 'chirurgie', subcategory: 'Extractii', name: 'Extractia dintelui inclus', price: 1434, unit: 'extracție' },
  { id: '5.5', category: 'chirurgie', subcategory: 'Extractii', name: 'Extractia dintelui inclavat', price: 1593, unit: 'extracție' },
  { id: '5.6', category: 'chirurgie', subcategory: 'Interventii', name: 'Hemostază', price: 535, unit: 'procedură' },
  { id: '5.7', category: 'chirurgie', subcategory: 'Interventii', name: 'Alveolotomie', price: 606, unit: 'intervenție' },
  { id: '5.8', category: 'chirurgie', subcategory: 'Tumori', name: 'Înlăturarea tumorii benigne a tesuturilor moi (cu diametrul sub 0,5 cm)', price: 767, unit: 'intervenție' },
  { id: '5.9', category: 'chirurgie', subcategory: 'Tumori', name: 'Înlăturarea tumorii benigne a tesuturilor moi (cu diametrul mai mare de 0,5 cm)', price: 925, unit: 'intervenție' },
  { id: '5.10', category: 'chirurgie', subcategory: 'Interventii', name: 'Rezectie apicală', price: 1009, unit: 'intervenție' },
  { id: '5.11', category: 'chirurgie', subcategory: 'Interventii', name: 'Chistectomie (cu diametrul până la 0,5 cm)', price: 760, unit: 'intervenție' },
  { id: '5.12', category: 'chirurgie', subcategory: 'Interventii', name: 'Chistectomie (cu diametrul mai mare de 0,5 cm)', price: 1238, unit: 'intervenție' },
  { id: '5.13', category: 'chirurgie', subcategory: 'Interventii', name: 'Frenuloplastie', price: 835, unit: 'intervenție' },
  { id: '5.14', category: 'chirurgie', subcategory: 'Interventii', name: 'Gingivectomie', price: 380, unit: 'intervenție' },
  { id: '5.15', category: 'chirurgie', subcategory: 'Interventii', name: 'Tratarea proceselor inflamatorii odontogene cu extracție dentară', price: 1094, unit: 'intervenție' },
  { id: '5.16', category: 'chirurgie', subcategory: 'Interventii', name: 'Tratarea proceselor inflamatorii fără extracție dentară', price: 618, unit: 'intervenție' },
  { id: '5.17', category: 'chirurgie', subcategory: 'Interventii', name: 'Operculectomie (decapisare)', price: 438, unit: 'intervenție' },
  { id: '5.18', category: 'chirurgie', subcategory: 'Interventii', name: 'Sinusotomie', price: 1114, unit: 'intervenție' },
  { id: '5.19', category: 'chirurgie', subcategory: 'Tumori', name: 'Înlăturarea ateromului', price: 835, unit: 'intervenție' },
  { id: '5.20', category: 'chirurgie', subcategory: 'Tumori', name: 'Înlăturarea papilomului', price: 835, unit: 'intervenție' },
  { id: '5.21', category: 'chirurgie', subcategory: 'Tumori', name: 'Înlăturarea lipomului', price: 755, unit: 'intervenție' },
  { id: '5.22', category: 'chirurgie', subcategory: 'Tumori', name: 'Înlăturarea fibromului', price: 755, unit: 'intervenție' },
  { id: '5.23', category: 'chirurgie', subcategory: 'Interventii', name: 'Secvestrectomie', price: 1553, unit: 'intervenție' },
  { id: '5.24', category: 'chirurgie', subcategory: 'Interventii', name: 'Prelucrarea chirurgicală primară a plăgii', price: 982, unit: 'intervenție' },
  { id: '5.25', category: 'chirurgie', subcategory: 'Interventii', name: 'Deschiderea și drenarea furunculului', price: 618, unit: 'intervenție' },
  { id: '5.26', category: 'chirurgie', subcategory: 'Interventii', name: 'Limfadenită acută – deschiderea și drenarea abcesului', price: 618, unit: 'intervenție' },
  { id: '5.27', category: 'chirurgie', subcategory: 'Interventii', name: 'Sialodenită – înlăturarea calculului din ductul salivar', price: 776, unit: 'intervenție' },
  { id: '5.28', category: 'chirurgie', subcategory: 'Parodontologie chirurgicală', name: 'Chiuretaj pe câmp deschis în zona a 2-3 dinti', price: 1066, unit: 'intervenție' },
  { id: '5.29', category: 'chirurgie', subcategory: 'Parodontologie chirurgicală', name: 'Chiuretaj pe câmp deschis în zona a 4-5 dinti', price: 1593, unit: 'intervenție' },
  { id: '5.30', category: 'chirurgie', subcategory: 'Osteoplastie', name: 'Osteoplastia osului cu hidroxiapatită la 2-3 dinti', price: 2154, unit: 'intervenție' },
  { id: '5.31', category: 'chirurgie', subcategory: 'Osteoplastie', name: 'Osteoplastia osului cu hidroxiapatită la 4-5 dinti', price: 2640, unit: 'intervenție' },
  { id: '5.32', category: 'chirurgie', subcategory: 'Osteoplastie', name: 'Osteoplastia osului cu material de augmentare sintetic la 2-3 dinti', price: 2154, unit: 'intervenție' },
  { id: '5.33', category: 'chirurgie', subcategory: 'Osteoplastie', name: 'Osteoplastia osului cu material de augmentare sintetic la 4-5 dinti', price: 2640, unit: 'intervenție' },
  { id: '5.34', category: 'chirurgie', subcategory: 'Osteoplastie', name: 'Osteoplastia osului cu augmentare și membrană în zona a 2-3 dinti', price: 2154, unit: 'intervenție' },
  { id: '5.35', category: 'chirurgie', subcategory: 'Osteoplastie', name: 'Osteoplastia osului cu augmentare și membrană în zona a 4-5 dinti', price: 2640, unit: 'intervenție' },
  { id: '5.36', category: 'chirurgie', subcategory: 'ATM', name: 'Tratamentul afectiunilor articulatiei temporo-mandibulare cu introducerea medicamentelor în cavitatea articulară, prin injectare', price: 513, unit: 'procedură' },
  { id: '5.37', category: 'chirurgie', subcategory: 'Interventii', name: 'Premolarizare', price: 1096, unit: 'intervenție' },
  { id: '5.38', category: 'chirurgie', subcategory: 'Interventii', name: 'Tratarea alveolitei', price: 275, unit: 'procedură' },
  { id: '5.39', category: 'chirurgie', subcategory: 'Interventii', name: 'Tratarea nevralgiei prin metoda de blocare', price: 275, unit: 'procedură' },
  { id: '5.40', category: 'chirurgie', subcategory: 'ATM', name: 'Repozitionarea luxatiei acute a articulatiei temporo-mandibulare', price: 337, unit: 'procedură' },
  { id: '5.41', category: 'chirurgie', subcategory: 'Traumatologie', name: 'Imobilizarea fracturilor', price: 3003, unit: 'șinare' },
  { id: '5.42', category: 'chirurgie', subcategory: 'Interventii', name: 'Pansament', price: 258, unit: 'procedură' },
  { id: '5.43', category: 'chirurgie', subcategory: 'Traumatologie', name: 'Înlăturarea atelei la un maxilar după consolidarea fracturii posttraumatice', price: 532, unit: 'intervenție' },

  // ============================================
  // VI. IMAGISTICĂ
  // ============================================
  { id: '6.1', category: 'imagistica', name: 'Ortopantomografie', price: 177, unit: 'film' },
  { id: '6.2', category: 'imagistica', name: 'Ortopantomografie sectorială', price: 106, unit: 'film' },
  { id: '6.3', category: 'imagistica', name: 'Viziografie dentară', price: 82, unit: 'investigație' },
  { id: '6.4', category: 'imagistica', name: 'Radiografia dintilor (3x4cm)', price: 25, unit: 'film' },
  { id: '6.5', category: 'imagistica', name: 'Teleradiografia maxilarelor', price: 200, unit: 'film' },

  // ============================================
  // VII. SERVICII CNAM (Selectie)
  // ============================================
  // 1. Consultatii stomatologice
  { id: '7.1', category: 'cnam', name: 'Consultația medicului stomatolog (CNAM)', price: 368, unit: 'consultație', cnamEligible: true },
  
  // 2. Tratamentul dintilor permanenti
  { id: '7.2', category: 'cnam', name: 'Obturatia defectelor coronariene (CNAM)', price: 386, unit: 'caz tratat', cnamEligible: true },
  { id: '7.3', category: 'cnam', name: 'Tratarea pulpitei acute a dintelui monoradicular (CNAM)', price: 734, unit: 'caz tratat', cnamEligible: true },
  { id: '7.4', category: 'cnam', name: 'Tratarea pulpitei acute a dintelui biradicular (CNAM)', price: 877, unit: 'caz tratat', cnamEligible: true },
  { id: '7.5', category: 'cnam', name: 'Tratarea pulpitei acute a dintelui pluriradicular (CNAM)', price: 1012, unit: 'caz tratat', cnamEligible: true },
  { id: '7.6', category: 'cnam', name: 'Tratarea periodontitei acute a dintelui monoradicular (CNAM)', price: 1077, unit: 'caz tratat', cnamEligible: true },
  { id: '7.7', category: 'cnam', name: 'Tratarea periodontitei acute a dintelui biradicular (CNAM)', price: 1287, unit: 'caz tratat', cnamEligible: true },
  { id: '7.8', category: 'cnam', name: 'Tratarea periodontitei acute a dintelui pluriradicular (CNAM)', price: 1504, unit: 'caz tratat', cnamEligible: true },
  { id: '7.9', category: 'cnam', name: 'Tratarea periodontitei exacerbate a dintelui monoradicular (CNAM)', price: 1168, unit: 'caz tratat', cnamEligible: true },
  { id: '7.10', category: 'cnam', name: 'Tratarea periodontitei exacerbate a dintelui biradicular (CNAM)', price: 1401, unit: 'caz tratat', cnamEligible: true },
  { id: '7.11', category: 'cnam', name: 'Tratarea periodontitei exacerbate a dintelui pluriradicular (CNAM)', price: 1618, unit: 'caz tratat', cnamEligible: true },
  
  // 3. Tratamentul dintilor temporari
  { id: '7.12', category: 'cnam', name: 'Obturatia defectelor coronariene - dinti temporari (CNAM)', price: 378, unit: 'caz tratat', cnamEligible: true },
  { id: '7.13', category: 'cnam', name: 'Tratarea pulpitei dintelui monoradicular - dinti temporari (CNAM)', price: 588, unit: 'caz tratat', cnamEligible: true },
  { id: '7.14', category: 'cnam', name: 'Tratarea pulpitei dintelui biradicular - dinti temporari (CNAM)', price: 665, unit: 'caz tratat', cnamEligible: true },
  { id: '7.15', category: 'cnam', name: 'Tratarea pulpitei dintelui pluriradicular - dinti temporari (CNAM)', price: 747, unit: 'caz tratat', cnamEligible: true },
  { id: '7.16', category: 'cnam', name: 'Tratarea periodontitei dintelui monoradicular - dinti temporari (CNAM)', price: 642, unit: 'caz tratat', cnamEligible: true },
  { id: '7.17', category: 'cnam', name: 'Tratarea periodontitei dintelui pluriradicular - dinti temporari (CNAM)', price: 720, unit: 'caz tratat', cnamEligible: true },
  { id: '7.18', category: 'cnam', name: 'Tratament endodontic prin metoda amputării (partială/subtotală/totală) - dinti temporari (CNAM)', price: 429, unit: 'dinte', cnamEligible: true },
  
  // 4. Chirurgie stomatologică
  { id: '7.19', category: 'cnam', name: 'Hemostază (CNAM)', price: 535, unit: 'procedură', cnamEligible: true },
  { id: '7.20', category: 'cnam', name: 'Plastia comunicării orosinusale (CNAM)', price: 1114, unit: 'caz tratat', cnamEligible: true },
  { id: '7.21', category: 'cnam', name: 'Operatie perioronariană – decapisare (CNAM)', price: 755, unit: 'caz tratat', cnamEligible: true },
  { id: '7.22', category: 'cnam', name: 'Prelucrarea chirurgicală primară a plăgii (CNAM)', price: 982, unit: 'caz tratat', cnamEligible: true },
  { id: '7.23', category: 'cnam', name: 'Tratamentul chirurgical al abcesului, periostitei fără extracție dentară (CNAM)', price: 1094, unit: 'caz tratat', cnamEligible: true },
  { id: '7.24', category: 'cnam', name: 'Tratamentul chirurgical al abcesului, periostitei cu extracție dentară (CNAM)', price: 1570, unit: 'caz tratat', cnamEligible: true },
  
  // 5. Anestezie în stomatologie
  { id: '7.25', category: 'cnam', name: 'Anestezie locală (infiltrație plexală) (CNAM)', price: 184, unit: 'anestezie', cnamEligible: true },
  { id: '7.26', category: 'cnam', name: 'Anestezie locală/loco-regională cu carpule (CNAM)', price: 196, unit: 'anestezie', cnamEligible: true },
  { id: '7.27', category: 'cnam', name: 'Anestezie topică (CNAM)', price: 135, unit: 'anestezie', cnamEligible: true },
];
