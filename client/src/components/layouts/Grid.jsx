import React from "react";
import styled from "styled-components";

const Div = styled.div`
display: grid;
width:90%;
grid-template-columns: 
  repeat(auto-fit, minmax(50px, 1fr));

`

const Grid = (props) => {
    const {content} = props;
  return <Div>{content}</Div>;
};

export default Grid;
