// Teil von Dominik
import React, { useState } from "react";

const RegisterForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //const navigate = useNavigate();
  /*const register = () => {
    navigate("/");
  }*/
console.log('register is running');
  return (
    <div className="col-lg-6">
      <h1>Register to website</h1>
      <form method="post">
        
        <br />
        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
