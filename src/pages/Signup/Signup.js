import React, { useState } from "react";
import { Link} from "react-router-dom";
import './style.css';
import {auth} from '../../config/firebase';

const Signup = () => {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const registrar = async () => {
    try {
    const user = await auth.createUserWithEmailAndPassword(email, senha);
    console.log(user);
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="signup">
      <h1 className="loginName">Cadastro</h1>
      <form
        className="signup__form"
        onSubmit={registrar}
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

        <input type="submit" value="Cadastrar"/>

      </form>
    </div>
  );
};

export default Signup;