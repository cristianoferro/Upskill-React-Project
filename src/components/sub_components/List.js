import RecipeItem from './RecipeItem';
import InventoryItem from './InventoryItem';
import { useState } from "react";

const List = ({ results, searchedRecipes, searchedInventario, expanded, setExpanded, buttonVariants, searchRecipes, searchInventories, isPortrait}) => {
    const [itemIsClosed, setItemIsClosed] = useState(true);
    const closeItem = () =>{
        setItemIsClosed(true)
    }
    const clickItem = (id) => {
        setExpanded(id)
        setItemIsClosed(false)
    }
    return (
    
    <div className="list-results">
        <h2 className="results-name">{results}</h2>
        <div className="main-filters">
            <span>Filtrar por:</span>
            <div className="filter-button">
                Tipo
                <span></span>
            </div>
            <div className="filter-button">Quantidade</div>
            <div className="filter-button">Custo</div>
        </div>

        {(() => {
          if (searchRecipes) {
              console.log(searchRecipes);
            return searchedRecipes.map((item, id) => 
                <RecipeItem 
                    key={id} 
                    id={id} 
                    item={item} 
                    expanded={expanded} 
                    setExpanded={setExpanded} 
                    isPortrait={isPortrait}  
                    buttonVariants={buttonVariants} 
                    searchRecipe={searchRecipes} 
                    searchInventories={searchInventories} 
                    clickItem={clickItem} 
                    closeItem={closeItem} 
                    itemIsClosed={itemIsClosed}/>);

          } else if(searchInventories) {
              console.log("searchInventories",searchedInventario);
            return searchedInventario.map((invItem, InvId) => 
            
                <InventoryItem 
                    key={InvId} 
                    id={InvId} 
                    invItem={invItem} 
                    expanded={expanded} 
                    setExpanded={setExpanded} 
                    isPortrait={isPortrait}  
                    buttonVariants={buttonVariants} 
                    searchRecipe={searchRecipes} 
                    searchInventories={searchInventories} 
                    clickItem={clickItem} 
                    closeItem={closeItem} 
                    itemIsClosed={itemIsClosed}/>);
          }
        })()}

        
         </div>
    
);
}

export default List;