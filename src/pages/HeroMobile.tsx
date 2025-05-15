import React, { useEffect } from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroMobile = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="mobile-hero-container">
    

      <div className="profile-card">
        <div className="profile-image-container">
          <img src="/api/placeholder/150/150" alt="Profile" className="profile-image" />
        </div>
        
        <div className="profile-info">
          <h2 className="profile-name">Victor Maina</h2>
          <p className="profile-title">Web Developer</p>
          
          <div className="social-links">
            <a href="#" className="social-icon">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon">
              <FaGithub />
            </a>
            <a href="#" className="social-icon">
              <FaLinkedin />
            </a>
          </div>
        </div>
        
        <div className="profile-stats">
          <div className="stat-box">
            <span className="stat-number">7</span>
            <span className="stat-label">Years of work</span>
          </div>
          
          <div className="stat-box">
            <span className="stat-number">+124</span>
            <span className="stat-label">Completed projects</span>
          </div>
          
          <div className="stat-box">
            <span className="stat-number">96</span>
            <span className="stat-label">Satisfied customers</span>
          </div>
        </div>
        
        <button className="download-cv-button">
          <span>Download CV</span>
          <MdDownload className="download-icon" />
        </button>
        
        <div className="profile-tabs">
          <button className="tab-button active">Projects</button>
          <button className="tab-button">Skills</button>
        </div>
      </div>
    </div>
  );
};

export default HeroMobile;