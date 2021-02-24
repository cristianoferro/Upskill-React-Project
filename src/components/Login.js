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
        <motion.div className="login-page"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit">
            <form method="post" className="login-form">
            <div class="log-input">
              <input type="email" id="email" placeholder="Email"/>
            </div>

            <div class="group log-input">
                <input type="password" id="password" placeholder = "Password"/>
            </div>
              <div className="buttons-wrap">
                <Link to="/initial">
                      <button className="log-form-btn">
                          Login
                      </button>
                  </Link>
                  <Link to="/register">
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