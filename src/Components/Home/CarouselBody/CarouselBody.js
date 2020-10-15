import React from 'react';
import CarouselMain from '../CarouselMain/CarouselMain';

const CarouselBody = () => {
    return (
        <section style={{'background-color': '#111430', 'margin-top': '100px', 'height' : '90vh'}}>
            <h3 style={{'padding-top': '80px'}} className="text-center text-white">Here are some of <span style={{color: '#7AB259'}}>our works</span></h3>
            <div>
                <CarouselMain></CarouselMain>
            </div>
            
        </section>
    );
};

export default CarouselBody;