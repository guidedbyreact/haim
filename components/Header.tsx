"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Our Services', href: '/our-services' },
    { label: 'Missions', href: '/missions' },
    { label: 'CSR', href: '/csr' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.jpg"
                alt="HAIM Logo"
                width={800}
                height={160}
                className="h-20 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-[#4ae7ff] px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/employee-portal"
              className="bg-[#4ae7ff] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#3bc5db] transition-colors"
            >
              Employee Portal
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#4ae7ff]"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-[#4ae7ff] block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/employee-portal"
                className="bg-[#4ae7ff] text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-[#3bc5db] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Employee Portal
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 