import React from 'react';
import styled from 'styled-components';

const HomeSection = styled.section`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
`;

const Home = () => {
  return (
    <HomeSection>
      <h1>Welcome to My Portfolio</h1>
    </HomeSection>
  );
};

export default Home;
