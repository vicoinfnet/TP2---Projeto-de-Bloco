import React from 'react';
import styled from 'styled-components';
import icon from './icon.svg';
import { MdAccountCircle, MdMenu } from 'react-icons/md';
import { FaGithub } from "react-icons/fa6";

const AppBarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 1rem;
  z-index: 1000;
`;

const LogoAndLinks = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const Logo = styled.h1`
  display: flex;
  align-items: center;
  color: #ff4500;
  font-size: 1.1rem;
  margin-right: 2rem;
  margin-left: 1rem;
`;

const Icon = styled.img`
  height: 2.3em;
  margin-right: 0.7rem;
`;

const NavLink = styled.a`
  color: #ff4500;
  margin: 0 1rem;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.875rem;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.8em;
  color: #ff4500;
  .iconFa {
  margin-right: 1.5rem;
  }
  .iconMd {
  margin-right: 1.5rem;
  }

  & > a {
    padding: 8px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1); 
`;

export const AppBar = () => {
  return (
    <AppBarContainer>
      <LogoAndLinks>
        <Logo>
          <Icon src={icon} alt="Icon" />
          AppBoilerplate
        </Logo>
        <NavLink href="#blog">Acessar o Blog</NavLink>
        <NavLink href="#contact">Realizar Contato</NavLink>
      </LogoAndLinks>
      <IconsContainer>
        <a href="https://github.com/egvelho/next-material-netlify-cms-blog"> 
          <FaGithub  />
        </a>
        <a href="#menu"> 
          <MdMenu  />
        </a>
      </IconsContainer>
    </AppBarContainer>
  );
};
