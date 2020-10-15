import React, { useState } from 'react';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddAdmin = () => {
    const [email, setEmail] = useState('');

    function notify() { // // notification for success
        toast.info("Admin successfully added.",{
            transition:Zoom
        });
    }
    function notifyError() { // notification for error
        toast.error("Opps! something went wrong.", {
            transition: Zoom
        });
    }

    const handleSubmit = (e) => {
        fetch('https://creative-agency-app.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
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
        setEmail(e.target.value);
    }

    return (
        <section>
            <form action="" className="mt-5 ml-5" onSubmit={handleSubmit} style={{backgroundColor:'white', borderRadius:'10px', width:'80%'}}>
                <div className="form-group">
                    <label className="m-2 mt-3">Email</label>
                    <input type="email" onBlur={handleBlur} style={{ width: '50%' }} className="form-control p-3 m-2" placeholder="john@gmail.com" required />
                    <button type="submit" className="btn btn-primary m-2">Submit</button>
                </div>
                <ToastContainer />
            </form>
        </section>
    );
};

export default AddAdmin;