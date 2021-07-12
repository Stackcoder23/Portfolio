import React from 'react';
import ReactDOM from 'react-dom';
import './projects.css';

const Projectcard = (props) => {
    return(
        <> 
                        <div className="procard">
                            <div className="proimg-c">
                                <img className="proimg" src={props.imgsrc} />
                            </div>
                            <div className="pro-info">
                                <h2>{props.pname}</h2>
                                <p>{props.pdisc}</p>
                                <p>- {props.pskills}</p>
                            </div>
                        </div>
        </>
    );
}

export default Projectcard;