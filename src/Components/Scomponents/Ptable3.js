import React from 'react'
import project3 from './3year';
import Ptablecard from './Ptablecard2';

const Pmodal2 = () => {
  return (
    <>
    <table className="table table-responsive table3">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Project Code</th>
          <th scope="col">Project Name</th>
          <th scope="col">Brief about project</th>
          <th scope="col">Gallery</th>
        </tr>
      </thead>
      <tbody>
      {project3.map((item) => {
                    return <Ptablecard props={item} />;
                  })}

        
          
      </tbody>
    </table>
    </>
  )
}

export default Pmodal2