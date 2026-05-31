import React , { useState} from 'react';
import {Link} from 'react-router-dom';
import './signup.css'; 
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function Signup()  {
  const[name , setName ]= useState()
  const[email, setEmail] = useState()
  const[password , setPassword] = useState()
  const navigate = useNavigate()
  const handleSubmit =(e)=>{
    e.preventDefault()
    axios.post('https://backend-register-page-gyaa.onrender.com/register',{name,email,password})
    .then(result=> {console.log(result)
    navigate('/Login')
  })
    .catch(err=> console.log(err))
  }
  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text"
         placeholder="Enter Name"
         autoComplete="off"
         name="email"
         className="form-control rounded-0" 
         onChange={(e)=> setName(e.target.value)}
        />

        <label>Email</label>
        <input type="email" 
        placeholder="Enter Email" 
        onChange={(e)=> setEmail(e.target.value)}/>

        <label>Password</label>
        <input type="password"
        placeholder="Enter Password"
        onChange={(e)=> setPassword(e.target.value)} />

        <button type="submit" 
        className="btn-register">Register</button>
      </form>
      
      <div>Already Have an Account</div>
      <Link to="/login">
      <button type="button">Login</button>
      </Link>
    </div>
  );
};

export default Signup;