import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const containerVariants = {
    hidden:{
      opacity:0,
      x: '2vw',
    },
    visible:{
      opacity:1,
      x:0,
      transition:{
        type:'EaseInOut'
      }
    },
    exit:{
      x: '-2vw',
      opacity:0,
      transition: { ease: 'easeInOut' }
    }
  }

const Login = () => {

    return(
        <div className="login-page"
            >
            <motion.h2 className="title"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >Log in to Kitchenware</motion.h2>
            <motion.form method="post" className="login-form box-element"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
            <div className="log-input">
              <input type="email" id="email" placeholder="EMAIL"/>
            </div>

            <div className="group log-input">
                <input type="password" id="password" placeholder = "PASSWORD"/>
            </div>
              <div className="buttons-wrap">
                <Link to="/initial">
                      <button className="log-form-btn">
                          Login
                      </button>
                  </Link>
                  <Link to="/">
                      <button className="log-form-btn register">
                          Register
                      </button>
                  </Link>
              </div>
                
            </motion.form>
            <div className="initial-background"></div>
        </div>
    )
}

export default Login;