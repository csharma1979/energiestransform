'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Header.scss';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);



  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          <Image
            src="/energy-transform-logo.webp"
            alt="Energies Transform"
            width={220}
            height={60}
            quality={95}
            className="logo-image"
            style={{ objectFit: 'contain' }}
          />
        </Link>

        <div className="mobile-trigger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <Link href="/" className="nav-link">
            <span className="nav-text">Home</span>
          </Link>
          
          <Link href="/services" className="nav-link">
            <span className="nav-text">Services</span>
          </Link>
          
          <Link href="/blog" className="nav-link">
            <span className="nav-text">Blog</span>
          </Link>
          
          <Link href="/contact" className="nav-link contact-link">
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;