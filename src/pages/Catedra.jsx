import React, { useState } from 'react';
import '../stylesheets/Catedra/catedra.scss'; // Importa el archivo SCSS que contiene los estilos

const catedraResources = [
  { id: 1, name: 'PPTS-clases-C1', icon: '📄' },
  { id: 2, name: 'PPTS-clases-C2', icon: '📄' },
  { id: 3, name: 'PPTS-clases-C3', icon: '📄' },
];

const Catedra = () => {
  const [alertMessage, setAlertMessage] = useState('');

  const handleClick = (resourceName) => {
    setAlertMessage(`Descargaste : ${resourceName}`); // Mensaje de alerta
    setTimeout(() => {
      setAlertMessage(''); // Oculta la alerta después de 3 segundos
    }, 3000);
  };

  return (
    <div>
      <h2>Cátedra</h2>
      {alertMessage && (
        <div className="alert">
          <span>{alertMessage}</span>
          <button className="close-button" onClick={() => setAlertMessage('')}>X</button>
        </div>
      )}
      <ul className="resource-list">
        {catedraResources.map((resource) => (
          <li
            key={resource.id}
            className="resource-item"
            onClick={() => handleClick(resource.name)} 
          >
            <span>{resource.icon}</span>
            {resource.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catedra;
