import defaultItemImg from '../../media/images/0.jpg';
import Close from '../visual_components/Close';
import { useState } from "react";
import {motion} from 'framer-motion'

const ListItem = ({ k, id, item, expanded, setExpanded, isPortrait, buttonVariants}) => {
    const [itemIsClosed, setItemIsClosed] = useState(true);
    const closeItem = () =>{
        setItemIsClosed(true)
    }
    const clickItem = (id) => {
        setExpanded(id)
        setItemIsClosed(false)
    }
    return(
        <>
            <div className={(isPortrait ? (id + 1) % 3 === 0 : (id + 1) % 4 === 0) ? "item-result no-margin-right" : "item-result"} 
                onClick={() => clickItem(id)}>
                <div>
                    <div className="item-title"><span>{item.labelsrecipe.displayName}</span></div>
                    <div className="item-category"><span>{item.labelsrecipessectionsFilter}</span></div>
                </div>

            <motion.div className="item-img"
                variants={buttonVariants}
                whileHover="hoverSmaller">
                <img src={item.sourceUrlrecipe ? item.sourceUrlrecipe : defaultItemImg} alt=""/>
            </motion.div>
            </div>
            <div className={id === expanded && !itemIsClosed ? "item-detail" : "item-detail-hidden"}>
                <Close closeItem={closeItem} />
                <span>{item.id}</span>
                <span>{item.labelsrecipessectionsFilter}</span>
                <span className="recipe-description">{item.labelsrecipe.displayName}</span>
                <span>{item.labelsrecipe.description}</span>
                <span>{item.nutritionFactsrecipe.calories.lowerAmount}</span>
                <span>{item.nutritionFactsrecipe.calories.upperAmount}</span>
                <div className="item-img-detail"><img src={item.sourceUrlrecipe ? item.sourceUrlrecipe : defaultItemImg} alt=""/></div>
            </div>
        </>
  );
}

export default ListItem;