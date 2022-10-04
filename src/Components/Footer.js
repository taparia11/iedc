import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/image/footer_logo.jpeg";
import instagram from "../Assets/image/instagram.png";
import facebook from "../Assets/image/facebook.png";
import linkdin from "../Assets/image/linkdin.png";
import gmail from "../Assets/image/gmail.png";
import twitter from "../Assets/image/twitter.png";

import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsMailbox,
  BsTwitter,
} from "react-icons/bs";

import { HiOutlineMail } from "react-icons/hi";

// export const Footer = () => {
//   return (
   
//     <div>
//       <div className="mainfooter">
//         <div id="mfooter">
//           <div className="f1">
//             <img
//               className="flogo"
//               src={footer_logo}
//               alt="siiec-logo"
             
//             />
//           </div>
//           <h3 className="fhead">
//             SRM Innovation <br></br>Incubation and <br></br>Entrepreneurship{" "}
//             <br></br>Centre
//           </h3>
//           <div className="f2">
//             <h4 id="finfo">Information</h4>
//             <ul id="ftxt">
//               <li>
//                 <a href="./about">About Us</a>
//               </li>
//               <li>
//                 <a href="./event">Events</a>
//               </li>
//               <li>
//                 <a href="./team">Our Teams</a>
//               </li>
//             </ul>
//           </div>
//           <div className="f3">
//             <h4 id="fhelp">Helpful Links</h4>
//             <ul id="ftxt">
//               <li>
//                 <a href="./partner">Partners</a>
//               </li>

//               <li>
//                 <a href="https://fablab.srmiiec.com">Fablab</a>
//               </li>
//             </ul>
//           </div>
//           <div className="f4">
//             <h4 id="fosn">Our Social Network</h4>
//             <p id="ffollow">Follow us to get news first in Market!</p>
//             <div className="d-flex justify-content-between">
//               <a
//                 className="folink"
//                 href="https://www.instagram.com/srmiiec/"
//                 target="_blank"
//               >
//                 <BsInstagram size={35} style={{ color: "white" }} />
//               </a>
//               <a
//                 className="folink"
//                 href="https://www.facebook.com/srmiic/"
//                 target="_blank"
//               >
//                 <BsFacebook size={35} style={{ color: "white" }} />
//               </a>
//               <a
//                 className="folink"
//                 href="https://www.linkedin.com/school/srmiic/mycompany/"
//                 target="_blank"
//               >
//                 <BsLinkedin size={35} style={{ color: "white" }} />
//               </a>
//               <a
//                 className="folink"
//                 href="https://twitter.com/SRMIIEC?t=TQCicEm4UlL3s_56LkMQDQ&s=08"
//                 target="_blank"
//               >
//                 <BsTwitter size={35} style={{ color: "white" }} />
//               </a>
//               <a
//                 className="folink"
//                 href="mailto:manager.siic@srmist.edu.in"
//                 target="_blank"
//               >
//                 <HiOutlineMail size={35} style={{ color: "white" }} />
//               </a>
//             </div>
//             {/* <div id='fcopyright' style={{marginTop:'10px'}}>
//             Design and Developed by 
//           </div> */}
//           </div>
//           {/* <div id='fcopyright'>
//             &#169;Copyright <strong>SIIEC</strong> .All Rights Reserved
//           </div> */}
//         </div>
//       </div>

//       <div id="fcopyright">
//         <div style={{ marginLeft: "75px", paddingBottom: "10px" }}>
//           &#169;Copyright <strong>NewGen IEDC</strong>. All Rights Reserved
//           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Footer;

export const Footer = () => {
  return (
    <div>
      <div className="mainfooter">
        <div id="mfooter">
          <div className="f1">
            <img
              src={footer_logo}
              alt="siiec-logo"
              className="mx-auto rounded-full w-24 md:w-32"
            />
          </div>
          <h3 className="fhead">
            SRM Innovation <br></br>Incubation and <br></br>Entrepreneurship{" "}
            <br></br>Centre
          </h3>
          <div className="f2">
            <h4 className="text-primaryYellow font-ubuntu font-bold">Information</h4>
            <ul id="ftxt">
              <li>
                <a href="./about">About Us</a>
              </li>
              <li>
                <a href="./event">Events</a>
              </li>
              <li>
                <a href="./team">Our Teams</a>
              </li>
            </ul>
          </div>
          <div className="f3">
            <h4 className="text-primaryYellow font-ubuntu font-bold">Helpful Links</h4>
            <ul id="ftxt">
              <li>
                <a href="./partner">Partners</a>
              </li>

              <li>
                <a href="https://fablab.srmiiec.com">Fablab</a>
              </li>
            </ul>
          </div>
          <div className="f4">
            <h4 className="text-primaryYellow font-ubuntu font-bold">Our Social Network</h4>
            <p id="ffollow">Follow us to get news first in Market!</p>
            <div className="flex flex-row justify-between my-4">
              <a
                className="folink"
                href="https://www.instagram.com/srmiiec/"
                target="_blank"
              >
                <BsInstagram size={35} style={{ color: "white" }} />
              </a>
              <a
                className="folink"
                href="https://www.facebook.com/srmiic/"
                target="_blank"
              >
                <BsFacebook size={35} style={{ color: "white" }} />
              </a>
              <a
                className="folink"
                href="https://www.linkedin.com/school/srmiic/mycompany/"
                target="_blank"
              >
                <BsLinkedin size={35} style={{ color: "white" }} />
              </a>
              <a
                className="folink"
                href="https://twitter.com/SRMIIEC?t=TQCicEm4UlL3s_56LkMQDQ&s=08"
                target="_blank"
              >
                <BsTwitter size={35} style={{ color: "white" }} />
              </a>
              <a
                className="folink"
                href="mailto:manager.siic@srmist.edu.in"
                target="_blank"
              >
                <HiOutlineMail size={35} style={{ color: "white" }} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="fcopyright">
        <div style={{ marginLeft: "75px", paddingBottom: "10px" }}>
          &#169;Copyright <strong>SIIEC</strong>. All Rights Reserved
        </div>
      </div>
    </div>
  );
};
export default Footer;
