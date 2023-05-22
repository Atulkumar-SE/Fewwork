import React from 'react'
import './SubHead.css'
import {RiSuitcaseLine} from 'react-icons/ri'
import {GiModernCity} from 'react-icons/gi'
import {ImLocation} from 'react-icons/im'
import {TbBrandWechat} from 'react-icons/tb'

const SubHead = () => {
  return (
    <div className="subMenu top">
        <div >
           <span><RiSuitcaseLine/></span> 
            <select name="JobType" id="JobType">
                <option value="">IT/Software</option>
                <option value="">Business</option>
                <option value="">BPO</option>
                <option value="">Sales</option>
                <option value="">DataEntry</option>
            </select>
        </div>
        <div >
           <span> <GiModernCity/></span>
            <select name="JobType" id="JobType">
                <option value="">City</option>
                <option value="">Delhi</option>
                <option value="">Noida</option>
                <option value="">Gurugram</option>
                <option value="">Ghaziabad</option>
            </select>
        </div>
        <div >
            <span><ImLocation/></span>
            <select name="JobType" id="JobType">
                <option value="">Area/Location</option>
                <option value="">Range 10 Km</option>
                <option value="">Range 15 Km</option>
                <option value="">Range 30 Km</option>
                <option value="">Range 50 Km</option>
            </select>
        </div>
        <div >
        <span> <TbBrandWechat/></span>
            <select name="JobType" id="JobType">
                <option value="">Interviews</option>
                <option value="">Business</option>
                <option value="">BPO</option>
                <option value="">Sales</option>
                <option value="">DataEntry</option>
            </select>
        </div>
    </div>
  )
}

export default SubHead