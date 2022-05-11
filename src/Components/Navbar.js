import React from 'react'
import img1 from '../Assets/image/iedc-logo.PNG'
// import img2 from '../Assets/image/srm-logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
      <>
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid" style={{fontSize:'20px', }}>
      <a className="navbar-brand" href="/"><img src={img1} alt="IEDC" style={{height:'70px',width:'250px'}}/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Projects
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/1yearprojects">1 Year</a></li>
              <li><a className="dropdown-item" href="/2yearprojects">2 Year</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/committees">Committees</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/activities">Activities</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              More
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/newsstories">News Stories</a></li>
              <li><a className="dropdown-item" href="/downloads">Downloads</a></li>
            </ul>
          </li>
        </ul>
        <a className="btn btn-outline-dark" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLScO_CTxM6T_dSOJ9fuxQ-QpzfHMLJOc4oYN3kjHzSh_d0khzQ/viewform" target={"_blank"} >Apply Now</a>
       
      </div>
    </div>
  </nav>
  </>
  )
}

export default Navbar