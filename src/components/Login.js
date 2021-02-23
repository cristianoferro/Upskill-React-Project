import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const containerVariants = {
    hidden:{
      opacity:0,
      scale:0,
      x: '2vw'
    },
    visible:{
      opacity:1,
      x:0,
      scale:[1.2,1],
      transition:{
        type:'spring', 
        delay:0.5
      }
    },
    exit:{
      x: '-2vw',
      transition: { ease: 'easeInOut' }
    }
  }

const Login = () => {

    return(
        <div className="login-page">
            <form>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>

                <Link to="/initial">
                    <motion.button
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        Login
                    </motion.button>
                </Link>
            </form>
        </div>
    )
}

export default Login;