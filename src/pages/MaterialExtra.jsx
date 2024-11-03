import React from 'react';

const MaterialExtraResources = [
  { id: 1, name: 'Pautas-C1', icon: '📄' },
  { id: 2, name: 'Pautas-C2', icon: '📄' },
  { id: 3, name: 'Pautas-C3', icon: '📄' },
];

const MaterialExtra = () => {
  return (
    <div>
      <h2>Material Extra</h2>
      <ul>
        {MaterialExtraResources.map((resource) => (
          <li key={resource.id} style={{ display: 'flex', alignItems: 'center', padding: '8px 0' }}>
            <span style={{ marginRight: '8px' }}>{resource.icon}</span>
            {resource.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MaterialExtra;
