import defaultItemImg from '../../media/images/0.jpg';
import Close from '../visual_components/Close';
import { useState } from "react";
import {motion} from 'framer-motion';

const InventoryItem = ({k, id, item, expanded, setExpanded, isPortrait, buttonVariants, searchRecipes, searchInventories, clickItem, closeItem, itemIsClosed}) => {

    
        console.log('inventory item: ', item, id);
    return(
        <>
            <div className={(isPortrait ? (id + 1) % 3 === 0 : (id + 1) % 4 === 0) ? "item-result no-margin-right" : "item-result"} 
                        onClick={() => clickItem(id)}>
                        <div>
                            {console.log("undefined?",item)}
                            <div className="item-title"><span>{item.labelsitems.displayName}</span></div>
                            <div className="item-category"><span>{item.labels.displayName}</span></div>
                        </div>

                    <motion.div className="item-img"
                        variants={buttonVariants}
                        whileHover="hoverSmaller">
                        <img src={item.sourceUrl ? item.sourceUrl : defaultItemImg} alt=""/>
                    </motion.div>
                    </div>
                    <div className={id === expanded && !itemIsClosed ? "item-detail" : "item-detail-hidden"}>
                        <div className="detail-container box-element">
                            <div className="detail-properties">
                                <div className="detail-title box-element">{item.labelsitems.displayName}</div>
                                <div className="simple-list">    
                                    <span>{item.quantitySize.displayName}: {item.quantitySize.quantity}</span>
                                    <span>{item.unitPrice.displayName}: {item.unitPrice.units}</span>
                                    <span>{item.totalPrice.displayName}: {item.totalPrice.units}</span>
                                    
                                </div>
                            </div>
                            <div className="large-img-container">
                                <Close closeItem={closeItem} />
                                <div className="item-img-detail"><img src={item.sourceUrl ? item.sourceUrl : defaultItemImg} alt=""/></div>
                            </div>

                        </div>
                                
                    </div>
        </>
                
    )
}
export default InventoryItem;