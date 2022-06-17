import React, { useContext } from "react";
import Context from "../../context/Context";

import TextField from "../inputs/TextField";
import SubmitButton from "../buttons/SubmitButton";
import Form from "../containers/Form";
import Container from "../containers/Container";
import Grid from "../layouts/Grid";
import Hive from "../../svg/Hive";
import Info from "../../svg/Info";
/* import SubmitButtonBlue from "../buttons/SubmitButtonBlue"; */
import MediumText from "../containers/MediumText";
import RegisterInfo from "../modals/RegisterInfo";
import SmallText from "../containers/SmallText";

const Register = () => {
  const {
    form,
    handleFormChange,
    handleRegister,
    showPassword,
    showPasswordModal,
    showUsernameModal,
    onUsernameHover,
    onPasswordHover,
    showMessage,
    handleAlreadyRegistered
  } = useContext(Context);

  return (
    <Form formheight="670px" radius="4px">
      <Container
        height="90px"
        width="100%"
        justifyContent="center"
        content={
          <Grid
            content={
              <>
                <MediumText
                  textAlign="right"
                  content={
                    <p>
                      Welcome to the <strong>Nexus</strong>
                    </p>
                  }
                />
                <Container
                  padding="20px"
                  justifyContent="end"
                  content={<Hive transform="scale(1.5)" />}
                />
              </>
            }
          />
        }
      />
      {/* <MediumText/> */}
      <TextField
        label="first name"
        name="firstname"
        id="firstname"
        type="text"
        value={form.firstname}
        radius="4px"
        onChange={(e) => handleFormChange(e)}
      />
      <TextField
        label="last name"
        name="lastname"
        id="lastname"
        type="text"
        value={form.lastname}
        radius="4px"
        onChange={(e) => handleFormChange(e)}
      />
      <TextField
        label="username"
        name="username"
        id="username"
        icon={<Info />}
        onEvent={onUsernameHover}
        modal={
          showUsernameModal ? (
            <RegisterInfo
              width="150px"
              height="80px"
              text="Between 3 and 23 characters long. Digits or letters."
            />
          ) : (
            ""
          )
        }
        value={form.username}
        radius="4px"
        onChange={(e) => handleFormChange(e)}
      />
      <TextField
        label="e-mail"
        name="email"
        id="e-mail"
        type="email"
        value={form.email}
        radius="4px"
        onChange={(e) => handleFormChange(e)}
      />
      <TextField
        label="password"
        name="password"
        id="password"
        type={showPassword ? "text" : "password"}
        show
        icon={<Info />}
        onEvent={onPasswordHover}
        modal={
          showPasswordModal ? (
            <RegisterInfo
              width="210px"
              height="120px"
              text="Between 8 and 24 characters. At least one digit, on upper- and lowercase letter, one of the following: !@#$%."
            />
          ) : (
            ""
          )
        }
        value={form.password}
        radius="4px"
        onChange={(e) => handleFormChange(e)}
      />
      {showMessage && (
        <SmallText textAlign="center" content="Registration succesful!" />
      )}
      <SubmitButton text="Sign Up" buttonHandler={handleRegister} />
      <SmallText
        content={
          <div
            style={{ display: "flex", flexDirection: "row", margin: "10px" }}
          >
            <p>Already registered? Go to</p>
            <p onClick={handleAlreadyRegistered} style={{marginLeft:"5px", fontWeight: "bold", cursor: "pointer"}}>Login</p>
          </div>
        }
      />
    </Form>
  );
};

export default Register;
