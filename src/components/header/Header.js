import React from 'react'
import './header.css';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
function Header() {


  return (
    <div><>
  <nav className="navbar navbar-expand-lg navbar-light bg-light fs-5 p-3 s-7 " id='zindex'>
  <div className="container-fluid z-3 ">
    <Link to="/">
    
    <a className="navbar-brand   " href="#">
      rezlive.
    </a></Link>
    <button
      className="navbar-toggler   "
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon   " />
    </button>
    <div className="collapse navbar-collapse   " id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto   ">
        <li className="nav-item   ">
          <a className="nav-link active   " aria-current="page" href="#">
          <h5>HOME</h5>
          </a>
        </li>
        <li className="nav-item   ">
          <a className="nav-link   " href="#">
            <h5>ABOUT US</h5>
          </a>
        </li>
        <li className="nav-item   ">
          <a className="nav-link   " href="#">
            <h5>ACCOLADES</h5>
          </a>
        </li>
        <li className="nav-item   ">
          <a className="nav-link   " href="#">
            <h5>REACH US</h5>
          </a>
        </li>
    <Link to="/login" >
    <button className="btn btn-primary  " type="button">
      Login
</button>
    </Link>
   
       <Link to= "/signUP">
       
       <button className="btn btn-primary  " type="button">
      SignUp
</button>
</Link>
          
      </ul>
    </div>
  </div>
</nav>


  </>
  
  
  
  </div>
  )
}

export default Header