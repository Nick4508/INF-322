import React from 'react';
import '../stylesheets/Curso/catedra.css'

const catedraResources = [
  { id: 1, name: 'PPTS-clases-C1', icon: '📄' },
  { id: 2, name: 'PPTS-clases-C2', icon: '📄' },
  { id: 3, name: 'PPTS-clases-C3', icon: '📄' },
];

const Catedra = () => {
  return (
    <div>
      <h2>Cátedra</h2>
      <ul>
        {catedraResources.map((resource) => (
          <li key={resource.id} style={{ display: 'flex', alignItems: 'center', padding: '8px 0' }}>
            <span style={{ marginRight: '8px' }}>{resource.icon}</span>
            {resource.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catedra;
