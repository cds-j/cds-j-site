import React from 'react';
import App from '../App';
import Footer from '../Footer';

function AboutMyself() {
    return (
        <div>
            <App />
            <div class="section" id="about-myself">
                <h3>about myself...</h3>
                <div>
                    <p>
                        My name is Corey D Sherrard Jr. I am an Interdisciplinary Artist and Designer 
                        from Houston, Texas utilizing a vast array of skills and tools to build projects inspired by Afrofuturist ideas
                        and centering Black autonomy. I have been releasing what I call "black•world music" under the 
                        alias Beau yé Roc since 2020 (and under other aliases since 2013). More recently, I have been
                        building on my Interdisciplinary Artist practice under the alias Roy Haes since 2022, initiating a body of work
                        that uses music and maps as a metaphor for building autonomous systems.
                    </p>
                    <p>
                        I graduated from the University of Houston with a BS in Digital Media in 2020. Through school
                        and since then, I have learned basic front-end web development skills (HTML, CSS, JavaScript/React)
                        amongst other programming tools at an introductory level (Git, Vercel, JQuery, Python). I'm very comfortable with the 
                        Adobe Creative Suite (Photoshop, Illustrator, InDesign) and a few DAWs (Ableton Live, ProTools).
                        I'm personally building a project called FORUM CACHE, an umbrella focused on independently preserving jazz and 
                        black radical thought.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutMyself;