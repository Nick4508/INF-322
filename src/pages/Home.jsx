import React from 'react';
import CenteredBox from '../components/CenteredBox'; // Asegúrate de que la ruta es correcta
import Matematicas from '../components/Matematicas';

const Home = () => {
  return (
    <div>
        <h1>Bienvenidos</h1>
            <CenteredBox>
                <h1>Mis cursos</h1>
            <Matematicas />
            </CenteredBox>  
    </div>
  );
}

export default Home;
