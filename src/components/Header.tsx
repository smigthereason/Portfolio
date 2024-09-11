import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TiArrowForwardOutline } from "react-icons/ti";
import "/src/styles/Header.css";

interface HeaderProps {
  onHomeRedirect: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  toggleSignIn: () => void; // New prop for toggling the sign-in/sign-up views
}

const Header: React.FC<HeaderProps> = ({ onHomeRedirect, toggleSignIn }) => {
  return (
    <nav className="head">
      <div className="name">
        <h2>Victor</h2>
      </div>
      <div className="top-nav">
        <div className="social-icons1">
          <a
            href="https://www.linkedin.com/in/victor-maina-389318301/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:victor.dmaina@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail size={24} />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a href="/" onClick={(e) => {
            e.preventDefault();
            toggleSignIn(); // Trigger toggle
          }} rel="noopener noreferrer">
            <TiArrowForwardOutline size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
