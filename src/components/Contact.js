import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
`;

const Contact = () => {
  return (
    <ContactSection>
      <h1>Contact Me</h1>
      <p>This is where you can include your contact details or a contact form.</p>
    </ContactSection>
  );
};

export default Contact;
