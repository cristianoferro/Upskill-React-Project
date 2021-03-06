import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LogoAnimation from './LogoAnimation'

const variants = {
  clickedMenuItem: { width: "80%" , height: "13%", textAlign: "start"},
  hamburguerShow: { opacity: 1 },
  menuSide: { 
              opacity:0,
              transition: {
                duration:2,
                ease: "easeInOut"
              }
            },
  menuShrink:{
    scale:0,
    opacity:0
  },
  menuLarge:{
    scale:1,
    opacity:1
  },
  unclicked: {},
  hamburguerShowUnclicked: { opacity: 0 },
  initialMenu:{opacity:0},
  menuSideUnclicked: {
    opacity:1,
    transition: {
      duration:2,
      ease: "easeInOut"
    }
  },

  exit:{
    opacity:0,
    transition: { 
      duration:2,
      ease: 'easeInOut' }
    }
}

const Initial = () => {

    let initialMenuLinks = ['MyKitchen', 'Search', 'Schedule', 'Statistics'];

    const [isOpen, setIsOpen] = useState(false)

    return(
      <motion.div className="initial">
        <div className="logo-container">
          <LogoAnimation/>
        </div>

            <div className="float-menu-container">
              
              <motion.nav className="box-element initial-menu"
                variants={variants}
                initial="initialMenu"
                animate={isOpen ? "menuSide" : "menuSideUnclicked"}
              >
              <a>
                <motion.svg className="svg-hamburguer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80"
                  variants={variants}
                  initial="hamburguerShowUnclicked"
                  animate={isOpen ? "hamburguerShow" : "hamburguerShowUnclicked"}
                  >
                  <path fill="none" stroke="#828282" strokeWidth="10" strokeLinecap="round" strokeMiterlimit="10" d="M5,10h90"/>
                  <path fill="none" stroke="#828282" strokeWidth="10" strokeLinecap="round" strokeMiterlimit="10" d="M5,40h90"/>
                  <path fill="none" stroke="#828282" strokeWidth="10" strokeLinecap="round" strokeMiterlimit="10" d="M5,70h90"/>
                </motion.svg>
              </a>
              <div className="nonsvg-v-line"></div>
              <div className="nonsvg-h-line"></div>
              <motion.div className="links-container"
                  initial="unclicked"
                  animate={isOpen ? "clickedMenuItem" : "unclicked"}
                  variants={variants}
                  exit="exit">
              {initialMenuLinks.map(menuElem => (
                <Link to="/initial" 
                  className={isOpen ? "menu-elem align-left" : "menu-elem"}
                  key={menuElem}
                  onClick={() => setIsOpen(!isOpen)}
                  >
                    <p>{menuElem}</p>
                </Link>
              ))}
              </motion.div>
              </motion.nav>
            </div>
            <div className="initial-background"></div>
      </motion.div>
    )
}

export default Initial;