import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LogoAnimation from './LogoAnimation';

const initialVariants = {
  hidden: {
    opacity:0,
    pathLength: 0
  },
  visible: {
    pathLength:1,
    opacity:1,
    transition: {
      duration:2,
      ease: "easeInOut"
    }
  },
  exit:{
    opacity:0,
    transition: { 
      duration:1,
      ease: 'easeInOut' }
    },
}

const Initial = () => {
  
    return(
      <div className="initial">
      
        <LogoAnimation/>

            <motion.div className="float-menu-container"
              variants={initialVariants}
              initial="hidden"
              animate="visible"
              exit="exit">
              <nav className="initial-menu box-element">
                <div className="nonsvg-v-line"></div>
                <div className="nonsvg-h-line"></div>
                <Link to="/mykitchen" className="menu-elem"><div>MyKitchen</div></Link>
                <Link to="/search" className="menu-elem"><div>Search</div></Link>
                <Link to="/schedule" className="menu-elem"><div>Schedule</div></Link>
                <Link to="/statistics" className="menu-elem"><div>Statistics</div></Link>
              </nav>
            </motion.div>
            
            <div className="initial-background"></div>
                
      </div>
    )
}

export default Initial;