import React from 'react';
import '../styles/Button.css';

const Button: React.FC = () => {
  const handleClick = () => {
    // Open the Google Drive link in a new tab for file download
    window.open('https://drive.google.com/file/d/1S1aD81PbMXYTpKn80jLqKqFTGd5Hy1q0/view?usp=sharing', '_blank');
  };

  return (
    <button className="download-button" onClick={handleClick}>
      Download Resume
    </button>
  );
};

export default Button;
