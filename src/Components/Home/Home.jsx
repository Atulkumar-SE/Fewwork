import React from 'react'
import './Home.css'
import HowToApply from './HomeComponents/HowToApply'
import HighPC from './HomeComponents/HighPC'
import JobCategories from './HomeComponents/JobCategories'

const Home = () => {
  return (
    <div className='Home_Container'>
        <HowToApply/>
        <JobCategories/>
        <HighPC/>
        
    </div>
  )
}

export default Home;