// src/Login.js
import './Login.css';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();  // To navigate after successful login

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission
    
    console.log(auth);
    console.log("Email:", email);
    console.log("Password:", password);  

    try {
      console.log("firxts")
      await signInWithEmailAndPassword(auth, email, password); // Firebase login
      console.log("gjcdcgfm;")
      window.location.href = "https://vidtube-psi.vercel.app/" ;//Redirect to a dashboard or home page after successful login
    } catch (error) {
      setError(error.message);  // Display error message if login fails
    }
  };

  return (
    <div className="login-container">
      <h2>LOGIN</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>EMAIL:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label>PASSWORD:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        {error && <p className="error">{error}</p>} {/* Display error message */}
        <button type="submit" className='login-button'>LOGIN</button>
        <p>DON'T HAVE AN ACCOUNT ? <Link to='/signup'>CREATE ACCOUNT</Link></p>
      </form>
    </div>
  );
};

export default Login;
