import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Base/index.scss';
import logo from '../assets/marca-color.png';

const Base = () => {
    return (
      <div className="Base">
        <Link to='/' className='Base__logolink'>
          <img src={logo} alt="Logo" className="Base__logo" />
        </Link>
      </div>
      
    );
  };
  
  export default Base;