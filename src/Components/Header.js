import React from 'react'
import { Link } from 'react-router-dom'


export const Header = () => {
  return (<>
    <div id='header' className='headerClass'>
        <div id="topBar">
            <a href='/' id="callus" className="topbarText">CALL US: 012 44 5698 7456 896</a>
            <div id="rightsectionintopbar">
            <a href='/' id="login" className="topbarTextr topbarText">LOGIN/REGISTER</a>
            <a href='/' id="login" className="topbarTextr topbarText">MY ACCOUNT</a>
            <Link to='/contact' id="login" className="topbarTextr topbarText">CONTACT US</Link>
            </div>
        </div>
        <div id="bottombar">
            <img src="https://www.strunkmedia.com/wp-content/uploads/2018/05/bigstock-Print-163213010.png" alt="" id="logo" />
            <div id="centernav" className="nav">
            <Link to='/home' id="home" className="centernavitems nav">Home</Link>
            <Link to='/shop' id="shop" className="centernavitems nav">Shop</Link>
            <a href='/' id="blog" className="centernavitems nav">Blog</a>
            <a href='/' id="pages" className="centernavitems nav">Pages</a>
            <Link to='/contact' id="contact" className="centernavitems nav">Contact</Link>
            </div>
            <div id="rightnav" className="nav">
            <a href='/' id="search" className="rightnavitems nav">Search</a>
            <a href='/' id="account" className="rightnavitems nav">My Account</a>
            <a href='/' id="liked" className="rightnavitems nav">Liked</a>
            <a href='/' id="cart" className="rightnavitems nav">Cart</a>
            </div>
        </div>
    </div>
    </>
  )
}
