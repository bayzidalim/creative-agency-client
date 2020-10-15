import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faHdd, faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import { faBars, faCartPlus, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logos/logo.png';
import './Sidebar.css';



const Sidebar = () => {
    return (
        <div>
            <div className="logo-container">
                <Link to="/home"><img className="logo-img" src={logo} alt=""/></Link>
            </div>
            <div className="menu-item">
                <Link to='/dashboard'>
                    <h5> <span className="icon-style"><FontAwesomeIcon icon={faBars}/></span>
                    <span className="dashboard">Dashboard</span></h5>
                </Link>
            </div>
            <div className="menu-item">
                <Link to='/order'>
                    <h5> <span className="icon-style"><FontAwesomeIcon icon={faCartPlus}/></span>
                    <span className="dashboard">Order</span></h5>
                </Link>
            </div>
            <div className="menu-item">
                <Link to='/serviceList'>
                    <h5><span className="icon-style"><FontAwesomeIcon icon={faHdd}/></span>
                    <span className="dashboard">Service list</span></h5>
                </Link>
            </div>
            <div className="menu-item">
                <Link to='/review'>
                    <h5><span className="icon-style"><FontAwesomeIcon icon={faCommentAlt} /></span>
                    <span className="dashboard">Review</span></h5>
                </Link>
            </div>
            <div className="menu-item">
                <Link to='/allServicesList'>
                    <h5><span className="icon-style"><FontAwesomeIcon icon={faHdd}/></span>
                    <span className="dashboard">All Service list</span></h5>
                </Link>
            </div>
            <div className="menu-item">
                <Link to='/addService'>
                    <h5><span className="icon-style"><FontAwesomeIcon icon={faPlus} /></span>
                    <span className="dashboard">Add Service</span></h5>
                </Link>
            </div>
            <div className="menu-item">
                <Link to='/makeAdmin'>
                    <h5><span className="icon-style"><FontAwesomeIcon icon={faUserPlus} /></span>
                    <span className="dashboard">Make Admin</span> </h5>                
                </Link>
            </div>
            
            
        </div>
    );
};

export default Sidebar;