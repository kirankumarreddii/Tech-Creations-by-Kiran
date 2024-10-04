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
      <p>This is the about page where you can describe yourself or your background.</p>
    </AboutSection>
  );
};

export default About;
