import React from 'react';
import { useNavigate } from 'react-router-dom';

const FechasImportantes = () => {
  const navigate = useNavigate();

  const handleDateClick = (date, description) => {
    localStorage.setItem('selectedDate', date); 
    localStorage.setItem('eventDescription', description); 
    navigate('/curso'); 
  };

  const fechas = [
    { id: 1, name: 'Examen Parcial', date: '2024-11-15T10:00:00' },
    { id: 2, name: 'Entrega de Proyecto', date: '2024-12-01T23:59:59' },
    { id: 3, name: 'Examen Final', date: '2024-12-20T15:00:00' },
  ];

  return (
    <div>
      <h2>Fechas Importantes</h2>
      <ul>
        {fechas.map((fecha) => (
          <li 
            key={fecha.id} 
            onClick={() => handleDateClick(fecha.date, fecha.name)} 
            className="date-item"
            style={{ cursor: 'pointer', margin: '10px 0' }}
          >
            {fecha.name} - {new Date(fecha.date).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FechasImportantes;
