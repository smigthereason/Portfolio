import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TiArrowForwardOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "/src/styles/Header.css";

const Header: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigation

  const handleHomeRedirect = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault(); // Prevent the default anchor behavior
    navigate("/start"); // Redirect to the `/start` route
  };

  return (
    <nav className="head">
      <div className="name">
        <h2>Victor</h2>
      </div>
      <div className="top-nav">
        <div className="social-icons1">
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
          <a
            href="/start"
            onClick={handleHomeRedirect} // Use the home redirect function
            rel="noopener noreferrer"
            className="social-icons"
          >
            <TiArrowForwardOutline />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
