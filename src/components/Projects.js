import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
`;

const Projects = () => {
  return (
    <ProjectsSection>
      <h1>My Projects</h1>
      <p>List some of your projects here.</p>
    </ProjectsSection>
  );
};

export default Projects;
