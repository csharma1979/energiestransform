"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "../../layout/Header/Header";

import EngineeringServices from "../Services/EngineeringServices";
import "./Services.scss";

const Services = () => {
  const services = [
    {
      title: "Horizontal Well Geosteering",
      description:
        "Expert real-time geosteering services for optimal wellbore placement and maximum reservoir contact using advanced geological interpretation and directional drilling expertise.",
      image: "/assets/services/geosteeringoverview.webp",
      icon: "🎯",
      features: [
        "Real-time Guidance",
        "Geological Modeling",
        "Wellbore Optimization",
      ],
    },
    {
      title: "Pore Pressure Prediction",
      description:
        "Advanced pore pressure analysis and prediction services to optimize drilling parameters and ensure wellbore stability throughout the drilling process.",
      image: "/assets/services/engineering-overview.webp",
      icon: "📊",
      features: ["Pressure Analysis", "Risk Assessment", "Drilling Parameters"],
    },
    {
      title: "Subsurface Operations",
      description:
        "Comprehensive subsurface operation management including reservoir monitoring, production optimization, and field development planning.",
      image: "/assets/services/oilfieldoverview.webp",
      icon: "⚡",
      features: [
        "Reservoir Monitoring",
        "Production Optimization",
        "Field Development",
      ],
    },
    {
      title: "Reservoir Characterization & Mapping",
      description:
        "Detailed reservoir characterization and mapping services using advanced geological and geophysical techniques for better understanding of reservoir properties.",
      image: "/assets/services/engineering-overview.webp",
      icon: "🗺️",
      features: [
        "Geological Analysis",
        "Reservoir Mapping",
        "Property Modeling",
      ],
    },
    {
      title: "Workflow Consultation",
      description:
        "Expert consultation services for optimizing operational workflows, implementing best practices, and improving efficiency across oil and gas operations.",
      image: "/assets/services/oilfieldoverview.webp",
      icon: "📋",
      features: [
        "Process Optimization",
        "Best Practices",
        "Efficiency Improvement",
      ],
    },
  ];

  return (
    <>
      <Header />
      <div className="services-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-overlay"></div>
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Our Services</h1>
              <p className="hero-tagline">
                Comprehensive Oil & Gas Solutions for Operational Excellence
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="services-overview-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">
                Expert Solutions Across the Energy Sector
              </h2>
              <p className="section-subtitle">
                From reservoir engineering to real-time geosteering and
                comprehensive oilfield operations, we deliver specialized
                expertise that drives efficiency, safety, and profitability in
                your projects.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="services-grid-section light-golden">
          <div className="container">
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="card-header">
                    <div className="service-icon">
                      <span className="icon">{service.icon}</span>
                    </div>
                    <div className="card-image">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={400}
                        height={250}
                        quality={90}
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>

                  <div className="card-content">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>

                    <div className="service-features">
                      {service.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="feature-tag">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <EngineeringServices />
        {/* Why Choose Us Section */}
        <section className="why-choose-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Why Choose Our Services</h2>
            </div>

            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <span className="icon">🏆</span>
                </div>
                <div className="benefit-content">
                  <h4>25+ Years Experience</h4>
                  <p>
                    Decades of proven expertise in oil and gas operations across
                    diverse geological formations and operational challenges.
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <span className="icon">⚡</span>
                </div>
                <div className="benefit-content">
                  <h4>Advanced Technology</h4>
                  <p>
                    Cutting-edge software and analytical tools for precise
                    modeling, real-time optimization, and data-driven decision
                    making.
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <span className="icon">📋</span>
                </div>
                <div className="benefit-content">
                  <h4>Regulatory Compliance</h4>
                  <p>
                    100% compliance rate with comprehensive understanding of
                    industry regulations and streamlined application processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Optimize Your Operations?</h2>
              <p className="cta-description">
                Contact our expert team to discuss your specific requirements
                and discover how our comprehensive services can drive
                operational excellence and maximize your asset value.
              </p>
              <Link href="/contact" className="cta-button">
                Get Started Today
              </Link>
            </div>
          </div>
        </section>
      </div>
      
    </>
  );
};

export default Services;
