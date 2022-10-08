import React from 'react';

function Programming() {
  return (
    <div className="component">
      <div id="programming">
        <h1>programming</h1>
        <h2>sites and ideas put together with programming languages and design techniques.</h2>
        <div class="programming-project">
          <img src="alexisfav.png" alt="self-portrait painting of alexis pye" />
          <div>
            <h3>painter Alexis Pye's website</h3>
            <h4>made with HTML, CSS, JavaScript, React, Git, and Vercel</h4>
            <a href="https://alexispye.info" target="_blank" rel="noreferrer">click here to visit</a> 
          </div>
        </div>
        <div class="programming-project">
          <img src="forumfav.png" alt="world with seven stars inside" />
          <div>
            <h3>Forum Cache®, entity</h3>
            <h4>made with HTML, CSS, JavaScript, Next.js, Git, and Vercel</h4>
            <a href="https://forumcache.xyz" target="_blank" rel="noreferrer">click here to visit</a>
          </div>
        </div>
        <div>
          <h3>for other dev projects...</h3>
          <a href="https://github.com/cds-j">visit my github page here</a>
        </div>
      </div>
    </div>
  )
}

export default Programming;