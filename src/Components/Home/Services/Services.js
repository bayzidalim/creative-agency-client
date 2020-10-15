import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import Service from '../Service/Service';

const Services = () => {
    const [service, setService] = useState([]);
    // console.log(service);
    useEffect(() => {
        fetch('http://localhost:5000/getAddedService')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])

    return (
        <section  style={{'margin-top': '50px'}}>
            <h3 className="text-center">Provide awesome <span style={{color: '#7AB259'}}>services</span></h3>
            
            <div className="row">
                {
                    service.map(service => <Service service={service} key={service._id}></Service>)
                }
            </div>
            
            
        </section>
    );
};

export default Services;