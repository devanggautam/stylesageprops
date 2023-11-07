import React from 'react'

export const Footer = () => {
    
  return (<>
    <div id='footer'>
        <div className='footeritems' id="aboutus">
            <h3 className='footeritemsheading' id='aboutusheading'>About Us</h3>
            <p  className='description' id="aboutusdescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
        </div>

        <div className='footeritems' id="footernewsletter">
            <h3 className='footeritemsheading' id="fnewsletterheading">Newsletter</h3>
            <p className='description' id="fnewsletterdescription">Stay updated with our latest trends</p>
            <div id="fnewsletterinputsection">
            <input placeholder='Email' type="text" id="fnewsletterinput" />
            <button id="fnewsletterbtn">&rarr;</button>
        </div>
        </div>

        <div className='footeritems' id="followus">
            <h3 className='footeritemsheading' id="followusheading">Follow Us</h3>
            <p className='description' id="followusdescription">Let us be social</p>
            <a href='/' className='socialicons' id="fbicon">Facebook</a>
            <a href='/' className='socialicons' id="igicon">Instagram</a>
            <a href='/' className='socialicons' id="wpicon">WhatsApp</a>


        </div>
    </div>

</>
  )
}
