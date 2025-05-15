// import React, { useEffect } from "react";
// import "/src/styles/Hero.css";
// import { FaRegCopyright } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Me from "../assets/06.jpg"

// const Hero: React.FC = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });
//   }, []);

//   return (
//     <div className="hero-container" data-aos="zoom-out">
//       <div className="left-section">
//         <img src={Me} alt="Me" />
//       </div>
//       <div className="right-section-hero">

//         <div className="content-section">
//           <div className="vertical-links">
//             <Link to="/home" data-aos="fade-up" data-aos-delay="100">Home</Link>
//             <Link to="/about" data-aos="fade-up" data-aos-delay="200">About</Link>
//             <Link to="/portfolio" data-aos="fade-up" data-aos-delay="300">Portfolio</Link>
//             <Link to="/contact" data-aos="fade-up" data-aos-delay="400">Contact</Link>
//           </div>
//           <div className="other-content" data-aos="fade-in" data-aos-delay="500">
//             <p>P.O.Box 25773-00100 NBI,GPO</p>
//             <p><a href="mailto:victor.dmaina@gmail.com">victor.dmaina@gmail.com</a></p>
//             <p>+254 707 098723</p>
//             <p>+254 704 542321</p>
//           </div>
//         </div>
//         <div className="tag-1">
//           <h2>Victor Maina <FaRegCopyright /> 2024 </h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import Me from "../assets/09.jpeg";
import { Link } from "react-router-dom";

// Import Hero CSS that includes mobile styles
import "/src/styles/Hero.css";

interface LabelProps {
  title: string;
}

const Label: React.FC<LabelProps> = ({ title }) => (
  <div className="label">
    <h2>{title}</h2>
  </div>
);

const Hero = () => {
  const [] = useState("projects");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* Desktop Hero Component - Your original Hero component can go here */}
      <div className="desktop-hero-container">
        {/* Your desktop hero content */}
      </div>

      {/* Mobile Hero Component */}
      <div className="mobile-hero-container">
        <div className="profile-card" data-aos="fade-up">
          <div className="profile-image-container">
            <img src={Me} alt="Me" className="profile-image" />
          </div>

          <div className="profile-info">
            <h2 className="profile-name">Victor Maina</h2>
            <p className="profile-title">Web Developer</p>

            <div className="social-links">
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/victor-dmaina/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icons"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="mailto:victor.dmaina@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icons"
                >
                  <MdEmail />
                </a>
                <a
                  href="https://github.com/smigthereason"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icons"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="profile-tabs" data-aos="fade-up" data-aos-delay="600">
            <Link to="/home" data-aos="fade-up" data-aos-delay="100">
              <Label title="Home" />
            </Link>
            <Link to="/about" data-aos="fade-up" data-aos-delay="200">
              <Label title="About" />
            </Link>
            <Link to="/portfolio" data-aos="fade-up" data-aos-delay="300">
              <Label title="Portfolio" />
            </Link>
            <Link to="/contact" data-aos="fade-up" data-aos-delay="400">
              <Label title="Contact" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
