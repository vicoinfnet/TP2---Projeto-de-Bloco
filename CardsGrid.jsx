import React from 'react';
import styled from 'styled-components';
import dogeImage from './doge.jpg'; 

const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 309px); 
  gap: 1rem; 
  padding: 1rem;
  justify-content: center; 
  margin: 1rem auto;
  margin-bottom: 7rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;  // Apenas uma coluna para telas menores
  }
`;

const Card = styled.div`
  background: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 309px;
  height: 256px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 45%; 
  object-fit: cover; 
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const CardContent = styled.div`
  padding: 0.5rem;
`;

const CardTitle = styled.h3`
  margin: 0.5rem 0;
  color: #333;
  font-weight: 700;
  color: #ff9966;
  font-size: 1.25rem;
`;

const CardText = styled.p`
  color: #666;
  font-size: 0.8rem;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 3.75rem;
  margin: 1rem 0;
  margin-top: 6rem;
  color: #ff9966;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;


export const CardsGrid = () => {
  return (
    <>
      <Title>Conheça o site</Title>
      <Subtitle>Mais informações sobre os principais links do site.</Subtitle>
      <GridContainer>

        {[...Array(6)].map((_, i) => (
          <Card key={i}>
            <CardImage src={dogeImage} alt="Doge" />
            <CardContent>
              <CardTitle>{`Cartão ${String.fromCharCode(65 + i)}`}</CardTitle>
              <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</CardText>
            </CardContent>
          </Card>
        ))}
      </GridContainer>
    </>
  );
};
