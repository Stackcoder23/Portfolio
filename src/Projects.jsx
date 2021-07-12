import React from 'react';
import ReactDOM from 'react-dom';
import Projectcard from './Projectcard';
import Plist from './Plist';

function pcard(val){
    return(
        <Projectcard
            imgsrc={val.pimage}
            pname={val.pname}
            pdisc={val.pdisc}
            pskills={val.pskills}
        />
    );
}

const Projects = () => {
    return(
        <>
        <div id="projects" className="pro-container">
                <div className="insidepro">
                <h1 style={{textAlign:'center'}}>Projects</h1>
                    <div className="cards wrap">
                        

                        {Plist.map(pcard)}

                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;