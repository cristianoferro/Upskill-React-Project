import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Background from './visual_components/Background';
import LogoAnimation from './visual_components/LogoAnimation';
import ExpandTransition from './visual_components/ExpandTransition';

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
    transition: { 
      duration:1,
      ease: 'easeInOut' }
    },
}

const Initial = () => {
    let initialMenuLinks = ['MyKitchen', 'Alertas'];

    return(
        <>
          <motion.div className="initial"
            variants={initialVariants}
            initial="hidden"
            animate="visible"
            exit="exit">
              <div className="initial-wrapper">
                <LogoAnimation/>
              
                <nav className="initial-menu box-element">
                  <div className="nonsvg-v-line"></div>
                  {initialMenuLinks.map((menuElem,index) => (
                    <Link to={"/",menuElem}
                      className="menu-elem"
                      key={index}
                      >
                        <div>{menuElem}</div>
                    </Link>
                  ))}
                </nav>
              </div>
              
                <ExpandTransition/>
                
                
                
          </motion.div>
          <Background/>
        </>
    )
}

export default Initial;