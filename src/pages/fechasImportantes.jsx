import React, { useState } from 'react';
import '../stylesheets/Catedra/catedra.scss';

const FechasImportantes = () => {
  

  const fechas = [
    { id: 1, name: 'Control 3', date: '2024-11-17T23:59:59' },
    { id: 2, name: 'Certamen 3', date: '2024-11-24T15:00:00' },
    { id: 3, name: 'Certamen Global', date: '2024-12-02T15:00:00' },
  ];

  return (
    <div>
      <h2>Fechas Importantes</h2>

      <ul className="resource-list">
        {fechas.map((fecha) => (
          <li key={fecha.id} className="resource-item">
            <span className="resource-icon">📅</span>
            <span className="resource-name">
              {fecha.name} - {new Date(fecha.date).toLocaleDateString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FechasImportantes;
