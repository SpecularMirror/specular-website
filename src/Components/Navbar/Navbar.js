import React from 'react';

import Logo from '../../Assets/logo.png';
import './navbar.css';

function NavBar() {
    return(
        <div className="NavBar">
            <div className="logo">
                <img src={Logo} alt="Logo"></img>
            </div>
            <h2>Specular</h2>
        </div>
    );
}
export default NavBar;