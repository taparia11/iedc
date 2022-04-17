import React from 'react'

const Ptable = () => {
  return (
    <>
    <table className="table table-responsive">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Team Name</th>
          <th scope="col">Brief About Project</th>
          <th scope="col">Intervention Mode</th>
          <th scope="col">Current Status</th>
          <th scope="col">Gallery</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>NIS0001 Monkwish</td>
          <td>
            A platform for employer to improve the organization performance and
            capabilities by identifying employee skill gap and help them to
            become competent.
          </td>
          <td>
            Application developed and have successfully run first pilot with
            Swiggy for product validation.
          </td>
          <td>
            Currently they have developed final products with all interations.
            They have adopted subscription based model. Currently they have 5
            Paid users.
          </td>
          <td>
            <a className="btn btn-success" data-toggle="modal" href="#Modal1"
              >Gallery</a
            >
          </td>
        </tr>

        <tr>
          <th scope="row">2</th>
          <td>NIS0002 Rizel</td>
          <td>
            Developing Electric Vehicle Powertrain
          </td>
          <td>
            For First prototype to test their technology, they had retrofit KTM
            bike, made electric version with integration of Motor, BMS, Drive
            etc. To understand the performance and efficiency. After learning,
            they have successfully completed digital design of battery pack and
            Motor, and also started working on first prototype.
          </td>
          <td>
            They have completed 2nd prototype of Motor with all iterations,
            currently its in testing phase.
          </td>
          <td>
            <a className="btn btn-success" data-toggle="modal" href="#Modal2"
              >Gallery</a
            >
          </td>
        </tr>

        <tr>
          <th scope="row">3</th>
          <td>NIS0005 Smart Attendance Sysem</td>
          <td>
            A platform to provide access to premises by Face Recognition
          </td>
          <td>
            They had created an application on laptop to run the test, it was
            able to do face detection and recognition in milliseconds, easily it
            could detect 5 faces at a time, but needed more computation power to
            detect more faces and also the system was not easily expandable.
          </td>
          <td>
            Currently they are working on to make stand alone system by moving
            on to Jetson platform or by Cloud server.
          </td>
          <td>
           
            <a className="btn btn-success" data-toggle="modal" href="#Modal3"
              >Gallery</a
            >
          </td>
        </tr>

        <tr>
          <th scope="row">4</th>
          <td>NIS0006 Development of EV retrofitting kits</td>
          <td>
            EV retrofit kit for converting existing gasoline vehicle to
            electric.
          </td>
          <td>
            To make first prototype they have converted one riksha into electric
            and made test run to understand performance and efficiency. Based on
            that learning they have made second prototype with standard
            industrial grade stuffs and connected over internet to wirelessly
            control and study the performance.
          </td>
          <td>
            Currently they had completed final version of prototype with all
            possible iterations and its on pilot run. And study is going on to
            see performance and efficiency.
          </td>
          <td>
           
            <a className="btn btn-success" data-toggle="modal" href="#Modal4"
              >Gallery</a
            >
          </td>
        </tr>

        <tr>
          <th scope="row">5</th>
          <td>NIS0008 Bio 3D printer</td>
          <td>
            Desktop model BIO 3D Printer.
          </td>
          <td>
            They had fabricated first prototype to test and learn the properties
            of biomaterial while printing. For first run they have used Aloe
            Vera gel as it has similar viscosity as other bio material.
          </td>
          <td>
            Currently based on learning they had created 2nd prototype of
            extruder. They will be doing further test with Alginate biomaterial.
          </td>
          <td>
            <a className="btn btn-success" data-toggle="modal" href="#Modal5"
              >Gallery</a
            >
          </td>
        </tr>

        <tr>
          <th scope="row">6</th>
          <td>NIS0007 Metal 3D Printer</td>
          <td>
            Desktop model of Metal 3D printer
          </td>
          <td>
            They had tried using different composition to test sintering process
            to make first metal printed model they had used existing furnace to
            get output. They have planned to create an extruder to bring all
            process at single place could be done.
          </td>
          <td>
            Currently they had bought new furnace to do deep research on
            different composition and based on that they will be making second
            version of metal extruder prototype.
          </td>
          <td>
            <a className="btn btn-success" data-toggle="modal" href="#Modal6"
              >Gallery</a
            >
          </td>
        </tr>

        <tr>
          <th scope="row">7</th>
          <td>NIS0013 MetaWear</td>
          <td>
            A miniature device to monitor remotely body temperature, heart beat
            {'&'} Glucose.
          </td>
          <td>
            They have tested first prototype on Breadboard, to test heartbeat
            and temperature. After testing they have finalised components, made
            first prototype of pcb board for measuring heart beat, and run test
            again. Also made a online portal where device push all data over
            internet to server, which could be seen at Mobile/Web App.
          </td>
          <td>
            After successful testing of heart beat over PCB board, team have
            started working on Glucometer to test Glucose level by sweat. They
            have ordered required chemicals and accessories to test it.
          </td>
          <td>
           
            <a className="btn btn-success" data-toggle="modal" href="#Modal7"
              >Gallery</a
            >
          </td>
        </tr>

        <tr>
          <th scope="row">8</th>
          <td>
            NIS0014 Conversion of plastic waste to fuel oil via enhanced
            pyrolysis with hydrogenation
          </td>
          <td>
            Conversion of plastic waste to fuel oil via enhanced pyrolysis with
            hydrogenation
          </td>
          <td>
            To test their theoretical assumptions, they have made first
            prototype to test the characteristics of output oil/gas from
            processed waste plastics. They have studied output and its falling
            in category of petrol/diesel.
          </td>
          <td>
            Currently, they are working on refining output by adding catalyst in
            process. And also doing research for efficient output.
          </td>
          <td>
           
            <a className="btn btn-success" data-toggle="modal" href="#Modal8"
              >Gallery</a
            >
          </td>
        </tr>

        <tr>
          <th scope="row">9</th>
          <td>
            NIS0015 Fabrication and parametric evaluation of modified cooling
            scheme in a bench scale OTEC system.
          </td>
          <td>
            Design and development of a bench scale Ocean Thermal Energy
            Conversion facility which co-generates power and desalinated water
            at the same time. This system has a wide scale application in
            industries and can also be used for desalination of seawater to meet
            the water demands.
          </td>
          <td>
            A first prototype of this project was developed, which helped as a
            proof of concept. After that they have fabricated second prototype
            which is highly precise system, able to get satisfactory result.
          </td>
          <td>
            Currently, they are ready with second Prototype and also further
            research, analysis & optimization work is going on.
          </td>
          <td>
            
            <a className="btn btn-success" data-toggle="modal" href="#Modal9"
              >Gallery</a
            >
          </td>
        </tr>

        <tr>
          <th scope="row">10</th>
          <td>
            NIS0019 Tactical Smart Scope Using Encoder Decoder Based Scene
            Segmentation
          </td>
          <td>
            Design and development of Tactical Smart Scope based on Scene
            Segmentation. There aim is to display over the scope human body map,
            and also surrounding environment and object.
          </td>
          <td>
            To test their concept first they have integrated all major
            components camera, screen, lens , tried experiment. There were able
            to do human face recognition, creating dynamic map of human body,
            able to recognize surrounding objects and environment.
          </td>
          <td>
            Currently they have started working on second prototype, where they
            are designing stand alone board system, which could be installed
            directly above the gun.
          </td>
          <td>
           
            <a className="btn btn-success" data-toggle="modal" href="#Modal10"
              >Gallery</a
            >
          </td>
        </tr>

        <tr>
          <th scope="row">11</th>
          <td>NIS0020 Light weight concrete Canoe</td>
          <td>A light weight concrete canoe of 6 meter</td>
          <td>
            They have prepared first prototype by using concrete of density
            855kg/m3 and the reinforcement carbon fiber. The mold for
            construction is prepared using styrofoam which is engraved using a
            CNC machine. First prototype was unsuccessful, it got vertical crack
            after drying up.
          </td>
          <td>
            Currently they have started to prepare second prototype, they have
            prepared the reinforcement and completed 70% of the mold
            construction, they are only left with final construction.
          </td>
          <td>
           
            <a className="btn btn-success" data-toggle="modal" href="#Modal11"
              >Gallery</a
            >
          </td>
        </tr>

        <tr>
          <th scope="row">12</th>
          <td>
            NIS0021 Self Reconfigurable Modular Mobile Robots for Uneven
            Terrains
          </td>
          <td>
            The project aims to develop shape-shifting modular reconfigurable
            robots that undergo autonomous morphogenesis i.e. structure
            formation based on current environmental situation and task assigned
            to the robot. The quintessential modular robots are not designed to
            do any particular task but are a versatile system that develops into
            various forms to execute a variety of tasks.
          </td>
          <td>
            Followed by a comprehensive CAD and PCB design, a 3D printed
            prototype of the modular robot was made to test and verify its
            economic feasibility, technical viability, and real-world
            deployability. Preliminary testing exhibiting locomotion, magnetic
            docking, and lifting of a module was carried subsequently.
          </td>
          <td>
            Currently, they plan to work on the self- reconfiguration section,
            which would result in broadening the deployability of such modules
            in remote, hostile, and human inaccessible environments. The novel
            modular robots are equipped with sufficient exteroceptive as well as
            proprioceptive sensors, required for complete autonomy.
          </td>
          <td>
           
            <a className="btn btn-success" data-toggle="modal" href="#Modal12"
              >Gallery</a
            >
          </td>
        </tr>

        <tr>
          <th scope="row">13</th>
          <td>
            NIS0022 Design and Development of system module to measure the
            variation in micrographia and speech for Parkinson's Disease.
          </td>
          <td>
            Design and Development of system module to measure the variation in
            micrographia and speech for Parkinson's Disease.
          </td>
          <td>
            They have made first prototype by using WACOM and studied the output
            by drawing various shape.They have run pilot with 3 patients, based
            on feedback, they have modified application.
          </td>
          <td>
            Currently, they have completed second prototype and software to do
            testing with more patients
          </td>
          <td>
            <a className="btn btn-success" data-toggle="modal" href="#Modal13"
              >Gallery</a
            >
          </td>
        </tr>

        <tr>
          <th scope="row">14</th>
          <td>
            NIS0023 Non-Invasive Bilirubin Sensor for Continuous Monitoring and
            Automatic Control of Phototherapy for Infant Jaundice Treatment
          </td>
          <td>
            To design a compact size Non-Invasive Bilirubin sensor which
            continuously monitors bilirubin level of jaundice in neonates and To
            automatically start the phototherapy treatment process using Iot
            technology
          </td>
          <td>
            They did Testing with colour chart ( diff yellow colour chart) - to
            prove that designed sensor shows variation amony diff level of
            colour charts. Measured with 75 adults with three different skin
            tone such as fair, dark and brownish skin tones - To prove how far
            the designed sensor shows variation among diff skin tones at diff
            location such as Forehead, ventral palm, ventral wrist , dorsal palm
            and dorsal wrist. Testing with 10 volunteering neonates - found 50%
            correlation with existing jaundice meter.
          </td>
          <td>
            Currently, Second Prototype designed and fabricated of non-invasive
            bilirubin sensor and phototherapy set up is ready. They will be
            starting pilot run.
          </td>
          <td>
            <a className="btn btn-success" data-toggle="modal" href="#Modal14"
              >Gallery</a
            >
          </td>
        </tr>

        <tr>
          <th scope="row">15</th>
          <td>
            NIS0024 Design and developmen of a Crop Quality Moitoring and
            Classification System using IoT and Blockchain
          </td>
          <td>
            Design and development of a crop quality monitoring system with aim
            to a Sensing the various parameters on-field and warehouse to
            determine the crop quality. b To update this data into the
            blockchain. c To enable a secured transaction between the
            distributor and the farmer.
          </td>
          <td>
            The sensors were calibrated to obtain better accuracy and first
            implemented in the horticulture department for testing purposes. For
            real-time data, 6 bags were taken and seeds sown with the soil
            containing fertilizers as well. The crop was monitored throughout
            the growing stage and tomatoes were obtained. The sensor data was
            recorded and stored in the database for classification of quality.
            The private ethereum blockchain network was built initially to
            visualize the working efficiently.
          </td>
          <td>
            Currently they are working on second prototype for big area of
            agriculture land and setting up their device at various location to
            understand characteristics of soil at various position, accordingly
            they will notify to farmer through mobile/web app.
          </td>
          <td>
           
            <a className="btn btn-success" data-toggle="modal" href="#Modal15"
              >Gallery</a
            >
          </td>
        </tr>

        <tr>
          <th scope="row">16</th>
          <td>
            NIS0025 Design of wearablle full duplex Digital Transceiver for
            underwater optical wireless communication
          </td>
          <td>
            A wearable full-duplex digital transceiver based on blue LED for
            high speed data communication such as audio/video Under working
            condition.
          </td>
          <td>
            They have created digital model to test their all ideas, all the
            simulations have been completed and the results have been verified,
            analyzed and tabulated.
          </td>
          <td>
            Currently they have procured all the required resources for
            development of their first prototype to experiment and check the
            results in real systems.
          </td>
          <td>
            <a className="btn btn-success" data-toggle="modal" href="#Modal16"
              >Gallery</a
            >
          </td>
        </tr>

        <tr>
          <th scope="row">17</th>
          <td>NIS0028 Faby</td>
          <td>
            A mobile robot, which could autonomously move around premises. Which
            should be able to supervise and control premises over the network.
          </td>
          <td>
            They have fabricated first prototype with the features of
            controlling premises over the network and do autonomous movement
            around. and also added feature to talk back, to give tour to guests.
          </td>
          <td>
            Currently they are working on second prototype improvising,
            autonomous mode of robot, and also adding with feature to control
            over web and mobile application.
          </td>
          <td>
          
            <a className="btn btn-success" data-toggle="modal" href="#Modal17"
              >Gallery</a
            >
          </td>
        </tr>

        <tr>
          <th scope="row">18</th>
          <td>NIS0029 Fablab UGV</td>
          <td>An Unmanned Ground Vehicle</td>
          <td>
            First prototype, they mainly work on movement of UGV based on
            geolocation and also sensor integration to avoid obstacles.
          </td>
          <td>
            Currently, They are developing second version of their prototype
            with integration of industrial grade components for better
            performance.
          </td>
          <td>
            
            <a className="btn btn-success" data-toggle="modal" href="#Modal18"
              >Gallery</a
            >
          </td>
        </tr>

        <tr>
          <th scope="row">19</th>
          <td>
            NIS0033 Design Development and Implementation of parrallel
            drivetrain for 3 wheelers
          </td>
          <td>
            Design Development and Implementation of parallel drivetrain for 3
            wheelers
          </td>
          <td>
            To test their concept they had created digital model and run all the
            simulation to study the performance. Results were convincing based
            on that they have finalised all components for their first
            prototype.
          </td>
          <td>
            Currently, They have procured all the required components and also
            have finished all CAD designs of mechanical parts and PCB board
            designs.
          </td>
          <td>
            <a className="btn btn-success" data-toggle="modal" href="#Modal19"
              >Gallery</a
            >
          </td>
        </tr>
      </tbody>
    </table>
    </>
  )
}

export default Ptable