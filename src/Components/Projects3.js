import React, { useEffect } from "react";
import Ptable3 from "./Scomponents/Ptable3";
import Pmodal3 from "./Scomponents/Pmodal3";

const Projects3 = (props) => {
  useEffect(() => {
    document.title = `${props.titleChange} - IEDC`;
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Ptable3 />
      {/* <Pmodal3 /> */}
    </>
  );
};

export default Projects3;
