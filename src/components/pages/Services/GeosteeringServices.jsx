import React from 'react';
import './GeosteeringServices.scss';

export default function GeosteeringServices() {
  const serviceCategories = [
    {
      title: "Real-Time Geosteering Operations",
      icon: "🎯",
      color: "blue",
      services: [
        {
          name: "Remote Geosteering Worldwide",
          description: "Expert remote geosteering services across global operations including Canada, USA, Saudi Arabia, Abu Dhabi, Kuwait, and Indonesia with over 7,500 wells successfully geosteered."
        },
        {
          name: "Active Well Trajectory Management",
          description: "Real-time adjustment of wellbore placement to maintain optimal positioning within reservoir boundaries, maximizing drilling efficiency and production potential."
        },
        {
          name: "Complex Geological Structure Navigation",
          description: "Specialized expertise in navigating challenging geological formations to ensure successful wellbore placement in heterogeneous reservoir environments."
        }
      ]
    },
    {
      title: "Advanced Geosteering Tools & Technology",
      icon: "⚙️",
      color: "green",
      services: [
        {
          name: "Gamma Ray Steering",
          description: "Precision gamma ray interpretation for accurate formation identification and optimal wellbore positioning within target zones."
        },
        {
          name: "Periscope Technology",
          description: "Advanced resistivity imaging tools providing detailed formation visualization for enhanced steering decisions and reservoir boundary delineation."
        },
        {
          name: "Geosphere Integration",
          description: "Comprehensive geosphere tool utilization for deep formation evaluation and superior reservoir characterization during drilling operations."
        }
      ]
    },
    {
      title: "Geosteering Software Expertise",
      icon: "💻",
      color: "orange",
      services: [
        {
          name: "Multi-Platform Software Proficiency",
          description: "Expert utilization of industry-leading geosteering software including SES, Go24, Starsteer, Petrel, DSG, and Geolog on both PC and OpenWorks platforms."
        },
        {
          name: "Real-Time Data Integration",
          description: "Seamless integration of multiple data streams for comprehensive real-time formation evaluation and steering decision optimization."
        }
      ]
    },
    {
      title: "Seismic-LWD Correlation & Analysis",
      icon: "📊",
      color: "purple",
      services: [
        {
          name: "Real-Time LWD Data Correlation",
          description: "Expert correlation of real-time Logging While Drilling (LWD) data curves with seismic interpretations for enhanced structural understanding and steering accuracy."
        },
        {
          name: "Seismic-Guided Drilling Optimization",
          description: "Integration of seismic data with real-time drilling parameters to optimize wellbore trajectory and improve reservoir contact efficiency."
        },
        {
          name: "Formation Evaluation & Mapping",
          description: "Comprehensive formation evaluation combining LWD data with seismic interpretation to create accurate subsurface models for steering decisions."
        }
      ]
    },
    {
      title: "Drilling Efficiency & Optimization",
      icon: "⚡",
      color: "red",
      services: [
        {
          name: "Reservoir Boundary Management",
          description: "Precise wellbore positioning to maintain optimal reservoir contact while avoiding geological hazards and ensuring maximum productive interval exposure."
        },
        {
          name: "Production Optimization Strategies",
          description: "Strategic wellbore placement to maximize hydrocarbon recovery through optimized reservoir contact and enhanced drainage patterns."
        }
      ]
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Pre-Drill Planning",
      description: "Comprehensive geological and seismic data review to establish optimal drilling strategy and contingency plans"
    },
    {
      number: "2",
      title: "Real-Time Monitoring",
      description: "Continuous monitoring of LWD data and formation parameters with immediate correlation to seismic interpretations"
    },
    {
      number: "3",
      title: "Active Steering Decisions",
      description: "Real-time wellbore trajectory adjustments based on formation evaluation and reservoir optimization requirements"
    },
    {
      number: "4",
      title: "Post-Drill Analysis",
      description: "Comprehensive evaluation of steering performance and lessons learned for future optimization"
    }
  ];

  const benefits = [
    {
      icon: "🌍",
      title: "Global Experience",
      description: "Over 7,500 wells successfully geosteered across multiple continents with diverse geological challenges"
    },
    {
      icon: "🔧",
      title: "Multi-Tool Expertise",
      description: "Proficient in all major geosteering tools including Gamma, Periscope, Geosphere, and advanced LWD technologies"
    },
    {
      icon: "📈",
      title: "Proven Results",
      description: "Consistent delivery of improved drilling efficiency, reduced drilling time, and enhanced production outcomes"
    }
  ];

  return (
    <div className="geosteering-services">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Geosteering Services</h1>
            <p className="hero-tagline">
              Precision Wellbore Navigation for Maximum Reservoir Performance
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
                Expert Geosteering for Complex Geological Structures
              </h2>
              <p className="overview-text">
                As wells are drilled through complex geological formations, precise wellbore 
                placement becomes critical for successful reservoir development. Our geosteering 
                specialists actively adjust drilling trajectories in real-time to maintain optimal 
                positioning within reservoir boundaries and maximize production potential.
              </p>
              <p className="overview-text">
                With over 7,500 wells successfully geosteered across global operations in Canada, 
                USA, Saudi Arabia, Abu Dhabi, Kuwait, and Indonesia, our team delivers unparalleled 
                expertise in navigating challenging subsurface environments while optimizing drilling 
                efficiency and well productivity.
              </p>
            </div>
            <div className="overview-image">
              <img 
                src="/assets/Services/geosteeringoverview.webp" 
                alt="Geosteering specialist monitoring real-time drilling data"
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
            <h2 className="section-title">Our Geosteering Capabilities</h2>
            <p className="section-subtitle">
              Comprehensive real-time wellbore navigation services utilizing advanced tools, 
              software platforms, and seismic correlation expertise
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
            <h2 className="section-title">Our Geosteering Process</h2>
            <p className="section-subtitle">
              From pre-drill planning to post-drill analysis, our systematic approach ensures optimal wellbore placement
            </p>
          </div>
          
          <div className="process-grid">
            <div className="process-image">
              <img 
                src="/assets/Services/realtimedrilling.webp" 
                alt="Geosteering process workflow and real-time data analysis"
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

      {/* Benefits Section */}
      <section className="benefits-section light-golden">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Our Geosteering Services</h2>
          </div>
          
          <div className="benefits-grid">
            <div className="benefits-content">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <div className="benefit-icon">
                    <span className="icon">{benefit.icon}</span>
                  </div>
                  <div className="benefit-content">
                    <h4 className="benefit-title">{benefit.title}</h4>
                    <p className="benefit-description">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="benefits-image">
              <img 
                src="/assets/Services/workflow.webp" 
                alt="Advanced geosteering technology and global expertise"
                className="rounded-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Optimize Your Drilling Operations?</h2>
            <p className="cta-description">
              Contact our geosteering specialists to discuss your specific drilling challenges and 
              discover how our expertise can improve wellbore placement and maximize reservoir performance.
            </p>
            <button className="cta-button">Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
}