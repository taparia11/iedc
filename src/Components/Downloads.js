import React, {useEffect} from 'react'

const Downloads = (props) => {
    useEffect(() => {
        document.title = `${props.titleChange} - IEDC`;
        //eslint-disable-next-line
    }, [])
  return (
    <>
    <section id="downloads">
      <div className="container pt-2">
        <h3 className="section-header">Downloads</h3>
        <div className="row download-item">
          <div className="col-lg-12 col-xl-6" style="height:100%">
            <h3 className="section-header">Action Plan:2020-21</h3>
            <object
              data="./assets/downloads/action_plan.pdf"
              type="application/pdf"
              width="100%"
              height="100%"
            ></object>
          </div>
          <div className="col-lg-12 col-xl-6" style="height:100%">
            <h3 className="section-header">Progress Report:2019-20</h3>
            <object
              data="./assets/downloads/progress_report.PDF"
              type="application/pdf"
              width="100%"
              height="100%"
            ></object>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Downloads