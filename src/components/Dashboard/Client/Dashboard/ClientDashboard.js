import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt, faCartPlus, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../../App';
import { Link } from 'react-router-dom';
import Order from '../Order/Order';
import ClientServiceList from '../ClientServiceList/ClientServiceList';
import Review from '../Review/Review';


const ClientDashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [listItem, setListItem] = useState('ORDER');

    return (
        <div className="admin">
            <div className="row mt-2">
                <div className="col-12 col-md-3">
                    <Link to="/">
                        <img src="https://i.ibb.co/chPZVjZ/logo.png" className="w-50 m-3" alt="img" />
                    </Link>
                </div>
                <div className="col-6 col-md-7">
                    {listItem === 'ORDER' && <h3 className="p-3">Order</h3>}
                    {listItem === 'SERVICE' && <h3 className="p-3">Service list</h3>}
                    {listItem === 'REVIEW' && <h3 className="p-3">Review</h3>}               
                </div>
                <div className="col-6 col-md-2">
                    {
                        loggedInUser && <h4 className="p-3">{loggedInUser.name}</h4>
                    }
                </div>
            </div>
            <main>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-2">
                        <ul>
                            <li className={listItem === 'ORDER' ? 'm-3 active' : 'm-3'} onClick={() => setListItem('ORDER')} >
                                <FontAwesomeIcon icon={faCartPlus} /><span> Order</span>
                            </li>
                            <li className={listItem === 'SERVICE' ? 'm-3 active' : 'm-3'} onClick={() => setListItem('SERVICE')} >
                                <FontAwesomeIcon icon={faListAlt} /><span> Service list</span>
                            </li>
                            <li className={listItem === 'REVIEW' ? 'm-3 active' : 'm-3'} onClick={() => setListItem('REVIEW')}>
                                <FontAwesomeIcon icon={faCommentDots} /><span> Review</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-12 col-md-10 list">
                        {listItem === 'ORDER' && <Order />}
                        {listItem === 'SERVICE' && <ClientServiceList />}
                        {listItem === 'REVIEW' && <Review />}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ClientDashboard;