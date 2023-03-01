import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Container = styled.div`
    flex: 1;
    margin: 5px;
    height: 70vh;
    position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%; 
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
  padding: 10px;
`;

export default function CategoriesItem({item}) {
  return (
    <Container>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Link to={`/products/${item.catg}`}><Button>SHOP NOW</Button></Link>
        </Info>
    </Container>
  );
};
