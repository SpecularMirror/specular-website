import React from 'react';

import Img from '../../Assets/concept.png';

import './article.css';

function Article() {
    return (
        <div className="medium-container">
            <img src={Img} alt="Logo"></img>
            <div>
                <h2>Test</h2>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
        </div>
    );
}
export default Article;