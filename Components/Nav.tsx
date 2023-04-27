import React from 'react';
import Link from 'next/link';

export default function Nav() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark fixed-top text-white">
  <div className="container">
    <a className="navbar-brand" style={{color:"white",fontWeight: "500"}} href="#">
      LOGO HERE
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link href="/Home"
          className="nav-link active" 
          style={{color:"white", fontWeight: "bolder"}} 
          aria-current="page" 
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
        <Link href="/About"
          className="nav-link active" 
          style={{color:"white", fontWeight: "bolder"}} 
          aria-current="page" 
          >
            About us
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link href="/SportCards"
            className="nav-link"
            aria-expanded="false"
            style={{color:"white", fontWeight: "bolder"}}
          >
            Sports Cards
            </Link>
        </li>
        <li className="nav-item dropdown">
          <Link href="/contact"
        
            className="nav-link"
            aria-expanded="false"
            style={{color:"white", fontWeight: "bolder"}}
          
          > 
            Contact us
          
          </Link>
        </li>
      </ul>
        <p style={{margin: 10, fontSize:"14px",fontWeight: "500"}}>FORGOT USERNAME?</p>
        <button className="btn btn-outline-secondary" style={{ color: "white",
        fontWeight: "bolder", fontSize: 14, 
        textTransform:"capitalize"}} type="submit">
           LOGIN
        </button>
    
    </div>
  </div>
</nav>

    
    </>
  )
}
