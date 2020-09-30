import React from 'react';

import './landing.css';

import Medium from '../../Assets/medium.svg';
import Concept from '../../Assets/main.png';

function Article() {
    return(
        <div id="medium_article">
            <img id="medium_article_img" src={Concept} alt="Medium post cover"></img>
            <div id="medium_article_container">
                <p id="lil_lbl">BLOG ARTICLE</p>
                <h3 id="lil_h3">Specular: It's all about you</h3>
                <p id="lil_desc">We created Specular, the first smart mirror designed to assist you in any situation.</p>
                <a href="https://medium.com/@specularmirror/specular-8ac05fbc5ae5" target="_blank" id="link_medium">
                    <img src={Medium} alt="Medium logo"></img>
                    <p>Read on Medium</p>
                </a>
            </div>
        </div>
    );
}
export default Article;
