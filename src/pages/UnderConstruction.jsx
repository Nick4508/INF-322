import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/UnderConstruction/underconstruction.scss';

const UnderConstruction = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');  // Navega a la página de inicio
  };

  return (
    <div className="under-construction">
      <h1>🚧 Sitio en Construcción 🚧</h1>
      <p>Estamos trabajando para mejorar tu experiencia. ¡Vuelve pronto!</p>
      <button onClick={handleBackToHome} className="back-button">
        Volver al Inicio
      </button>
    </div>
  );
};

export default UnderConstruction;
