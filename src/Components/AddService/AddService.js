import React, { useContext, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { UserContext } from '../../App';

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [information, setInformation] = useState({});
    const [file, setFile] = useState(null);


    const handleBlur = (event) => {
        const newInformation = { ...information };
        newInformation[event.target.name] = event.target.value;
        setInformation(newInformation);
    }
    console.log(information);
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const addServiceSubmit = () => {
        const formData = new FormData()
        
        formData.append('file', file);
        formData.append('title', information.title);
        formData.append('description', information.description);

        fetch('http://localhost:5000/adminAddService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                 console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    // const onSubmit = serviceEvent => {
    //     serviceEvent.reviewDate = new Date();
    //     fetch('http://localhost:5000/adminAddService', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify(serviceEvent)
    //     })
    //     .then(res => res.json())
    //     .then(success => {
            
    //     })
        
    // }

    return (
        <section className="addService-content">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div  className="col-md-10">
                    <span className="d-flex">
                        <h3 style={{'margin-left':'80px', 'margin-top':'50px'}}>Add Service</h3>
                        <h6 style={{'margin-left':'580px', 'margin-top':'50px'}}>{loggedInUser.name}</h6>
                    </span>
                    
                    <div className="order-form">
                        <form onSubmit={addServiceSubmit}>
                            <div class="form-group">
                                <div className="d-flex">
                                    <div className="title-name">
                                        <h6>Service Title</h6>
                                        <input type="text" onBlur={handleBlur} name="title" className="form-control form-element" placeholder="Enter Title"/>
                                    </div>
                                    <div className="title-icon">
                                        <h6 style={{'margin-left':'20px'}}>Icon</h6>
                                        <input onChange={handleFileChange} type="file" class="form-control-file upload-file"></input>
                                    </div>
                                </div>
                                <br/>
                                <h6>Description</h6>
                                <textarea onBlur={handleBlur} name="description" className="form-control form-element" placeholder="Enter Description" rows="3"></textarea>
                            </div>
                            <br/>
                            <button type="submit" class="btn btn-success">Submit</button>
                            
                        </form>

                        {/* start */}

                        {/* <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Name</label>
                                <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Upload a image</label>
                                <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form> */}


                        {/* End */}

                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default AddService;