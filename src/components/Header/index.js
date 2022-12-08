import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  return (
    <div className="header">
      <p className="logo">AutoSys</p>
      <div className="header-right">
        <Link to="/">
          <p
            className={`${activeTab === "Home" ? "active" : ""}`}
            onClick={() => setActiveTab("Home")}
          >
            Veículos
          </p>
        </Link>
        <Link to="/add">
          <p
            className={`${activeTab === "AddContact" ? "active" : ""}`}
            onClick={() => setActiveTab("Add Contact")}
          >
            Adicionar veículo
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;