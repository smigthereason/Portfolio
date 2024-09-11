import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Button.css';

const Button: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  };

  return (
    <button className="begin-search-button" onClick={handleClick}>
      Download CV
    </button>
  );
};

export default Button;