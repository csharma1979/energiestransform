import React from 'react';
import './AboutUs.scss';

export default function AboutUs() {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">About Us</h1>
            <p className="hero-tagline">
              Building Excellence in Oil & Gas Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="coming-soon-section">
        <div className="container">
          <div className="coming-soon-content">
            <div className="coming-soon-icon">
              <span className="icon">🚀</span>
            </div>
            <h2 className="section-title">Coming Soon</h2>
            <p className="coming-soon-description">
              We're crafting an exceptional story about our journey, values, and commitment 
              to excellence in the oil and gas industry. Our comprehensive about section 
              will showcase our team's expertise, company history, and vision for the future.
            </p>
            <div className="features-preview">
              <div className="feature-item">
                <div className="feature-icon">
                  <span className="icon">🏢</span>
                </div>
                <h4>Company History</h4>
                <p>Learn about our journey and milestones</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <span className="icon">👥</span>
                </div>
                <h4>Our Team</h4>
                <p>Meet the experts behind our success</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <span className="icon">🎯</span>
                </div>
                <h4>Mission & Vision</h4>
                <p>Discover our goals and aspirations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Work With Industry Leaders?</h2>
            <p className="cta-description">
              While we prepare our complete story, we're ready to discuss your oil and gas 
              projects today. Contact us to learn how our expertise can drive your success.
            </p>
            <button className="cta-button">Contact Us </button>
          </div>
        </div>
      </section>
    </div>
  );
}