import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <section className="dashboard-content">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div  className="col-md-10">
                    <span className="d-flex">
                        <h3 style={{'margin-left':'80px', 'margin-top':'50px'}}>Ordered Items</h3>
                        <h6 style={{'margin-left':'580px', 'margin-top':'50px'}}>{loggedInUser.name}</h6>
                    </span>
                    
                    <div className="row customer-order-list">
                        <h3>Your Activities</h3>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Dashboard;