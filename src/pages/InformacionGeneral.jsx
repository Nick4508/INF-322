import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Catedra/catedra.scss';
import pdf from "../assets/Pdf.png";
import foro from "../assets/Forum.png";

const resources = [
  { id: 1, name: 'Noticias y avisos importantes', icon: '📰', imageUrl: foro },
  { id: 2, name: 'Planificación de la asignatura', icon: '📅', imageUrl: pdf },
  { id: 3, name: 'Apunte MAT-024', icon: '📘', imageUrl: pdf },
  { id: 4, name: 'Reglas del curso', icon: '📜', imageUrl: pdf },
];

const Catedra = () => {
  const [alertMessage, setAlertMessage] = useState('');
  
  const handleClick = (resource) => {
    setAlertMessage(`Descargaste : ${resource.name}`);
    setTimeout(() => {
      setAlertMessage('');
    }, 3000);
  };

  return (
    <div>
      <h2>Información General</h2>
      {alertMessage && (
        <div className="alert">
          <span>{alertMessage}</span>
          <button className="close-button" onClick={() => setAlertMessage('')}>X</button>
        </div>
      )}
      <ul className="resource-list">
        {resources.map((resource) => (
          <li key={resource.id} className="resource-item">
            {resource.id === 1 ? (
              <Link to="/construccion" className="no-underline clickable-content">
                <img src={resource.imageUrl} alt={resource.name} className="resource-icon" />
                <span className="resource-name">{resource.name}</span>
              </Link>
            ) : (
              <div onClick={() => handleClick(resource)} className="clickable-content">
                <img src={resource.imageUrl} alt={resource.name} className="resource-icon" />
                <span className="resource-name">{resource.name}</span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catedra;
