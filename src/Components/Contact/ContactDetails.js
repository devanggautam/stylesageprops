import React from 'react' 
import emailicon from './emailicon.png'
import addressicon from './locationicon.png'
import phoneicon from './callicon.png'
export const ContactDetails = () => {
  return (
    <div id="contactdetails">
    <div id='contactdetailssection1' className='contactdetailsections' >
        <div id="addressdiv" className='contactdiv'>
    {/* <h3 id="addressheading" className="contactheadings">Address - </h3> */}
    <img src={addressicon} className='contacticons' alt="" />
    <div className="ctdetails">
    <h4 id='address' className='contact'>California, United States</h4>
    <p id="addresspara" className='contactpara'>Santa monica bullevard</p>
    </div>
    </div>
        <div id="phonediv" className='contactdiv'>
    {/* <h3 id="phoneheading" className="contactheadings">Phone No - </h3> */}
    <img src={phoneicon} className='contacticons' alt="" />
    <div className="ctdetails">
    <h4 id='phone' className='contact'>00 (440) 9865 562</h4>
    <p id="phonepara" className='contactpara'>Mon to Fri 9am to 6 pm</p>
    </div>
    </div>
        <div id="emaildiv" className='contactdiv'>
    {/* <h3 id="emailheading" className="contactheadings">Email - </h3> */}
    <img src={emailicon} className='contacticons' alt="" />
    <div id='emaildetailsdiv' className="ctdetails">
    <h4 id='email' className='contact'>support@colorlib.com</h4>
    <p id="emailpara" className='contactpara'>Send us your query anytime!</p>
    </div>
    </div>

    </div>

    <div id='contactdetailssection2' className='contactdetailsections' >
        <form action="" id="contactform">
            <input placeholder='Name' type="text" className='contactinput' id="entername" />
            <input placeholder='Email' className='contactinput' type="email" id="enteremail" />
            <input placeholder='Subject' type="text" className='contactinput' id="entersubject" />
            <textarea id="entermessage" placeholder='Message'  cols="30" rows="10"></textarea>
            <button id="submitformbtn">Send Message</button>
        </form>
    </div>



    </div>
  )
}
