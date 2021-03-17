import { motion } from 'framer-motion';
import home from '../media/icons/home.svg';
import { Link } from 'react-router-dom';
const UpperBar = ({globalVariants, children}) => {
    

    return(
            <motion.div className="box-element upper-bar"
                variants={globalVariants}
                initial="hidden"
                animate="visible"
                exit="exit">
                    <div className="home-link">
                        <Link to="/initial">
                            <img src={home} alt="home"></img>
                        </Link>
                    </div>
                    
                    {children}

            </motion.div>
    )
}

export default UpperBar;