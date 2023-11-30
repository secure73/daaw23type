// Teil von Dominik
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const doLogin = async () => {
    const newForm = new FormData();
    newForm.append("email", email);
    newForm.append("password", password);

    await axios
      .post("http://localhost:8080/auth/login", newForm)
      .then((response) => {
        console.log(response.data.data[0]);
        localStorage.setItem("token", response.data.data[0]);
        toast.success("Login successful");
      })
      .catch((error) => {
        console.log(error.response.data.service_message);
        toast.error(error.response.data.service_message);
      });
  };

  return (
    <div className="col-lg-6">
      <h1>Login to website</h1>
      <form
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
          doLogin();
        }}
      >
        <br />
        <label className="">Email: </label>

        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <br />
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
export default LoginForm;
