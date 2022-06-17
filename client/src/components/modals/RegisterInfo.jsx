import React, { useContext } from "react";
import styled from "styled-components";
import Context from "../../context/Context";

const Div = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 1px solid ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.body};
  border-radius: 4px;
  font-family: "Quicksand";
  font-size: 1rem;
  position: absolute;
  left: 40px;
  bottom: 10px;
  z-index: 4;
`;

const Text = styled.div`
  padding: 5px;
`;

const RegisterInfo = (props) => {
  const { text, width, height } = props;

  return (
    <Div width={width} height={height} text={text}>
      <Text>{text}</Text>
    </Div>
  );
};

export default RegisterInfo;
