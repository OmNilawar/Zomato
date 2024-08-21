import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        {/* <p>.</p> */}
        <div className="main-content">
            <img src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png" alt="" />
            <div className="content-right">
                <h2>Get the Tomato app</h2>
                <p>We will send you a link, open it on your phone to download the app</p>
                <div className="email-input">
                    <input type="email" placeholder='Enter email'/>
                    <button>Share App Link</button>
                </div>
                <p>Download app from</p>
                <div className="store-logo">
                    <img src={assets.play_store} alt="" />
                    <img src={assets.app_store} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppDownload