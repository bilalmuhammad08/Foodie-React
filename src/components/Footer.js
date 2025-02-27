import React from 'react'
import Logo from '../Assets/Logo.svg';
import { BsTwitter } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';
import { BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <div className='footer-section-one '>
                <div className="footer-logo-container">
                    <img src={Logo} alt="" />
                </div>
                <div className="footer-icons">
                    <BsTwitter />
                    <SiLinkedin />
                    <BsYoutube />
                    <FaFacebookF />
                </div>
            </div>

            <div className='footer-section-two'>
                <div className='footer-section-columns'>
                    <span>Quality</span>
                    <span>Help</span>
                    <span>Share</span>
                    <span>Carrers</span>
                    <span>Testimonials</span>
                </div>
                <div className='footer-section-columns'>
                    <span>+91 9078654321</span>
                    <span>foodie@food.com</span>
                    <span>insta@food</span>
                    <span>food@gmail.com</span>
                </div>
                <div className='footer-section-columns'>
                    <span>Terms & Condition</span>
                    <span>Privacy Policy</span>
                    <span>Costemer</span>
                    <span>Enything Do you Want</span>
                </div>
            </div>

        </div>
    )
}

export default Footer
