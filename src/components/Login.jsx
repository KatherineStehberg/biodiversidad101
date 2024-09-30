import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Usamos la URL del backend desde la variable de entorno de Vite
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/login`, formData);
      console.log('Inicio de sesión exitoso:', response.data);
      // Guardar el token en el almacenamiento local o en cookies si es necesario
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Ocurrió un error al intentar iniciar sesión.');
    }
  };

  return (
    <div className="auth-container">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Iniciar Sesión</button>
      </form>
      <p>¿No tienes una cuenta? <a href="/register">Registrarse</a></p>
    </div>
  );
};

export default Login;
