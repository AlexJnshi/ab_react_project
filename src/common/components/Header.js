import React from 'react';
import logo from '../images/logo.svg'
import '../css/header.css'

const Header = () => {
    return (
        <header className="">
            <nav>
                <div className="logo">
                    <a href="/">
                        <img src={logo} alt="logo"></img>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Header