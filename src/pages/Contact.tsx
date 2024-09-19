import React from "react";
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
  React.useEffect(() => {
    AOS.init();
  }, []);

  const handleHomeRedirect = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    document
      .querySelector(".contact-container")
      ?.setAttribute("data-aos", "zoom-out");
    setTimeout(() => {
      window.location.href = "/start"; // Redirect to the homepage after animation
    }, 1000);
  };

  return (
    <div
      className="contact-container"
      data-aos="zoom-out"
      data-aos-duration="3000"
    >
      <div className="right-section">
        <Header onHomeRedirect={handleHomeRedirect} />
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
                  Let's get in touch and embark on new endeavors!
                </h3>
              </div>
              <div className="cards-container">
                <Card
                  icon={<LocationIcon />}
                  title="Location"
                  content={[
                    "Nairobi, Kenya",
                    
                  ]}
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
                  content={[
                    "+254 707 09 8723",
                    "victor.dmaina@gmail.com",
                  ]}
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
        <div className="extra"></div>
      </div>
    </div>
  );
};

// Placeholder icon components
const LocationIcon = () => <div>📍</div>;
const HeartIcon = () => <div>❤️</div>;
const RocketIcon = () => <div>🚀</div>;

export default Contact;
