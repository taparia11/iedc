import React from 'react'

const Functions = () => {
    const myStyle = {
        borderRadius:'1000px',
        textAlign: 'center'
    }
  return (
    <>
    <section id="testimonials" className="testimonials section-bg" style={{paddingTop: '30px', paddingBottom: '25px'}} >
  <div className="container">

    <div className="section-title" data-aos="fade-up" style={{paddingBottom: '10px'}}>
      <h2>Functions</h2>

    </div>

    <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100" >
      <div className="swiper-wrapper" >

        <div className="swiper-slide">
          <div className="testimonial-wrap">
            <div className="testimonial-item"style={{marginBottom:'2px', borderRadius:'1000px', textAlign: 'center'}}>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                To motivate, support and mentor students for identification,
            development, and commercialization of their innovative ideas.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </div>
        </div>
        </div>
        <div className="swiper-slide">
          <div className="testimonial-wrap">
            <div className="testimonial-item" style={myStyle}>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                To initiate the targeted number of innovative student projects each
            year for new product development.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="testimonial-wrap">
            <div className="testimonial-item" style={myStyle}>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                To organize Business Plan Competitions/Innovation Camps/ Hackathons
            with the active involvement of industry and alumni.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="testimonial-wrap">
            <div className="testimonial-item" style={myStyle}>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                To guide and assist prospective entrepreneurs on various aspects
            such as preparing project reports, obtaining project approvals,
            loans and facilities from agencies of support system, technologies
            information, etc.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="testimonial-wrap">
            <div className="testimonial-item" style={myStyle}>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                To facilitate the creation of entrepreneur’s club / E-Cells in the
            college to foster a culture of entrepreneurship amongst students.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </div>
        </div>

        <div className="swiper-slide">
          <div className="testimonial-wrap">
            <div className="testimonial-item" style={myStyle}>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                To arrange interaction with entrepreneurs, bankers, professionals,
                potential customers and create a mentorship scheme for student
                innovators.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </div>
        </div>

      

    </div>

  </div>
</section>

{/* <footer id="footer">
    <div class="footer-newsletter">
            <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                <h4>Join Our Newsletter</h4>
                <p>Get Emails weekly...</p>
                <form action="" method="post">
                    <input type="email" name="email"/><input type="submit" value="Subscribe"/>
                </form>
                </div>
            </div>
            </div>
        </div>
</footer> */}
    </>
  )
}

export default Functions