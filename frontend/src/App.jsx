// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4">
          <Link to="/login" className="mr-4 text-blue-600">Login</Link>
          <Link to="/register" className="text-blue-600">Register</Link>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Redirect or home route */}
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
