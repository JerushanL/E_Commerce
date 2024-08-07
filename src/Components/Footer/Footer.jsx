import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'


const Footer = () => {
    return (
        <div className='footer'>

            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>SHOPPERS</p>
            </div>
            <div>
                <ul className='footer-links'>
                    <li>Company</li>
                    <li>Products</li>
                    <li>Carrers</li>
                    <li>About</li>
                    <li>Conatct</li>
                </ul>
            </div>
            <div className="footer-icons">
                <div>
                    <a href="/" tabIndex="0"><img class="bn46" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="bn45" /></a>
                </div>
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" className='insta' />
                </div>
                <div className="footer-icons-container">
                    <img src={pintester_icon} alt="" className='pin' />
                </div> <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" className='whatsapp' />
                </div>
                <div>
                    <a href="/" tabIndex="0"><img class="bn45" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="bn45" /></a>
                </div>
            </div>

            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
