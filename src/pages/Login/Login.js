import React, { useState } from "react";
import './style.css';
import {auth} from '../../config/firebase';
import { toast } from 'react-toastify';
import { Link, useHistory } from "react-router-dom";

const Login = () => {

  const[email, setEmail]= useState("");
  const[senha, setSenha]= useState("");

  const navigate = useHistory();

  const logar = async () => {
    try {
    const user = await auth.signInWithEmailAndPassword(email, senha);
    navigate.push("/home");
    } catch (error) {
      toast.error(error.message = "Usuário ou senha inválido(s)");
    }
  }

  function handleLogin(e){
    e.preventDefault();
    if (!email || !senha) {
      toast.error("Campos em branco");
    }else{
      logar();
    }
}

  return (
    <div className="login">
      <h1 className="loginName">Login</h1>
      <form
        className="login__form"
        onSubmit={handleLogin}
      >
        <label>Email</label>
        <input
          type="email"
          placeholder=""
         onChange={(event) => {setEmail(event.target.value)}}
        />

        <label>Senha</label>
        <input
          type="password"
          placeholder=""
          onChange={(event) => {setSenha(event.target.value)}}
        />

        <div className="cadastro-link">
          <Link to="./Signup" className="textoConta">Não tem uma conta? <span>Cadastre-se.</span></Link>
        </div>

        <input type="submit" value="Login"/>

      </form>
    </div>
  );
};

export default Login;