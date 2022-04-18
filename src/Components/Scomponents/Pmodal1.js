import React from 'react' 
import img1 from "../../Assets/image/projects/team 1/one.jpeg"
import img2 from "../../Assets/image/projects/team 1/two.jpeg"

const Pmodal1 = () => {
    const imgstyle ={
        position: 'absolute',
        top: '50%',
        left: '50%',
        webkitTransform: 'translate(-50%, -50%)',
        msTransform: 'translate(-50%, -50%)',
        transform: 'translate(-50%, -50%)',
        maxHeight: '800px',
        width: 'auto'
    }
  return (
   <>
   <div
      className="modal fade bd-example-modal-lg"
      id="Modal1"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="Carousel1" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img style={{imgstyle}} 
                    src={img1}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img style={{imgstyle}} 
                    src={img2}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#Carousel1"
                role="button"
                data-slide="prev"
              >
               
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#Carousel1"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      className="modal fade bd-example-modal-lg"
      id="Modal2"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <h1>No images available</h1>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      className="modal fade bd-example-modal-lg"
      id="Modal3"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <h1>No images available</h1>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    {/*-- End of modal 3 -*/}

    {/*-- Modal 4 starts -*/}
    <div
      className="modal fade bd-example-modal-lg"
      id="Modal4"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="Carousel4" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img style={{imgstyle}} 
                    src={require("../../Assets/image/projects/team 4/KIM Battery Pack.jpeg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#Carousel4"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#Carousel4"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    {/*-- End of modal 4 -*/}

    {/*-- Modal 5 starts -*/}
    <div
      className="modal fade bd-example-modal-lg"
      id="Modal5"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <h1>No images available</h1>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    {/*-- End of modal 5 -*/}

    {/*-- Modal 6 starts -*/}
    <div
      className="modal fade bd-example-modal-lg"
      id="Modal6"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <h1>No images available</h1>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    {/*-- End of modal 6 -*/}

    {/*-- Modal 7 starts -*/}
    <div
      className="modal fade bd-example-modal-lg"
      id="Modal7"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="Carousel7" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img style={{imgstyle}} 
                    src={require("../../Assets/image/projects/team 7/one.png")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#Carousel7"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#Carousel7"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    {/*-- End of modal 7 -*/}

    {/*-- Modal 8 starts -*/}
    <div
      className="modal fade bd-example-modal-lg"
      id="Modal8"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="Carousel8" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img style={{imgstyle}} 
                    src={require("../../Assets/image/projects/team 8/one.jpg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img style={{imgstyle}} 
                    src={require("../../Assets/image/projects/team 8/two.jpg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img style={{imgstyle}} 
                    src={require("../../Assets/image/projects/team 8/three.jpeg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img style={{imgstyle}} 
                    src={require("../../Assets/image/projects/team 8/four.jpg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img style={{imgstyle}} 
                    src={require("../../Assets/image/projects/team 8/five.jpg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#Carousel8"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#Carousel8"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    {/*-- End of modal 8 -*/}

    {/*-- Modal 9 starts -*/}
    <div
      className="modal fade bd-example-modal-lg"
      id="Modal9"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <h1>No images available</h1>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    {/*-- End of modal 9 -*/}

    {/*-- Modal 10 starts -*/}
    <div
      className="modal fade bd-example-modal-lg"
      id="Modal10"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <h1>No images available</h1>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    {/*-- End of modal 10 -*/}

    {/*-- Modal 11 starts -*/}
    <div
      className="modal fade bd-example-modal-lg"
      id="Modal11"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <h1>No images available</h1>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    {/*-- End of modal 11 -*/}

    {/*-- Modal 12 starts -*/}
    <div
      className="modal fade bd-example-modal-lg"
      id="Modal12"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="Carousel12" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img style={{imgstyle}} 
                    src={require("../../Assets/image/projects/team 12/IMG_20200307_175645956.jpg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img style={{imgstyle}} 
                    src={require("../../Assets/image/projects/team 12/IMG_6111.JPG")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img style={{imgstyle}} 
                    src={require("../../Assets/image/projects/team 12/IMG_6133.JPG")}
                    alt=""
                    className="img-fluid"
                  /> 
                </div>
                <div className="carousel-item">
                  <img style={{imgstyle}} 
                    src={require("../../Assets/image/projects/team 12/IMG_E6130.JPG")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#Carousel12"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#Carousel12"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    {/*-- End of modal 12 -*/}

    {/*-- Modal 13 starts -*/}
    <div
      className="modal fade bd-example-modal-lg"
      id="Modal13"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="Carousel13" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img style={{imgstyle}} 
                    src={require("../../Assets/image/projects/team 13/callCUI.png")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img style={{imgstyle}} 
                    src={require("../../Assets/image/projects/team 13/mgPdRep.png")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img style={{imgstyle}} 
                    src={require("../../Assets/image/projects/team 13/prorposes_UI.JPG")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img style={{imgstyle}} 
                    src={require("../../Assets/image/projects/team 13/saveMgData.png")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#Carousel13"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#Carousel13"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    {/*-- End of modal 13 -*/}

    {/*-- Modal 14 starts -*/}
    <div
      className="modal fade bd-example-modal-lg"
      id="Modal14"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <h1>No images available</h1>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    {/*-- End of modal 14 -*/}

    {/*-- Modal 15 starts -*/}
    <div
      className="modal fade bd-example-modal-lg"
      id="Modal15"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="Carousel15" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img style={{imgstyle}} 
                    src={require("../../Assets/image/projects/team 15/Azure_DB.png")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img style={{imgstyle}} 
                    src={require("../../Assets/image/projects/team 15/Fruit_maturing_stage.png")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img style={{imgstyle}} 
                    src={require("../../Assets/image/projects/team 15/on-field setup.jpg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img style={{imgstyle}} 
                    src={require("../../Assets/image/projects/team 15/onfieldanalysis.png")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img style={{imgstyle}} 
                    src={require("../../Assets/image/projects/team 15/UI.png")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#Carousel15"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#Carousel15"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    {/*-- End of modal 15 -*/}

    {/*-- Modal 16 starts -*/}
    <div
      className="modal fade bd-example-modal-lg"
      id="Modal16"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <h1>No images available</h1>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    {/*-- End of modal 16 -*/}

    {/*-- Modal 17 starts -*/}
    <div
      className="modal fade bd-example-modal-lg"
      id="Modal17"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="Carousel7" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img style={{imgstyle}} 
                    src={require("../../Assets/image/projects/team 17/final_image1.jpeg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img style={{imgstyle}} 
                    src={require("../../Assets/image/projects/team 17/moovy_exploded.PNG")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img style={{imgstyle}} 
                    src={require("../../Assets/image/projects/team 17/WhatsApp Image 2019-10-21 at 00.16.59.jpeg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#Carousel17"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#Carousel17"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    {/*-- End of modal 17 -*/}

    {/*-- Modal 18 starts -*/}
    <div
      className="modal fade bd-example-modal-lg"
      id="Modal18"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div id="Carousel18" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img style={{imgstyle}} 
                    src={require("../../Assets/image/projects/team 18/IMG_20200201_123830_Bokeh.jpg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img style={{imgstyle}} 
                    src={require("../../Assets/image/projects/team 18/IMG_20200201_123830_Bokeh2.png")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#Carousel18"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#Carousel18"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    {/*-- End of modal 18 -*/}

    {/*-- Modal 19 starts -*/}
    <div
      className="modal fade bd-example-modal-lg"
      id="Modal19"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <h1>No images available</h1>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Pmodal1