import React, { useContext } from "react";
import Context from "../../context/Context";

import TextField from "../inputs/TextField";
import SubmitButton from "../buttons/SubmitButton";
import Form from "../containers/Form";
import Container from "../containers/Container";
import Grid from "../layouts/Grid";
import Hive from "../../svg/Hive";
/* import SubmitButtonBlue from "../buttons/SubmitButtonBlue"; */
import MediumText from "../containers/MediumText";
import SmallText from "../containers/SmallText";

const Login = () => {
  const { form, handleFormChange, handleLogin, showPassword, showMessage } = useContext(Context);

  return (
    <Form formheight="370px" radius="4px">
      <Container
        height="70px"
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
                      Re-enter <br/>the <strong>Nexus</strong>
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
      <TextField
        label="e-mail"
        name="email"
        id="loginemail"
        type="text"
        radius="4px"
        value={form.email}
        onChange={(e) => handleFormChange(e)}
      />
      <TextField
        label="password"
        name="password"
        id="loginpassword"
        show
        radius="4px"
        type={showPassword ? "text" : "password"}
        pwField
        value={form.password}
        onChange={(e) => handleFormChange(e)}
      />
      {showMessage && <SmallText textAlign="center" content="Login succesful!"/>}
      <SubmitButton text="Login" buttonHandler={handleLogin}/>
    </Form>
  );
};

export default Login;
