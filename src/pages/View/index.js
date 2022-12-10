import React, { useState, useEffect } from 'react';
import firebaseDb from '../../config/firebase.js';
import { useParams, Link, useHistory } from 'react-router-dom';
import './style.css';

const View = () => {
  const [data, setData] = useState({});

  let currentId = useParams();
  const { id } = currentId;
  const history = useHistory();
  useEffect(() => {
    firebaseDb.child("veiculos").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({
          ...snapshot.val(),
        });
      } else {
        snapshot({});
      }
    });
  }, [id]);
  return (
    <div className="container mt-5">
      {Object.keys(data).map((userId) => {
        if (userId === id) {
          return (
            <div key={userId} className="view">
              <div className="card">
                <div className="card-header">
                  <p>Detalhes do veículo</p>
                </div>
                <div className="container">
                  <strong>Veículo: </strong>
                  <span>{data[id].veiculo}</span>
                  <br />
                  <br />
                  <strong>Ano: </strong>
                  <span>{data[id].ano}</span>
                  <br />
                  <br />
                  <strong>Placa: </strong>
                  <span>{data[id].placa}</span>
                  <br />
                  <br />
                  <strong>Descrição dos serviços: </strong>
                  <span>{data[id].descricao}</span>
                  <br />
                  <br />
                  <strong>Data de entrada: </strong>
                  <span>{data[id].horarioEntrada}</span>
                  <br />
                  <br />
                  <strong>Valor total: </strong>
                  <span>{"R$"+data[id].valorServico}</span>
                </div>
                <br />
                <br />

                <Link to="/home">
                  <button
                    className="btn btn-edit"
                    onClick={() => history.push("/home")}
                  >
                    Voltar
                  </button>
                </Link>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default View;
