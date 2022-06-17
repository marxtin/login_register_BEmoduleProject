import React from "react";
import styled from "styled-components";

const Container = styled.form`
  width: 275px;
  height: ${(props) => props.formheight};
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  border: 1px solid ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.body};
  border-radius: ${props=>props.radius};
`;

const Form = (props) => {
  const { formheight, radius } = props;
  return <Container formheight={formheight} radius={radius}>{props.children}</Container>;
};

export default Form;
