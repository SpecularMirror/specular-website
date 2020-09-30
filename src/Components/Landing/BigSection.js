import React from 'react';

import Mirror from '../../Assets/mirror.png';
import './landing.css';

import Instagram from '../../Assets/instagram.svg';
import Facebook from '../../Assets/facebook.svg';
import Twitter from '../../Assets/twitter.svg';
import Medium from '../../Assets/medium.svg';
import GitHub from '../../Assets/github.svg';
import TikTok from '../../Assets/tiktok.svg';

function BigSection() {
    return(
        <div id="big_section">
            <div id="big_section_container">
                <div id="big_section_components">
                    <h1>Reflect the essence of <span id="green-word">multitasking</span></h1>
                    <h2>Specular, the first smart mirror created to assist you in any situation.</h2>
                </div>
                <div id="social_icons">
                    <a href="https://www.instagram.com/specularmirror/" target="_blank" className="social_icon">
                        <img src={Instagram} alt="Specular Instagram Account"></img>
                    </a>
                    <a href="https://www.facebook.com/Specular-111035827398551/" target="_blank" className="social_icon">
                        <img src={Facebook} alt="Specular Facebook Account"></img>
                    </a>
                    <a href="https://twitter.com/specular_mirror/" target="_blank" className="social_icon">
                        <img src={Twitter} alt="Specular Twitter Account"></img>
                    </a>
                    <a href="https://medium.com/@specularmirror/" target="_blank" className="social_icon">
                        <img src={Medium} alt="Specular Medium Account"></img>
                    </a>
                    <a href="https://github.com/SpecularMirror/" target="_blank" className="social_icon">
                        <img src={GitHub} alt="Specular GitHub Account"></img>
                    </a>
                    <a href="https://www.tiktok.com/@specularmirror/" target="_blank" className="social_icon">
                        <img src={TikTok} alt="Specular TikTok Account"></img>
                    </a>
                </div>
            </div>
            <div>
                <img id="big_section_img" src={Mirror} alt="Specular concept"></img>
            </div>
        </div>
    );
}
export default BigSection;
