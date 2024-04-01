import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr); 
  grid-gap: 20px;
  max-width: 950px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); 
    grid-gap: 15px;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 3rem;
  color: rgb(255, 153, 102);
  margin-top: 80px;
  margin-bottom: 17px;
  @media (max-width: 768px) {
    font-size: 2rem; 
  }
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:first-child {
    @media (min-width: 768px) {
      grid-column: span 2; 
    }
  }
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; 
  grid-column: 1 / -1;

  @media (max-width: 768px) {
    align-items: stretch; 
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 150px;
  resize: none;
`;

const Button = styled.button`
  padding: 9px 20px;
  border: none;
  background-color: #ff9966;
  color: black;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 120px;
  border-radius: 5px;
  font-size: 0.875rem;
  font-weight: 500;

  @media (max-width: 768px) {
    margin-top: 15px; 
    margin-bottom: 15px; 
  }
`;

const ContactForm = () => {
  return (
    <>
      <Title>Entre em contato</Title>
      <FormContainer>

        <Input 
          type="text" 
          placeholder="Nome" className="input input-bordered w-full mb-0.5 p-2 border border-gray-300 rounded focus:border-orange-500   focus:outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full mb-0.5 p-3 border border-gray-300 rounded focus:border-orange-500 focus:outline-none"
        />
        <input
          type="tel"
          placeholder="Celular"
          className="input input-bordered w-full mb-0.5 p-3 border border-gray-300 rounded focus:border-orange-500 focus:outline-none"
        />

    <MessageContainer>
          <TextArea placeholder="Mensagem" className="mb-0.5 p-3 border-gray-400 rounded focus:border-orange-500  focus:outline-none" />
          <Button>ENVIAR</Button>
        </MessageContainer>

      </FormContainer>
    </>
  );
};

export default ContactForm;
