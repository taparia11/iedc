import React from "react";

const Amodal = () => {
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div
                                id="Carousel1"
                                className="carousel slide"
                                data-ride="carousel"
                            >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img
                                            src={require("../../Assets/image/activities/march bites mspc/1.jpg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require("../../Assets/image/activities/march bites mspc/2.jpg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require("../../Assets/image/activities/march bites mspc/3.jpg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require("../../Assets/image/activities/march bites mspc/4.jpg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require("../../Assets/image/activities/march bites mspc/5.jpg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require("../../Assets/image/activities/march bites mspc/6.jpg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require("../../Assets/image/activities/march bites mspc/7.jpg")}
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div
                                id="Carousel2"
                                className="carousel slide"
                                data-ride="carousel"
                            >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img
                                            src={require("../../Assets/image/activities/kzilla startup/1.jpg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require("../../Assets/image/activities/kzilla startup/2.jpg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require("../../Assets/image/activities/kzilla startup/3.jpg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require("../../Assets/image/activities/kzilla startup/4.jpg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require("../../Assets/image/activities/kzilla startup/5.jpg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require("../../Assets/image/activities/kzilla startup/6.jpg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require("../../Assets/image/activities/kzilla startup/7.jpg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require("../../Assets/image/activities/kzilla startup/8.jpg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                                <a
                                    className="carousel-control-prev"
                                    href="#Carousel2"
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
                                    href="#Carousel2"
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div
                                id="Carousel3"
                                className="carousel slide"
                                data-ride="carousel"
                            >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img
                                            src=""
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src=""
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src=""
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src=""
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                                <a
                                    className="carousel-control-prev"
                                    href="#Carousel3"
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
                                    href="#Carousel3"
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div
                                id="Carousel4"
                                className="carousel slide"
                                data-ride="carousel"
                            >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img
                                            src={require("../../Assets/image/activities/dsc-api-dev/1.jpg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require("../../Assets/image/activities/dsc-api-dev/2.jpg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require("../../Assets/image/activities/dsc-api-dev/3.jpg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require("../../Assets/image/activities/dsc-api-dev/4.jpg")}
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div
                                id="Carousel5"
                                className="carousel slide"
                                data-ride="carousel"
                            >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img
                                            src=""
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src=""
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src=""
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src=""
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                                <a
                                    className="carousel-control-prev"
                                    href="#Carousel5"
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
                                    href="#Carousel5"
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
                                <span aria-hidden="true">x</span>
                            </button>
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div
                                id="Carousel7"
                                className="carousel slide"
                                data-ride="carousel"
                            >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img
                                            src=""
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src=""
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src=""
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src=""
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src=""
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src=""
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div
                                id="Carousel8"
                                className="carousel slide"
                                data-ride="carousel"
                            >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img
                                            src=""
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src=""
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src=""
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h1>No photos available</h1>
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div
                                id="Carousel10"
                                className="carousel slide"
                                data-ride="carousel"
                            >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img
                                            src={require("../../Assets/image/activities/tech talks/1.jpg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require("../../Assets/image/activities/tech talks/2.jpg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require("../../Assets/image/activities/tech talks/3.jpg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                                <a
                                    className="carousel-control-prev"
                                    href="#Carousel10"
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
                                    href="#Carousel10"
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div
                                id="Carousel11"
                                className="carousel slide"
                                data-ride="carousel"
                            >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img
                                            src={require("../../Assets/image/activities/dscx/1.jpg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require("../../Assets/image/activities/dscx/2.jpg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require("../../Assets/image/activities/dscx/3.jpg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                                <a
                                    className="carousel-control-prev"
                                    href="#Carousel11"
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
                                    href="#Carousel11"
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div
                                id="Carousel12"
                                className="carousel slide"
                                data-ride="carousel"
                            >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img
                                            src={require("../../Assets/image/activities/innovation day/1.jpeg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require("../../Assets/image/activities/innovation day/2.jpeg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require("../../Assets/image/activities/innovation day/3.jpeg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require("../../Assets/image/activities/innovation day/4.jpeg")}
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div
                                id="Carousel13"
                                className="carousel slide"
                                data-ride="carousel"
                            >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img
                                            src={require("../../Assets/image/activities/google_ai_ml/1.jpg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require("../../Assets/image/activities/google_ai_ml/2.jpg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require("../../Assets/image/activities/google_ai_ml/3.jpg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require("../../Assets/image/activities/google_ai_ml/4.jpg")}
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h1>No images found</h1>
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h1>No images found</h1>
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h1>No images found</h1>
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div
                                id="Carousel17"
                                className="carousel slide"
                                data-ride="carousel"
                            >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img
                                            src=""
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src=""
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src=""
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div
                                id="Carousel18"
                                className="carousel slide"
                                data-ride="carousel"
                            >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img
                                            src=""
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src=""
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src=""
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src=""
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div
                                id="Carousel19"
                                className="carousel slide"
                                data-ride="carousel"
                            >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img
                                            src={require("../../Assets/image/activities/react_kzilla/2.jpg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require("../../Assets/image/activities/react_kzilla/3.jpg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require("../../Assets/image/activities/react_kzilla/4.jpg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require("../../Assets/image/activities/react_kzilla/DSC_0225.jpg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                                <a
                                    className="carousel-control-prev"
                                    href="#Carousel19"
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
                                    href="#Carousel19"
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
            {/*-- End of modal 19 -*/}
            {/*-- Modal 20 starts -*/}
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div
                                id="Carousel20"
                                className="carousel slide"
                                data-ride="carousel"
                            >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img
                                            src={require("../../Assets/image/activities/gamedev_kzilla/1.jpg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require("../../Assets/image/activities/gamedev_kzilla/2.jpg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require("../../Assets/image/activities/gamedev_kzilla/3.jpg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={require("../../Assets/image/activities/gamedev_kzilla/4.jpg")}
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                                <a
                                    className="carousel-control-prev"
                                    href="#Carousel20"
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
                                    href="#Carousel20"
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
            {/*-- End of modal 20 -*/}
            {/*-- Modal 21 starts -*/}
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div
                                id="Carousel21"
                                className="carousel slide"
                                data-ride="carousel"
                            >
                                <h1>No images found</h1>
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
            {/*-- End of modal 21 -*/}
            {/*-- Modal 22 starts -*/}
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h1>No images found</h1>
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
            {/*-- End of modal 22 -*/}
            {/*-- Modal 23 starts -*/}
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h1>No images found</h1>
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
            {/*-- End of modal 23 -*/}
            {/*-- Modal 24 starts -*/}
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h1>No images found</h1>
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
            {/*-- End of modal 24 -*/}
            {/*-- Modal 25 starts -*/}
            <div
                className="modal fade bd-example-modal-lg"
                id="Modal25"
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h1>No images found</h1>
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
            {/*-- End of modal 25 -*/}
            {/*-- Modal 26 starts -*/}
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h1>No images found</h1>
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
            {/*-- End of modal 26 -*/}
            {/*-- Modal 27 starts -*/}
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h1>No images found</h1>
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
            {/*-- End of modal 27 -*/}
            {/*-- Modal 28 starts -*/}
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h1>No images found</h1>
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
            {/*-- End of modal 28 -*/}
            {/*-- Modal 29 starts -*/}
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h1>No images found</h1>
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
            {/*-- End of modal 29 -*/}
            {/*-- Modal 30 starts -*/}
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h1>No images found</h1>
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
            {/*-- End of modal 30 -*/}
            {/*-- Modal 31 starts -*/}
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h1>No images found</h1>
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
            {/*-- End of modal 31 -*/}
            {/*-- Modal 32 starts -*/}
            <div
                className="modal fade bd-example-modal-lg"
                id="Modal32"
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h1>No images found</h1>
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
            {/*-- End of modal 32 -*/}
            {/*-- Modal 33 starts -*/}
            <div
                className="modal fade bd-example-modal-lg"
                id="Modal33"
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h1>No images found</h1>
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
            {/*-- End of modal 33 -*/}
            {/*-- Modal 34 starts -*/}
            <div
                className="modal fade bd-example-modal-lg"
                id="Modal34"
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h1>No images found</h1>
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
            {/*-- End of modal 34 -*/}
            {/*-- Modal 35 starts -*/}
            <div
                className="modal fade bd-example-modal-lg"
                id="Modal35"
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h1>No images found</h1>
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
            {/*-- End of modal 35 -*/}
            {/*-- Modal 36 starts -*/}
            <div
                className="modal fade bd-example-modal-lg"
                id="Modal36"
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
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h1>No images found</h1>
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
    );
};

export default Amodal;
