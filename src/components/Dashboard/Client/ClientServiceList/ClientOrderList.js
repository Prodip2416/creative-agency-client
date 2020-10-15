import React, { useEffect, useState } from 'react';
import './ClientOrderList.css';

const ClientOrderList = ({ order }) => {
    const [service, setService] = useState([]);
    const [serviceDescription, setServiceDescription] = useState([]);
    useEffect(() => {
        fetch('https://creative-agency-app.herokuapp.com/getServiceById?id=' + order.serviceId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setServiceDescription(data); // need for description
                setService(data.image); // need for image
            })
    }, [order])

    return (
        <div className="col-md-5 single-order m-3 p-3">
            <div className="">
                <div className="d-flex mt-3">
                    <div> <img className="img-fluid w-25" src={(service.img && `data:image/png;base64,${service.img}`) || 'https://i.ibb.co/d6fT75N/service1.png'} alt="" /></div>
                    <div>
                        {order.status === 'Pending' && <h3 className="pending">{order.status}</h3>}
                        {order.status === 'Done' && <h3 className="done">{order.status}</h3>}
                        {order.status === 'On going' && <h3 className="On-going">{order.status}</h3>}

                    </div>
                </div>
                <div>
                    <h3 className="mt-2">{order.serviceName}</h3>
                    <p className="text-secondary">{serviceDescription.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ClientOrderList;