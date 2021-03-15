import { motion } from 'framer-motion';

const UpperBar = ({globalVariants, children}) => {
    

    return(
            <motion.div className="box-element upper-bar"
                variants={globalVariants}
                initial="hidden"
                animate="visible"
                exit="exit">

                {children}

            </motion.div>
    )
}

export default UpperBar;