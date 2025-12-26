import React from 'react';

export const Terms = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">Termeni și Conditii</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 prose prose-slate max-w-none">
          <h3>1. Dispozitii Generale</h3>
          <p>
            Utilizarea acestui site (stomatologiacimislia.md) implică acceptarea acestor termeni și conditii. IM Centrul Stomatologic Raional Cimișlia își rezervă dreptul de a modifica continutul acestor termeni fără notificare prealabilă.
          </p>

          <h3>2. Servicii Medicale</h3>
          <p>
            Informatiile prezentate pe site au caracter informativ și nu înlocuiesc consultatia medicală de specialitate. Planul de tratament exact și costurile finale se stabilesc doar în urma unei consultatii în cabinet.
          </p>

          <h3>3. Programări</h3>
          <p>
            Solicitările de programare transmise online nu sunt garantate până la confirmarea telefonică sau prin email din partea personalului nostru. Ne rezervăm dreptul de a modifica programul medicilor în cazuri de fortă majoră.
          </p>

          <h3>4. Drepturi de Autor</h3>
          <p>
            Continutul acestui site (text, imagini, logo) este proprietatea IM CSR Cimișlia și este protejat de legea drepturilor de autor.
          </p>

          <h3>5. Limitarea Răspunderii</h3>
          <p>
            IM CSR Cimișlia nu își asumă responsabilitatea pentru eventualele erori tehnice ale site-ului sau pentru informatiile furnizate de terti prin link-uri externe.
          </p>
        </div>
      </div>
    </div>
  );
};