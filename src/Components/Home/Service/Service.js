import React from 'react';
import './Service.css';
import { Link } from "react-router-dom";

const Service = ({service}) => {
    const {title} = service;
    
    
    return (
        <div className="col-md-3 text-center service-margin">
            <Link to={`/order/${title}`}>
                <img className="img-fluid mb-3 service-img" src={`http://localhost:5000/${service.img}`} alt=""/>
                <h5>{service.title}</h5>
                <p>{service.description}</p>
            </Link>     
        </div>
    );
};

export default Service;