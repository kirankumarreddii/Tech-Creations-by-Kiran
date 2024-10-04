import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
`;

const About = () => {
  return (
    <AboutSection>
      <h1>About Me</h1>
      <p>Im Kiran</p>
      <p>My Portfolio is launching soon....</p>
    </AboutSection>
  );
};

export default About;
