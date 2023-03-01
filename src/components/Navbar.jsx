import React from 'react';
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from '@material-ui/core';
import { Link } from "react-router-dom";


const Container = styled.div`
    height: 60px;
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
`;
const Left = styled.div`
    flex:1;
    display:flex;
    align-items: center;
`;
const Language = styled.span`
    cursor: pointer;
    font-size: 14px;
`;
const Input = styled.input`
    border: none;
    padding: 5px;    
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Center = styled.div`
    flex:1;
    text-align: center;
`;
const Logo = styled.h1`
    font-weigth: bold;
    font-style: italic;
`;
const Right = styled.div`
    flex:1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-right: 20px;
`;
export default function Navbar(){
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search'/>
                    <Search style={{color:"grey", fontSize: 16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>SHOP IT</Logo>
            </Center>
            <Right>
                <Link to ="/register"><MenuItem>Register</MenuItem></Link>
                <Link to ="/login"><MenuItem>Sign-In</MenuItem></Link>
                <MenuItem>
                    <Badge badgeContent={2} color="primary" overlap="rectangular">
                    <Link to ="/cart"><ShoppingCartOutlined /></Link>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  );
};
