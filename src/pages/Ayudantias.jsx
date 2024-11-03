import React from 'react';
import '../stylesheets/Curso/catedra.css'
const ayudantiaResources = [
  { id: 1, name: 'Ayudatía-C1', icon: '📄' },
  { id: 2, name: 'Ayudatía-C2', icon: '📄' },
  { id: 3, name: 'Ayudatía-C3', icon: '📄' },
];

const ayudantia = () => {
  return (
    <div>
      <h2>Ayudantía</h2>
      <ul>
        {ayudantiaResources.map((resource) => (
          <li key={resource.id} style={{ display: 'flex', alignItems: 'center', padding: '8px 0' }}>
            <span style={{ marginRight: '8px' }}>{resource.icon}</span>
            {resource.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ayudantia;
