import React from 'react';
import ReactDOM from 'react-dom';
import './footer.css';
import { Instagram, Email, GitHub, LinkedIn, Twitter } from '@material-ui/icons';

const Footer = () => {
    return(
        <>
            <div id="footer" className="footer">
                <a target="_blank" href="https://www.instagram.com/stackcoder_/"><Instagram/></a>&nbsp;
                <a target="_blank" href="mailto: mjoshi23.mj@gmail.com"><Email/></a>&nbsp;
                <a target="_blank" href="https://github.com/Stackcoder23"><GitHub/></a>&nbsp;
                <a target="_blank" href="https://www.linkedin.com/in/mandar-joshi-8a03131b9/"><LinkedIn/></a>&nbsp;
                <a target="_blank" href="https://twitter.com/Stackcoder_"><Twitter/></a>&nbsp;
                <p>@Stackcoder™</p>
            </div>
        </>
    );
}

export default Footer;