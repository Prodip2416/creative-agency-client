import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="container navbar navbar-expand-lg navbar-light">
            <Link to="/">
                <img style={{ width: '100px', cursor: 'pointer' }} className="navbar-brand" src="https://i.ibb.co/chPZVjZ/logo.png" alt="" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link mt-2 mr-3" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mt-2 mr-3" to="/">Our Portfolio </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mt-2 mr-3" to="/">Our Team</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mt-2 mr-3" to="/">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        {
                            loggedInUser.name ?
                                <button style={{ width: '134px', backgroundColor: '#111430' }} className="btn text-white">{loggedInUser.name}</button>
                                : <Link className="nav-link mr-5" to="/login"><button style={{ width: '134px', backgroundColor: '#111430' }} className="btn text-white">Login</button></Link>
                        }
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;