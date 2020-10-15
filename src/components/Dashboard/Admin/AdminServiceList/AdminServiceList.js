import React, { useEffect, useState } from 'react';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminServiceList = () => {
    const [clientOrder, setClientOrder] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);


    function notify() { // // notification for success
        toast.info("Status successfully changed.", {
            transition: Zoom,
            autoClose: 7000
        });
    }
    function notifyError() { // notification for error
        toast.error("Opps! something went wrong.", {
            transition: Zoom,
            autoClose: 5000
        });
    }

    useEffect(() => {
        fetch('https://creative-agency-app.herokuapp.com/getClientOrder')
            .then(res => res.json())
            .then(result => {
                setClientOrder(result);
                setIsUpdate(false);
            })
    }, [isUpdate]);

    const handleChange = (id, e) => {
        const status = e.target.value;
        const order = { id, status };

        fetch(`https://creative-agency-app.herokuapp.com/updateClientOrderStatus/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    setIsUpdate(true);
                    notify();
                }
            }).catch(error => {
                notifyError();
            })
    }

    return (
        <div>
            <div className="row mt-3 table-responsive">
                <div className="ml-2 mr-2">
                    <table style={{backgroundColor:'white',borderRadius:'10px'}} className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email Id</th>
                                <th scope="col">Service</th>
                                <th scope="col">Project Details</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                clientOrder.length === 0 && <tr className="alert-danger p-5 m-5"><td colSpan="5"> <img style={{ marginLeft: '40%', width: '150px'}} src="https://i.ibb.co/xmWBR2H/200.gif" alt="" /></td></tr>
                            }
                            {
                                clientOrder && clientOrder.map(item =>
                                    <tr key={item._id}>
                                        <th>{item.name}</th>
                                        <td>{item.email}</td>
                                        <td>{item.serviceName}</td>
                                        <td>{item.projectDetail}</td>
                                        <td>
                                            <select className={(item.status === "Done" && "btn text-success") || 
                                                (item.status === "Pending" && "btn text-danger") || 
                                                (item.status === "On going" && "btn text-warning")}
                                                name="status" value={item.status}
                                                onChange={(e) => handleChange(item._id, e)} >
                                                <option className="dropdown-item" value="Done">Done</option>
                                                <option className="dropdown-item" value="Pending">Pending</option>
                                                <option className="dropdown-item" value="On going">On going</option>
                                            </select>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default AdminServiceList;