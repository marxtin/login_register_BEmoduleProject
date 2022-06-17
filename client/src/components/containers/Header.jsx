import React from "react";
import styled from "styled-components";

const Container = styled.header`
width: 100%;
height: 50px;
display: flex;
flex-direction:row;
border: 1px solid ${({ theme }) => theme.text};
background: ${({ theme }) => theme.body};
`

const Header = () => {
  return <Container></Container>;
};

export default Header;
