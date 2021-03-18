import MyKitchenMenu from './MyKitchenMenu';
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";

import UpperBar from './UpperBar';
import SearchBar from './SearchBar';
import inventory from '../data/inventory.json';
import alerts from '../data/alerts.json';
import recipes from '../data/Recipes.json';
import List from './sub_components/List';
const useStorageRetriever = (key, initialState) => {
    const [value, setValue] = useState(
      localStorage.getItem(key) || initialState
    );

    useEffect(() => {
      localStorage.setItem(key, value);
    }, [value, key]);

    return [value, setValue];

   };

const MyKitchen = ({buttonVariants, globalVariants, children}) => {


    // the in local storage will be 'search', the initial value will be 'React'
    const [searchTerm, setSearchTerm] = useStorageRetriever(
        'search',
        ''
    );
    // onChange of the input, a new term is set.
    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };



    //Função de filtro do tipo
    const allInventoryitems = inventory.inventory[0].inventoryitems
    // console.log(fruta);
    const fruta =  allInventoryitems.map(element => {
        return element.itemsinventory.map(elem =>{
            return elem.labels.displayName
        })
    })
    

    const searchedInventario = alerts.alerts[0].alertsitems.filter(Alerts =>
        Alerts.itemsalert[0].labels.displayName.includes(searchTerm.toLowerCase()) ||
        Alerts.itemsalert[0].quantitySize.quantity.toString().includes(searchTerm.toLowerCase())
    );
    
    const allSearchedRecipes = recipes.recipes[0].recipessectionsFilter.flatMap(searchedSections => {
        return searchedSections.itemsrecipessectionsFilter.map(allRecipes => {
            return allRecipes
        
    })
});

    const searchedRecipes = allSearchedRecipes.filter(allRec =>
        allRec.labelsrecipe.displayName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        allRec.labelsrecipessectionsFilter.toLowerCase().includes(searchTerm.toLowerCase())
        );
    const searchedAlerts = alerts.alerts[0].alertsitems.filter(Alerts =>
        Alerts.itemsalert[0].labels.displayName.includes(searchTerm.toLowerCase()) ||
        Alerts.itemsalert[0].quantitySize.quantity.toString().includes(searchTerm.toLowerCase())
    );


    //Função de filtro seccoes, nome da receita
    const allRecipeFilters = recipes.recipes[0].recipessectionsFilter
    
    const recipeSections =  allRecipeFilters.map(element => {
        return element.itemsrecipessectionsFilter.map(elem =>{
            return [elem.labelsrecipessectionsFilter, elem.labelsrecipe.displayName]
        })
    })
    

    const [expanded, setExpanded] = useState();


    //

    const [searchInventories, setSearchInventories] = useState(false)
    const [searchRecipes, setSearchRecipes] = useState(true)

    const setRecipesAsSearch = () => {
        setSearchInventories(false);
        setSearchRecipes(true);
        
        
    }
    const setInventoriesAsSearch = () => {
        setSearchRecipes(false);
        setSearchInventories(true);
        
    }
    

    return(

        <motion.div
            variants={globalVariants}
            initial="hidden"
            animate="visible"
            exit="exit">

                {children}

                <UpperBar buttonVariants={buttonVariants} globalVariants={globalVariants}>
                    <SearchBar id="search" type = 'text' value={searchTerm} placeholder = 'Search' handleSearch={handleSearch}/>
                </UpperBar>

                {/* <form>
                    <input type="text" placeholder="Item" ref={inputRef}/>
                    <button onClick={submitClickHandler} type="submit">{submit}</button>
                </form> */}

                <List results={"Resultados em Receitas"} searchedRecipes={searchedRecipes} searchedInventario={searchedInventario} expanded={expanded} setExpanded={setExpanded} buttonVariants={buttonVariants} searchRecipes={searchRecipes} searchInventories={searchInventories} />
                <div className="cover-scroll"></div>
                <MyKitchenMenu setRecipesAsSearch={setRecipesAsSearch} setInventoriesAsSearch={setInventoriesAsSearch} searchRecipes={searchRecipes} searchInventories={searchInventories} />

        </motion.div>
    )
}




export default MyKitchen;