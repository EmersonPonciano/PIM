import React from "react";
import './style.css';
import { Link} from "react-router-dom"

const Login = () => {
  return (
    <div className="login">
      <h1 className="loginName">Login</h1>
      <form
        className="login__form"
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

        <div className="cadastro-link">
          <Link to="./Signup" className="textoConta">Não tem uma conta? <span>Cadastre-se.</span></Link>
        </div>

        <Link to="./Home"><input type="submit" value="Login"/></Link>

      </form>
    </div>
  );
};

export default Login;