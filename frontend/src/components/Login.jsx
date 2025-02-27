// src/components/Login.jsx
import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Login successful!');
        // Optionally, store the token (e.g., in localStorage) or redirect the user.
        localStorage.setItem('token', data.token);
      } else {
        setMessage(data.message || 'Login failed');
      }
    } catch (err) {
      setMessage('Server error');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form 
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
        onSubmit={onSubmit}
      >
        <h2 className="text-2xl mb-6 text-center">Login</h2>
        {message && <p className="mb-4 text-center text-red-500">{message}</p>}
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
            className="w-full p-2 border rounded"
            placeholder="you@example.com"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            className="w-full p-2 border rounded"
            placeholder="Your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
