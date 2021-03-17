import MyKitchenMenu from './MyKitchenMenu';
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';
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
    
    // console.log(alerts.alerts[0].alertsitems[0])
    // inventory.inventory[0].inventoryitems.map((inventoryItem, keyID) => {
    //   console.log(inventoryItem.itemsinventory[0].labels.displayName);
    //   console.log(inventoryItem.itemsinventory[0].labelsitems.displayName);
    //   console.log(inventoryItem.itemsinventory[0].quantitySize.displayName);
    //   console.log(inventoryItem.itemsinventory[0].quantitySize.quantity);
    //   console.log(inventoryItem.itemsinventory[0].unitPrice.displayName);
    //   console.log(inventoryItem.itemsinventory[0].unitPrice.units);
    //   console.log(inventoryItem.itemsinventory[0].totalPrice.displayName);
    //   console.log(inventoryItem.itemsinventory[0].totalPrice.units);
    //   console.log(inventoryItem.itemsinventory[0].mediaFormat);
    //   console.log(inventoryItem.itemsinventory[0].locationAssociation.category);
    //   console.log("---------------------------------------------")
    // })

    // const categoriaInventario = alerts.filter(item =>
    //     item.Nome_do_Item.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //     item.Tipo_de_Item.toLowerCase().includes(searchTerm.toLowerCase()) 
    // );
    
    // console.log(categoriaInventario);

    // the in local storage will be 'search', the initial value will be 'React'
    const [searchTerm, setSearchTerm] = useStorageRetriever(
        'search',
        ''
    );

    // onChange of the input, a new term is set. 
    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };

    // filtered items
    // const searchedInventario = alerts.alerts[0].alertsitems.filter(Alerts =>
    //     // Alerts.itemsalert[0].labels.displayName.includes("Lacticínios")
    //     // console.log("LOG",Alerts.itemsalert[0].labels.displayName.includes("Lacticínios"))
    
    //     //filtrar por nome do alerta OU
    //     Alerts.itemsalert[0].labels.displayName.includes(searchTerm.toLowerCase()) ||
    //     //filtrar por números (converter sempre para string)
    //     Alerts.itemsalert[0].quantitySize.quantity.toString().includes(searchTerm.toLowerCase()) 
    // );

    // FILTROS ALERTAS
    //////
    //////
    //////
    //////
    //////
    //////
    //////
    //////
    
    // Teste para aceder aos campos dos alertas
    // alerts.alerts[0].alertsitems.map((searchedAlerts, key) => {
    //   console.log(searchedAlerts.itemsalert[0].labels.displayName);
    //   console.log(searchedAlerts.itemsalert[0].labelsitems.displayName);
    //   console.log(searchedAlerts.itemsalert[0].quantitySize.displayName);
    //   console.log(searchedAlerts.itemsalert[0].quantitySize.quantity);
    //   console.log(searchedAlerts.itemsalert[0].quantityStock.displayName);
    //   console.log(searchedAlerts.itemsalert[0].quantityStock.quantity);
    //   console.log(searchedAlerts.itemsalert[0].manteinanceAlert.displayName);
    //   console.log(searchedAlerts.itemsalert[0].manteinanceAlert.quantity);
    //   console.log(searchedAlerts.itemsalert[0].buyAlert.displayName);
    //   console.log(searchedAlerts.itemsalert[0].buyAlert.quantity);
    //   console.log(searchedAlerts.itemsalert[0].urgentBuy.displayName);
    //   console.log(searchedAlerts.itemsalert[0].urgentBuy.description);
    //   console.log(searchedAlerts.itemsalert[0].urgentBuy.alertSignal);
    //   console.log(searchedAlerts.itemsalert[0].mediaFormat);
    //   console.log(searchedAlerts.itemsalert[0].locationAssociation.category);
    //   console.log(searchedAlerts.itemsalert[0].sourceUrl);
    //   console.log(key)
    //   console.log("---------------------------------------------")
    // })

    // Teste de filtro
    // const newFilter = alerts.alerts[0].alertsitems.filter(Alerts =>
    //     Alerts.itemsalert[0].labels.displayName.includes(searchTerm.toLowerCase()) ||
    //     Alerts.itemsalert[0].labelsitems.displayName.includes(searchTerm.toLowerCase()) 
    // );

    const searchedInventario = alerts.alerts[0].alertsitems.filter(Alerts =>
        Alerts.itemsalert[0].labels.displayName.includes(searchTerm.toLowerCase()) ||
        Alerts.itemsalert[0].quantitySize.quantity.toString().includes(searchTerm.toLowerCase()) 
    );

    // const vegetarianFilter = recipes.recipes[0].recipessectionsFilter.filter(searchedSections => {
    //       searchedSections.itemsrecipessectionsFilter.filter(searchedRecipes => {
    //         searchedRecipes.labelsrecipe.displayName.includes(searchTerm.toLowerCase())
    //       })
    // })

    // const searchedInventario = recipes.recipes[0].recipessectionsFilter.filter(searchedSections => {
    //     searchedSections.itemsrecipessectionsFilter.filter(searchedRecipes => {
    //       searchedRecipes.labelsrecipe.displayName.includes(searchTerm.toLowerCase())
    // });

    const abc = recipes.recipes[0].recipessectionsFilter.filter(searchedSections => {
        searchedSections.itemsrecipessectionsFilter.filter(searchedRecipes => {
            searchedRecipes.nutritionFactsrecipe.calories.upperAmount.toString().includes(searchTerm.toLowerCase()) 
        })
    })

    console.log(abc);
        // recipes.recipes[0].recipessectionsFilter.map((searchedSections, key) => {
        //     console.log(key, searchedSections.itemsrecipessectionsFilter[0].labelsrecipe.displayName)
        // })
    // Teste para aceder aos campos das receitas
    // recipes.recipes[0].recipessectionsFilter.map((searchedSections, key) => {
    //   searchedSections.itemsrecipessectionsFilter.map((searchedRecipes, key2) =>{
    //     console.log("abc",searchedRecipes.labelsrecipessectionsFilter);
    //     console.log(searchedRecipes.labelsrecipe.displayName);
        // console.log(searchedRecipes.labelsrecipe.description);
        // console.log(searchedRecipes.nutritionFactsrecipe.calories.lowerAmount);
        // console.log(searchedRecipes.nutritionFactsrecipe.calories.upperAmount);
        // console.log(searchedRecipes.nutritionFactsrecipe.calories.unit);
        // console.log(searchedRecipes.nutritionFactsrecipe.totalFat.lowerAmount);
        // console.log(searchedRecipes.nutritionFactsrecipe.totalFat.upperAmount);
        // console.log(searchedRecipes.nutritionFactsrecipe.totalFat.unit);

        // console.log(searchedRecipes.nutritionFactsrecipe.cholesterol.lowerAmount);
        // console.log(searchedRecipes.nutritionFactsrecipe.cholesterol.upperAmount);
        // console.log(searchedRecipes.nutritionFactsrecipe.cholesterol.unit);
        // console.log(searchedRecipes.nutritionFactsrecipe.sodium.lowerAmount);
        // console.log(searchedRecipes.nutritionFactsrecipe.sodium.upperAmount);
        // console.log(searchedRecipes.nutritionFactsrecipe.sodium.unit);
        // console.log(searchedRecipes.nutritionFactsrecipe.totalCarbohydrate.lowerAmount);
        // console.log(searchedRecipes.nutritionFactsrecipe.totalCarbohydrate.upperAmount);
        // console.log(searchedRecipes.nutritionFactsrecipe.totalCarbohydrate.unit);
        // console.log(searchedRecipes.nutritionFactsrecipe.protein.lowerAmount);
        // console.log(searchedRecipes.nutritionFactsrecipe.protein.upperAmount);
        // console.log(searchedRecipes.nutritionFactsrecipe.protein.unit);
        // searchedRecipes.ingredientsrecipe[0].labels.map((ingredients) =>{
        //     console.log(ingredients.displayName)
            // console.log(ingredients.description)
        // })
    //     console.log("key2",key2)
    //     console.log("********")
    //     console.log(searchedRecipes.servesNumPeoplerecipe);
    //     console.log(searchedRecipes.preparationMethodsrecipe[0]);
    //     console.log(searchedRecipes.portionSizerecipe.quantity);
    //     console.log(searchedRecipes.portionSizerecipe.unit.displayName);
    //     console.log(searchedRecipes.mediaFormatrecipe);
    //     console.log(searchedRecipes.locationAssociationrecipe.category);
    //     console.log(searchedRecipes.sourceUrlrecipe);
    //   })

    //   console.log("key",key)
    //   console.log("---------------------------------------------")
    // })

    // console.log(newFilter);
    

    const [expanded, setExpanded] = useState();
    
    // media queries
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

                <List results={"Resultados Inventário"} list={searchedInventario} expanded={expanded} setExpanded={setExpanded} isPortrait={isPortrait} buttonVariants={buttonVariants} />
                <div className="cover-scroll"></div>
                <MyKitchenMenu/>
                
        </motion.div> 
    )
}




export default MyKitchen;