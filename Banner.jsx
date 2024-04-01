import React from 'react';
import styled from 'styled-components';
import bannerImage from './android-chrome-256x256.png'; 

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  background-color: rgb(255, 153, 102); 
  padding: 50px 0; 
  text-align: center; 
  color: white;
  height: 637px;
`;

const BannerTitle = styled.h1`
  margin: 20px 0 10px; 
  font-size: 3rem;
  color: black;
`;

const BannerSubtitle = styled.p`
  margin: 0; 
  font-size: 2.1rem; 
  color: black;
  font-weight: 300;
  
`;

const BannerImage = styled.img`
  width: 256px; 
  height: auto; 
  margin-bottom: 30px; 
`;

export const Banner = () => {
  return (
    <BannerContainer>
      <BannerImage src={bannerImage} alt="Banner Icon" />
      <BannerTitle>Título do banner</BannerTitle>
      <BannerSubtitle>Texto do subtítulo.</BannerSubtitle>
    </BannerContainer>
  );
};
