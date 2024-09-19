import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Loading.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Loading: React.FC = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  const [isPouring, setIsPouring] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const navigate = useNavigate();

  const generateBubbles = () => {
    const bubbles = [];
    for (let i = 0; i < 5; i++) {
      const randomBottom = Math.random() * 100;
      const randomDelay = Math.random() * 3;
      bubbles.push(
        <div
          key={i}
          className="bubble"
          style={{
            left: `${randomBottom}%`,
            animationDelay: `${randomDelay}s`,
          }}
        ></div>
      );
    }
    return bubbles;
  };

  useEffect(() => {
    setIsPouring(true);

    const fillTimer = setTimeout(() => {
      setIsFilled(true);
    }, 4500);

    const transitionTimer = setTimeout(() => {
      setTransitioning(true);
      setTimeout(() => {
        navigate("/start"); // Navigate to the Hero page after transition
      }, 1000); // Match this with the CSS transition duration
    }, 15000); // Changed to 15000 for 15 seconds

    return () => {
      clearTimeout(fillTimer);
      clearTimeout(transitionTimer);
    };
  }, [navigate]);

  return (
    <div
      className={`loading-container ${transitioning ? "transition-out" : ""}`}
      data-aos="zoom-out"
      data-aos-duration="10000"
      data-aos-delay="10000" // Ensure this delay matches the transitionTimer
    >
      <video
        autoPlay
        muted
        loop
        className="background-video"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source
          src="https://cdn.pixabay.com/video/2021/11/20/98511-649310767_large.mp4"
          // src="https://cdn.pixabay.com/video/2024/03/30/206272_tiny.mp4"
          type="video/mp4"
        />
      </video>
      <div className="loading-circle">
        <div className={`water ${isPouring ? "pouring" : ""}`}>
          {generateBubbles()}
        </div>

        {isFilled && (
          <h6
            className="Welcome"
            data-aos="fade-in"
            data-aos-duration="3000"
            data-aos-delay="0"
          >
            Welcome
          </h6>
        )}
      </div>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="turbulence">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.05"
            numOctaves="3"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
        </filter>
      </svg>
    </div>
  );
};

export default Loading;


