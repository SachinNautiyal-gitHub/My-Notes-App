

import React from 'react'
import {Link, useNavigate} from "react-router-dom"
const Navbar = () => {
   
  const navigate = useNavigate();

  const handleOnClick = () =>{
    console.log("button clicked");
    localStorage.removeItem('token');
    navigate('/login');
     
  }
  
 

  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand">MyNotes</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
      </ul>
     
    </div>
    <button type="button" className="btn btn-secondary" onClick={handleOnClick}>Log-Out</button>
  </div>
</nav>
   
   
   
   
   
   </>
  )
}

export default Navbar
