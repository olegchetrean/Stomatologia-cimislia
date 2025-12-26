import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

// Main Pages
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Team } from './pages/Team';
import { Contact } from './pages/Contact';
import { Transparency } from './pages/Transparency';
import { About } from './pages/About';
import { UsefulInfo } from './pages/UsefulInfo';
import { Feedback } from './pages/Feedback';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';

// New Pages
import { Gallery } from './pages/Gallery';
import { Appointments } from './pages/Appointments';
import { Prices } from './pages/Prices';
import { FAQ } from './pages/FAQ';
import { Emergency } from './pages/Emergency';
import { Pediatrics } from './pages/Pediatrics';
import { Testimonials } from './pages/Testimonials';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/despre" element={<About />} />
          <Route path="/servicii" element={<Services />} />
          <Route path="/servicii/:category" element={<ServiceDetail />} />
          <Route path="/echipa" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/transparenta" element={<Transparency />} />
          <Route path="/informatii-utile" element={<UsefulInfo />} />
          <Route path="/sugestii" element={<Feedback />} />
          <Route path="/confidentialitate" element={<PrivacyPolicy />} />
          <Route path="/termeni" element={<Terms />} />

          {/* New Pages */}
          <Route path="/galerie" element={<Gallery />} />
          <Route path="/programare" element={<Appointments />} />
          <Route path="/preturi" element={<Prices />} />
          <Route path="/intrebari-frecvente" element={<FAQ />} />
          <Route path="/urgente" element={<Emergency />} />
          <Route path="/pediatrie" element={<Pediatrics />} />
          <Route path="/testimoniale" element={<Testimonials />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
