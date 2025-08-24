import React from 'react';
import './OilfieldOptimization.scss';

export default function OilfieldOptimization() {
  const serviceCategories = [
    {
      title: "Advanced Geostatistics & Analytics",
      icon: "📊",
      color: "blue",
      services: [
        {
          name: "Reservoir Zone Identification",
          description: "Advanced geostatistical analysis to identify the most productive reservoir zones within formations, maximizing field profitability through precise zone targeting."
        },
        {
          name: "Regression Analysis Modeling",
          description: "Sophisticated regression analysis techniques to establish correlations between geological parameters and production performance for optimal field development."
        },
        {
          name: "Kriging Interpolation Methods",
          description: "State-of-the-art kriging techniques for spatial interpolation of reservoir properties, providing accurate subsurface property distribution maps."
        }
      ]
    },
    {
      title: "Artificial Intelligence Solutions",
      icon: "🤖",
      color: "green",
      services: [
        {
          name: "AI-Driven Field Optimization",
          description: "Machine learning algorithms and artificial intelligence solutions for automated field optimization, reducing operational costs while maximizing hydrocarbon recovery."
        },
        {
          name: "Predictive Analytics",
          description: "Advanced AI models for production forecasting and reservoir behavior prediction, enabling proactive field management strategies."
        },
        {
          name: "Pattern Recognition Systems",
          description: "Intelligent pattern recognition to identify optimal drilling locations and completion strategies based on historical data and geological patterns."
        }
      ]
    },
    {
      title: "Specialized Mapping & Visualization",
      icon: "🗺️",
      color: "orange",
      services: [
        {
          name: "Gas Productivity Mapping",
          description: "Comprehensive gas productivity maps for the Duvernay East Basin and other formations, highlighting sweet spots and optimal development areas."
        },
        {
          name: "Production Uncertainty Analysis",
          description: "Detailed uncertainty mapping to quantify production risks and provide confidence intervals for field development planning and investment decisions."
        },
        {
          name: "Transmissivity & Conductivity Mapping",
          description: "Precise transmissivity and vertical conductivity maps to understand fluid flow characteristics and optimize completion strategies."
        }
      ]
    },
    {
      title: "Multidisciplinary Expertise",
      icon: "⚗️",
      color: "purple",
      services: [
        {
          name: "Integrated Geological Analysis",
          description: "Comprehensive geology and petrography expertise combined with geophysical analysis for complete subsurface characterization and optimization."
        },
        {
          name: "Reservoir & Production Engineering",
          description: "Advanced reservoir and production engineering solutions integrated with geological understanding for optimal field development strategies."
        },
        {
          name: "Flow Model Simulation",
          description: "Sophisticated flow model simulation coupled with innovative solutions to predict reservoir performance and optimize production scenarios."
        }
      ]
    },
    {
      title: "Economic Optimization Solutions",
      icon: "💰",
      color: "red",
      services: [
        {
          name: "Profitability Maximization",
          description: "Strategic optimization approaches designed to maximize oil and gas field profitability through data-driven decision making and advanced analytics."
        },
        {
          name: "Cost Efficiency Analysis",
          description: "Comprehensive cost-benefit analysis using advanced modeling techniques to identify the most cost-effective development and production strategies."
        }
      ]
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Data Integration & Analysis",
      description: "Comprehensive collection and analysis of geological, geophysical, and production data using advanced geostatistical methods"
    },
    {
      number: "2",
      title: "AI Model Development",
      description: "Implementation of artificial intelligence and machine learning algorithms for pattern recognition and predictive modeling"
    },
    {
      number: "3",
      title: "Optimization & Mapping",
      description: "Creation of detailed productivity, uncertainty, and conductivity maps using kriging and advanced interpolation techniques"
    },
    {
      number: "4",
      title: "Strategic Implementation",
      description: "Development of actionable field optimization strategies with continuous monitoring and refinement protocols"
    }
  ];

  const benefits = [
    {
      icon: "🎯",
      title: "High Accuracy Solutions",
      description: "Advanced geostatistics and AI-driven analysis providing precise reservoir characterization and optimization strategies"
    },
    {
      icon: "⚡",
      title: "Innovative Technology",
      description: "Cutting-edge artificial intelligence, regression analysis, and kriging methods for superior field optimization results"
    },
    {
      icon: "💡",
      title: "Cost Efficiency",
      description: "Proven track record of delivering cost-efficient solutions that maximize profitability while minimizing operational expenses"
    }
  ];

  return (
    <div className="engineering-services">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Oil Field Optimization</h1>
            <p className="hero-tagline">
              Advanced Analytics & AI-Driven Solutions for Maximum Field Profitability
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-content">
              <h2 className="section-title">
                Maximizing Oil & Gas Field Profitability Through Advanced Technology
              </h2>
              <p className="overview-text">
                Our oil field optimization service is designed to maximize the profitability of oil and gas 
                fields by identifying the most productive reservoir zones within formations using cutting-edge 
                advanced geostatistics, regression analysis, artificial intelligence, and kriging methodologies.
              </p>
              <p className="overview-text">
                We offer extensive experience across multiple disciplines including geostatistics, artificial 
                intelligence, geology, petrography, geophysics, reservoir and production engineering, mining, 
                and flow model simulation, all coupled with innovative solutions that deliver high accuracy 
                and exceptional cost efficiencies for our clients.
              </p>
            </div>
            <div className="overview-image">
              <img 
                src="/assets/Services/oilfieldoverview.webp" 
                alt="Advanced oil field optimization using AI and geostatistics"
                className="rounded-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section light-golden">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Optimization Capabilities</h2>
            <p className="section-subtitle">
              Comprehensive field optimization services utilizing advanced geostatistics, 
              artificial intelligence, and multidisciplinary expertise
            </p>
          </div>

          <div className="service-categories">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="service-category">
                <div className="category-header">
                  <div className={`category-icon ${category.color}`}>
                    <span className="icon">{category.icon}</span>
                  </div>
                  <h3 className="category-title">{category.title}</h3>
                </div>
                
                <div className="services-grid">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="service-card">
                      <h4 className="service-title">{service.name}</h4>
                      <p className="service-description">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Optimization Process</h2>
            <p className="section-subtitle">
              From data integration to strategic implementation, our systematic approach ensures maximum field profitability
            </p>
          </div>
          
          <div className="process-grid">
            <div className="process-image">
              <img 
                src="/assets/Services/basin.webp" 
                alt="Duvernay East Basin productivity and uncertainty mapping visualization"
                className="rounded-image"
              />
            </div>
            <div className="process-steps">
              {processSteps.map((step, index) => (
                <div key={index} className="process-step">
                  <div className="step-number">{step.number}</div>
                  <div className="step-content">
                    <h4 className="step-title">{step.title}</h4>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Maps Section */}
      <section className="benefits-section light-golden">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Specialized Mapping Products</h2>
            <p className="section-subtitle">
              Advanced mapping solutions for comprehensive field analysis and optimization
            </p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefits-content">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <span className="icon">🗺️</span>
                </div>
                <div className="benefit-content">
                  <h4 className="benefit-title">Duvernay East Basin Gas Productivity Map</h4>
                  <p className="benefit-description">Comprehensive productivity mapping for the Duvernay East Basin, identifying optimal drilling locations and sweet spots for maximum gas recovery.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <span className="icon">📈</span>
                </div>
                <div className="benefit-content">
                  <h4 className="benefit-title">Production Uncertainty Map</h4>
                  <p className="benefit-description">Detailed uncertainty analysis providing confidence intervals and risk assessment for production forecasting and investment decision support.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <span className="icon">🌊</span>
                </div>
                <div className="benefit-content">
                  <h4 className="benefit-title">Transmissivity & Vertical Conductivity Maps</h4>
                  <p className="benefit-description">Advanced flow characterization maps showing transmissivity and vertical conductivity distributions for optimal completion design.</p>
                </div>
              </div>
            </div>
            <div className="benefits-image">
              <img 
                src="/assets/Services/map.webp" 
                alt="Multiple geological and productivity maps showing transmissivity and conductivity analysis"
                className="rounded-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="overview-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Our Optimization Services</h2>
          </div>
          
          <div className="overview-grid">
            <div className="overview-content">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item" style={{display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '2rem'}}>
                  <div className="benefit-icon" style={{width: '60px', height: '60px', borderRadius: '12px', background: '#5D4A3B', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem', flexShrink: 0}}>
                    <span className="icon">{benefit.icon}</span>
                  </div>
                  <div className="benefit-content">
                    <h4 className="benefit-title" style={{fontSize: '1.25rem', fontWeight: 600, color: '#231F20', marginBottom: '0.5rem'}}>{benefit.title}</h4>
                    <p className="benefit-description" style={{color: '#54584A', margin: 0}}>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Optimize Your Field Performance?</h2>
            <p className="cta-description">
              Contact our optimization specialists to discover how advanced geostatistics, artificial intelligence, 
              and innovative mapping solutions can maximize your oil and gas field profitability while reducing operational costs.
            </p>
            <button className="cta-button">Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
}