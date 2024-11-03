import React from 'react';
import CenteredBox from '../components/CenteredBox'; // Asegúrate de que la ruta es correcta
import Matematicas from '../components/Matematicas';
import Navbar from '../components/navbar'

const Home = () => {
  return (
    <div>
        <h1>Bienvenidos</h1>
            <CenteredBox>
                <h1>Mis cursos</h1>
            <Navbar />
            </CenteredBox>  
    </div>
  );
}

export default Home;
