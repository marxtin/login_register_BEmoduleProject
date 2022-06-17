import React, { useState, useEffect } from "react";
import axios from "axios";
import Context from "./Context";

const apiUrl = "http://localhost:3000";


axios.interceptors.request.use(
  config => {
    const { origin } = new URL(config.url);
    const allowedOrigins = [apiUrl];
    const token = localStorage.getItem('token');
    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
); 

const Provider = ({ children }) => {
  const [form, setForm] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [data, setData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showUsernameModal, setShowUsernameModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [showCredentials, setShowCredentials] = useState(false);
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState();

  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const RegisterURL = "http://localhost:3001/api/users/register";
  const LoginURL = "http://localhost:3001/api/users/login";

  const handleFormChange = (e) => {
    const updatedForm = { ...form, [e.target.name]: e.target.value };
    setForm(updatedForm);
    setData(form);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const testUserName = USER_REGEX.test(form.username);
    const testPassword = PWD_REGEX.test(form.password);
    if (!testUserName || !testPassword) {
      alert("insufficient input");
      return;
    }

    await axios
      .post(RegisterURL, data)
      .then((response) => {
        console.log(response);
        setShowMessage(true);
        setRegistered(true);
      })
      .catch((error) => {
        alert(error);
      });

    console.log(data);
    setForm({
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(form.email, form.password);
    await axios
      .post(LoginURL, { email: form.email, password: form.password })
      .then((response) => {
        console.log(response);
        setShowMessage(true);
        localStorage.setItem("nexustoken", response.data.token);
        setEmail(form.email);
      })
      .catch((error) => {
        alert(error);
      });

    const storedJwt = localStorage.getItem("nexustoken");
    if (storedJwt) {
      setShowCredentials(true);
    }
  };

  const onPasswordHover = () => {
    setShowPasswordModal(!showPasswordModal);
  };

  const onUsernameHover = () => {
    setShowUsernameModal(!showUsernameModal);
  };

  const handleAlreadyRegistered = () => {
    setRegistered(true);
  };
 

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `http://localhost:3001/api/users/profile/`
        
      );
      setUsers(response.data);
    }
    getData();
  },[]);

 

  return (
    <Context.Provider
      value={{
        form,
        handleFormChange,
        handleLogin,
        handleRegister,
        showPassword,
        toggleShowPassword,
        showPasswordModal,
        showUsernameModal,
        onPasswordHover,
        onUsernameHover,
        showMessage,
        registered,
        handleAlreadyRegistered,
        showCredentials,
        email,
        users
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
