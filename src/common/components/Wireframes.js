import React from 'react';
import Footer from './Footer';
import Header from './Header';
import '../css/wireFrames.css'

const Wireframes = (props) => {
    return (

        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Wireframes