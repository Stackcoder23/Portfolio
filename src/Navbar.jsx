import React from 'react';
import ReactDOM from 'react-dom';
import './nav.css';

const Nav = () => {
    return (
        <>
        <div className="nav">
            <p className="logoname">Stackcoder</p>
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#footer">Contact</a>
        </div>
        </>
    );
}

export default Nav;

