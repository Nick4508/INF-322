import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Catedra/catedra.scss';
import '../stylesheets/InformacionGeneral/InformacionGeneral.scss'
import pdf from "../assets/Pdf.png";
import foro from "../assets/Forum.png";
import Countdown from '../components/Countdown';

const resources = [
  { id: 1, name: 'Noticias y avisos importantes', icon: '📰', imageUrl: foro },
  { id: 2, name: 'Planificación de la asignatura', icon: '📅', imageUrl: pdf },
  { id: 3, name: 'Apunte MAT-024', icon: '📘', imageUrl: pdf },
  { id: 4, name: 'Reglas del curso', icon: '📜', imageUrl: pdf },
];



const Catedra = () => {
  const [alertMessage, setAlertMessage] = useState('');
  
  const [countdownHidden, setCountdownHidden] = useState(false);

  const handleClick = (resource) => {
    setAlertMessage(`Descargaste : ${resource.name}`);
    setTimeout(() => {
      setAlertMessage('');
    }, 3000);
  };

  const [selectedDates, setSelectedDates] = useState([]);

  useEffect(() => {
      const storedDates = JSON.parse(localStorage.getItem('selectedDates')) || [];
      setSelectedDates(storedDates);
  }, []);

  const handleRemoveCountdown = (id) => {
      const updatedDates = selectedDates.filter(date => date.id !== id);
      setSelectedDates(updatedDates);
      localStorage.setItem('selectedDates', JSON.stringify(updatedDates));
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
      {countdownHidden == false && (
      <div className='InformacionGeneral__Alertcontainer'>
      {selectedDates.map((date) => (
          <div key={date.id} className='InformacionGeneral__Countdowncontainer'>
              <button onClick={() => handleRemoveCountdown(date.id)} className="InformacionGeneral__Button">
                  X
              </button>
              <Countdown targetDate={new Date(date.date)} eventDescription={date.name} />
          </div>
      ))}
      <button className='InformacionGeneral__ButtonHidealert' onClick={() => setCountdownHidden(true)}>
          Cerrar alerta
      </button>
      </div>
    
      )}
    </div>
  );
};

export default Catedra;
