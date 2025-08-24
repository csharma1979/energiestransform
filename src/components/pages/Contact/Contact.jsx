'use client';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.scss';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const address = "7106 Marble Springs Dr, Katy, TX 77494";

  const handleDirectionsClick = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
    window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required').min(10, 'Message must be at least 10 characters')
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        toast.success('Message sent successfully!');
        formik.resetForm();
      } catch (error) {
        toast.error('Failed to send message. Please try again.');
      }
      setIsSubmitting(false);
    }
  });

  return (
    <>
      <Header />
      <div className="contact-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-overlay"></div>
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Contact Us</h1>
              <p className="hero-tagline">
                Connect with Our Oil & Gas Experts
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="contact-info-section">
          <div className="container">
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">
              Ready to discuss your oil and gas projects? Our experienced team is here to provide expert guidance and innovative solutions tailored to your operational needs.
            </p>
            
            <div className="contact-grid">
              <div className="contact-card">
                <div className="contact-icon">
                  <FiPhone />
                </div>
                <h3>Call 24/7</h3>
                <p>Speak directly with our petroleum engineering experts</p>
                <a href="tel:+18323125501">+1-832-312-5501</a>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <FiMail />
                </div>
                <h3>Email Support</h3>
                <p>Send us your project details for a comprehensive consultation</p>
                <a href="mailto:support@tapglobal.us">support@tapglobal.us</a>
              </div>

              <div className="contact-card clickable" onClick={handleDirectionsClick}>
                <div className="contact-icon">
                  <FiMapPin />
                </div>
                <h3>Visit Our Office</h3>
                <p>Located in the heart of Texas energy corridor</p>
                <address>7106 Marble Springs Dr<br />Katy, TX 77494</address>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="contact-form-section light-golden">
          <div className="container">
            <div className="form-container">
              <div className="form-header">
                <h2 className="section-title">Send Us a Message</h2>
                <p className="form-subtitle">
                  Share your project requirements and let our engineering team provide you with expert solutions
                </p>
              </div>
              
              <form className="contact-form" onSubmit={formik.handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Your Name" 
                      className={formik.touched.name && formik.errors.name ? 'error' : ''}
                      {...formik.getFieldProps('name')} 
                    />
                    {formik.touched.name && formik.errors.name && 
                      <div className="error-message">{formik.errors.name}</div>
                    }
                  </div>

                  <div className="form-group">
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Your Email" 
                      className={formik.touched.email && formik.errors.email ? 'error' : ''}
                      {...formik.getFieldProps('email')} 
                    />
                    {formik.touched.email && formik.errors.email && 
                      <div className="error-message">{formik.errors.email}</div>
                    }
                  </div>
                </div>

                <div className="form-group">
                  <input 
                    type="text" 
                    name="subject" 
                    placeholder="Project Subject (e.g., Reservoir Engineering, Regulatory Compliance)" 
                    className={formik.touched.subject && formik.errors.subject ? 'error' : ''}
                    {...formik.getFieldProps('subject')} 
                  />
                  {formik.touched.subject && formik.errors.subject && 
                    <div className="error-message">{formik.errors.subject}</div>
                  }
                </div>

                <div className="form-group">
                  <textarea 
                    name="message" 
                    placeholder="Tell us about your project requirements, timeline, and specific challenges you're facing..." 
                    rows="6" 
                    className={formik.touched.message && formik.errors.message ? 'error' : ''}
                    {...formik.getFieldProps('message')} 
                  />
                  {formik.touched.message && formik.errors.message && 
                    <div className="error-message">{formik.errors.message}</div>
                  }
                </div>

                <button type="submit" className="submit-button" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="location-section">
          <div className="container">
            <h2 className="section-title">Our Location</h2>
            <p className="section-subtitle">
              Strategically located in Katy, Texas, we serve clients across the Gulf Coast region and beyond
            </p>
            
            <div className="location-grid">
              <div className="location-info">
                <div className="info-item">
                  <div className="info-icon">
                    <span className="icon">🏢</span>
                  </div>
                  <div className="info-content">
                    <h4>Business Hours</h4>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM<br />
                    Sunday: Emergency calls only</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <span className="icon">🌎</span>
                  </div>
                  <div className="info-content">
                    <h4>Service Area</h4>
                    <p>Texas Gulf Coast, Louisiana, Oklahoma, and surrounding regions with expertise in onshore and offshore operations</p>
                  </div>
                </div>
              </div>
              
              <div className="map-container" onClick={handleDirectionsClick}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.7918!2d-95.8247!3d29.7589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQ1JzMyLjAiTiA5NcKwNDknMjkuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                  className="google-map"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TAP Global Office Location"
                ></iframe>
                <div className="map-overlay">
                  <button className="directions-button">Get Directions</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default Contact;