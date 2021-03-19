import MyKitchenMenu from './MyKitchenMenu';
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";

import UpperBar from './UpperBar';
import SearchBar from './SearchBar';
import inventory from '../data/inventory.json';
import alerts from '../data/alerts.json';
import recipes from '../data/Recipes.json';
import List from './sub_components/List';

import { useMediaQuery } from 'react-responsive';

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

    // Check which filters are activated

    const [categoriasFiltered, setCategoriasFiltered] = useState('')
    const [activateCategoriasFilter, setActivateCategoriasFilter] = useState(false)
    
    const categoriasFilterClicked = (filter) => {
        setActivateCategoriasFilter(!activateCategoriasFilter);
        setCategoriasFiltered(filter);
    }

    const [nPessoasFiltered, setNPessoasFiltered] = useState('')
    const [activateNPessoasFiltered, setActivateNPessoasFiltered] = useState(false)

    const nPessoasFilterClicked = (filter) => {
        setActivateNPessoasFiltered(!activateNPessoasFiltered);
        setNPessoasFiltered(filter);
    }

    const [metodosPrepFiltered, setMetodosPrepFiltered] = useState('')
    const [activateMetodosPrepFiltered, setActivateMetodosPrepFiltered] = useState(false)

    const metodosPrepFilterClicked = (filter) => {
        setActivateMetodosPrepFiltered(!activateMetodosPrepFiltered);
        setMetodosPrepFiltered(filter);
    }

    //Função de filtro do tipo
    const allInventoryitems = inventory.inventory[0].inventoryitems.map(element => {
        return element.itemsinventory
    })

    const inventoryObjs = allInventoryitems.flatMap(elements =>{
        return elements[0]
    }); 
    const searchedInventario = inventoryObjs.filter(allItems => 
        
        allItems.labels.displayName.toLowerCase().includes(searchTerm.toLowerCase())||
        allItems.labelsitems.displayName.toLowerCase().includes(searchTerm.toLowerCase())
        
    );

    const allSearchedRecipes = recipes.recipes[0].recipessectionsFilter.flatMap(searchedSections => {
        return searchedSections.itemsrecipessectionsFilter.map(allRecipes => {
            return allRecipes
        })
    });

    const searchedRecipes = allSearchedRecipes.filter(allRec =>
        activateCategoriasFilter ? allRec.labelsrecipessectionsFilter.toLowerCase().includes(categoriasFiltered.toLowerCase()) : true
        &&
        activateNPessoasFiltered ? allRec.servesNumPeoplerecipe.toString().toLowerCase().includes(nPessoasFiltered.toString().toLowerCase()) : true
        &&
        activateMetodosPrepFiltered ? allRec.preparationMethodsrecipe[0].toLowerCase().includes(metodosPrepFiltered.toLowerCase()) : true
        &&
        allRec.labelsrecipe.displayName.toLowerCase().includes(searchTerm.toLowerCase()) 
        ||
        allRec.labelsrecipessectionsFilter.toLowerCase().includes(searchTerm.toLowerCase()) 
        
    );
    
    // const testSearched = () => {
    //     return allSearchedRecipes.filter(allRec => {
    //         activateCategoriasFilter ? allRec.labelsrecipessectionsFilter.toLowerCase().includes(categoriasFiltered.toLowerCase()) : true
    //         return allRec.filter(allRec => {
    //             activateNPessoasFiltered ? allRec.servesNumPeoplerecipe.toString().toLowerCase().includes(nPessoasFiltered.toString().toLowerCase()) : true
    //             return allRec.filter(allRec => {
    //                 activateMetodosPrepFiltered ? allRec.preparationMethodsrecipe[0].toLowerCase().includes(metodosPrepFiltered.toLowerCase()) : true
    //                 return allRec.filter(allRec =>
    //                     allRec.labelsrecipe.displayName.toLowerCase().includes(searchTerm.toLowerCase()) 
    //                     ||
    //                     allRec.labelsrecipessectionsFilter.toLowerCase().includes(searchTerm.toLowerCase()) 
    //                 )
    //             }
                    
    //             )
    //         }
    //         )
    //     }
    //     );
    // }

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
    


    const [searchInventories, setSearchInventories] = useState(false)
    const [searchRecipes, setSearchRecipes] = useState(true)
    const [results, setResults] = useState("Resultados em Receitas")
    const setRecipesAsSearch = () => {
        setSearchInventories(false);
        setSearchRecipes(true);
        setResults("Resultados em Receitas");
        
        
        
    }
    const setInventoriesAsSearch = () => {
        setSearchRecipes(false);
        setSearchInventories(true);
        setResults("Resultados em Inventários")
        
    }
    
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

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

                <List results={results} inventoryObjs={inventoryObjs} categoriasFilterClicked={categoriasFilterClicked} nPessoasFilterClicked={nPessoasFilterClicked} metodosPrepFilterClicked={metodosPrepFilterClicked} allSearchedRecipes={allSearchedRecipes} searchedRecipes={searchedRecipes} searchedInventario={searchedInventario} buttonVariants={buttonVariants} searchRecipes={searchRecipes} searchInventories={searchInventories} isPortrait={isPortrait}/>
                <div className="cover-scroll"></div>
                <MyKitchenMenu setRecipesAsSearch={setRecipesAsSearch} setInventoriesAsSearch={setInventoriesAsSearch} searchRecipes={searchRecipes} searchInventories={searchInventories} />

        </motion.div>
    )
}




export default MyKitchen;