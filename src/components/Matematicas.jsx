import React from 'react';
import '../stylesheets/Matematicas/Card.scss';
import logo from '../assets/intro_matematicas.png';

const Matematicas = () => {
  return (
    <div className="card">
        <div className="card-header">
            <span className="header-text">MATEMATICA</span>
            <img src={logo} alt="Logo" className="Matematicas__logo" />
        </div>
      <div className="card-content">
        <p className="course-title">
          (202402)(MAT024) MATEMATICAS IV
        </p>
        <p className="parallels">
          Paralelos: 200/201/202/203/204/205/206
        </p>
        <div className="progress-bar">
          <div className="progress" style={{ width: '13%' }}></div>
        </div>
        <p className="progress-text">13% completado</p>
      </div>
    </div>
  );
};

export default Matematicas;
