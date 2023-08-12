import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Productos = () => {
  const foods = [
    { id: 1, name: 'Comida 1' },
    { id: 2, name: 'Comida 2' },
    { id: 3, name: 'Comida 3' },
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Lista de Comidas</h2>
      <div className="row">
        {foods.map((food) => (
          <div key={food.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{food.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
