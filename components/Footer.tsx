import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sitemap */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sitemap</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">Accueil</Link></li>
              <li><Link href="/nos-metiers" className="hover:underline">Nos métiers</Link></li>
              <li><Link href="/missions" className="hover:underline">Missions</Link></li>
              <li><Link href="/rse" className="hover:underline">RSE</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact et réseaux</h3>
            <p>6 rue duret 75116 Paris</p>
            <p><a href="https://www.linkedin.com" className="hover:underline">LinkedIn</a></p>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li><Link href="/mentions-legales" className="hover:underline">Mentions légales</Link></li>
              <li><Link href="/politique-de-confidentialite" className="hover:underline">Politique de confidentialité</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>©2024 HAIM. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 