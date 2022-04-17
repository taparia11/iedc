import React from 'react'
// import img1 from '../image/srm-logo.png'
import img2 from '../../Assets/image/iedc-logo.PNG'
import img3 from '../../Assets/image/one.jpg'
import img4 from '../../Assets/image/two.jpg'
import img5 from '../../Assets/image/three.jpg'
import img6 from '../../Assets/image/four.JPG'
import img7 from '../../Assets/image/five.JPG'

const Photos = () => {
    return (
        <>
            <section id="carousel" style={{maxHeight: '85vh'}}>
                <div
                    id="carouselExampleInterval"
                    className="carousel slide container"
                    data-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div
                            className="carousel-item active logowrap"
                            data-interval="3000"
                        >
                            <img
                                src={img2}
                                className="d-block img-fluid carousel-image logo"
                                alt="..."
                            />
                        </div>
                        <div
                            className="carousel-item"
                            style={{maxHeight: '85vh'}}
                            data-interval="2000"
                        >
                            <img
                                src={img3}
                                className="d-block img-fluid carousel-image"
                                alt="..."
                            />
                        </div>
                        <div
                            className="carousel-item"
                            style={{maxHeight: '85vh'}}
                            data-interval="2000"
                        >
                            <img
                                src={img4}
                                className="d-block img-fluid carousel-image"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item" style={{maxHeight: '85vh'}}>
                            <img
                                src={img5}
                                className="d-block img-fluid carousel-image"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item" style={{maxHeight: '85vh'}}>
                            <img
                                src={img6}
                                className="d-block img-fluid carousel-image"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item" sstyle={{maxHeight: '85vh'}}>
                            <img
                                src={img7}
                                className="d-block img-fluid carousel-image"
                                alt="..."
                            />
                        </div>
                    </div>
                    <a
                        className="carousel-control-prev"
                        href="#carouselExampleInterval"
                        role="button"
                        data-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" style={{paddingRight:'35px'}}> </span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#carouselExampleInterval"
                        role="button"
                        data-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" style={{paddingLeft:'30px'}}> </span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </section>

        </>
    )
}

export default Photos