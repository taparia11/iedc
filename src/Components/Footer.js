import React from 'react'
import "./Footer.css";
import footer_logo from "../Assets/image/footer_logo.jpeg";
import instagram from "../Assets/image/instagram.png";
import facebook from "../Assets/image/facebook.png";
import linkdin from "../Assets/image/linkdin.png";
import gmail from "../Assets/image/gmail.png";
import twitter from "../Assets/image/twitter.png";

export const Footer = () => {
  return (
    <div>
      <div className="mainfooter">
        <div id="mfooter">
          <div className="f1" >
            <img className="flogo" src={footer_logo} alt='' style={{marginLeft:'50px'}}/> 
           
          </div>
            <h3 className="fhead">SRM Innovation <br></br>Incubation and <br></br>Entrepreneurship <br></br>Centre</h3>
          <div className="f2">
            <h4 id='finfo'>Information</h4>
            <ul id='ftxt'>
              <li><a href="./about">About Us</a></li>
              <li><a href="./event">Events</a></li>
              <li><a href="./team">Our Teams</a></li>
             
            </ul>
          </div>
          <div className="f3">
            <h4 id='fhelp'>Helpful Links</h4>
            <ul id='ftxt'>
              
              <li><a href="./partner">Partners</a></li>
              
              <li><a href="https://fablab.srmiiec.com">Fablab</a></li>
            </ul>
          </div>
          <div className="f4">
            <h4 id='fosn'>Our Social Network</h4>
            <p id="ffollow">Follow us to get news first in Market !!</p>
            <a className="folink" rel="noreferrer" href="https://www.instagram.com/srmiiec/"  target="_blank"><img className="fologo" src={instagram} alt='' /> </a>
            <a className="folink" rel="noreferrer" href="https://www.facebook.com/srmiic/" target="_blank"><img className="fologo" src={facebook} alt='' /> </a>
            <a className="folink" rel="noreferrer" href="https://www.linkedin.com/school/srmiic/mycompany/" target="_blank"><img className="fologo" src={linkdin} alt='' /> </a>
            <a className="folink" rel="noreferrer" href="https://twitter.com/SRMIIEC?t=TQCicEm4UlL3s_56LkMQDQ&s=08" target="_blank"><img className="fologo" src={twitter} alt='' /> </a>
            <a className="folink" rel="noreferrer" href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHxTdTLwHqvhBShnSBdqWPPpHTjhTfhkvrFqJjFBBtRDNMMpBTRKSdVwpJbGrPdhRtKPcQX" target="_blank"><img className="fologo" src={gmail} alt='' /> </a>
            {/* <div id='fcopyright' style={{marginTop:'10px'}}>
            Design and Developed by 
          </div> */}
          </div>
          {/* <div id='fcopyright'>
            &#169;Copyright <strong>SIIEC</strong> .All Rights Reserved
          </div> */}
        </div>
      </div>
      
      <div id='fcopyright'>
        <div style={{marginLeft:'75px', paddingBottom:'10px'}}>
            &#169;Copyright <strong>NewGen IEDC</strong> .All Rights Reserved &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          <span className="credits" style={{color:'white',marginTop:'10px',marginLeft:'320px'}}>
        Designed and Developed by <a href="https://www.linkedin.com/in/nikhil-taparia/" style={{textDecoration:'none',color:'#0eace8'}} target={'_blank'}><b>Nikhil Taparia </b>🚀</a>
        {/* <a href="https://www.linkedin.com/in/nikhil-taparia/" target={'_blank'}> Darshil Kantariya </a> */}
        {/* <a href="https://www.linkedin.com/in/nikhil-taparia/" target={'_blank'}>Yuvraj Devnani</a> */}
      </span>
</div>
          </div>
      
    </div>
  )
}
export default Footer;