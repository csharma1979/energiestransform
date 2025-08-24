'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Experts.scss';

const Experts = () => {
  const experts = [
    {
      name: "SANDEEP SINGHAL",
      designation: "TAP Global CEO",
      description: "Execution & Financial Results Driven | SPAC & M&A Strategist | Industrial Sector Veteran",
      image: "/assets/sandeep.webp",
      linkedin: "https://www.linkedin.com/in/sandeep-singhal123/"
    },
    {
      name: "Scott Wilkins",
      designation: "Global CEO",
      description: "Execution & Financial Results Driven | SPAC & M&A Strategist | Industrial Sector Veteran",
      image: "/assets/scott.webp",
      linkedin: "https://www.linkedin.com/in/scott-wilkins-3b420162/"
    },
    {
      name: "Roger Patry",
      designation: "Global CEO",
      description: "Execution & Financial Results Driven | SPAC & M&A Strategist | Industrial Sector Veteran",
      image: "/assets/roger.webp",
      linkedin: "https://www.linkedin.com/in/roger-patry-3b202661/"
    },
    {
      name: "Pankaj Gupta",
      designation: "CTO",
      description: "Technology Leadership & Innovation",
      image: "/assets/pankaj.webp",
      linkedin: "https://www.linkedin.com/in/pankajgupta73/"
    },
    {
      name: "Jay Sanghvi",
      designation: "Strategic Planning Lead",
      description: "Six Sigma Black Belt | Strategic Planner | Supply Chain Expert",
      image: "/assets/jay.webp",
      linkedin: "https://www.linkedin.com/in/jay-sanghvi-816b35/"
    }
  ];

  return (
    <section className="experts">
      <div className="container">
        <div className="experts-header">
          <h2>Leadership Team</h2>
          <p>Driving Innovation and Excellence</p>
        </div>
        <div className="experts-grid">
          {experts.map((expert, index) => (
            <div className="expert-card" key={index}>
              <div className="expert-image">
                <Image
                  src={expert.image}
                  alt={expert.name}
                  width={300}
                  height={300}
                  quality={90}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="expert-info">
                <h3>{expert.name}</h3>
                <h4>{expert.designation}</h4>
                <p>{expert.description}</p>
                <Link 
                  href={expert.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experts;