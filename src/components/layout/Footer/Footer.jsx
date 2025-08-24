'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <Image
                src="/logo2.webp"
                alt="Energies Transform"
                width={200}
                height={200}
                quality={90}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p>Transforming the future of energy through innovation, insight, and engineering precision.</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/geosteering-services">Geosteering Services</Link></li>
              <li><Link href="/engineering-services">Engineering Services</Link></li>
              <li><Link href="/oilfield-optimization">Oilfield Optimization</Link></li>
            
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul className="contact-info">
              <li>Email: support@tapglobal.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Business Avenue<br />New York, NY 10001</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            <span>&copy; {new Date().getFullYear()} Energies Transform. All rights reserved.</span>
            <span className="separator">|</span>
            <span className="tech-partner">Technology Partner - <Link href="https://fritado.com" target="_blank" rel="noopener noreferrer">Fritado AI</Link></span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;