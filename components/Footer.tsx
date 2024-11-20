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
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/our-services" className="hover:underline">Our Services</Link></li>
              <li><Link href="/missions" className="hover:underline">Missions</Link></li>
              <li><Link href="/csr" className="hover:underline">CSR</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact & Social</h3>
            <p>+971 55 300 4675</p>
            <p><a href="https://www.linkedin.com" className="hover:underline">LinkedIn</a></p>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/legal-notice" className="hover:underline">Legal Notice</Link></li>
              <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>©2024 HAIM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 