import React from 'react';
import styled from 'styled-components';
// Import FontAwesome for social icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #000;
  color: white;
`;

const HeroContent = styled.div`
  max-width: 600px;
`;

const HeroText = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #f0f0f0;
`;

const SubText = styled.h3`
  color: #ff8c00;
`;

const HeroImage = styled.img`
  max-width: 300px;
  border-radius: 50%;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  a {
    color: white;
    font-size: 2rem;
    text-decoration: none;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;

  button {
    background-color: transparent;
    border: 2px solid white;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background-color: #ff8c00;
      color: #000;
      transition: background-color 0.3s;
    }
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroText>Hi There! I'm Pavan K</HeroText>
        <SubText>DEVELOPER | AI & ML ENTHUSIAST</SubText>

        <SocialLinks>
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </SocialLinks>

        <ButtonsContainer>
          <button>Projects</button>
          <button>Contact</button>
          <button>Resume</button>
        </ButtonsContainer>
      </HeroContent>

      {/* Replace with your desired image or SVG */}
      <HeroImage src="https://via.placeholder.com/300" alt="Working Illustration" />
    </HeroSection>
  );
};

export default Hero;

