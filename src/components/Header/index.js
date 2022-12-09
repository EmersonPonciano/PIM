import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  return (
    <div className="header">
      <p className="logo">AutoSys</p>
      <div className="header-right">
        <Link to="/home">
          <p
            className={`${activeTab === "Home" ? "active" : ""}`}
            onClick={() => setActiveTab("Home")}
          >
            Veículos
          </p>
        </Link>
        <Link to="/add">
          <p
            className={`${activeTab === "AddVehicle" ? "active" : ""}`}
            onClick={() => setActiveTab("Add Vehicle")}
          >
            Adicionar veículo
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;