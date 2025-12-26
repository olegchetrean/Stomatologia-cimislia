import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800', category: 'clinic', title: 'Sala de Tratament' },
  { id: 2, src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800', category: 'treatment', title: 'Cabinet de Tratament' },
  { id: 3, src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800', category: 'equipment', title: 'Echipament Modern' },
  { id: 4, src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800', category: 'clinic', title: 'Receptia Clinicii' },
  { id: 5, src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800', category: 'treatment', title: 'Tratament Stomatologic' },
  { id: 6, src: 'images/gallery/unit_dentar.jpg', category: 'equipment', title: 'Unit Dentar' },
  { id: 7, src: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&q=80&w=800', category: 'treatment', title: 'Tratament Stomatologic' },
  { id: 8, src: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=800', category: 'results', title: 'Cabinet Stomatologic' },
  // { id: 9, src: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800', category: 'clinic', title: 'Zona de Sterilizare' },
  { id: 9, src: 'images/gallery/radiologic.jpg', category: 'equipment', title: 'Cabinet Radiologic' },
  { id: 10, src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800', category: 'team', title: 'Echipa Medicală' },
  { id: 11, src: 'images/gallery/consult.jpg', category: 'treatment', title: 'Consultatie' },
  { id: 12, src: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800', category: 'results', title: 'Unit Dentar' },
];

const categories = [
  { id: 'all', label: 'Toate' },
  { id: 'clinic', label: 'Clinica' },
  { id: 'treatment', label: 'Tratamente' },
  { id: 'equipment', label: 'Echipamente' },
  { id: 'results', label: 'Rezultate' },
  { id: 'team', label: 'Echipa' },
];

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxImage(index);
  const closeLightbox = () => setLightboxImage(null);

  const goToPrevious = () => {
    if (lightboxImage !== null) {
      setLightboxImage(lightboxImage === 0 ? filteredImages.length - 1 : lightboxImage - 1);
    }
  };

  const goToNext = () => {
    if (lightboxImage !== null) {
      setLightboxImage(lightboxImage === filteredImages.length - 1 ? 0 : lightboxImage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Header */}
      <div className="bg-medical-blue text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-40" />
        <div className="absolute inset-0 noise-overlay" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
            <Camera className="w-4 h-4" />
            <span className="text-sm font-medium">Galerie Foto</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Galeria Clinicii</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Descoperă spatiile moderne și echipamentele de ultimă generatie ale clinicii noastre.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-medical-blue text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(index)}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white font-medium">{image.title}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            Nu există imagini în această categorie.
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 p-2 text-white/80 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 p-2 text-white/80 hover:text-white transition-colors"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="max-w-5xl max-h-[90vh] px-16" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredImages[lightboxImage].src}
              alt={filteredImages[lightboxImage].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">{filteredImages[lightboxImage].title}</p>
          </div>
        </div>
      )}
    </div>
  );
};
