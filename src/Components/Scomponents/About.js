import React from 'react'
import  '../../css/globals.css'
const About = () => {
  return (
   <>
   <section className="kz-section">
      <h2 data-aos="fade-down" className="section-title"><span>A</span>bout us<span>.</span></h2>
      <div className="container mt-5">
          <div className="row mt-5 aboutus-content">
              <div className="col-sm-12 col-md-6 col-lg-6 d-sm-block d-md-none d-lg-none text-center"
                  data-aos="fade-left">
                  <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_5o8zf8kq.json"  background="transparent"  speed="1"  style={{width: '1137', height: '860'}}  loop  autoplay></lottie-player>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6" data-aos="fade-right">
                  <p>
                    New Generation Innovation and Entrepreneurship Development Centre
                    (NewGen IEDC) is the program launched by the National Science and
                    Technology Entrepreneurship Development Board (NSTEDB), Department of
                    Science {'&'} Technology (DST), Government of India and implemented by
                    EDII, Ahmedabad. NewGen IEDC aims to inculcate the spirit of
                    innovation and entrepreneurship amongst the young S{'&'}T students,
                    encourage and support start-up creation through guidance, mentorship {'&'}
                    support.
                  </p>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 d-none d-sm-none d-md-block d-lg-block text-center"
                  data-aos="fade-left">
                  <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_5o8zf8kq.json"  background="transparent"  speed="1"  style={{width: '1137', height: '860'}}  loop  autoplay></lottie-player>
              </div>
          </div>
          </div>
  </section>
  <section className="kz-section">
    <h2 data-aos="fade-down" className="section-title"><span>M</span>ission<span>!</span></h2>
    <div className="container mt-5">
        <div className="row mt-5 aboutus-content">
            <div className="col-sm-12 col-md-6 col-lg-6 text-center" data-aos="fade-right">
              <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_i7dxj8qw.json"  background="transparent"  speed="1"  style={{width: '400px', height: '300px'}}  loop  autoplay></lottie-player>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6" data-aos="fade-left">
                <p style={{

                  paddingTop: '50px'}} >
                  "
                    Promote knowledge-based and technology-driven start-ups by harnessing
                    young minds and their innovation potential in an academic environment
                 "
                </p>
            </div>
        </div>
        </div>
</section>
   </>
  )
}

export default About