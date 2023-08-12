import React, { useState } from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = ({ ingresar }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validación de correo y contraseña (puede ser simplificada)
    if (email === 'correo@example.com' && password === 'contraseña') {
      ingresar();
    } else {
      alert('Credenciales inválidas');
    }
  };

  const handleLogout = () => {
   
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
                <div>
                  <h2 className="mb-4">Login</h2>
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button className="btn btn-primary" onClick={handleLogin}>
                    Iniciar sesión
                  </button>
                </div>
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
