import React from 'react'

export const Newsletter = () => {
  return (
    <div id='newsletter'>
        <h1 id="newsletterheading" className="newslettertext">Subscribe for Our Newsletter</h1>
        <p id="newsletterdescription" className='newslettertext'>We won't send any kind of spam</p>
        <div id="newsletterinputsection">
            <input placeholder='Email' type="text" id="newsletterinput" />
            <button id="newsletterbtn">Get Started</button>
        </div>
    </div>
  )
}
