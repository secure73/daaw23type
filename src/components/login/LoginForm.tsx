// Teil von Dominik
import React, { useState } from "react";
import RegisterInput from "./register/RegisterInput";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //const navigate = useNavigate();
  /*const register = () => {
    navigate("/");
  }*/
console.log('login is running');
  return (
    <div className="col-lg-6">
      <h1>Login to website</h1>
      <form method="post">
        <br />
        <label className="">Email: </label>
        <RegisterInput
          type="email"
          placeholder="something@something.com"
          setterFunction={setEmail}
        />
        <br />
        <br />
        <label>Passwort:</label>
        <RegisterInput
          type="password"
          placeholder="Your Password"
          setterFunction={setPassword}
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
