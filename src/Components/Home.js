import React, {useEffect} from 'react'
import About from './Scomponents/About'
import Fo from './Scomponents/Fo'
import Functions from './Scomponents/Functions'
import Photos from './Scomponents/Photos'

const Home = (props) => {

  useEffect(() => {
    document.title = `${props.titleChange} - IEDC`;
    //eslint-disable-next-line
}, [])

  return (
   <>
   
   <Photos />
   <About />
   <Fo />
   <Functions />
   </>
  )
}

export default Home