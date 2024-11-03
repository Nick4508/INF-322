// src/components/navbar.jsx
import React, { useState } from 'react';
import '../stylesheets/navbar/navbar.css'; // Crear este archivo CSS para los estilos de la navbar con pestañas

const navbar = () => {
  const [activeTab, setActiveTab] = useState("informacion-general");

  return (
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
  );
};

export default navbar;
