import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://backend-register-page-gyaa.onrender.com/login', { email, password })
            .then(result => {
                if (result.data === "Success") {
                    navigate('/home');
                } else {
                    alert(result.data);
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
    );
}
export default Login;