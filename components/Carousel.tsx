import React from 'react';

const Carousel = () => {
  const ads = [
    "Publicité 1 : Découvrez nos solutions innovantes.",
    "Publicité 2 : Profitez de nos offres spéciales.",
    "Publicité 3 : Contactez-nous pour plus d'informations.",
    "Publicité 4 : Rejoignez notre équipe dynamique.",
    "Publicité 5 : Partenaire de votre transformation digitale."
  ];

  return (
    <div className="overflow-hidden bg-blue-100 py-4">
      <div className="flex animate-marquee space-x-8">
        {ads.map((ad, index) => (
          <div key={index} className="flex-shrink-0 text-blue-900 font-medium text-lg">
            {ad}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel; 