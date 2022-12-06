import React from 'react'
import styled from 'styled-components';

import cat from '../assets/NeonCat.gif'

const MessageBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 100%;
    height: 100vh;
    color: #ffffff;
    background-color: black;   
    overflow: hidden; 
`;

export default function NotDesktop() {
  return (
    <MessageBox>
        <img src={cat} alt="Neon Cat"/>
        <h1>Hello!</h1>
        <p>This website was made for you!</p>
        <p>...but on desktop </p>
    </MessageBox>
  )
}
