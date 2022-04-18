import React, {useEffect} from 'react'
import Pmodal1 from './Scomponents/Pmodal1';
import Ptable1 from './Scomponents/Ptable1';

const Projects1 = (props) => {
    useEffect(() => {
        document.title = `${props.titleChange} - IEDC`;
        //eslint-disable-next-line
    }, [])

  return (
    <>
    <Ptable1 />
    <Pmodal1 />
    </>
  )
}

export default Projects1