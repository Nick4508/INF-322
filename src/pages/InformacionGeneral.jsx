import React from 'react';
import '../stylesheets/Curso/informacion.css'

const resources = [
  { id: 1, name: 'Noticias y avisos importantes', icon: '📰' },
  { id: 2, name: 'Planificación de la asignatura', icon: '📅' },
  { id: 3, name: 'Apunte MAT-024', icon: '📘' },
  { id: 4, name: 'Reglas del curso', icon: '📜' },
];

const Catedra = () => {
  return (
    <div>
      <h2>Información General</h2>
      <ul>
        {resources.map((resource) => (
          <li key={resource.id}>
            <span>{resource.icon}</span> {resource.name}
          </li>
        ))}
      </ul>
      <div className="alert">
        <span>⚠️ Próximo certamen en: 3 días</span>
      </div>
    </div>
  );
};

export default Catedra;
