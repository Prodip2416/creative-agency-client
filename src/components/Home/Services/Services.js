import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Service from './Service/Service';

const Services = () => {
    let history = useHistory();
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://creative-agency-app.herokuapp.com/services')
            .then(res => res.json())
            .then(result => setServices(result))
    }, []);

    const handleClick = (id) => {
        history.push(`/dashboard/${id}`);
    }

    return (
        <section style={{ marginTop: '140px' }} className="container">
            <div className="mt-5">            
                <h3 className="text-center mt-5">Provide awesome <span style={{ color: '#7AB259' }}>services</span> </h3>
            </div>
            <div style={{marginTop:'70px'}} className="row ml-3 mr-3">
                {
                    services.length === 0 && <div style={{ marginLeft: '40%' }}><img src="https://i.ibb.co/xmWBR2H/200.gif" alt="" /></div>
                }
                {
                    services.map(item => <Service key={item._id} service={item} handleClick={handleClick} />)
                }
            </div>

        </section>
    );
};

export default Services;