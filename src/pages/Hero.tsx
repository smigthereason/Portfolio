import { useEffect } from "react";
import { FaRegCopyright } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Me from "../assets/09.jpeg";
import Me2 from "../assets/06.jpg";
import { Link } from "react-router-dom";

import "../styles/Hero.css";
// Make sure HeroMobile.css doesn't override your styles
// import "../styles/HeroMobile.css"; // Comment this out if it's causing conflicts

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* Desktop Version */}
      <div className="desktop-hero-container">
        <div className="hero-container" data-aos="zoom-out">
          <div className="left-section">
            <img src={Me2} alt="Victor Maina" />
          </div>
          <div className="right-section-hero">
            {/* Add video background here if needed */}
            <video autoPlay loop muted playsInline className="background-video">
              <source src="/path-to-your-video.mp4" type="video/mp4" />
            </video>
            <div className="content-section">
              <div className="vertical-links">
                <Link to="/home" data-aos="fade-up" data-aos-delay="100">
                  Home
                </Link>
                <Link to="/about" data-aos="fade-up" data-aos-delay="200">
                  About
                </Link>
                <Link to="/portfolio" data-aos="fade-up" data-aos-delay="300">
                  Portfolio
                </Link>
                <Link to="/contact" data-aos="fade-up" data-aos-delay="400">
                  Contact
                </Link>
              </div>

              <div
                className="other-content"
                data-aos="fade-in"
                data-aos-delay="500"
              >
                <p>P.O.Box 25773-00100 NBI,GPO</p>
                <p>
                  <a href="mailto:victor.dmaina@gmail.com">
                    victor.dmaina@gmail.com
                  </a>
                </p>
                <div className="aligned-phones">
                  <p>+254 707 098 723</p>
                  <p>+254 704 542 321</p>
                </div>
              </div>
            </div>
            <div className="tag-1">
              <h2>
                Victor Maina <FaRegCopyright /> 2024
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version - Image above content, only video background */}
      <div className="mobile-hero-container">
        {/* Video background for mobile */}
        <video autoPlay loop muted playsInline className="background-video">
          <source src="/path-to-your-video.mp4" type="video/mp4" />
        </video>

        <div className="mobile-flow-wrapper" data-aos="fade-up">
          {/* Image at the top */}
          <div className="mobile-image-box">
            <img src={Me} alt="Victor Maina" />
          </div>

          {/* Content below image */}
          <div className="mobile-content-box">
            <div className="vertical-links">
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div className="other-content">
              <p>P.O.Box 25773-00100 NBI,GPO</p>
              <a href="mailto:victor.dmaina@gmail.com">
                victor.dmaina@gmail.com
              </a>
              <div className="aligned-phones">
                <p>+254 707 098 723</p>
                <p>+254 704 542 321</p>
              </div>
            </div>

            <div className="tag-1">
              <h2>
                Victor Maina <FaRegCopyright /> 2024
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
