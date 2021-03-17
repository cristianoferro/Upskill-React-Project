import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LogoAnimation from './LogoAnimation';
import ExpandTransition from './ExpandTransition'
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
    let initialMenuLinks = ['MyKitchen', 'Search', 'Schedule', 'Statistics'];
    const [isMenuClicked, setIsMenuClicked] = useState(false)

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
                {initialMenuLinks.map((menuElem,index) => (
                  <Link to={"/",menuElem}
                    className="menu-elem"
                    key={index}
                    onClick={() => setIsMenuClicked(!isMenuClicked)}
                    >
                      <div>{menuElem}</div>
                  </Link>
                ))}
              </nav>
            </motion.div>
            <ExpandTransition isMenuClicked={isMenuClicked}/>
            
            
                
      </div>
    )
}

export default Initial;