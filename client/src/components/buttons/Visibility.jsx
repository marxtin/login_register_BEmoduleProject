import React, { useContext } from "react";
import styled from "styled-components";
import Context from "../../context/Context";
import Visible from "../../svg/Visible";
import Invisible from "../../svg/Invisible";

const Div = styled.div`
  width: 35px;
  height: 35px;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 4px;
  display: ${(props) => (props.show ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
`;
const Visibility = (props) => {
  const { show } = props;
  const { showPassword, toggleShowPassword } = useContext(Context);

  return (
    <Div show={show} onClick={toggleShowPassword}>
      {showPassword ? <Invisible /> : <Visible />}
    </Div>
  );
};

export default Visibility;
