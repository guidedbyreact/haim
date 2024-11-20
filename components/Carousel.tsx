import React from 'react';

const Carousel = () => {
  const ads = [
    "Ad 1: Discover our innovative solutions.",
    "Ad 2: Take advantage of our special offers.",
    "Ad 3: Contact us for more information.",
    "Ad 4: Join our dynamic team.",
    "Ad 5: Partner in your digital transformation."
  ];

  return (
    <div className="overflow-hidden py-4">
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