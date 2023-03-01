import React from 'react';
import styled from "styled-components";
import {Facebook,Instagram, Twitter,Pinterest,MailOutline, Room, Phone} from '@material-ui/icons';


const Container = styled.div`
    display: flex;
`;
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction: column;
    padding: 20px;
`;
const Logo = styled.h1`
    text-align: center;
`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    cursor: pointer;
    width: 50px;
    height: 50px;
    color: #${(props)=>props.color};
    display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  border-radius: 50%;
`;
const Center = styled.div`
    flex:1;
    padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
  text-align: center;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
    flex:1;
    padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

export default function Footer() {
  return (
    <Container>
        <Left>
            <Logo>SHOP IT</Logo>
            <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, animi. Ratione asperiores sunt nesciunt facere error modi amet quos eos.</Desc>
            <SocialContainer>
                <SocialIcon color="3377ff"><Facebook /></SocialIcon>
                <SocialIcon color="ff0066"><Instagram /></SocialIcon>
                <SocialIcon color="33ccff"><Twitter /></SocialIcon>
                <SocialIcon color="ff3300"><Pinterest /></SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
        <Title>USEFUL LINKS</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
        </Center>
        <Right>
            <Title>CONTACT</Title>
            <ContactItem>
            <Room style={{marginRight:"10px"}}/> 622 Local Apartment, Indore
            </ContactItem>
            <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +91 7899876533
            </ContactItem>
            <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> contact@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  );
};
