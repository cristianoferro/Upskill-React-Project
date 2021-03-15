import MyKitchenMenu from './MyKitchenMenu';
import { motion } from 'framer-motion';

const MyKitchen = ({inputRef, submitClickHandler, submit, globalVariants}) => {
    return(
        
        <motion.div
        variants={globalVariants}
        initial="hidden"
        animate="visible"
        exit="exit">
        <form>
            <input type="text" placeholder="Item" ref={inputRef}/>
            <button onClick={submitClickHandler} type="submit">{submit}</button>
        </form>
        <MyKitchenMenu/>
        </motion.div> 
    )
}
export default MyKitchen;