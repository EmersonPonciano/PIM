import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './style.css';
import firebaseDb from '../../config/firebase.js';
import { toast } from 'react-toastify';
import Header from '../../components/Header/';

const AddEdit = () => {
  const initialState = {
    veiculo: "",
    proprietario: "",
    ano: "",
    telefone: "",
    placa: "",
    valorServico: "",
    horarioEntrada: "",
    descricao: "",
  };
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});
  const { veiculo, proprietario, ano, telefone, placa, valorServico, horarioEntrada, descricao } = state;

  const history = useHistory();

  const { id } = useParams();
  useEffect(() => {
    firebaseDb.child("veiculos").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({
          ...snapshot.val(),
        });
      } else {
        setData({});
      }
    });
    return () => {
      setData({});
    };
  }, [id]);

  useEffect(() => {
    if (id) {
      setState({ ...data[id] });
    } else {
      setState({ ...initialState });
    }
    return () => {
      setState({ ...initialState });
    };
  }, [id, data]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!veiculo || !proprietario || !ano || !telefone || !placa || !valorServico || !horarioEntrada || !descricao) {
      toast.error("Campos em branco");
    } else {
      if (!id) {
        firebaseDb.child("veiculos").push(state, (err) => {
          if (err) {
            toast.error(err);
          } else {
            toast.success("Veículo adicionado com sucesso");
          }
        });
      } else {
        firebaseDb.child(`/veiculos/${id}`).set(state, (err) => {
          if (err) {
            toast.error(err);
          } else {
            toast.success("Veículo atualizado");
          }
        });
      }
      setTimeout(() => history.push("/"), 500);
    }
  };
  return (
    <div className="add-edit">
      <Header/>
      <form
        className="add-edit__form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="veiculo">Veículo:</label>
        <input
          type="text"
          id="veiculo"
          name="veiculo"
          placeholder="Digite a marca e modelo..."
          value={veiculo || ""}
          onChange={handleInputChange}
        />

        <label htmlFor="ano">Ano:</label>
        <input
          type="number"
          id="ano"
          name="ano"
          placeholder="Digite o ano do veículo..."
          value={ano || ""}
          onChange={handleInputChange}
        />
        
        <label htmlFor="placa">Placa:</label>
        <input
          type="text"
          id="placa"
          name="placa"
          placeholder="Digite a placa do veículo..."
          value={placa || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="proprietario">Proprietário:</label>
        <input
          type="text"
          id="propietario"
          name="proprietario"
          placeholder="Digite o nome do proprietário..."
          value={proprietario || ""}
          onChange={handleInputChange}
        />

        <label htmlFor="telefone">Telefone:</label>
        <input
          type="number"
          id="telefone"
          name="telefone"
          placeholder="Digite o telefone do proprietário..."
          value={telefone || ""}
          onChange={handleInputChange}
        />

        <label htmlFor="valorServico">Valor do serviço:</label>
        <input
          type="number"
          id="valorServico"
          name="valorServico"
          placeholder="Digite o valor do serviço..."
          value={valorServico || ""}
          onChange={handleInputChange}
        />

        <label htmlFor="horarioEntrada">Horário de entrada:</label>
        <input
          type="text"
          id="horarioEntrada"
          name="horarioEntrada"
          placeholder="Digite o horário de entrada... (EX: 20/10/2021 19:10)"
          value={horarioEntrada || ""}
          onChange={handleInputChange}
        />

        <label htmlFor="descricao">Descricao:</label>
        <input
          type="text"
          id="descricao"
          name="descricao"
          placeholder="Descrição dos serviços..."
          value={descricao || ""}
          onChange={handleInputChange}
        />

        <input type="submit" value={id ? "Atualizar" : "Cadastrar"} />
      </form>
    </div>
  );
};

export default AddEdit;