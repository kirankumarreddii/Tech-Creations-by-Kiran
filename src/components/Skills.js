import React from 'react';
import styled from 'styled-components';

const SkillsSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
`;

const Skills = () => {
  return (
    <SkillsSection>
      <h1>My Skills</h1>
      <p>Here, you can list the skills and tools you're proficient with, such as programming languages or technologies.</p>
    </SkillsSection>
  );
};

export default Skills;
