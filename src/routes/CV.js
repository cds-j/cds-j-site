import React from 'react';

import App from '../App';
import Footer from '../Footer';

import '../CV.css';

function CV() {
    return (
        <div id="cv">
            <App />
            <h3>CV</h3>
            <div class="cv">
                <p>
                    I am a recent Digital Media graduate from the University of Houston working at the intersection
                    of art, design, and technology to contribute to systemic progress in digital and local spaces. I
                    have immense experience working with design/layout software and have self taught myself
                    front-end web dev languages and technologies over the past few years. I&apos;m strongly motivated
                    to support spaces that center marginalized voices and value unorthodox approaches to problem
                    solving. I&apos;m hungry to start my career in design so I can further develop my skill set and use
                    those skills to design meaningful solutions to real world issues.
                </p>
            </div>
            <div class="cv">
                <h2>Education</h2>
                <p>
                    2021 - n/a, Codecademy, <i>Certification, Full-Stack Engineer</i><br/>
                    2020, University of Houston, <i>BS, Digital Media</i>
                </p>
            </div>
            <div class="cv">
                <h2>Experience</h2>
                
                <p>
                    2022, <i>Graphic Designer @ Campaign for NY State Assembly District 60 Candidate</i><br/>
                    Contributed to design efforts with DSA members. Produced brand guidelines for visual
                    components and deliverables. Maintaining constant communication and feedback between
                    NY-based volunteers.
                </p>
                <p>
                    2017 - 2020, <i>First Chair Studio Engineer @ Hamill Foundation Multimedia Studio</i><br/>
                    Mixed and mastered quality recordings for students, professors, and visiting patrons.
                    Applied Lean Sigma Six to studio processes to eliminate booking and session bottlenecks.
                    Promoted to First Chair Studio Engineer.
                </p>
                <p>
                    2018, <i>Graphic Design Internship @ Jack J Valenti School of Communications</i><br/>
                    Led brand decisions to generate effective deliverables for 2018 Valenti Awards. Kept
                    communication with the team through exchanging files and important information.
                </p>
                <p>
                    2014 - 2018, <i>Radio Show Host/Co-host @ Coog Radio</i><br/>
                    Managed in-depth conversations with show guests. Operated live audio equipment while
                    observing station rules and regulations.
                </p>
                <p>
                    2014 - n/a, <i>Graphic Design Freelancer</i><br/>
                    Designing effective logos, fliers, and deliverables for clients nationwide. 
                    Cultivating and maintaining long-term client relationships.
                </p>
            </div>
            <div class="cv">
                <h2>Skills</h2>
                <p>
                    Front-end web developer tools including <i>HTML, CSS, JavaScript, React</i>, and <i>GitHub</i>.
                    Software including <i>Adobe InDesign, Adobe Illustrator, Adobe Photoshop, Adobe After Effects,
                    VSCode</i>, and <i>Ableton Live</i>.
                </p>
            </div>
            <div class="cv">
                <h2>Interests</h2>
                <p>
                    I independently study fine art and jazz. Between designing, programming, artmaking, and
                    music, I aspire to start a publishing entity to press accessible art books and rare literature. I’m
                    also learning Full-Stack Engineering at the moment and hope to continue my education in
                    Software Development to eventually build my own operating system.
                </p>
            </div>
            <div class="cv">
                <h2>Current Projects</h2>
                <p>
                    <i>Forum Cache</i> (<a href="https://forumcache.xyz" target="_blank" rel="noopener noreferrer">forumcache.xyz</a>), a publication seeking to generate and amplify black radical
                    propaganda and expression.
                </p>
                <p>
                    <i>Beau yé Roc</i> is an alias I use for producing records inspired by world music and jazz, made with
                    Ableton Live, sampling techniques, and analog instruments.
                </p>
                <p>
                    <i>Roy Haes</i> is an alias used for my interdisciplinary art practice. Latest audio-visual works were
                    for debut show “Songbook for Black Constellations” at Sanman Studios in Houston.
                </p>
            </div>
            <a href="corey-sherrard-cv.pdf" target="_blank" rel="noopener noreferrer">→ PDF</a>
            <Footer />
        </div>
    )
}

export default CV;