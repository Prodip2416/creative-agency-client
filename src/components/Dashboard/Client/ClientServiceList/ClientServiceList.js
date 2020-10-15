import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import ClientOrderList from './ClientOrderList';

const ClientServiceList = () => {
    const [orderDetail, setOrderDetail] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://creative-agency-app.herokuapp.com/getClientOrderByEmail?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setOrderDetail(data);
            })
    }, [loggedInUser])

    return (
        <div className="row ml-3 mr-3">
            {
                orderDetail.length === 0 && <h3 className="alert alert-primary p-5 m-3">You don't confirm any order yet.</h3>
            }
            {
                orderDetail.map(item => <ClientOrderList key={item._id} order={item} />)
            }
        </div>
    );
};

export default ClientServiceList;