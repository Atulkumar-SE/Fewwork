import React from 'react'
import './Footer.css'
import logo from '../../../images/Fewwork.svg'
import {  FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaRegCopyright, FaRegEnvelope, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'


const Footer = () => {
  return (
   <div className="footerContainer">
      <div className="footerList">
        <div className="F_logo">
          <img src={logo} alt="logo" />
          <h1>Fewwork</h1>
          <div className="socialIcon">
           <span><FaFacebookF/></span> 
           <span><FaLinkedinIn/></span>
           <span><FaInstagram/></span>
           <span><FaWhatsapp/></span>
           <span><FaTelegramPlane/></span>
          </div>
        </div>
        <div className="Fewwork">
        <h2>Fewwork</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Recruiters</a></li>
            <li><a href="/">Job Seekers</a></li>
            <li><a href="/">Media</a></li>
            <li><a href="/">For startup Hiring</a></li>
          </ul>
        </div>
        <div className="Legal">
        <h2>Legal</h2>
          <ul>
          <li><a href="/">Privacy Policy</a></li>
          <li><a href="/">Terms & Conditions</a></li>
          <li><a href="/">Product & Pricing</a></li>
          <li><a href="/">Refund Policy</a></li>
          </ul>
        </div>
        <div className="contactUs">
        <h2>Contact Us</h2>
          <ul>
            <li><FaPhone/> 9718901909</li>
            <li><FaRegEnvelope/> fewwork@gmail.com</li>
            <li>
            <select >
              <option value="">Location</option>
              <option value="">Noida</option>
              <option value="">Ghaziabad</option>
              <option value="">Delhi</option>
              <option value="">Gurugram</option>
            </select>
            </li>
          </ul>

        </div>
      </div>
      <div className="copyRight">
        copyright <FaRegCopyright/> 2023 Fewwork all right reserved
      </div>
   </div>
  )
}

export default Footer