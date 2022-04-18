import React, {useEffect} from 'react'
import Ptable2 from './Scomponents/Ptable2';
import Pmodal2 from './Scomponents/Pmodal2';

const Projects1 = (props) => {
    useEffect(() => {
        document.title = `${props.titleChange} - IEDC`;
        //eslint-disable-next-line
    }, [])

  return (
    <>
    <Ptable2 />
    <Pmodal2 />
    </>
  )
}

export default Projects1