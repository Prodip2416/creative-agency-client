import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Order = () => {
    const { id } = useParams();
    const [service, setService] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit } = useForm();
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('Upload Project File');

    function notify() { // // notification for success
        toast.info("Your order has been saved.", {
            transition: Zoom
        });
    }
    function notifyError() { // notification for error
        toast.error("Opps! something went wrong.", {
            transition: Zoom
        });
    }

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('serviceName', data.serviceName);
        formData.append('projectDetail', data.projectDetail);
        formData.append('price', data.price);
        formData.append('serviceID', id);

        fetch('https://creative-agency-app.herokuapp.com/addClientOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    notify();
                }
            })
            .catch(error => {
                notifyError();
            })
    }

    useEffect(() => {
        fetch('https://creative-agency-app.herokuapp.com/getServiceById?id=' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setService(data);
            })
    }, [id])

    const handleChange = (e) => {
        setFileName(e.target.files[0].name);
        setFile(e.target.files[0]);
    }
    return (
        <section className="mt-3">
            {
                service.length === 0 ? <div className="alert alert-danger p-5 m-5" style={{ marginLeft: '40%' }}>
                    <h3>Opps! Something went wrong!!!</h3>
                    <h5>Page Not Found</h5>
                </div>
                    :
                    <form action="" onSubmit={handleSubmit(onSubmit)} className="">
                        <div className="row ml-3">
                            <div className="col-md-8  mb-3">
                                <input type="text" name="name" defaultValue={loggedInUser.name} className="form-control p-3 m-2" placeholder="Your Name / Company Name" ref={register} />
                                <input type="email" name="email" defaultValue={loggedInUser.email} className="form-control p-3 m-2" placeholder="Your email address" ref={register} />
                                <input type="text" name="serviceName" defaultValue={service.title} className="form-control p-3 m-2" placeholder="Service name" ref={register} />
                                <textarea type="text" name="projectDetail" className="form-control p-3 m-2" cols="10" rows="3" placeholder="Project Detail" ref={register} required />
                                <div className="row">
                                    <div className="col-md-6"> <input type="number" name="price" placeholder="Price" className="form-control p-3 m-2" ref={register} required /></div>
                                    <div className="col-md-6"><label htmlFor="file-upload" className="custom-file-upload m-2">
                                        <FontAwesomeIcon icon={faCloudUploadAlt} /> {fileName}
                                    </label>
                                        <input type="file" id="file-upload" onChange={handleChange} className="form-control m-2" ref={register} required /></div>
                                </div>
                            </div>
                            <div className="col-md-4"></div>
                            <div className="form-group text-right mr-5">
                                <button type="submit" className="btn ml-4" style={{ backgroundColor: 'black', color: 'white', width: '170px' }}>Send</button>
                            </div>
                        </div>
                    </form>
            }
            <ToastContainer />
        </section>
    );
};

export default Order;