import React, { useState } from "react";
import './style.css';
import { toast } from 'react-toastify';
import {auth} from '../../config/firebase';
import { useHistory } from "react-router-dom";


const Signup = () => {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useHistory();

  const registrar = async () => {
    try {
    const user = await auth.createUserWithEmailAndPassword(email, senha);
    navigate.push("/home");
    } catch (error) {
      toast.error(error.message = "Email inválido");
    }
  }

  function handleRegister(e){
    e.preventDefault();
    if (!email || !senha) {
      toast.error("Campos em branco");
    }else{
      registrar();
    }
}

  return (
    <div className="signup">
      <h1 className="loginName">Cadastro</h1>
      <form
        className="signup__form"
        onSubmit={handleRegister}
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