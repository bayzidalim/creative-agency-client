import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../App';
import AllServicesListTable from '../AllServicesListTable/AllServicesListTable';
import Sidebar from '../Sidebar/Sidebar';

const AllServicesList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [allServicesListItem, setAllServicesListItem] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/getAllClientsOrder')
        .then(res => res.json())
        .then(data => setAllServicesListItem(data))
    }, [])
    
    return (
        <section className="review-content">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div  className="col-md-10">
                    <span className="d-flex">
                        <h3 style={{'margin-left':'80px', 'margin-top':'50px'}}>Services List</h3>
                        <h6 style={{'margin-left':'580px', 'margin-top':'50px'}}>{loggedInUser.name}</h6>
                    </span>
                    
                    <AllServicesListTable allServicesListItem={allServicesListItem}></AllServicesListTable>
                </div>
                
            </div>
        </section>
    );
};

export default AllServicesList;