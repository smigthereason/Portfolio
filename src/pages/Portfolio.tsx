import React, { useEffect, useState } from "react";
import "/src/styles/Portfolio.css";
import Header from "../components/Header";
import LineHead from "../components/LineHead";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Omega from "../assets/logos/omega.png";
import Logo from "../assets/logos/kindr-logo.png";
import Tune from "../assets/logos/tune.png";
import AvHighLogo from "../assets/logos/av-high.png";
import WinkLogo from "../assets/logos/wink-transparent.png";

// Define the LogoType with a discriminated union
type LogoType =
  | { type: "image"; src: string } // For image URLs
  | { type: "text"; content: string }; // For plain text

interface ExperienceCard {
  logo: LogoType;
  title: string;
  product: string;
  description: string[];
  skills: string[];
}

const Portfolio: React.FC = () => {
  const [, setSlideOut] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  const handleHomeRedirect = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    setSlideOut(true);

    setTimeout(() => {
      navigate("/start");
    }, 1000); // Adjust the duration to match your AOS animation duration
  };

  const experiences: ExperienceCard[] = [
    {
      logo: { type: "image", src: Omega },
      title: "Full-Stack Developer",
      product: "Omega",
      description: [
        "Enhanced user experiences on Wink by resolving bugs & reduced load time by 40%.",
        "Built the API and database using Flask, SQLAlchemy, and Python.",
        "Refactored previous code to TypeScript.",
        "Created the frontend design and graphical interface using React",
        "Integrated payment plans through PayPal for seamless transactions.",
      ],
      skills: [
        "ReactJS",
        "HTML",
        "CSS",
        "TypeScript",
        "Flask",
        "SQLAlchemy",
        "Python",
      ],
    },
    {
      logo: { type: "image", src: Logo },
      title: "Full-Stack Developer",
      product: "Kindr",
      description: ["", "", "", "", ""],
      skills: [
        "ReactJS",
        "HTML",
        "CSS",
        "Tailwind",
        "Vite",
        "TypeScript",
        "Flask",
        "SQLAlchemy",
        "Python",
      ],
    },
    {
      logo: { type: "image", src: Tune },
      title: "Frontend Engineer",
      product: "AnimeVerse",
      description: [
        "A Comprehensive Anime and Manga Information Portal.",
        "Built AnimeVerse portal using React Js with seamless interaction of REST APIs using AXIOS optimized with React Query.",
      ],
      skills: ["ReactJS", "HTML", "CSS", "JavaScript"],
    },
    {
      logo: { type: "image", src: AvHighLogo },
      title: "Frontend Engineer",
      product: "AnimeVerse",
      description: [
        "A Comprehensive Anime and Manga Information Portal.",
        "Built AnimeVerse portal using React Js with seamless interaction of REST APIs using AXIOS optimized with React Query.",
      ],
      skills: ["ReactJS", "HTML", "CSS", "JavaScript"],
    },
    {
      logo: { type: "text", content: "Korda Lavare" },
      title: "Frontend Engineer",
      product: "Korda Lavare",
      description: [
        "A Comprehensive Anime and Manga Information Portal.",
        "Built AnimeVerse portal using React Js with seamless interaction of REST APIs using AXIOS optimized with React Query.",
      ],
      skills: ["ReactJS", "HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <>
      <div className="home-container">
        <div className="right-section">
          <Header onHomeRedirect={handleHomeRedirect} />
          <div
            className="about-container"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="0"
          >
            <LineHead title="portfolio" />
            <div className="portfolio">
              <h1>From Concept to Reality: My Project Portfolio</h1>

              <div className="timeline">
                {experiences.map((exp, index) => (
                  <div key={index} className="experience-card">
                    <div className="card-content">
                      <div className="logo-container">
                        {exp.logo.type === "image" ? (
                          <img
                            src={exp.logo.src}
                            alt={`${exp.product} logo`}
                            className="logo"
                          />
                        ) : (
                          <span className="logo-text">{exp.logo.content}</span>
                        )}
                      </div>
                      <h3>{exp.title}</h3>
                      <h4>{exp.product}</h4>
                      {exp.description.map((desc, i) => (
                        <p key={i}>{desc}</p>
                      ))}
                      <div className="skills">
                        <h3>Skills:</h3>
                        <p>{exp.skills.join(" • ")}</p>
                      </div>
                    </div>
                    <div className="timeline-dot"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="left-section">
          <div
            className="slides"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="0"
          >
            <Splide
              options={{
                type: "loop",
                perPage: 1,
                autoplay: true,
                interval: 5000,
                speed: 2500,
              }}
            >
              <SplideSlide>
                <img src={Omega} alt="Slide 1" className="slide1" />
              </SplideSlide>
              <SplideSlide>
                <img src={Logo} alt="Slide 2" className="slide2" />
              </SplideSlide>
              <SplideSlide>
                <img src={Tune} alt="Slide 3" className="slide3" />
              </SplideSlide>
              <SplideSlide>
                <h3>Passionate-Angels</h3>
              </SplideSlide>
              <SplideSlide>
                <img src={WinkLogo} alt="Slide 5" className="slide4" />
              </SplideSlide>
              <SplideSlide>
                <h2>Korda-Lavare</h2>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
