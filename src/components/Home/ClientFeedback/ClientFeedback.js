import React, { useEffect, useState } from 'react';
import Feedback from './Feedback/Feedback';

const ClientFeedback = () => {
    const [clientReview, setClientReview] = useState([]);

    useEffect(() => {
        fetch('https://creative-agency-app.herokuapp.com/getClientReview')
            .then(res => res.json())
            .then(result => setClientReview(result))
    }, []);

    return (
        <section style={{ marginTop: '70px' }} className="container">
            <div className="mt-5">
                <h3 className="text-center mt-5"> Clients <span style={{ color: '#7AB259' }}>Feedback</span> </h3>
            </div>
            <div className="row">
                {
                    clientReview.length === 0 && <div style={{ marginLeft: '40%' }}><img src="https://i.ibb.co/xmWBR2H/200.gif" alt="" /></div>
                }
                {
                    clientReview.map(client => <Feedback key={client._id} review={client.review} />)
                }
            </div>
        </section>
    );
};

export default ClientFeedback;