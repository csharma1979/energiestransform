import React from "react";
import "./EngineeringServices.scss";

export default function EngineeringServices() {
  const serviceCategories = [
    {
      title: "Geological Mapping & Analysis",
      icon: "📍",
      color: "green",
      services: [
        {
          name: "Reservoir Characterization Studies",
          description:
            "Comprehensive analysis of reservoir properties to determine flow patterns, capacity, and production potential using advanced simulation techniques.",
        },
        {
          name: "Well Log Correlation",
          description:
            "Expert correlation of geophysical well logs across multiple wells to establish structural and stratigraphic frameworks and improve reservoir understanding.",
        },
        {
          name: "Subsurface Structural Maps",
          description:
            "Creation of detailed subsurface maps using advanced software to visualize structural geology and identify potential drilling locations.",
        },
        {
          name: "Isochore and Isopach Mapping",
          description:
            "Development of accurate thickness maps to visualize reservoir geometry and identify sweet spots for optimal well placement.",
        },
      ],
    },
  ];

  return (
    <div className="engineering-services">
      {/* Services Section */}
      <section className="services-section light-golden">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Service Approaches</h2>
            <p className="section-subtitle">
              Comprehensive solutions spanning reservoir engineering, geological
              analysis, regulatory compliance, and economic evaluation
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
                      <p className="service-description">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
