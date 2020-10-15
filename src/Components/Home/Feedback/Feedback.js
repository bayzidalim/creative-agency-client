import React, { useEffect, useState } from 'react';
import fakeDataClient from '../../fakeData/fakeDataClient';
import FeedbackClient from '../FeedbackClient/FeedbackClient';

const Feedback = () => {
    const [client, setClient] = useState([]);
    //console.log(client);

    useEffect(() => {
        fetch('http://localhost:5000/getAllClientReview')
        .then(res => res.json())
        .then(data => setClient(data))
    }, [])


    return (
        <section  style={{'margin-top': '50px'}}>
            <h3 className="text-center">Clients <span style={{color: '#7AB259'}}>Feedback</span></h3>
            <div className="row">
                {
                    client.map(client => <FeedbackClient client={client}></FeedbackClient>)
                }
            </div>

        </section>
    );
};

export default Feedback;