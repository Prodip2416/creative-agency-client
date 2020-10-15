import React from 'react';

const Brand = () => {
    return (
        <div style={{marginTop:'100px'}} className="container">
            <div className="row mt-5">
                <div className="col-12 col-sm-12 col-md-5 col-lg-5">
                    <div className="row">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                            <img className="w-75" src="https://i.ibb.co/KGnZPMK/slack.png" alt="" />                       
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                            <img className="w-75" src="https://i.ibb.co/fF0ND1S/google.png" alt="" />                       
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-5 col-lg-5">
                    <div className="row">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                            <img className="w-50" src="https://i.ibb.co/4dtwgG2/uber.png" alt="" />                       
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                            <img className="w-50" src="https://i.ibb.co/n7wz1sR/netflix.png" alt="" />                     
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-6 col-md-2 col-lg-2 mt-2">
                    <img className="w-75" src="https://i.ibb.co/Lxm0SgR/airbnb.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Brand;