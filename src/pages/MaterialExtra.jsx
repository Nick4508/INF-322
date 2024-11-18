import React, { useState } from 'react';
import '../stylesheets/Catedra/catedra.scss';
import pdf from "../assets/Pdf.png";

const MaterialExtraResources = [
  { id: 1, name: 'Certamen1-Pauta', icon: '📜', imageUrl: pdf },
  { id: 2, name: 'Certamen2-Pauta', icon: '📜', imageUrl: pdf },
  { id: 3, name: 'Certamen3-Pauta', icon: '📜', imageUrl: pdf },
];

const MaterialExtra = () => {
  const [alertMessage, setAlertMessage] = useState('');

  const handleClick = (resourceName) => {
    setAlertMessage(`Descargaste: ${resourceName}`); 
    setTimeout(() => {
      setAlertMessage(''); 
    }, 3000);
  };

  return (
    <div>
      <h2>Pautas</h2>
      {alertMessage && (
        <div className="alert">
          <span>{alertMessage}</span>
          <button className="close-button" onClick={() => setAlertMessage('')}>X</button>
        </div>
      )}
      <ul className="resource-list">
        {MaterialExtraResources.map((resource) => (
          <li key={resource.id} className="resource-item">
            <div className="clickable-content" onClick={() => handleClick(resource.name)}>
              <img 
                src={resource.imageUrl} 
                alt={resource.name} 
                className="resource-icon" 
              />
              <span className="resource-name">{resource.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MaterialExtra;
