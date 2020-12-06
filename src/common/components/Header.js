import React from 'react';
import logo from '../images/logo.svg'
import '../css/header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="">
            <nav>
                <div className="logo">
                    <NavLink to="/" >
                        <img src={logo} alt="logo"></img>
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header