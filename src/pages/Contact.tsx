import React, { useState, useEffect } from "react";
import "/src/styles/Contact.css";
import Header from "../components/Header";
import LineHead from "../components/LineHead";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactForm from "../components/ContactForm";
import { FaLinkedin, FaGithub } from "react-icons/fa";

// Define link constants
const LINKEDIN_URL = "https://www.linkedin.com/in/victor-dmaina/";
const GITHUB_URL = "https://github.com/smigthereason";

// Testimonials array
const testimonials = [
  {
    name: "Sylvia Chebet",
    text: "Working with Victor at Moringa was an incredibly rewarding experience. He is a selfless, hardworking individual who consistently goes above and beyond in every project. One of Victor’s greatest strengths is his ability to not only deliver projects on time but also to ensure that each project is unique, innovative, and impactful.",
  },
  {
    name: "Sharon Kahira",
    text: "Victor served as our scrum master and was remarkable in his role. His coding skills are impressive, but it was his ability to coordinate and support the team that truly stood out. He always made it a point to check in with each of us, asking if we were facing any challenges or needed help debugging our work.",
  },
  {
    name: "Stephy Kamau",
    text: "Collaborating with Victor at Moringa was truly fulfilling. He’s a dedicated and driven professional who consistently exceeds expectations. Victor’s standout quality is his ability to lead in projects and deliver creative and meaningful work.",
  },
];

interface CardProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode[];
}

const Card: React.FC<CardProps> = ({ icon, title, content }) => (
  <div className="card">
    <div className="card-icon">{icon}</div>
    <h2>{title}</h2>
    {content.map((item, index) => (
      <p key={index}>{item}</p>
    ))}
  </div>
);

const Contact: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [fadeCount, setFadeCount] = useState(0); // Tracks the fade-in/out count

  useEffect(() => {
    AOS.init();

    const intervalId = setInterval(() => {
      setFadeIn((prev) => !prev); // Toggle fade-in/out

      // Increment fade count each time it fades in/out
      setFadeCount((prevCount) => prevCount + 1);

      // After two fade cycles (in and out), switch to the next testimonial
      if (fadeCount >= 3) {
        setFadeCount(0); // Reset fade count
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }
    }, 3000); // 3 seconds for each fade in/out cycle

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [fadeCount]);

  return (
    <div
      className="contact-container"
      data-aos="zoom-out"
      data-aos-duration="3000"
    >
      <div className="right-section">
        <Header />
        <div className="scrollable-container">
          <div
            className="contact_block"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="0"
          >
            <LineHead title="Contact" />
            <div className="section_block">
              <div className="sub_title">
                <h3 className="section_title">
                Let's Connect: Reach Out and Get in Touch
                </h3>
              </div>
              <div className="cards-container">
                <Card
                  icon={<LocationIcon />}
                  title="Location"
                  content={["Nairobi, Kenya"]}
                />
                <Card
                  icon={<HeartIcon />}
                  title="Follow me"
                  content={[
                    <div
                      key="linkedin"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                      }}
                    >
                      <a
                        href={LINKEDIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          textDecoration: "none",
                          color: "inherit",
                        }}
                      >
                        <FaLinkedin />
                        <span>LinkedIn</span>
                      </a>
                    </div>,
                    <div
                      key="github"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                      }}
                    >
                      <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          textDecoration: "none",
                          color: "inherit",
                        }}
                      >
                        <FaGithub />
                        <span>GitHub</span>
                      </a>
                    </div>,
                  ]}
                />
                <Card
                  icon={<RocketIcon />}
                  title="Contact"
                  content={["+254 707 09 8723", "victor.dmaina@gmail.com"]}
                />
              </div>
              <div className="form_block">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="left-section">
        <div className={`extra ${fadeIn ? "fade-in" : "fade-out"}`}>
          <p>{testimonials[currentTestimonial].text}</p>
          <h4>- {testimonials[currentTestimonial].name}</h4>
        </div>
      </div>
    </div>
  );
};

// Placeholder icon components
const LocationIcon = () => <div>📍</div>;
const HeartIcon = () => <div>❤️</div>;
const RocketIcon = () => <div>🚀</div>;

export default Contact;