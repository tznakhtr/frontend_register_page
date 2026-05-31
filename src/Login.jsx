import React , { useState} from 'react';
import {Link} from 'react-router-dom';
import './signup.css'; 
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function Login(){
     const[email, setEmail] = useState()
      const[password , setPassword] = useState()
      const navigate = useNavigate()

       const handleSubmit =(e)=>{
    e.preventDefault()
    axios.post('https://backend-register-page-gyaa.onrender.com',{email,password})
    .then(result=> {
        console.log(result)
        if(result.data === "Success"){
           navigate('/home');
        }else{
            alert(result.data);
        }
  })
    .catch(err=> console.log(err))
  }
 return (
   <div className="login-container">
  <form className="login-form" onSubmit={handleSubmit}>
    <h2>Login</h2>
    <div className="input-group">
      <label>Email</label>
      <input type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
    </div>
    <div className="input-group">
      <label>Password</label>
      <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
    </div>
    <button type="submit" className="login-btn">Login</button>
  </form>
  <p>Don't have an account? <Link to="/register">Register</Link></p>
</div>
);
}
export default Login;