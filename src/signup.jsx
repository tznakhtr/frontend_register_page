import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://backend-register-page-gyaa.onrender.com/register', { name, email, password })
            .then(result => {
                navigate('/login');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit}>
                <h2>Register</h2>
                <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
}
export default Signup;