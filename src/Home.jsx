import React from 'react';
import ReactDOM from 'react-dom';
import './home.css';
import dp from './images/vector-min.png';

const Home = () => {
    return(
        <>
            <div className="bgeffect">
            <div className="card">
                <img src={dp}/>
                <div className="info">
                    <h1>Mandar Joshi</h1>
                    <p>Coder || Photographer || Gfx Designer</p>
                    <br/>
                    <h3>Skills :-</h3>
                    <ul>
                        <li>Web Development</li>
                        <li>Mobile App Development</li>
                        <li>Computer Programming</li>
                        <li>Graphics Designing</li>
                    </ul>
                    <br/>
                    <h3>Languages Known :-</h3>
                    <h4>Java, Python, Html, CSS, PHP, JavaScript, C, C++, C#, Dart</h4>
                    <br/>
                    <h3>Technologies :-</h3>
                    <h4>- MERN Stack (Mongodb, Expressjs, Reactjs, Nodejs),<br/>
                    - Flutter, - Asp.net, -DevOps, Photoshop, Premier Pro, After effects
                    </h4>
                </div>
            </div>
            </div>
        </>
    )
}

export default Home;