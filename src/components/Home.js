import React from 'react';
import styled from 'styled-components';

const HomeSection = styled.section`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  text-align: center;
`;

const Home = () => {
  return (
    <HomeSection>
      <div>
        <h1>Welcome to My Portfolio</h1>
        <h1>My Portfolio is launching soon...</h1>
      </div>
    </HomeSection>
  );
};

export default Home;
