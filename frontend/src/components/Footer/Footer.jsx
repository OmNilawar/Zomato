import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque est quod reprehenderit non repellat delectus, numquam nam quae esse eius modi vero sed dolor qui.</p>
                <div className="social">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>

            <div className="footer-content-middle">
                <h2>Company</h2>
                <ul>
                    <li>home</li>
                    <li>about us</li>
                    <li>delivery</li>
                    <li>contact us</li>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>Get in Touch</h2>
                <ul>
                    <li>+1-90-34-512</li>
                    <li>tomatoService@gmail.com</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer