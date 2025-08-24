'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import './Home.scss';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  // Banner data with updated content
  const banners = [
    {
      image: '/assets/Home/banner1.webp',
      title: 'Horizontal Well Geosteering',
      subtitle: 'Precision Well Placement & Real-Time Geological Analysis',
      description: 'Expert guidance for optimal wellbore placement using advanced geosteering technology and real-time geological interpretation.',
      ctaText: 'Explore Geosteering',
      ctaLink: '/geosteering-services'
    },
    {
      image: '/assets/Home/banner2.webp',
      title: 'Pore Pressure Prediction',
      subtitle: 'Advanced Pressure Analysis & Forecasting',
      description: 'Accurate prediction of formation pressures for safer drilling operations and optimal well design.',
      ctaText: 'Learn More',
      ctaLink: '/engineering-services'
    },
    {
      image: '/assets/Home/banner3.webp',
      title: 'Subsurface Operations',
      subtitle: 'Comprehensive Subsurface Management',
      description: 'Integrated solutions for subsurface operations optimization and reservoir performance enhancement.',
      ctaText: 'Discover More',
      ctaLink: '/oilfield-optimization'
    },
    {
      image: '/assets/Home/banner4.webp',
      title: 'Reservoir Characterization & Mapping',
      subtitle: 'Detailed Reservoir Analysis & Visualization',
      description: 'Advanced techniques for understanding reservoir properties and creating detailed geological maps.',
      ctaText: 'View Services',
      ctaLink: '/engineering-services'
    },
    {
      image: '/assets/Home/banner5.webp',
      title: 'Workflow Consultation',
      subtitle: 'Optimized Process Solutions',
      description: 'Expert consultation for streamlining operations and implementing efficient workflows in energy projects.',
      ctaText: 'Get Started',
      ctaLink: '/services'
    }
  ];

  const services = [
    {
      image: '/assets/Services/geosteeringoverview.webp',
      title: 'Geosteering Services',
      description: 'Precision Wellbore Navigation for Maximum Reservoir Performance',
      link: '/geosteering-services',
      features: ['Real-time Analysis', 'Expert Navigation', 'Optimized Drilling']
    },
    {
      image: '/assets/Services/engineering-overview.webp',
      title: 'Engineering Solutions',
      description: 'Delivering Excellence in Petroleum Engineering Solutions',
      link: '/engineering-services',
      features: ['Reservoir Analysis', 'Regulatory Compliance', 'Technical Studies']
    },
    {
      image: '/assets/Services/oilfieldoverview.webp',
      title: 'Oilfield Optimization',
      description: 'Advanced Analytics & AI-Driven Solutions for Maximum Field Profitability',
      link: '/oilfield-optimization',
      features: ['AI Analytics', 'Performance Metrics', 'Cost Optimization']
    }
  ];

  const experts = [
    {
      image: '/assets/sandeep.webp',
      name: 'Sandeep Singhal',
      specialty: 'M&A Specialist',
      
    },
    {
      image: '/assets/roger.webp',
      name: 'Roger Patry',
      specialty: 'Enterprise Solutions',
     
    },
    
    {
      image: '/assets/scott.webp',
      name: 'Scott Wilkins',
      specialty: 'Turnaround Expert',
      
    },
    {
      image: '/assets/jay.webp',
      name: 'Jay Sanghvi',
      specialty: 'Growth Strategist',
     
    }
  ];

  const faqs = [
    {
      question: "What industries do you specialize in?",
      answer: "Our expertise spans multiple sectors including oil & gas, energy technology, petroleum engineering, and oilfield services. Our specialized teams bring deep industry knowledge and insights to address sector-specific challenges in upstream, midstream, and downstream operations."
    },
    {
      question: "How do you ensure project success?",
      answer: "We define success by tangible business outcomes including increased production efficiency, cost optimization, regulatory compliance, and sustainable operational improvements. Our proven methodologies combine technical excellence with practical implementation."
    },
    {
      question: "What is your geographic coverage?",
      answer: "We provide services across major oil and gas regions including North America, with particular expertise in Canadian and US markets. Our team delivers consistent, high-quality service tailored to regional regulatory requirements and geological conditions."
    },
    {
      question: "What is your approach to client projects?",
      answer: "We begin with comprehensive technical assessment, develop customized engineering solutions aligned with your operational objectives, implement with minimal disruption to ongoing operations, and provide ongoing support with performance monitoring and optimization."
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [banners.length]);

  // Service carousel auto-scroll
  useEffect(() => {
    const serviceInterval = setInterval(() => {
      setCurrentServiceIndex(prevIndex => 
        prevIndex >= services.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    
    return () => clearInterval(serviceInterval);
  }, [services.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + banners.length) % banners.length);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const scrollServices = (direction) => {
    if (direction === 'next') {
      setCurrentServiceIndex(prevIndex => 
        prevIndex >= services.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setCurrentServiceIndex(prevIndex => 
        prevIndex <= 0 ? services.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div className="home-container">
      <Header />
      
      {/* Banner Section */}
      <div className="banner-section">
        <div className="slider-container">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            >
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                priority={index === 0}
                quality={100}
                style={{ objectFit: 'cover' }}
              />
              <div className="banner-content">
                <h1>{banner.title}</h1>
                <h5>{banner.subtitle}</h5>
                <p className="banner-description">{banner.description}</p>
                <Link href={banner.ctaLink} className="cta-button">{banner.ctaText}</Link>
              </div>
            </div>
          ))}

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="slider-arrow slider-arrow-left"
            aria-label="Previous slide"
          >
            &#10094;
          </button>
          
          <button
            onClick={nextSlide}
            className="slider-arrow slider-arrow-right"
            aria-label="Next slide"
          >
            &#10095;
          </button>

          {/* Indicator dots */}
          <div className="slider-dots">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive solutions to optimize your oil & gas operations and maximize asset value
            </p>
          </div>
          
          <div className="services-showcase">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`service-showcase-card ${index === currentServiceIndex ? 'active' : ''}`}
              >
                <Link href={service.link}>
                  <div className="service-image-container">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      quality={90}
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="service-overlay">
                      <div className="service-content">
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                        <div className="service-features">
                          {service.features.map((feature, idx) => (
                            <span key={idx} className="feature-tag">{feature}</span>
                          ))}
                        </div>
                        <div className="service-cta">
                          <span className="cta-text">Learn More</span>
                          <span className="cta-arrow">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            
            {/* Service navigation */}
            <div className="service-navigation">
              <button 
                className="service-nav-btn prev" 
                onClick={() => scrollServices('prev')}
                aria-label="Previous service"
              >
                &#10094;
              </button>
              
              <div className="service-indicators">
                {services.map((_, index) => (
                  <button
                    key={index}
                    className={`service-indicator ${currentServiceIndex === index ? 'active' : ''}`}
                    onClick={() => setCurrentServiceIndex(index)}
                    aria-label={`Go to service ${index + 1}`}
                  ></button>
                ))}
              </div>
              
              <button 
                className="service-nav-btn next" 
                onClick={() => scrollServices('next')}
                aria-label="Next service"
              >
                &#10095;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section className="experts-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Expert Team</h2>
            <p className="section-subtitle">
              Industry leaders with decades of combined experience in oil & gas operations
            </p>
          </div>
          
          <div className="experts-grid">
            {experts.map((expert, index) => (
              <div className="expert-card" key={index}>
                <div className="expert-image">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    width={200}
                    height={200}
                    quality={90}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="expert-info">
                  <h3 className="expert-name">{expert.name}</h3>
                  <p className="expert-specialty">{expert.specialty}</p>
                  <span className="expert-experience">{expert.experience}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Get answers to common questions about our services and approach
            </p>
          </div>
          
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <div className="faq-toggle">
                    <span className="plus">+</span>
                    <span className="minus">−</span>
                  </div>
                </div>
                <div className="faq-answer" style={{ maxHeight: activeFaq === index ? '500px' : '0' }}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Optimize Your Operations?</h2>
            <p className="cta-description">
              Let's collaborate to enhance your oil & gas operations with our proven expertise and innovative solutions.
            </p>
            <div className="cta-buttons">
              <Link href="/contact" className="primary-button">Contact Us</Link>
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;