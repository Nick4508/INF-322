import React, { useEffect, useState } from 'react';
import CenteredBox from '../components/CenteredBox';
import Navbar from '../components/navbar';
import Bluebar from '../components/Bluebar';

const Curso = () => {

  return (
    <div>
      <Bluebar />
      <h1 className='Curso__title'>(202402)(MAT024) MATEMATICAS IV | Paralelos: 200/201/202/203/204/205/206</h1>
      <CenteredBox>
        <Navbar />
      </CenteredBox>
    </div>
  );
};

export default Curso;
