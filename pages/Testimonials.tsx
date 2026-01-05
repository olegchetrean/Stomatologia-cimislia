import React from 'react';
import { Star, Quote, MessageCircle, ThumbsUp, Award } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { TESTIMONIALS } from '../constants';

const allTestimonials = [
  ...TESTIMONIALS,
  {
    id: '6',
    name: 'Andrei Moldovan',
    content: 'Foarte profesionisti! Am făcut o extracție dentară atipică și totul a decurs perfect. Recomand cu încredere această clinică.',
    rating: 5,
    service: 'Chirurgie Dento-Alveolară'
  },
  {
    id: '7',
    name: 'Natalia Cebotari',
    content: 'Am adus fiica mea pentru tratarea cariilor la dintii temporari. Medicii sunt foarte atenti și explică totul clar. Copilul s-a simtit confortabil.',
    rating: 5,
    service: 'Stomatologie Pediatrică'
  },
  {
    id: '8',
    name: 'Gheorghe Lungu',
    content: 'Urgenta stomatologica rezolvata rapid si profesional. Am sunat si in cateva ore problema era rezolvata.',
    rating: 5,
    service: 'Urgentă'
  },
  {
    id: '9',
    name: 'Olga Moraru',
    content: 'Albirea dentara a depasit asteptarile mele! Zambetul meu arata acum mult mai bine. Multumesc echipei!',
    rating: 5,
    service: 'Estetică'
  },
  {
    id: '10',
    name: 'Dumitru Cazacu',
    content: 'Am făcut restaurări dentare și tratamentul parodontitei. Rezultatele sunt excelente și nu mă așteptam la o calitate atât de bună.',
    rating: 5,
    service: 'Stomatologie Terapeutică'
  },
  {
    id: '11',
    name: 'Valentina Grosu',
    content: 'Personalul este foarte amabil, iar clinica este foarte curata. Ma simt intotdeauna in siguranta aici.',
    rating: 5,
    service: 'Consultație'
  },
  {
    id: '12',
    name: 'Mihai Bodrug',
    content: 'Am facut detartraj si periaj profesional. Dintii mei nu au aratat niciodata mai bine! Voi reveni cu siguranta.',
    rating: 5,
    service: 'Profilaxie'
  },
];

const stats = [
  { number: '98%', label: 'Rata de Satisfactie' },
  { number: '5.0', label: 'Rating Mediu' },
  { number: '5000+', label: 'Pacienti Fericiti' },
  { number: '15+', label: 'Ani de Experientă' },
];

export const Testimonials = () => {
  const getInitial = (name: string) => name.charAt(0).toUpperCase();

  const getColor = (index: number) => {
    const colors = ['bg-blue-500', 'bg-purple-500', 'bg-teal-500', 'bg-pink-500', 'bg-orange-500', 'bg-green-500'];
    return colors[index % colors.length];
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Header */}
      <div className="bg-medical-blue text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-40" />
        <div className="absolute inset-0 noise-overlay" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
            <ThumbsUp className="w-4 h-4" />
            <span className="text-sm font-medium">Feedback de la Pacienti</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Ce Spun Pacientii Noștri</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Încrederea pacientilor noștri este cea mai mare recompensă. Iată ce spun ei despre experienta la clinica noastră.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white py-12 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-bold font-heading text-medical-blue mb-2">{stat.number}</p>
                <p className="text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Featured Testimonial */}
        <div className="bg-gradient-to-r from-medical-blue to-medical-blue-light rounded-3xl p-8 md:p-12 text-white mb-16 relative overflow-hidden">
          <Quote className="absolute top-8 right-8 w-24 h-24 opacity-10" />
          <div className="relative z-10">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-heading mb-8 leading-relaxed">
              "Am găsit la ÎM CSR Cimișlia exact ce căutam: profesionalism, empatie și rezultate exceptionale.
              Recomand cu toată încrederea această clinică!"
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                M
              </div>
              <div>
                <p className="font-bold text-xl">Maria Ciobanu</p>
                <p className="text-slate-300">Pacientă din 2020</p>
              </div>
            </div>
          </div>
        </div>

        {/* All Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-slate-200 mb-4" />
              <p className="text-slate-700 leading-relaxed mb-6">"{testimonial.content}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${getColor(index)} rounded-full flex items-center justify-center text-white font-bold`}>
                    {getInitial(testimonial.name)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.name}</p>
                    {testimonial.service && (
                      <p className="text-sm text-slate-500">{testimonial.service}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="bg-slate-100 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
            <Award className="w-16 h-16 text-medical-blue mx-auto mb-6" />
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">
              Experienta Ta Contează
            </h2>
            <p className="text-slate-600 mb-8">
              Ai fost pacient la clinica noastră? Ne-ar face plăcere să aflăm părerea ta despre experienta avută.
              Feedback-ul tău ne ajută să ne îmbunătătim constant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/sugestii">
                <Button size="lg" as="div">
                  <MessageCircle className="w-5 h-5 mr-2" /> Lasă o Recenzie
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" size="lg" as="div">
                  Contactează-ne
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
