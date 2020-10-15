import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faListAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../../App';
import { Link } from 'react-router-dom';
import AdminServiceList from '../AdminServiceList/AdminServiceList';
import AddService from '../AddService/AddService';
import AddAdmin from '../AddAdmin/AddAdmin';


const AdminDashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [listItem, setListItem] = useState('LIST');

    return (
        <div className="admin">
            <div className="row mt-2">
                <div className="col-12 col-md-3">
                    <Link to="/">
                        <img src="https://i.ibb.co/chPZVjZ/logo.png" className="w-50 m-3" alt="img" />
                    </Link>
                </div>
                <div className="col-6 col-md-7">
                    {listItem === 'LIST' && <h3 className="p-3">Service list</h3>}
                    {listItem === 'SERVICE' && <h3 className="p-3">Add Service</h3>}
                    {listItem === 'ADMIN' && <h3 className="p-3">Make Admin</h3>}
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
                            <li className={listItem === 'LIST' ? 'm-3 active' : 'm-3'} onClick={() => setListItem('LIST')}>
                                <FontAwesomeIcon icon={faListAlt} /><span> Service list</span>
                            </li>
                            <li className={listItem === 'SERVICE' ? 'm-3 active' : 'm-3'} onClick={() => setListItem('SERVICE')} >
                                <FontAwesomeIcon icon={faPlus} /> <span> Add Service</span>
                            </li>
                            <li className={listItem === 'ADMIN' ? 'm-3 active' : 'm-3'} onClick={() => setListItem('ADMIN')} >
                                <FontAwesomeIcon icon={faUserPlus} /> <span> Make Admin</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-12 col-md-10 list">
                        {listItem === 'LIST' && <AdminServiceList />}
                        {listItem === 'SERVICE' && <AddService />}
                        {listItem === 'ADMIN' && <AddAdmin />}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;