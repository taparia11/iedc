import React from 'react'
import "./Footer.css";
import footer_logo from '../Assets/image/footer_logo.jpeg'

export const Footer = () => {
  return (
    <div>
      <div className="mainfooter">
        <div id="mfooter">
          <div className="f1">
            <img className="flogo" src={footer_logo} alt='' /> 
            <h3 className="fhead">SRM Innovation <br></br>Incubation and <br></br>Entrepreneurship <br></br>Centre</h3>
          </div>
          <div className="f2">
            <h4 id='finfo'>Information</h4>
            <ul id='ftxt'>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Events</a></li>
              <li><a href="/">Our Teams</a></li>
              <li><a href="/">Startups</a></li>
              <li><a href="/">Companies</a></li>
            </ul>
          </div>
          <div className="f3">
            <h4 id='fhelp'>Helpful Links</h4>
            <ul id='ftxt'>
              <li><a href="/">Services</a></li>
              <li><a href="/">Partners</a></li>
              <li><a href="/">Mentors</a></li>
              <li><a href="/">Privacy policy</a></li>
              <li><a href="/">Fablab</a></li>
            </ul>
          </div>
          <div className="f4">
            <h4 id='fosn'>Our Social Network</h4>
            <p id="ffollow">Follow us to get news first in Market !!</p>
          </div>
          {/* <div id='fcopyright'>
            &#169;Copyright <strong>SIIEC</strong> .All Rights Reserved
          </div> */}
        </div>
      </div>
    </div>
  )
}
export default Footer;