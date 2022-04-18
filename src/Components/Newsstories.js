import React, {useEffect} from 'react'

const Newsstories = (props) => {
  useEffect(() => {
    document.title = `${props.titleChange} - IEDC`;
    //eslint-disable-next-line
}, [])
  return (
    <>
    <section id="newsstories">
      <div className="container pt-4">
        <h4 className="section-header">News Stories</h4>
        <div className="row pt-2">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 img-container">
            <a
              href="https://www.phoenixmedia.co.in/2019/05/students-start-up-seed-awarded-grant-of.html"
              target="_blank"
            >
              <img
                height="100%"
                width="100%"
                src={require("../Assets/image/news-story-3.PNG")}
                alt="News story 1"
              />
            </a>
            <div className="after">Click to open</div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 img-container">
            <a
              href="https://newstodaynet.com/index.php/2019/05/22/srm-grants-funds-for-4-students-startups/"
              target="_blank"
            >
              <img
                height="100%"
                width="100%"
                src={require("../Assets/image/news-story-1.PNG")}
                alt="News story 1"
              />
            </a>
            <div className="after">Click to open</div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 img-container">
            <a
              href="https://www.edexlive.com/happening/2019/jun/18/this-platform-helps-local-retailers-get-back-in-the-game-by-providing-effective-strategies-for-bette-6654.html"
              target="_blank"
            >
              <img
                height="100%"
                width="100%"
                src={require("../Assets/image/news-story-2.PNG")}
                alt="News story 1"
              />
            </a>
            <div className="after">Click to open</div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Newsstories