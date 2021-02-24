import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LogoAnimation from './LogoAnimation'
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
      <motion.div className="initial"
      variants={initialVariants}
      initial="hidden"
      animate="visible"
      exit="exit">
          <div>
          <LogoAnimation/>
        
          <div>
            <nav className="initial-menu">

            </nav>
          </div>
        </div>
                
      </motion.div>
    )
}

export default Initial;