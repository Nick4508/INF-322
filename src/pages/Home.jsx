import React from 'react';
import CenteredBox from '../components/CenteredBox';
import Matematicas from '../components/Matematicas';

const Home = () => {
  return (
    <div>
        <h1 className='Home__title'>Bienvenidos</h1>
            <CenteredBox>
                <h1>Mis cursos</h1>
            <Matematicas />
            </CenteredBox>  
    </div>
  );
}

export default Home;
