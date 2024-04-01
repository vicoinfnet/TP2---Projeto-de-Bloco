import React from 'react';
import styled from 'styled-components';
import dogeImage from './doge.jpg';

const DescriptionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ff9999; 
  padding: 2rem;
  text-align: center;
  
`;

const DescriptionHeader = styled.h2`
  margin: 1rem 0;
  color: #000;
  font-size: 3rem;
  margin-top: 75px;
`;

const TextAndImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${props => props.reversed ? 'row-reverse' : 'row'};
  width: 100%;
  max-width: 780px;
  margin: 1rem 0;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;



const DescriptionText = styled.p`
  margin: 0 1rem;
  color: #000;
  flex: 1;
  text-align: ${props => props.alignLeft ? 'left' : 'center'};
  text-align: ${props => props.alignRight ? 'right' : props.alignLeft ? 'left' : 'center'};
  
`;

const DogeImage = styled.img`
  border-radius: 50%; 
  width: 128px; 
  height: 124px;
  margin: 0 1rem; 
`;

export const SiteDescription = () => {
  return (
    <DescriptionContainer>
      <DescriptionHeader>Descrição do site</DescriptionHeader>
      <TextAndImageContainer>
        <DogeImage src={dogeImage} alt="Doge" />
        <DescriptionText alignLeft>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</DescriptionText>
      </TextAndImageContainer>
      <TextAndImageContainer reverse> 
        <DescriptionText alignRight>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</DescriptionText>
        <DogeImage src={dogeImage} alt="Doge" />
      </TextAndImageContainer>
      <TextAndImageContainer>
        <DogeImage src={dogeImage} alt="Doge" />
        <DescriptionText alignLeft>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</DescriptionText>
      </TextAndImageContainer>
    </DescriptionContainer>
  );
};

