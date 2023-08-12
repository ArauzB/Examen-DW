import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Empleados = () => {
  const employees = [
    { id: 1, name: 'Empleado 1' },
    { id: 2, name: 'Empleado 2' },
    { id: 3, name: 'Empleado 3' },
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Lista de Empleados</h2>
      <ul className="list-group">
        {employees.map((employee) => (
          <li key={employee.id} className="list-group-item">
            {employee.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Empleados;
