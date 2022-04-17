import React, {useEffect} from 'react'
import Pmodal from './Scomponents/Pmodal';
import Ptable from './Scomponents/Ptable';

const Projects = (props) => {
    useEffect(() => {
        document.title = `${props.titleChange} - IEDC`;
        //eslint-disable-next-line
    }, [])

  return (
    <>
    <Ptable />
    <Pmodal />
    </>
  )
}

export default Projects