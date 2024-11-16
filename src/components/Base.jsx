import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Base/index.scss';
import logo from '../assets/marca-color.png';
import userIcon from '../assets/user-icon.png'; 

const Base = () => {
  return (
    <div className="Base">
      <div className="Base__logo-container">
        <Link to='/' className='Base__logolink'>
          <img src={logo} alt="Logo" className="Base__logo" />
        </Link>
        <Link to="/" className="Base__homebutton">
          Página Principal
        </Link>
      </div>

      <Link to="/construccion" className="Base__userlink">
        <img src={userIcon} alt="Usuario" className="Base__user" />
      </Link>
    </div>
  );
};

export default Base;
