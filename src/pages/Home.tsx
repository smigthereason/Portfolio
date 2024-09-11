import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TypedJS from "../components/TypedJS";
import Button from "../components/Button";
import Header from "../components/Header";
import LineHead from "../components/LineHead";
import "/src/styles/Home.css";
import { useNavigate } from "react-router-dom";

interface HomeProps {
  toggle: (value: boolean) => void; // Prop for toggling the sign-in/sign-up view
}

const Home: React.FC<HomeProps> = ({ toggle }) => {
  const [slideOut, setSlideOut] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  const categories = ["Full Stack Web-Developer.", "UI/UX Designer."];

  const handleHomeRedirect = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setSlideOut(true);

    setTimeout(() => {
      navigate("/"); // Change this to your Hero route
    }, 1000); // Match AOS animation duration
  };

  return (
     <div className={`home-container ${slideOut ? "slide-left" : ""}`}>
      <div className="right-section">
        <Header onHomeRedirect={handleHomeRedirect} toggleSignIn={() => toggle(true)} /> {/* Pass the toggle function here */}
        <div
          className="scrollable-container"
          style={{
            height: "auto",
            overflowY: "hidden",
            padding: "10px",
          }}
        >
          <div
            className="home_block"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="0"
          >
            <LineHead title="Home" />
            <div className="title_block">
              <h1 className="title">
                My name is Victor.
                <br />
                I am a <br /> <TypedJS strings={categories} />
              </h1>
            </div>
            <div className="house">
              <div className="info-box-container">
                <div className="info-box">
                  <span className="info-number">7+</span>
                  <span className="info-text">Months of experience</span>
                </div>
                <div className="info-box">
                  <span className="info-number">1.5k+</span>
                  <span className="info-text">Hours of Waka Time</span>
                </div>
              </div>
              <div className="download-cv">
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
