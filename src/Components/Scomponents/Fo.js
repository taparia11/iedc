import React from 'react'

const Fo = () => {
  return (
    <>
    <section id="facilities">
  <div className="container pt-2">
    <div className="section-title" data-aos="fade-up" style={{paddingBottom: '30px'}}>
      <h2>Facilities</h2>

    </div>
    <div className="row ">
    <div className="col">
    <div className="container">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/EYR_QPMmKU0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title='IEDC Video'
        ></iframe>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="container">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
        className="embed-responsive-item"
          src="https://www.youtube.com/embed/iL27qhfWZqU"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title='IEDC Intro'
        ></iframe>
      </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    
    <section id="services" className="services">
  <div className="container">

    <div className="section-title" data-aos="fade-up">
      <h2>Objectives</h2>
      <p>Your Goals , Our Team</p>
    </div>

    <div className="row">
      <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
        <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
          <div className="icon"><i className="bx bxl-dribbble"></i></div>
          <h4 className="title"><a href="/">Vibrant-entrepreneurial ecosystem.</a></h4>
          <p className="description">To channelize the knowledge and energy of youth towards becoming
            active partners in the economic development process.</p>
        </div>
      </div>

      <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
        <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
          <div className="icon"><i className="bx bx-file"></i></div>
          <h4 className="title"><a href="/">Opportunities</a></h4>
          <p className="description">To catalyze and promote the development of knowledge-based and
            innovation-driven enterprises and promote employment opportunities
            amongst youth especially students.</p>
        </div>
      </div>

      <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
        <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
          <div className="icon"><i className="bx bx-tachometer"></i></div>
          <h4 className="title"><a href="/">Innovation</a></h4>
          <p className="description">To inculcate a culture of innovation-driven entrepreneurship.</p>
        </div>
      </div>

      <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
        <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
          <div className="icon"><i className="bx bx-world"></i></div>
          <h4 className="title"><a href="/">Entrepreneurship</a></h4>
          <p className="description">To act as an institutional mechanism for providing various services
            including information on all aspects of enterprise building to
            budding S{'&'}T entrepreneurs.</p>
        </div>
      </div>

    </div>

  </div>
</section>
    </>
  )
}

export default Fo