import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const containerVariants = {
    hidden:{
      opacity:0,
      x: '2vw'
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
        <motion.div className="login-page"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit">
            <h2 className="title">Log in to Kitchenware</h2>
            <form method="post" className="login-form box-element">
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
                
            </form>
        </motion.div>
    )
}

export default Login;