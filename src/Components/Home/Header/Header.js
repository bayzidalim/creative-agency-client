import React from 'react';
import frame from '../../images/logos/Frame.png';
import './Header.css';

const Header = () => {
    return (
        <section className='row header-content'>
            <div className="col-md-5 offset-1 text-area">
                <h2>Let's Grow Your <br/> Brand To The <br/> Next Level</h2>
                <p>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Distinctio recusandae ipsam dolorem facilis, <br/> autem tenetur. Ad fugit repellat vel at.</p>
                <button type="button" className="btn btn-dark login-btn">Hire us</button>
            </div>
            <div className="col-md-6">
                <img className="img-fluid " src={frame} alt=""/>
            </div>
            
        </section>
    );
};

export default Header;