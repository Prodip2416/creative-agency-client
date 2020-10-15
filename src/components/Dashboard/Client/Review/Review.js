import React, { useContext, useState } from 'react';
import { UserContext } from '../../../../App';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [review, setReview] = useState({});

    function notify() { // // notification for success
        toast.info("Review successfully added.", {
            transition: Zoom
        });
    }
    function notifyError() { // notification for error
        toast.error("Opps! something went wrong.", {
            transition: Zoom
        });
    }

    const handleSubmit = (e) => {
        review.img = loggedInUser.img;
        fetch('https://creative-agency-app.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ review })
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    notify();
                }
            }).catch(error => {
                notifyError();
            })
        e.preventDefault();
    }
    const handleBlur = (e) => {
        const newReview = { ...review };
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit} className="">
                <div className="row ml-3 mt-5">
                    <div className="col-md-8  mb-3">
                        <input type="text" name="name" onBlur={handleBlur} className="form-control p-3 m-2" placeholder="Your name" required />
                        <input type="text" name="company" onBlur={handleBlur} className="form-control p-3 m-2" placeholder="Company’s name, Designation" required />
                        <textarea type="text" name="description" onBlur={handleBlur} className="form-control p-3 m-2" cols="10" rows="3" placeholder="Description" required />
                    </div>
                    <div className="col-md-4"></div>
                    <div className="form-group text-right mr-5">
                        <button type="submit" className="btn ml-4" style={{ backgroundColor: 'black', color: 'white', width: '170px' }}>Submit</button>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Review;