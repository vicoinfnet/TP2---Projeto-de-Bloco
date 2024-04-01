import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  background-color: #ff9999; 
  color: #000; 
  padding-left: 4rem;
`;

const FooterLink = styled.a`
  margin: 0 1rem; 
  color: black; 
  text-decoration: none; 
  font-size: 0.875rem;
  margin-right: ${(props) => (props.home ? "5rem" : "1rem")};
  font-weight: 600;
  opacity: 0.7;
  }
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterLink home href="#">HOME</FooterLink>
      <FooterLink href="#blog">ACESSAR O BLOG</FooterLink>
      <FooterLink href="#contact">REALIZAR CONTATO</FooterLink>
      <FooterLink href="#more">SAIBA MAIS</FooterLink>
    </FooterContainer>
  );
};
