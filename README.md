# My Portfolio

This project serves as the foundation for my portfolio, utilizing React with TypeScript and Vite for fast, modern development. It includes Hot Module Replacement (HMR) to speed up development with real-time updates.

## Project Overview

This portfolio showcases my work, background, and contact information through an engaging UI. It features sections such as **Home**, **About**, **Portfolio**, and **Contact**, along with a **Hero** section and a **Loading** screen for a smooth transition experience. The application is responsive, interactive, and built with modern web technologies.

### Key Technologies:
- **React**: For building user interfaces.
- **TypeScript**: To add type safety to the JavaScript codebase.
- **Vite**: For a fast development environment with built-in HMR.
- **React Router**: For client-side routing to enable seamless navigation between pages.

## Project Structure

```plaintext
src/
├── App.css
├── App.tsx
├── assets/
│   ├── images/            
│   ├── videos/            
│   └── svgs/              
├── components/            
│   ├── Button.tsx
│   ├── Header.tsx
│   └── ContactForm.tsx
├── pages/ 
│   ├── Loading.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Hero.tsx
│   ├── Home.tsx
│   └── Portfolio.tsx
├── index.css              
├── main.tsx               
├── styles/                
│   ├── About.css
│   ├── ContactForm.css
│   ├── Contact.css
│   ├── Hero.css
│   ├── Home.css
│   ├── Loading.css
│   ├── Button.css
│   └── Portfolio.css
├── vite-env.d.ts          
├── tsconfig.json          
└── vite.config.ts         
