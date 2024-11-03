import React, { useState } from 'react';
import InformacionGeneral from '../pages/InformacionGeneral';
import Catedra from '../pages/Catedra';
import Ayudantias from '../pages/Ayudantias';
import MaterialExtra from '../pages/MaterialExtra';
import '../stylesheets/navbar/navbar.css';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("informacion-general");

  const renderContent = () => {
    switch (activeTab) {
      case "informacion-general":
        return <InformacionGeneral />;
      case "catedra":
        return <Catedra />;
      case "ayudantias":
        return <Ayudantias />;
      case "material-extra":
        return <MaterialExtra />;
      default:
        return <InformacionGeneral />;
    }
  };

  return (
    <div>
      <div className="tab-navbar">
        <button 
          className={`tab-item ${activeTab === "informacion-general" ? "active" : ""}`}
          onClick={() => setActiveTab("informacion-general")}
        >
          Información General
        </button>
        <button 
          className={`tab-item ${activeTab === "catedra" ? "active" : ""}`}
          onClick={() => setActiveTab("catedra")}
        >
          Cátedra
        </button>
        <button 
          className={`tab-item ${activeTab === "ayudantias" ? "active" : ""}`}
          onClick={() => setActiveTab("ayudantias")}
        >
          Ayudantías
        </button>
        <button 
          className={`tab-item ${activeTab === "material-extra" ? "active" : ""}`}
          onClick={() => setActiveTab("material-extra")}
        >
          Material Extra
        </button>
      </div>
      <div className="tab-content">
        {renderContent()} 
      </div>
    </div>
  );
};

export default Navbar;
