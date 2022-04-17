import React, {useEffect} from 'react'

const Committees = (props) => {
    useEffect(() => {
        document.title = `${props.titleChange} - IEDC`;
        //eslint-disable-next-line
    }, [])

  return (
    <>
    <section id="committees">
      <div className="container pt-2">
        <h3 className="section-header text-center">Committees</h3>
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
              <tr>
                <th scope="row">1</th>
                <td>Dr. C. Muthamizhchelvan</td>
                <td>Pro Vice Chancellor,Engineering and Technology</td>
                <td>SRMIST</td>
              </tr>
              <tr>
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
                <td>Asst. Professor (Management) &amp; Executive Secretary</td>
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
              </tr>
            </table>
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
              <tr>
                <th scope="row">1</th>
                <td>Dr. V.M.Thirumurgan</td>
                <td>Associate Director, Campus Life</td>
                <td>SRMIST</td>
              </tr>
              <tr>
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
                <td>Asst. Professor (Management) &amp; Executive Secretary</td>
                <td>SRMIST</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Mr. Nikunj Panchal</td>
                <td>Manager, SRM Innovation and Incubation Centre</td>
                <td>SRMIST</td>
              </tr>
            </table>
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
              <tr>
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
                <td>Asst. Professor (Management) &amp; Executive Secretary</td>
                <td>SRMIST</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Mr Nikunj Panchal</td>
                <td>Manager, SRM Innovation and Incubation Centre</td>
                <td>SRMIST</td>
              </tr>
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
              <tr>
                <th scope="row">1</th>
                <td>Mr. Anand Shivraj</td>
                <td>Manager, Bio Incubator</td>
                <td>Anna University</td>
              </tr>
              <tr>
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
              </tr>
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
              <tr>
                <th scope="row">1</th>
                <td>Dr. Shantanu Patil</td>
                <td>Head, SRM Innovation and Design Centre</td>
                <td>SRMIST</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Dr. Revathi Venkataraman</td>
                <td>Professor - Dept. of Computer Science Engineering</td>
                <td>SRMIST</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Mr. Ananth Kumar</td>
                <td>Asst. Professor (Management) &amp; Executive Secretary</td>
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
                <td>Asst. Professor, Department of Mechatronics Engineering</td>
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
                <td>Asst. Professor, Dept. of Computer Science Engineering</td>
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
                <td>Asst. Professor, Department of Electronics Engineering</td>
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
              </tr>
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
              <tr>
                <th scope="row">1</th>
                <td>Mrs. Vandhana Ramanathan,</td>
                <td>Co-founder</td>
                <td>Wsquard</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Dr. Ikhlaq Sidhu</td>
                <td>Director</td>
                <td>
                  Sutardja Center of Entrepreneurship &amp; Technology , UC
                  Berkeley
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Mr. Chandran Krishnan,</td>
                <td>CEO</td>
                <td>Chennai Angels</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Mr. Balaji Sadagapan</td>
                <td>Co-founder</td>
                <td>Chai Kings</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Dr. Ramesh Kandadai</td>
                <td>Expert in Unmanned Aerial System</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Dr. Anbu Rathinavel</td>
                <td>Chief Design Officer</td>
                <td>Intellect Design</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Mr. Arun Jain</td>
                <td>Founder</td>
                <td>Intellect Design</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>Dr. Shivraj Rajadurai</td>
                <td>Director Research</td>
                <td>Sarada Motors</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>Mr. Ramesh Somasundaram</td>
                <td>Founder</td>
                <td>Energica ASPL</td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>Mrs. Devakshi Dhawan</td>
                <td>Portfolio and Program Manager</td>
                <td>Social Alpha</td>
              </tr>
              <tr>
                <th scope="row">11</th>
                <td>Dr Biju Jacob</td>
                <td>Program Director</td>
                <td>
                  UN Health Innovation Exchange- India Accelerator( FISE )
                </td>
              </tr>
              <tr>
                <th scope="row">12</th>
                <td>Mr. Nikhil Chandwadkar</td>
                <td>Co Founder</td>
                <td>Carto Sense</td>
              </tr>
              <tr>
                <th scope="row">13</th>
                <td>Mr. Vikram Viswanathan</td>
                <td>Founder &amp; CEO</td>
                <td>Invitreo</td>
              </tr>
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
              <tr>
                <th scope="row">1</th>
                <td>Mr. Chandran Krishnan</td>
                <td>CEO</td>
                <td>Chennai Angels</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Mr. Anandakumaran Nair</td>
                <td>Executive Director of R&amp;D</td>
                <td>Lucas TVS</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Mr. Amit Agarwal</td>
                <td>Managing Partner</td>
                <td>Access Capital Advisors</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Mr. Carol George</td>
                <td>Assitant Manager, Marketing</td>
                <td>Advik Hi-tech Private Limited</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Mr. Srinivasan Vijayaraghavan</td>
                <td>Sales Manager</td>
                <td>Altair Inc</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Mr. Naveen Bhandari</td>
                <td>CEO</td>
                <td>Amara Studio, Amara Music</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Mr. Gupta</td>
                <td>CEO</td>
                <td>OPG Power Ventures</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>Mrs. Dmitri</td>
                <td>CFO</td>
                <td>OPG Power Ventures</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>Mr. Vasu</td>
                <td>CEO</td>
                <td>Lavni Ventures</td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>Pallav Kumar Singh</td>
                <td>Managing Partner</td>
                <td>Draconis Global</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Committees