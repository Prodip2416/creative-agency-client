import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import './Dashboard.css';
import AdminDashboard from '../Admin/Dashboard/AdminDashboard';
import ClientDashboard from '../Client/Dashboard/ClientDashboard';


const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const email = loggedInUser.email;
        fetch('https://creative-agency-app.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    if (result.length > 0) {
                        setIsAdmin(true);
                    }
                }
            })
    }, [loggedInUser])

    return (
        <section>
            { isAdmin ? <AdminDashboard /> : <ClientDashboard />}
        </section>     
    );
};

export default Dashboard;