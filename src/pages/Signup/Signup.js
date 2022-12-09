import React from "react";
import { Link} from "react-router-dom";
import './style.css';

const Signup = () => {
  return (
    <div className="signup">
      <h1 className="loginName">Cadastro</h1>
      <form
        className="signup__form"
      >
        <label>Email</label>
        <input
          type="email"
          placeholder=""
        />

        <label>Senha</label>
        <input
          type="password"
          placeholder=""
        />

        <Link to="./Home"><input type="submit" value="Cadastrar"/></Link>

      </form>
    </div>
  );
};

export default Signup;