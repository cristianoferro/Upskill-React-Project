import { motion } from 'framer-motion';

const InterfaceContainer = ({globalVariants, children}) => {
    

    return(
            <motion.div className="interface-container box-element"
            variants={globalVariants}
            initial="hidden"
            animate="visible"
            exit="exit">
            {children}
            </motion.div>
    )
}

export default InterfaceContainer;