import React from 'react'
import styled from 'styled-components';
import { SendRounded } from '@material-ui/icons';

const Container = styled.div`
    height: 60vh;
    display: flex;
    flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightgreen;
`;
const Title = styled.h1`
    font-size: 70px;
  margin-bottom: 20px;
`;
const Description = styled.div`
font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
const Input = styled.input`
    border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
    flex: 1;
  border: none;
  background-color: black;
  color: white;
`;
export default function NewsLetter() {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favourite products.</Description>
        <InputContainer>
            <Input placeholder='Your E-mail'></Input>
            <Button>
                <SendRounded />
            </Button>
        </InputContainer>
    </Container>
  );
};
