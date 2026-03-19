import React, { useEffect, useState } from "react";
import "/src/styles/About.css";
import Header from "../components/Header";
import LineHead from "../components/LineHead";
import AOS from "aos";
import "aos/dist/aos.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { FaReact, FaYoutube, FaSoundcloud, FaMusic } from "react-icons/fa";
import Python from "../assets/svg/python.svg";
import Java from "../assets/svg/javascript-js.svg";
import Type from "../assets/svg/typescript-icon.svg";
import Node from "../assets/svg/node-js.svg";
import Tail from "../assets/svg/tailwind-css.svg";
import CSS from "../assets/svg/file-type-css.svg";
import GitIcon from "../assets/svg/git.svg";
import HTML from "../assets/svg/file-type-html.svg";
import Flask from "../assets/svg/flask.svg";
import SQL from "../assets/svg/database-sql.svg";
import Lite from "../assets/svg/sqlite.svg";
import VS from "../assets/svg/vs-code.svg";
import Post from "../assets/svg/postman.svg";
import Vite from "../assets/svg/brand-vite.svg";

// ─── Types ─────────────────────────────────────────────────────────────────
interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
}

// ─── Constants ─────────────────────────────────────────────────────────────
const YT_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const YT_HANDLE = "smigthereason";
const YT_CHANNEL_URL = "https://www.youtube.com/@smigthereason";
const SC_USERNAME = "smigthereason";
const SC_PROFILE_URL = "https://soundcloud.com/smigthereason";

// ─── YouTube Hook ──────────────────────────────────────────────────────────
function useYouTubeVideos() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchVideos() {
      if (!YT_API_KEY) {
        console.warn("YouTube API key missing");
        setError("API key missing");
        setLoading(false);
        return;
      }

      try {
        const channelSearchResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${YT_HANDLE}&type=channel&key=${YT_API_KEY}`
        );
        
        const searchData = await channelSearchResponse.json();
        
        if (!searchData.items || searchData.items.length === 0) {
          throw new Error("Channel not found");
        }

        const channelId = searchData.items[0].id.channelId;
        const channelDetailsResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${YT_API_KEY}`
        );
        
        const channelData = await channelDetailsResponse.json();
        const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;
        const playlistResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=6&key=${YT_API_KEY}`
        );
        
        if (!playlistResponse.ok) {
          throw new Error(`Playlist error: ${playlistResponse.status}`);
        }
        
        const playlistData = await playlistResponse.json();

        if (playlistData.items) {
          const parsedVideos = playlistData.items.map((item: any) => ({
            id: item.snippet.resourceId.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.high?.url || 
                       item.snippet.thumbnails.medium?.url || 
                       item.snippet.thumbnails.default?.url,
            publishedAt: item.snippet.publishedAt,
          }));
          setVideos(parsedVideos);
        }
        
      } catch (err: any) {
        console.error("YouTube fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

  return { videos, loading, error };
}

// ─── YouTube Section Component ─────────────────────────────────────────────
const YouTubeSection: React.FC = () => {
  const { videos, loading } = useYouTubeVideos();

  return (
    <div className="social-platform youtube-platform">
      <div className="social-platform-header">
        <FaYoutube className="social-icon yt-icon" />
        <span>My YouTube Channel</span>
        <a
          href={YT_CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="social-view-all yt-button"
        >
          @smigthereason
        </a>
      </div>

      {loading && (
        <div className="social-loading">
          <span className="loading-dot"></span>
          <span className="loading-dot"></span>
          <span className="loading-dot"></span>
        </div>
      )}

      {!loading && (
        <>
          <div className="channel-promo">
            <a 
              href={YT_CHANNEL_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="channel-button youtube-button"
            >
              <FaYoutube className="button-icon" />
              Subscribe to @smigthereason
              <span className="button-arrow">→</span>
            </a>
            <p className="channel-stats">92 subscribers · 38 videos</p>
          </div>

          {videos.length > 0 ? (
            <>
              <h4 className="section-subtitle">Latest Videos</h4>
              <div className="media-cards-row">
                {videos.map((video) => (
                  <a
                    key={video.id}
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="media-card"
                  >
                    <div className="media-card-thumb">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        loading="lazy"
                      />
                      <div className="media-card-play">
                        <FaYoutube />
                      </div>
                    </div>
                    <div className="media-card-info">
                      <h4 className="media-card-title">{video.title}</h4>
                      <span className="media-card-date">
                        {new Date(video.publishedAt).toLocaleDateString()}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </>
          ) : (
             <div className="social-error">
                <p>Unable to load latest videos automatically.</p>
                <a href={YT_CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="channel-direct-link">
                  Visit YouTube Channel
                </a>
             </div>
          )}

          <div className="view-all-link">
            <a href={YT_CHANNEL_URL} target="_blank" rel="noopener noreferrer">
              View all 38 videos on YouTube →
            </a>
          </div>
        </>
      )}
    </div>
  );
};

// ─── SoundCloud Section Component ──────────────────────────────────────────
const SoundCloudSection: React.FC = () => {
  return (
    <div className="social-platform soundcloud-platform">
      <div className="social-platform-header">
        <FaSoundcloud className="social-icon sc-icon" />
        <span>My Music Productions</span>
        <a
          href={SC_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="social-view-all sc-button"
        >
          @smigthereason
        </a>
      </div>

      <div className="channel-promo">
        <a 
          href={SC_PROFILE_URL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="channel-button soundcloud-button"
        >
          <FaSoundcloud className="button-icon" />
          Follow on SoundCloud
          <span className="button-arrow">→</span>
        </a>
        <p className="channel-stats">8+ tracks · Beats & Instrumentals</p>
      </div>

      <div className="sc-embed-container">
        <iframe
          width="100%"
          height="350"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={`https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/${SC_USERNAME}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
          title="SoundCloud Player"
          className="sc-iframe"
        ></iframe>
      </div>

      <div className="view-all-link">
        <a href={SC_PROFILE_URL} target="_blank" rel="noopener noreferrer">
          Listen to all tracks on SoundCloud →
        </a>
      </div>
    </div>
  );
};

// ─── Main About Component ──────────────────────────────────────────────────
const About: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className="home-container">
      <div className="right-section">
        <Header />

        <div className="about-container" data-aos="fade-up">
          <LineHead title="about me" />
          
          <div className="main-content">
            <div className="content1">
              <p className="center-text">
                I am a Software Developer, UI/UX Designer, and Music Producer based in Nairobi, Kenya. Currently, I am a <strong>Software Developer at Sunkova Limited</strong>, where I contribute to building robust production systems. I specialize in creating premium digital experiences, combining technical performance with high-end aesthetics.
              </p>
              
              <p className="center-text music-producer-context">
                <FaMusic className="inline-icon" /> 
                Beyond coding, I'm also a passionate music producer using <strong>FL Studio</strong> to create beats and soundscapes. With over 8 tracks released on SoundCloud, I blend electronic, lofi, and Afrobeat influences to create unique sounds.
              </p>
            </div>

            <div className="tools">
              <h3>🛠️ Skills and Tools</h3>
            </div>

            <div className="skills-container">
              <div className="skills-box">
                <div className="skills-section">
                  <h3>Technologies</h3>
                  <p>
                    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
                    <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
                    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node-dot-js&logoColor=white" alt="Node.js" />
                    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
                    <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask" />
                    <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
                  </p>
                </div>

                <div className="skills-section">
                  <h3>Languages</h3>
                  <p>
                    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
                    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
                    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
                  </p>
                </div>

                <div className="skills-section">
                  <h3>Tools & DAWs</h3>
                  <p>
                    <img src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="VSCode" />
                    <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
                    <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
                    <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="Postman" />
                    <img src="https://img.shields.io/badge/FL_Studio-FF4F00?style=for-the-badge&logo=image%2Fpng&logoColor=white" alt="FL Studio" />
                    <img src="https://img.shields.io/badge/Ableton_Live-000000?style=for-the-badge&logo=ableton-live&logoColor=white" alt="Ableton" />
                  </p>
                </div>
              </div>
            </div>

            <div className="content2">
              <h3>🎓 Education & Experience</h3>
              <p className="center-text">
                <strong>Software Engineering</strong> | Moringa School <br />
                <strong>Software Engineer (Contract)</strong> | Qonverso <br />
                <strong>Sound Engineer</strong> | Kenya National Theatre <br />
                <strong>Music Producer</strong> | 8+ Tracks Released
              </p>
            </div>

            <div className="content6">
              <h3 className="center-text">Stats</h3>
              <p className="center-text">
                <img
                  src="https://github-readme-stats.vercel.app/api/wakatime?username=smigthereason&layout=compact&theme=react&border_radius=10&size_weight=0.5&count_weight=0.5&range=all_time"
                  alt="WakaTime stats"
                />
              </p>
            </div>

            <div className="social-section-container">
              <h2 className="social-section-title">My Creative Work</h2>
              <YouTubeSection />
              <SoundCloudSection />
            </div>
          </div>
        </div>
      </div>

      <div className="left-section">
        <div className="dev-icons" data-aos="fade-up">
          <Splide
            options={{
              type: "loop",
              perPage: 1,
              autoplay: true,
              interval: 3000,
              speed: 2500,
              pauseOnHover: true,
              arrows: false,
              pagination: false,
            }}
          >
            <SplideSlide><FaReact className="react-icon" /></SplideSlide>
            <SplideSlide><img src={Python} alt="Python" className="svg" /></SplideSlide>
            <SplideSlide><img src={Java} alt="JavaScript" className="svg" /></SplideSlide>
            <SplideSlide><img src={Type} alt="TypeScript" className="svg" /></SplideSlide>
            <SplideSlide><img src={Node} alt="Node" className="svg" /></SplideSlide>
            <SplideSlide><img src={Tail} alt="Tailwind" className="svg" /></SplideSlide>
            <SplideSlide><img src={CSS} alt="CSS" className="svg" /></SplideSlide>
            <SplideSlide><img src={GitIcon} alt="Git" className="svg" /></SplideSlide>
            <SplideSlide><img src={HTML} alt="HTML" className="svg" /></SplideSlide>
            <SplideSlide><img src={Flask} alt="Flask" className="svg" /></SplideSlide>
            <SplideSlide><img src={SQL} alt="SQL" className="svg" /></SplideSlide>
            <SplideSlide><img src={Lite} alt="SQLite" className="svg" /></SplideSlide>
            <SplideSlide><img src={VS} alt="VS Code" className="svg" /></SplideSlide>
            <SplideSlide><img src={Post} alt="Postman" className="svg" /></SplideSlide>
            <SplideSlide><img src={Vite} alt="Vite" className="svg" /></SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default About;