import { motion } from 'framer-motion';

const expand = {
    hidden:{
        opacity:0,
        scale:0
    },
    visible:{},
    exiting:{
        scale: 30,
        opacity:1,
        transition:{
            duration:2
        }
    },
    noExit:{
        opacity:0
    }
}

const ExpandTransition = ({forward}) => {
    return(

        <motion.div className="expand-anim-container"
            variants={expand}
            initial="hidden"
            animate="visible"
            exit={forward ? "exit" : "noExit"}>
            {/*   */}
            <div className="circle-cover-transition">
            </div>
        </motion.div>
    )
}
export default ExpandTransition;