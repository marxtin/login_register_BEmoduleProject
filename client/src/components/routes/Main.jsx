import React, { useContext } from "react";
import Context from "../../context/Context";
import Register from "./Register";
import Login from "./Login";
import UserData from "../containers/UserData";

const Main = () => {
  const { registered, showCredentials } = useContext(Context);

  return (
    <div>
      {registered ? showCredentials ? "" : <Login /> : <Register />}
      {showCredentials && <UserData />}
    </div>
  );
};

export default Main;
