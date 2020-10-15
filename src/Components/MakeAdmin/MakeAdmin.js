import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <section className="makeAdmin-content">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div  className="col-md-10">
                    <span className="d-flex">
                        <h3 style={{'margin-left':'80px', 'margin-top':'50px'}}>Make Admin</h3>
                        <h6 style={{'margin-left':'580px', 'margin-top':'50px'}}>{loggedInUser.name}</h6>
                    </span>
                    
                    <div className="order-form">
                        <form>
                            <h6>Service Title</h6>
                            <div className="d-flex">
                                <input type="text" className="form-control form-element" placeholder="Enter Title"/>
                                <button type="button" style={{'margin-left':'20px'}} class="btn btn-success">Submit</button> 
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default MakeAdmin;