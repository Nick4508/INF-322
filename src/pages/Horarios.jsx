import React from 'react';
import '../stylesheets/Horarios/horarios.scss';

const horarios = [
  {
    paralelo: 'Paralelo 200',
    clases: [
      { id: 1, materia: 'Catedra 1', dia: 'Lunes', horaInicio: '08:15', horaFin: '09:30',Sala : 'A016' },
      { id: 2, materia: 'Catedra 2', dia: 'Miércoles', horaInicio: '08:15', horaFin: '09:30', Sala : 'A016' },
      { id: 3, materia: 'Ayudantía', dia: 'Viernes', horaInicio: '16:05', horaFin: '17:15', Sala : 'A016' },
    ],
  },
  {
    paralelo: 'Paralelo 201',
    clases:  [
        { id: 1, materia: 'Catedra 1', dia: 'Lunes', horaInicio: '08:15', horaFin: '09:30',Sala : 'A015' },
        { id: 2, materia: 'Catedra 2', dia: 'Miércoles', horaInicio: '08:15', horaFin: '09:30', Sala : 'A015' },
        { id: 3, materia: 'Ayudantía', dia: 'Viernes', horaInicio: '16:05', horaFin: '17:15', Sala : 'A015' },
      ],
  },
  {
    paralelo: 'Paralelo 202',
    clases:  [
        { id: 1, materia: 'Catedra 1', dia: 'Lunes', horaInicio: '08:15', horaFin: '09:30',Sala : 'A014' },
        { id: 2, materia: 'Catedra 2', dia: 'Miércoles', horaInicio: '08:15', horaFin: '09:30', Sala : 'A014' },
        { id: 3, materia: 'Ayudantía', dia: 'Viernes', horaInicio: '16:05', horaFin: '17:15', Sala : 'A014' },
      ],
  },{
    paralelo: 'Paralelo 203',
    clases:  [
        { id: 1, materia: 'Catedra 1', dia: 'Lunes', horaInicio: '08:15', horaFin: '09:30',Sala : 'A009' },
        { id: 2, materia: 'Catedra 2', dia: 'Miércoles', horaInicio: '08:15', horaFin: '09:30', Sala : 'A009' },
        { id: 3, materia: 'Ayudantía', dia: 'Viernes', horaInicio: '16:05', horaFin: '17:15', Sala : 'A009' },
      ],
  },{
    paralelo: 'Paralelo 204',
    clases:  [
        { id: 1, materia: 'Catedra 1', dia: 'Lunes', horaInicio: '08:15', horaFin: '09:30',Sala : 'A007' },
        { id: 2, materia: 'Catedra 2', dia: 'Miércoles', horaInicio: '08:15', horaFin: '09:30', Sala : 'A007' },
        { id: 3, materia: 'Ayudantía', dia: 'Viernes', horaInicio: '16:05', horaFin: '17:15', Sala : 'A007' },
      ],
  },{
    paralelo: 'Paralelo 205',
    clases: [
        { id: 1, materia: 'Catedra 1', dia: 'Lunes', horaInicio: '08:15', horaFin: '09:30',Sala : 'A008' },
        { id: 2, materia: 'Catedra 2', dia: 'Miércoles', horaInicio: '08:15', horaFin: '09:30', Sala : 'A008' },
        { id: 3, materia: 'Ayudantía', dia: 'Viernes', horaInicio: '16:05', horaFin: '17:15', Sala : 'A008' },
      ],
  },{
    paralelo: 'Paralelo 206',
    clases:  [
        { id: 1, materia: 'Catedra 1', dia: 'Lunes', horaInicio: '08:15', horaFin: '09:30',Sala : 'A004' },
        { id: 2, materia: 'Catedra 2', dia: 'Miércoles', horaInicio: '08:15', horaFin: '09:30', Sala : 'A004' },
        { id: 3, materia: 'Ayudantía', dia: 'Viernes', horaInicio: '16:05', horaFin: '17:15', Sala : 'A004' },
      ],
  },
  
];

const Horarios = () => {
  return (
    <div>
      <h2>Horarios por Paralelo</h2>
      {horarios.map((paralelo) => (
        <div key={paralelo.paralelo} className="paralelo-section">
          <h3>{paralelo.paralelo}</h3>
          <table className="horarios-table">
            <thead>
              <tr>
                <th>Clases</th>
                <th>Día</th>
                <th>Hora de Inicio</th>
                <th>Hora de Fin</th>
                <th>Sala</th>
              </tr>
            </thead>
            <tbody>
              {paralelo.clases.map((clase) => (
                <tr key={clase.id}>
                  <td>{clase.materia}</td>
                  <td>{clase.dia}</td>
                  <td>{clase.horaInicio}</td>
                  <td>{clase.horaFin}</td>
                  <td>{clase.Sala}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Horarios;
