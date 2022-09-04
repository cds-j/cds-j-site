import React from 'react';

function Images(props) {
    return (
        <div class="design-box">
            <img class="design-image" src={props.src} alt={props.alt}/>
            <p>{props.description}</p>
        </div>
    )
}

export default Images;