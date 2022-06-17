import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  display: flex;
  position: relative;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
`;

const Container = (props) => {
  const { width, height, padding, content, justifyContent } = props;
  return (
    <Div width={width} height={height} padding={padding} justifyContent={justifyContent}>
      {content}
    </Div>
  );
};

export default Container;

/* opacity: 0.8;
  background: linear-gradient(135deg, black 25%, transparent 25%) -10px 0/
      20px 20px,
    linear-gradient(225deg, grey 25%, transparent 25%) -10px 0/ 20px 20px,
    linear-gradient(315deg,black 25%, transparent 25%) 0px 0/ 20px 20px,
    linear-gradient(45deg, grey 25%, white 25%) 0px 0/ 20px 20px; */
