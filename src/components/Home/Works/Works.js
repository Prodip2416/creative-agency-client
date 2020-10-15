import React from 'react';
import './Works.css';
import Slider from "react-slick";

const Works = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };
    return (
        <div style={{ marginTop: '70px' }} className="text-center mb-5 works-bg">
            <div className="text-center"><br />
                <h3 className="text-center"><span className="text-white"><br /> Here are some of</span> <span style={{ color: '#7AB259' }}>our works</span> </h3>
            </div>
            <div className="row">
                <div className="col-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-11 col-sm-11 col-md-11 col-lg-11">
                    <Slider {...settings}>
                        <div>
                            <img src="https://i.ibb.co/L5g5X98/carousel-1.png" className="img-fluid p-3 mt-3" alt="..." />
                        </div>
                        <div>
                            <img src="https://i.ibb.co/VqzZYYZ/carousel-2.png" className="img-fluid p-3 mt-3" alt="..." />
                        </div>
                        <div>
                            <img src="https://i.ibb.co/yFqjsWf/carousel-5.png" className="img-fluid p-3 mt-3" alt="..." />
                        </div>
                        <div>
                            <img src="https://i.ibb.co/2hpWM9y/carousel-4.png" className="img-fluid p-3 mt-3" alt="..." />
                        </div>
                        <div>
                            <img src="https://i.ibb.co/VqzZYYZ/carousel-2.png" className="img-fluid p-3 mt-3" alt="..." />
                        </div>
                    </Slider>
                </div>
            </div>

            <div style={{ height: '80px' }}></div>
        </div>
    );
};

export default Works;