import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Empleados from './components/Empleados';
import Productos from './components/Productos';
import Login from './components/Login';

const App = () => {
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    // Cambiar el estado de inicio de sesión
    setLogin(true);
  };

  const handleLogout = () => {
    // Cambiar el estado de inicio de sesión
    setLogin(false);
  };

  return (
    <Router>
    {login ? (

<div>
    <Navbar />
    <Routes>
      <Route path="/empleados" element={<Empleados />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/" element={<h2>Página de Inicio</h2>} />
    </Routes>
  </div>

) : (
<Routes>
<Route path="/" element={<Login ingresar = {handleLogin} />} />
</Routes>
)}
    </Router>
  );
};


export default App;
