import { motion } from 'framer-motion';

const expand = {
    hidden:{
        opacity:0,
        scale:0
    },
    visible:{},
    exit:{
        scale: 30,
        opacity:1,
        transition:{
            duration:1
        }
    }
}

const ExpandTransition = () => {
    return(
        <div className="expand-main-container">
        <motion.div className="expand-anim-container"
            variants={expand}
            initial="hidden"
            animate="visible"
            exit="exit">
            <div className="circle-cover-transition">
            </div>
        </motion.div>
        </div>
    )
}
export default ExpandTransition;