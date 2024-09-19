import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TypedJS from "../components/TypedJS";
import Button from "../components/Button";
import Header from "../components/Header";
import LineHead from "../components/LineHead";
import "/src/styles/Home.css";
import Me2 from "../assets/50.png";

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const categories = ["Full Stack Web-Developer.", "UI/UX Designer."];

  return (
    <div className="home-container" data-aos="zoom-out">
      <div className="right-section1">
        <Header />
        <div className="scrollable-container">
          <div className="home_block" data-aos="fade-up" data-aos-delay="300">
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
      <div className="left-section1">
        <div className="close">
          <img src={Me2} alt="Me2" />
        </div>
      </div>
    </div>
  );
};

export default Home;
