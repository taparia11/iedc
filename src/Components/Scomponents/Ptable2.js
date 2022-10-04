import React from 'react'
import projects2 from './2year';
import Ptablecard from './Ptablecard';

const Pmodal2 = () => {
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
      {projects2.map((item) => {
                    return <Ptablecard props={item} />;
                  })}

        
          
      </tbody>
    </table>
    </>
  )
}

export default Pmodal2