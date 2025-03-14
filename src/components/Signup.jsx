// src/Login.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';

const Signup = () => {
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
      await createUserWithEmailAndPassword(auth, email, password); // Firebase login
      console.log("gjcdcgfm;")
      navigate('/dashboard');  // Redirect to a dashboard or home page after successful login
    } catch (error) {
      setError(error.message);  // Display error message if login fails
    }
  };

  return (
    <div className="signup-container">
      <h2>SIGNUP</h2>
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
            placeholder="Create password"
            required
          />
        </div>
        {error && <p className="error">{error}</p>} {/* Display error message */}
        <button type="submit" className='signup-button'>SIGNUP</button>
        <p>ALREADY HAVE AN ACCOUNT ? <Link to='/login'>LOGIN</Link></p>
      </form>
    </div>
  );
};

export default Signup;
