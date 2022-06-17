
import React, { useContext } from "react";
import Context from "../context/Context";
import styled from "styled-components";

const Svg = styled.svg`
transform:${props=>props.transform};
`


const Hive = (props) => {
  const {transform} = props
  return (
    <Svg transform={transform}
      
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      width="48"
      viewBox="0 0 48 48"
    >
      <path d="M20.35 42.65 16.95 36.6H10.3L6.55 30.05L9.95 24L6.55 17.95L10.3 11.3H16.95L20.35 5.25H27.75L31.15 11.3H37.8L41.45 17.95L38.05 24L41.45 30.05L37.8 36.6H31.15L27.75 42.65ZM31.2 23.4H37.2L40.25 17.95L37.2 12.4H31.2L28 17.95ZM21.1 29.45H27L30.1 24L27 18.45H21.1L17.9 24ZM21.1 17.35H27L30.15 11.85L27.05 6.35H21.05L17.85 11.85ZM10.95 23.4H16.95L20 17.95L16.95 12.4H10.95L7.75 17.95ZM10.95 35.5H16.95L20 30.05L16.9 24.5H10.9L7.75 30.05ZM21.05 41.55H27.05L30.15 36.1L27 30.55H21.1L17.85 36.1ZM31.2 35.5H37.15L40.25 30.05L37.15 24.5H31.2L28.05 30.05Z" fill="black" />
    </Svg>
  );
};

export default Hive;
