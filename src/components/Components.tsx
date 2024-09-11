import backgroundImage from '../assets/silk-4916174_1280.jpg';
import { Props } from 'react-responsive-carousel/lib/ts/components/Thumbs';
import styled, { css } from 'styled-components';

// Removed the background image and added a solid red background
export const Background = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  // background-color: red; /* Changed to red */
    background: url(${backgroundImage}) no-repeat center center/cover;
  overflow: hidden; /* Ensures no overflow */
`;

// Make the container fill the page and remove unnecessary borders and shadows
export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh; /* Fill the entire viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Remove overflow */
`;

// Keep other components as they are or adjust accordingly for visual styling

export const SignUpContainer = styled.div<Props>`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 33.33%; /* Changed from 50% to 25% */
  opacity: 0;
  z-index: 1;
  ${props => props.signinIn !== true && css`
    transform: translateX(50%);
    opacity: 1;
    z-index: 5;
  `}
`;

export const SignInContainer = styled.div<Props>`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 33.33%; /* Changed from 50% to 25% */
  z-index: 2;
  ${props => props.signinIn !== true && `transform: translateX(50%);`}
`;

export const OverlayContainer = styled.div<Props>`
  position: absolute;
  top: 0;
  left: 33.33%; /* Changed from 50% to 25% */
  width: 66.67%; /* Changed from 50% to 75% */
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${props => props.signinIn !== true && `transform: translateX(-50%);`}
`;

export const Overlay = styled.div<Props>`
  background-color: #2464d1;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${props => props.signinIn !== true && `transform: translateX(50%);`}
`;


export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin: 0;
`;

export const Input = styled.input`
  font-family: Poppins;
  border: none;
  border-radius: 10px;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;

export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #1d9bf0;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

export const GhostButton = styled(Button)`
  background-color: transparent;
  border-color: #ffffff;
`;

export const Anchor = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;


export const OverlayPanel = styled.div<Props>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${props => props.signinIn !== true && `transform: translateX(0);`}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${props => props.signinIn !== true && `transform: translateX(20%);
    width: 50%;`}
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;
