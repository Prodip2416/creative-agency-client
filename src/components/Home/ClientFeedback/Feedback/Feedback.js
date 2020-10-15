import React from 'react';
import './Feedback.css';

const Feedback = ({ review }) => {
    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 mt-5">
            <div className="client-review p-2">
                <div className="row mb-2">
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                        <img className="w-75 rounded-circle" src={review.img} alt="" />
                    </div>
                    <div className="col-8 col-sm-8 col-md-8 col-lg-8">
                        <h4>{review.name}</h4>
                        <h6>{review.company}</h6>
                    </div>
                </div>
                <div>
                    <p className="text-secondary">{review.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Feedback;