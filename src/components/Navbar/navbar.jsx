import React from 'react';
import logo from "./logo.jpg"
import "./Navbar.css";
const Navbar = ()=> {
  return (
    <div className="navbar">
        <div className="logo">
         <img src={logo} width={130} height={130} alt="Logo"/>
        </div> 
        <div className="buttons">
        <button className='buttonR'>Register</button>
        <button className='buttonR'>Login</button>
        </div></div>
  );
}

export default Navbar