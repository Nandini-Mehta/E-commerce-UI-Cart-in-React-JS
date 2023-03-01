import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background-color: teal;
    align-items: center;
    color: white;
    font-size: 16px;
    display: flex;
    justify-content: center;
`;

export default function Announcement() {
  return (
    <Container>
        A big Deal Season 🎉🎉
    </Container>
  );
};
