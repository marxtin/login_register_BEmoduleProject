import React, { useContext } from "react";
import Context from "../../context/Context";
import styled from "styled-components";


const Container = styled.form`
  width: 275px;
  height: ${(props) => props.formheight};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.body};
  border-radius: 4px;
`;

const UserData = (props) => {
  const { users, email } = useContext(Context);
  console.log(users);
  const user = users.filter((user) => user.email == email);
  console.log(user);
  const { formheight } = props;

  return (
    <Container formheight={formheight}>
      <div style={{ padding: "5px" }}>
        <h3>Your credentials:</h3>
        <p>First name: {user[0].firstname}</p>
        <p>Last name: {user[0].lastname}</p>
        <p>Username: {user[0].username}</p>
        <p>E-Mail-Adress: {user[0].email}</p>
      </div>
    </Container>
  );
};

export default UserData;
