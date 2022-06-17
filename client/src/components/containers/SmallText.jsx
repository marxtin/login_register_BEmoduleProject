import React from "react";
import styled from "styled-components";

const Main = styled.div`
  font-family: "Quicksand";
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  font-weight: 300;
  text-align: ${props=>props.textAlign};
  overflow-wrap: break-word;
  transform: scaleY(1.1);
`;

const SmallText = (props) => {
  const { content, textAlign } = props;
  return <Main textAlign={textAlign}>{content}</Main>;
};

export default SmallText;