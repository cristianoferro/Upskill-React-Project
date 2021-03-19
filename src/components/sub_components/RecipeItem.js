import defaultItemImg from '../../media/images/0.jpg';
import Close from '../visual_components/Close';
import { useState } from "react";
import {motion} from 'framer-motion';


    
const RecipeItem = ({k, id, item, expanded, setExpanded, isPortrait, buttonVariants, searchRecipes, 
    searchInventories, clickItem, closeItem, itemIsClosed}) => {
        // media queries

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
                        <div className="detail-container box-element">
                            <div className="detail-properties">
                                {/* <span>{item.labelsrecipessectionsFilter}</span> */}
                                <div className="detail-title box-element">{item.labelsrecipe.displayName}</div>
                                <div className="simple-list">    
                                    <span>{item.nutritionFactsrecipe.calories.lowerAmount} a {item.nutritionFactsrecipe.calories.upperAmount} (u. medida: <span className="measure-unit">{item.nutritionFactsrecipe.calories.unit.toLowerCase()}</span>)</span>
                                    <span>{item.nutritionFactsrecipe.totalFat.lowerAmount} a {item.nutritionFactsrecipe.totalFat.upperAmount} (u. medida: <span className="measure-unit">{item.nutritionFactsrecipe.totalFat.unit.toLowerCase()}</span>)</span>
                                    <span>{item.nutritionFactsrecipe.cholesterol.lowerAmount} a {item.nutritionFactsrecipe.cholesterol.upperAmount} (u. medida: <span className="measure-unit">{item.nutritionFactsrecipe.cholesterol.unit.toLowerCase()}</span>)</span>
                                    <span>{item.nutritionFactsrecipe.sodium.lowerAmount} a {item.nutritionFactsrecipe.sodium.upperAmount} (u. medida: <span className="measure-unit">{item.nutritionFactsrecipe.sodium.unit.toLowerCase()}</span>)</span>
                                    <span>{item.nutritionFactsrecipe.totalCarbohydrate.lowerAmount} a {item.nutritionFactsrecipe.totalCarbohydrate.upperAmount} (u. medida: <span className="measure-unit">{item.nutritionFactsrecipe.totalCarbohydrate.unit.toLowerCase()}</span>)</span>
                                    <span>{item.nutritionFactsrecipe.protein.lowerAmount} a {item.nutritionFactsrecipe.protein.upperAmount} (u. medida: <span className="measure-unit">{item.nutritionFactsrecipe.protein.unit.toLowerCase()}</span>)</span>
                                </div>
                                <div className="simple-list">
                                    <span>Para {item.servesNumPeoplerecipe} pessoas</span>
                                    <span>Método: fervido</span>
                                </div>
                            </div>
                            <div className="large-img-container">
                                <Close closeItem={closeItem} />
                                <div className="item-img-detail"><img src={item.sourceUrlrecipe ? item.sourceUrlrecipe : defaultItemImg} alt=""/></div>
                            </div>


                            

                        </div>

                        <div className="detail-container box-element">
                                <span>
                                <div className="detail-description-title">
                                    <span>Ingredientes</span>
                                </div>
                                
                                    {item.ingredientsrecipe[0].labels.map((ingredient) => 
                                        <>
                                            <div className="simple-list"> <span>{ingredient.displayName}</span></div>
                                            <span>{ingredient.description}</span>
                                        </>
                                    )}
                                </span>
                        </div>
                        <div className="detail-container box-element">
                            
                                <span className="detail-description">
                                    <div className="detail-description-title">preparação</div>
                                    {item.labelsrecipe.description}
                                </span>
                        </div>
                                
                    </div>
                </>
                
    )
}
export default RecipeItem;