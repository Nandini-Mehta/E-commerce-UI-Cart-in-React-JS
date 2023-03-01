import React from 'react';
import styled from 'styled-components';
import {ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined} from '@material-ui/icons';
import {Link} from 'react-router-dom';

const Info = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-color: rgb(204, 255, 204, 0.7);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  opacity: 0;
`;
const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &: hover ${Info}{
      opacity: 1;
    }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  z-index: 2;
  object-fit: cover;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  transition: all 0.5s ease;

  &: hover{
    background-color: yellow;
    transform: scale(1.1);
  }
`;

export default function Product({item}) {
  return (
    <Container>
        <Circle>
        <Image  src={item.img}/>
        <Info>
          <Link to ="/cart"><Icon><ShoppingCartOutlined /></Icon></Link>
          <Link to ={`/product/${item.id}`}><Icon><SearchOutlined /></Icon></Link>
          <Icon><FavoriteBorderOutlined /></Icon>
        </Info>
        </Circle>
    </Container>
  );
};
