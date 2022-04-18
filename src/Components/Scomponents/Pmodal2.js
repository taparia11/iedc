import React from 'react'

const Ptable2 = () => {
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
                  <img
                    src={require("../../Assets/image/projects/team 1-2/NIS00311.jpeg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../Assets/image/projects/team 1-2/NIS00312.jpeg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../Assets/image/projects/team 1-2/NIS00313.jpeg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../Assets/image/projects/team 1-2/NIS00314.jpeg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../Assets/image/projects/team 1-2/NIS003142.jpeg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../Assets/image/projects/team 1-2/NIS0031.jpeg")}
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
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
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
    {/*-- End of modal 1 -*/}

    {/*-- Modal 2 starts -*/}
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
            <div id="Carousel1" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={require("../../Assets/image/projects/team 2-2/FotoJet brainwave.jpeg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../Assets/image/projects/team 2-2/NIS0034 1.jpeg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <video width="320" height="240" >
                    <source src={require("../../Assets/image/projects/team 2-2/IMU sensor recording- single finger (1).mp4")} type="video/mp4"/>
                  </video>
                </div>
                
              </div>
              <a
                className="carousel-control-prev"
                href="#Carousel1"
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
    {/*-- End of modal 2 -*/}

    {/*-- Modal 3 starts -*/}
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
            <div id="Carousel1" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={require("../../Assets/image/projects/team 62/NIS0042 - 6 Mar 2022 - Copy.jpeg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../Assets/image/projects/team 62/NIS0042 - 7 Mar 2022 - Copy.jpeg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../Assets/image/projects/team 62/NIS0042 - Copy.jpeg")}
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
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
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
                  <img
                    src={require("../../Assets/image/projects/team 82/1 - Rishik Jhunjhunwala (RA1911005010057).jpeg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../Assets/image/projects/team 82/4 - Rishik Jhunjhunwala (RA1911005010057).jpeg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../Assets/image/projects/team 82/NIS0049 Flylife.jpeg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../Assets/image/projects/team 82/WhatsApp Image 2021-02-17 at 6.11.51 PM - Rishik Jhunjhunwala (RA1911005010057).jpeg")}
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
            <div id="Carousel1" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={require("../../Assets/image/projects/team 102/NIS0052 - Any view An Efficient Refreshable Braille Pad For Visually Impaired.jpeg")}
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
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
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
                  <img
                    src={require("../../Assets/image/projects/team 122/1 - Vaishnav Kumar S.jpeg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../Assets/image/projects/team 122/des - Vaishnav Kumar S.png")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../Assets/image/projects/team 122/Setup model - Vaishnav Kumar S.jpeg")}
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
            <div id="Carousel1" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={require("../../Assets/image/projects/team 142/NIS0058 1.jpeg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../Assets/image/projects/team 142/NIS0058 2.jpeg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../Assets/image/projects/team 142/NIS0058 3.jpeg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../Assets/image/projects/team 142/NIS0058 4.jpeg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../Assets/image/projects/team 142/NIS0058 5.jpeg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../Assets/image/projects/team 142/NIS0058.jpeg")}
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
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
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
                  <img
                    src={require("../../Assets/image/projects/team 152/FotoJet NIS0061.jpeg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../Assets/image/projects/team 152/NIS0061 1.jpeg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../Assets/image/projects/team 152/NIS0061 2.jpeg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../Assets/image/projects/team 152/NIS0061 3.jpeg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../Assets/image/projects/team 152/NIS0061 4.jpeg")}
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
                  <img
                    src={require("../../Assets/image/projects/team 172/FotoJet (2).jpeg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../Assets/image/projects/team 172/NIS0069 - Project Screenshot01 - KAVYAPRIYA R (RA1811029010034).jpeg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../Assets/image/projects/team 172/NIS0069 - Project Screenshot02 - KAVYAPRIYA R (RA1811029010034).jpeg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../Assets/image/projects/team 172/Project Concept Photo 02 - Benjamin Samuel (RA1811004020044).jpeg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../Assets/image/projects/team 172/Project Photo 01 - Benjamin Samuel (RA1811004020044).jpeg")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../../Assets/image/projects/team 172/Project Photo 03 - Benjamin Samuel (RA1811004020044).jpeg")}
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
    {/*-- End of modal 18 -*/}
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
    <div
      className="modal fade bd-example-modal-lg"
      id="Modal20"
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
      id="Modal21"
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
      id="Modal22"
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
      id="Modal23"
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
      id="Modal24"
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

    {/*-- Modal 25 starts -*/}
    <div
      className="modal fade bd-example-modal-lg"
      id="Modal25"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <divx className="modal-content">
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
            <h1><a href="https://vimeo.com/688345805">Click here</a></h1>
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
        </divx>
      </div>
    </div>


    <div
      className="modal fade bd-example-modal-lg"
      id="Modal26"
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
                  <img
                    src=""
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


    <div
      className="modal fade bd-example-modal-lg"
      id="Modal27"
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
      id="Modal28"
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
      id="Modal29"
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
                  <img
                    src=""
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item active">
                  <img
                    src=""
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item active">
                  <img
                    src=""
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item active">
                  <img
                    src=""
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


    <div
      className="modal fade bd-example-modal-lg"
      id="Modal30"
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
      id="Modal31"
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

export default Ptable2