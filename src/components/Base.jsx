import React from 'react';
import '../stylesheets/Base/index.scss';
import logo from '../assets/marca-color.png';

const Base = () => {
    return (
      <div className="Base">
        <img src={logo} alt="Logo" className="Base__logo" />
      </div>
      
    );
  };
  
  export default Base;