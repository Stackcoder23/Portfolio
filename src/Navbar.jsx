import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from 'rsuite';
import './nav.css';

const Nav = () => {
    return (
        <>
        <div className="nav">
            <p className="logoname">Stackcoder</p>
            <a>Home</a>
            <a>Projects</a>
            <a>About</a>
        </div>
        </>
    );
}

export default Nav;

