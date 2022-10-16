import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    // e.preventDefault();
    e.preventDefault();
    try {
      const res = await axios.post('/auth/login', inputs);
      navigate('/');
    } catch (error) {
      setError(error.response.data);
    }
  };
  return (
    <div className="auth ww">
      <h1>Login</h1>
      <form>
        <input
          required
          type="text"
          placeholder="usename"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>
        {error && <p>{error}</p>}
        <span>
          Don't you have an account?<Link to="/register"> Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
