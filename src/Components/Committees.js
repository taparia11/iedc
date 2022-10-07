import React, { useEffect } from "react";
import Commiteecard1 from "./commiteecard1";
import users from "./Commiteesdetails";
import purchasecommitee from "./purchasecommiteedetails";
import proj_ext from "./projectreviewexternal";
import proj_int from "./projectreviewinternal";
import guest from "./guestspeakers";
import investor from "./investor";
import purchase2 from "./purchasecommitee2details";
const Committees = (props) => {
  useEffect(() => {
    document.title = `${props.titleChange} - IEDC`;
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <section id="committees">
        <div className="container pt-2">
          <h3 className="section-header text-center commitee-head">Committees</h3>
          <div className="row justify-content-center">
            <div className="col-auto">
              <h3 className="section-header">Advisory board members</h3>
              
              <table className="table table-responsive">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">S.no</th>
                    <th scope="col">Name</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Representation</th>
                  </tr>
                  
                </thead>
                
                  {users.map((item) => {
                    return <Commiteecard1 props={item} />;
                  })}

                {/* <tr>
                  <th scope="row">2</th>
                  <td>Mr. Nikunj Panchal</td>
                  <td>Manager, SRM Innovation and Incubation Centre</td>
                  <td>SIIC</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Dr. Naveen Vasishta</td>
                  <td>Director - DST</td>
                  <td>NSTEDB, DST</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Dr. S.B. Sareen</td>
                  <td>
                    Project Director &amp; Co-Member Secretary, DST NewGen IEDC
                  </td>
                  <td>EDII, Ahmedabad</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Dr. Shantanu Patil</td>
                  <td>Head, SRM Innovation and Design Center, SRMIST</td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Dr. Revathi Venkataraman</td>
                  <td>Professor - Dept. of Computer Science Engineering</td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Mr. Ananth Kumar</td>
                  <td>
                    Asst. Professor (Management) &amp; Executive Secretary
                  </td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>Ms. Elizabeth Idikula</td>
                  <td>
                    Asst. Director (Ops) - Great Lakes Institute of Management,
                    Chennai
                  </td>
                  <td>Peer Incubator</td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>Mr. Erik Azulay</td>
                  <td>Executive Director, Nexus Startup Hub, New Delhi</td>
                  <td>Peer Incubator</td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td>Mr. Ramanan</td>
                  <td>
                    Vice President &amp; Regional Head, The Lakshmi Vilas Bank
                    Ltd.
                  </td>
                  <td>Banker</td>
                </tr>
                <tr>
                  <th scope="row">11</th>
                  <td>Ms. Akila Rajeswar</td>
                  <td>Executive Director, TiE Chennai</td>
                  <td>Industry Association</td>
                </tr>
                <tr>
                  <th scope="row">12</th>
                  <td>Mr. Anirban Chowdhury</td>
                  <td>
                    Co-Founder &amp; Director (Technology), Frugal Labs Tech
                    Solutions Pvt Ltd
                  </td>
                  <td>Alumni</td>
                </tr>
                <tr>
                  <th scope="row">13</th>
                  <td>Mr. Arokya Iniyan</td>
                  <td>Co-founder Eminenttech,</td>
                  <td>Alumni</td>
                </tr>
                <tr>
                  <th scope="row">14</th>
                  <td>Mr. Anbu Rathinavel</td>
                  <td>Chief Design officer, Intellect Design</td>
                  <td>Industry</td>
                </tr>
                <tr>
                  <th scope="row">15</th>
                  <td>Mr. Kannan Doss</td>
                  <td>Founder, Food for Life</td>
                  <td>Industry</td>
                </tr> */}
              </table>
              <div>

              </div>
              <h3 className="section-header">
                Purchase Committee Members - Office Space
              </h3>
              <table className="table table-responsive">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">S.no</th>
                    <th scope="col">Name</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Organization</th>
                  </tr>
                </thead>
                
                {purchasecommitee.map((item) => {
                    return <Commiteecard1 props={item} />;
                  })}

                </table>

                 {/* <tr>
                  <th scope="row">2</th>
                  <td>Mr. Raman</td>
                  <td>Head, Purchase Department</td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Mr. Gopinath</td>
                  <td>Sr. Auditor</td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Dr. Shantanu Patil</td>
                  <td>Head, SRM Innovation and Design Centre</td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Dr. Revathi Venkataraman</td>
                  <td>Professor - Dept. of Computer Science Engineering</td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Mr. Ananth Kumar</td>
                  <td>
                    Asst. Professor (Management) &amp; Executive Secretary
                  </td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Mr. Nikunj Panchal</td>
                  <td>Manager, SRM Innovation and Incubation Centre</td>
                  <td>SRMIST</td>
                </tr>
              </table> */}
              <h3 className="section-header">
                Purchase Committee Members - Tools & Machines
              </h3>
              <table className="table table-responsive">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">S.no</th>
                    <th scope="col">Name</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Organization</th>
                  </tr>
                </thead>


                   {purchase2.map((item) => {
                    return <Commiteecard1 props={item} />;
                  })}

                {/* <tr>
                  <th scope="row">1</th>
                  <td>Dr. Kingsly Jeba Singh</td>
                  <td>Dean, School of Mechanical Engineering</td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Mr.Ramesh Kumar</td>
                  <td>Manager, Purchase Department</td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Mr. Gopinath</td>
                  <td>Sr. Auditor</td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Dr. Shantanu Patil</td>
                  <td>Head, SRM Innovation and Design Centre</td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Dr. Revathi Venkataraman</td>
                  <td>Professor - Dept. of Computer Science Engineering</td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Mr. Ananth Kumar</td>
                  <td>
                    Asst. Professor (Management) &amp; Executive Secretary
                  </td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Mr Nikunj Panchal</td>
                  <td>Manager, SRM Innovation and Incubation Centre</td>
                  <td>SRMIST</td>
                </tr>  */}
              </table>

    
              <h3 className="section-header">Project Reviews- External</h3>
              <table className="table table-responsive">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">S.no</th>
                    <th scope="col">Name</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Organization</th>
                  </tr>
                </thead>
                
                {proj_ext.map((item) => {
                    return <Commiteecard1 props={item} />;
                  })}

                {/* <tr>
                  <th scope="row">2</th>
                  <td>Mr. Mayur Sethi</td>
                  <td>Founder and Thinker-in-Chief</td>
                  <td>MP09 Digital</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Mr. Ankit Pansari</td>
                  <td>Developer Evangelist</td>
                  <td>Zoho Corp</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Mr. Shiva Ramamurthy</td>
                  <td>Angel Investor</td>
                  <td>Ephicacy Lifesciences Analytics</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Mr. Kumar</td>
                  <td>Founder</td>
                  <td>MindZen</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Mr. .Kannan Doss</td>
                  <td>Founder</td>
                  <td>Food for Life</td>
                </tr> */}
              </table>
              <h3 className="section-header">Project Reviews- Internal</h3>
              <table className="table table-responsive">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">S.no</th>
                    <th scope="col">Name</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Organization</th>
                  </tr>
                </thead>
                {proj_int.map((item) => {
                    return <Commiteecard1 props={item} />;
                  })}

                {/* <tr>
                  <th scope="row">2</th>
                  <td>Dr. Revathi Venkataraman</td>
                  <td>Professor - Dept. of Computer Science Engineering</td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Mr. Ananth Kumar</td>
                  <td>
                    Asst. Professor (Management) &amp; Executive Secretary
                  </td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Mr Nikunj Panchal</td>
                  <td>Manager, SRM Innovation and Incubation Centre</td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Mr. Ranjithpillai R</td>
                  <td>
                    Asst. Professor, Department of Mechatronics Engineering
                  </td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Mr. Rajaavikhram Y</td>
                  <td>
                    Asst. Professor, Department of Electronics &amp;
                    Instrumentation Engineering
                  </td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Mr. Navin K</td>
                  <td>
                    Asst. Professor, Department of Information Technology
                    Engineering
                  </td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>Dr. Bharatiraja C</td>
                  <td>
                    Associate Professor, Dept. of Electrical and Electronics
                    Engineering
                  </td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>Mr. Parthiban Nv</td>
                  <td>
                    Asst. Professor, Dept. of Computer Science Engineering
                  </td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td>Mr. Sachikanta N</td>
                  <td>Asst. Professor, Dept. of Civil Engineering</td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">11</th>
                  <td>Mr. Kumaran D</td>
                  <td>Asst. Professor, Department of Mechanical Engineering</td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">12</th>
                  <td>Mr. Elavelvisuvanathan G</td>
                  <td>
                    Asst. Professor, Department of Electronics Engineering
                  </td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">13</th>
                  <td>Mrs. Sarada DVL</td>
                  <td>Associate Professor, Department of Biotechnology</td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">14</th>
                  <td>Mr. Haribaabu V</td>
                  <td>Asst. Professor, Department of Software Engineering</td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">15</th>
                  <td>Mr. Manikandaprabhu S</td>
                  <td>Asst. Professor, Dept. of Civil Engineering</td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">16</th>
                  <td>Mr. Sandeepkumar L</td>
                  <td>Asst. Professor, Dept. of Physics</td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">17</th>
                  <td>Dr. Senthilnathan R</td>
                  <td>
                    Associate Professor, Department of Mechatronics Engineering
                  </td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">18</th>
                  <td>Dr. Mukeshkrishnan MB</td>
                  <td>Associate Professor, Dept. of Infromation Technology</td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">19</th>
                  <td>Mrs. Deepa N</td>
                  <td>
                    Assistant Professor,Department of Career Development Centre
                  </td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">20</th>
                  <td>Mr. Devanathan K</td>
                  <td>Assistant Professor, Department of Automobile Engg</td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">21</th>
                  <td>Mr. Sabastian J</td>
                  <td>Assistant Professor, Department of English</td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">22</th>
                  <td>Mrs. Supraja P</td>
                  <td>
                    Assistant Professor, Department of Information Technology
                  </td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">23</th>
                  <td>Mr. Vinothkumar SI</td>
                  <td>Assistant Professor, Department of Computer Science</td>
                  <td>SRMIST</td>
                </tr>
                <tr>
                  <th scope="row">24</th>
                  <td>Mr. Sankaramoorthy K</td>
                  <td>Assistant Professor • Department of MBA</td>
                  <td>SRMIST</td>
                </tr> */}
              </table>
              <h3 className="section-header">Guest speakers</h3>
              <table className="table table-responsive">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">S.no</th>
                    <th scope="col">Name</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Organization</th>
                  </tr>
                </thead>
                {guest.map((item) => {
                    return <Commiteecard1 props={item} />;
                  })}

                            </table>

              <h3 className="section-header">Potential investors</h3>
              <table className="table table-responsive">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">S.no</th>
                    <th scope="col">Name</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Organization</th>
                  </tr>
                </thead>
                {investor.map((item) => {
                    return <Commiteecard1 props={item} />;
                  })}
              
               
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Committees;
