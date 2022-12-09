import React, { useState, useEffect } from 'react';
import firebaseDb from '../../config/firebase.js';
import { Link } from 'react-router-dom';
import './style.css';
import { toast } from 'react-toastify';
import Header from '../../components/Header/';


const Home = () => {
  const [data, setData] = useState({});
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
  }, []);

  const onDelete = (id) => {
    if (window.confirm("Deletar veículo?")) {
      firebaseDb.child(`veiculos/${id}`).remove((err) => {
        if (err) {
          console.log(err);
        } else {
          toast.success("Veículo deletado");
        }
      });
    }
  };
  return (
    <div className="home">
      <Header/>
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Veículo</th>
            <th>Ano</th>
            <th>Proprietário</th>
            <th>Horário de entrada</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((id, index) => {
            return (
              <tr key={id}>
                <th scope="row">{id}</th>
                <td>{data[id].veiculo}</td>
                <td>{data[id].ano}</td>
                <td>{data[id].proprietario}</td>
                <td>{data[id].horarioEntrada}</td>
                <td>
                  <button
                    className="btn btn-delete"
                    onClick={() => onDelete(id)}
                  >
                    Excluir
                  </button>
                  <Link to={`/view/${id}`}>
                    <button className="btn btn-view">Vizaulizar</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;