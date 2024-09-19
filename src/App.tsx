// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import Loading from "./pages/Loading";
// import Hero from "./pages/Hero";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Portfolio from "./pages/Portfolio";

// const App: React.FC = () => {
//   return (
//     <div style={{ position: "relative", width: "100%", height: "100vh" }}>
//       {/* Background video */}
//       <video autoPlay muted loop className="background-video" style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         objectFit: "cover", // Ensures the video covers the entire screen
//         zIndex: -1, // Ensure the video stays behind other content
//       }}>
//         <source src="https://cdn.pixabay.com/video/2021/11/20/98511-649310767_large.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Routes */}
//       <Routes>
//         <Route path="/" element={<Hero />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import Loading from "./pages/Loading";
import Hero from "./pages/Hero";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation(); // Track current location

  useEffect(() => {
    if (location.pathname === "/") {
      // Only run the timer if the current path is the root (initial loading)
      const timer = setTimeout(() => {
        setLoading(false); // Stop loading after 10 seconds
        navigate("/start"); // Redirect to `/start` after loading is done
      }, 10000); // 10 seconds for the loading screen

      return () => clearTimeout(timer); // Clean up the timer
    } else {
      // If not on the root path, immediately set loading to false
      setLoading(false);
    }
  }, [location.pathname, navigate]); // Run only when location changes

  if (loading && location.pathname === "/") {
    return <Loading />; // Show Loading screen only on root path
  }

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      {/* Background video */}
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
          objectFit: "cover", // Ensure the video covers the entire screen
          zIndex: -1, // Ensure the video stays behind other content
        }}
      >
        <source
          src="https://cdn.pixabay.com/video/2021/11/20/98511-649310767_large.mp4"
          // src="https://cdn.pixabay.com/video/2024/05/22/213026_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/start" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
};

export default App;



