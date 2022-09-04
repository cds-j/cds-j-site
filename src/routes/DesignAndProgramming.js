import App from '../App';
import React from 'react';
import Footer from '../Footer';

const designs = {
    logos: {
        UCLOGO: {
            description: "Logo for arts organization Uncommon Colors",
            src: "./images/uc-logo.png",
            alt: "Logo for Uncommon Colors"
        },
        DONTASKLOGO: {
            description: "Logo for media company Don't Ask",
            src: "./images/dont-ask-logo.png",
            alt: "Logo for Don't Ask"
        },
        FORUMCACHELOGO: {
            description: "Logo for publication Forum Cache",
            src: "./images/forum-cache-logo.png",
            alt: "Logo for Forum Cache"
        }
    },
    fliers: {
        FUNDRAISER: {
            description: "Fundraiser flier for the Marsha P Johnson Institute and the Bail Project",
            src: "./images/fundraiser.png",
            alt: "Orange background with fundraiser details"
        },
        ALEXISPYESHOW: {
            description: "Flier for art show, The Real & The Fantastic: The Irrational Joys of the Axis, by Alexis Pye at Inman Gallery",
            src: "./images/alexis-pye-show-flier.png",
            alt: "Artist painting next to leaves"
        }
    }
}


function DesignAndProgramming() {
    return (
        <div>
            <App />
            <div class="section" id="design-and-programming">
                <h3>
                    the design & programming page is currently in production...<br/>
                    but in the meantime, feel free to see what i'm working on at these links
                </h3>
                <ul id="design-links">
                    <li><a href="https://github.com/cds-j" target="_blank" rel="noopener noreferrer">github</a> for developer projects</li>
                    <li><a href="https://cdsherrardjr.myportfolio.com" target="_blank" rel="noopener noreferrer">adobe portfolio</a> for design/layout portfolio</li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default DesignAndProgramming;