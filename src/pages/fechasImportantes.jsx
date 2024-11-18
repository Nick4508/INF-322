import React, { useState, useEffect } from 'react';
import '../stylesheets/Catedra/catedra.scss';

const FechasImportantes = () => {
  const fechas = [
    { id: 1, name: 'Control 3', date: '2024-11-17T23:59:59' },
    { id: 2, name: 'Certamen 3', date: '2024-11-24T15:00:00' },
    { id: 3, name: 'Certamen Global', date: '2024-12-02T15:00:00' },
  ];

  const [selectedDates, setSelectedDates] = useState([]);

  useEffect(() => {
    const storedDates = JSON.parse(localStorage.getItem('selectedDates')) || [];
    setSelectedDates(storedDates);
  }, []);

  const handleSwitchChange = (event, date) => {
    const updatedDates = event.target.checked
      ? [...selectedDates, date]
      : selectedDates.filter(d => d.id !== date.id);
    setSelectedDates(updatedDates);
    localStorage.setItem('selectedDates', JSON.stringify(updatedDates));
  };

  return (
    <div>
      <h2>Fechas Importantes</h2>

      <ul className="resource-list">
        {fechas.map((fecha) => (
          <li key={fecha.id} className="resource-item">
            <label title="Activar notificación"className="switch">
              <input
                type="checkbox"
                checked={selectedDates.some(d => d.id === fecha.id)}
                onChange={(e) => handleSwitchChange(e, fecha)}
              />
              <span className="slider round"></span>
            </label>
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
