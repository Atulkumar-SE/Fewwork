import React from 'react'
import './HowToApply.css'
import { FaArrowRight, FaEdit, FaPhone, FaSearch } from 'react-icons/fa'

const HowToApply = () => {
  return (
    <div className='HTA_Container'>
        <h1>How To Apply A Job On Fewwork</h1>
        <div className="Process">
            <div className="divBox">
                <span><FaEdit/> </span>
                <h3>Complete your registration</h3>
            </div>
            <span className="arrow"><FaArrowRight/></span>
            <div className="divBox">
                <span><FaSearch/> </span>
                <h3>Apply a job</h3>
            </div>
            <span className="arrow"><FaArrowRight/></span>
            <div className="divBox">
                <span><FaPhone/> </span>
                <h3>Contact to hr</h3>
            </div>
        </div>
    </div>
  )
}

export default HowToApply