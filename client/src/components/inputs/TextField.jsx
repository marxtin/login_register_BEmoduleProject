import React from "react";
import styled from "styled-components";
import Visibility from "../buttons/Visibility";

const Div = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  place-self: center;
`;

const Field = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

const Input = styled.input`
  width: ${(props) => (props.reducedWidth ? "190px" : "225px")};
  height: 35px;
  border: 1px solid ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
  border-radius: ${props=>props.radius};
  font-family: "Quicksand";
  font-size: 1rem;
`;

const Label = styled.div`
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;

  position: relative;
`;

const Icon = styled.div`
  display: flex;
  height: 25px;
  width: 25px;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  position: relative;
`;

const TextField = (props) => {
  const { label, type, name, id, value, onChange, reducedWidth, show, icon, modal, onEvent, radius } =
    props;
 

  return (
    <Div>
      <Label>
        <label>{label}</label>
        <Icon onMouseOver={onEvent} onMouseOut={onEvent}>
          {icon}
          {modal}
        </Icon>
      </Label>
      <Field>
        <Input
          reducedWidth={reducedWidth}
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          radius={radius}
        />
        <Visibility show={show} />
      </Field>
    </Div>
  );
};

export default TextField;
