import React from "react";
import styled from "styled-components";

const Div = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  place-self: center;
`;

const Button = styled.button`
  width: 150px;
  height: 35px;
  background: ${({ theme }) => theme.buttonBackground};
  border: 0px solid ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.body};
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:active {
    transform: scale(0.95);
  }
  
`;

const ButtonText = styled.p`
font-family: NotoSans;

font-weight: 900;
font-size: 1rem;
font-style: italic;
`

const SubmitButtonBlue = (props) => {
  const { buttonHandler, text } = props;
  return (
    <Div>
      <Button onClick={buttonHandler}><ButtonText>{text}</ButtonText></Button>
    </Div>
  );
};

export default SubmitButtonBlue;
