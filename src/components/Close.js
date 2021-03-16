import React from 'react';
import { motion } from 'framer-motion';

  const pathVariants = {
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
      pathLength:0,
      opacity:0
    }
  }
const Close = ({closeItem}) => {
  
  
    return(
        <motion.svg viewBox="0 0 841.891 595.281" enable-background="new 0 0 841.891 595.281"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            dragElastic={0.1}
            exit="exit"
            onClick={closeItem}
            >
            <motion.path variants={pathVariants} stroke="gray" strokeWidth="70" strokeLinecap="round" 
                d="M224.651,101.418l392.444,392.445"/>
            <motion.path variants={pathVariants} stroke="gray" strokeWidth="70" strokeLinecap="round" 
                d="M617.095,101.418L224.651,493.863"/>
        </motion.svg>    
    )
}

export default Close;