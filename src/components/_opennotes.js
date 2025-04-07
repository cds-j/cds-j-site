import React from 'react';

function OpenNote() {
  return (
    <div className="component">
      <div id="opennote">
        <h1>references + open notes</h1>
        <h2>references. recordings. mixes. links. writings. etc. </h2>
        <div>
          <h3><a href="https://www.lecinemaclub.com/" target="_blank" rel="noreferrer">LE CINEMA CLUB</a></h3>
          <p>
            Now showing... Here's a list of films that I watched for the first time on this site and admired. 
            The numbers mean nothing. There is no best or worst.
          </p>
          <ol>
            <li><a href="https://www.lecinemaclub.com/now-showing/moune-o/" target="_blank" rel="noreferrer"><b>MOUNE Ô</b></a> by MAXIME JEAN-BAPTISTE</li>
            <li><a href="https://www.lecinemaclub.com/archives/the-slow-business-of-going/" target="_blank" rel="noreferrer"><b>THE SLOW BUSINESS OF GOING</b></a> by ATHINA RACHEL TSANGARI</li>
            <li><a href="https://www.youtube.com/watch?v=HftWaIbd-rA" target="_blank" rel="noreferrer"><b>ALL DAY I DREAM ABOUT SPORT</b></a> by GABRIEL MOSES + PHARRELL WILLIAMS</li>
          </ol>
        </div>

        <hr/><br/>

        <div>
          <h3>RECORD LABELS TO KEEP UP WITH</h3>
          <p>
            Old, new, and upcoming releases to revisit and anticipate. All Bandcamp links.
          </p>
          <ol>
            <li><a href="https://intlanthem.bandcamp.com/" target="_blank" rel="noreferrer"><b>International Anthem Recording Company</b></a></li>
            <li><a href="https://gondwanarecords.bandcamp.com/" target="_blank" rel="noreferrer"><b>Gondwana Records</b></a></li>
            <li><a href="https://leavingrecords.bandcamp.com/" target="_blank" rel="noreferrer"><b>Leaving Records</b></a></li>
            <li><a href="https://10kglobal.bandcamp.com/" target="_blank" rel="noreferrer"><b>10k Global</b></a></li>
            <li><a href="https://warprecords.bandcamp.com/" target="_blank" rel="noreferrer"><b>Warp Records</b></a></li>
            <li><a href="https://brainfeeder.bandcamp.com/" target="_blank" rel="noreferrer"><b>Brainfeeder Records</b></a></li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default OpenNote;