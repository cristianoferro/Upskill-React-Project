import MyKitchenMenu from './MyKitchenMenu';
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive'

import UpperBar from './UpperBar';
import SearchBar from './SearchBar';
import defaultItemImg from '../media/images/0.jpg';
import Close from './Close';
import inventory from '../data/inventory.json';
import alerts from '../data/alerts.json';

const useStorageRetriever = (key, initialState) => {
    const [value, setValue] = useState(
      localStorage.getItem(key) || initialState
    );
   
    useEffect(() => {
      localStorage.setItem(key, value);
    }, [value, key]);
  
    return [value, setValue];
  
   };

const MyKitchen = ({inputRef, submitClickHandler, submit, globalVariants, children}) => {
    
    
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
    const searchedInventario = inventory.inventory[0].inventoryitems.filter(inventoryItem =>
        inventoryItem.itemsinventory[0].labels.displayName.includes(searchTerm.toLowerCase()) ||
        inventoryItem.itemsinventory[0].labels.displayName.includes(searchTerm.toLowerCase()) 
    );
    // console.log(searchedInventario);
    alerts.alerts[0].alertsitems.map((searchedAlerts, key) => {
      console.log(searchedAlerts.itemsalert[0].labels.displayName);
      console.log(searchedAlerts.itemsalert[0].labelsitems.displayName);
      console.log(searchedAlerts.itemsalert[0].quantitySize.displayName);
      console.log(searchedAlerts.itemsalert[0].quantitySize.quantity);
      console.log(searchedAlerts.itemsalert[0].quantityStock.displayName);
      console.log(searchedAlerts.itemsalert[0].quantityStock.quantity);
      console.log(searchedAlerts.itemsalert[0].manteinanceAlert.displayName);
      console.log(searchedAlerts.itemsalert[0].manteinanceAlert.quantity);
      console.log(searchedAlerts.itemsalert[0].buyAlert.displayName);
      console.log(searchedAlerts.itemsalert[0].buyAlert.quantity);
      console.log(searchedAlerts.itemsalert[0].urgentBuy.displayName);
      console.log(searchedAlerts.itemsalert[0].urgentBuy.description);
      console.log(searchedAlerts.itemsalert[0].urgentBuy.alertSignal);
      console.log(searchedAlerts.itemsalert[0].mediaFormat);
      console.log(searchedAlerts.itemsalert[0].locationAssociation.category);
      console.log(searchedAlerts.itemsalert[0].sourceUrl);
      console.log(key)
      console.log("---------------------------------------------")
    })
    console.log("alertas!", alerts.alerts[0].alertsitems[0].itemsalert[0]);

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
                
                <UpperBar>
                    <SearchBar id="search" type = 'text' value={searchTerm} placeholder = 'Search' handleSearch={handleSearch}/>
                </UpperBar>

                {/* <form>
                    <input type="text" placeholder="Item" ref={inputRef}/>
                    <button onClick={submitClickHandler} type="submit">{submit}</button>
                </form> */}

                <h2>Resultados Inventário</h2>
                <List list={searchedInventario} expanded={expanded} setExpanded={setExpanded} isPortrait={isPortrait} />
                <MyKitchenMenu/>
                
        </motion.div> 
    )
}

const List = ({ list, expanded, setExpanded, isPortrait}) => (
        <div className="list-results">
            {list.map((item, id) => <Item key={item.itemID} id={id} item={item} expanded={expanded} setExpanded={setExpanded} isPortrait={isPortrait} />)}
        </div>
        
    )

const Item = ({ k, id, item, expanded, setExpanded, isPortrait}) => {
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
                    <span>{item.Nome_do_Item}</span>
                    <span>{item.Nome_do_Item}</span>
                </div>

            <div className="item-img"><img src={item.image ? item.image : defaultItemImg} alt=""/></div>
            </div>
            <div className={id === expanded && !itemIsClosed ? "item-detail" : "item-detail-hidden"}>
                <Close closeItem={closeItem} />
                <span>{item.Nome_do_Item}</span>
                <span>{item.Tipo_de_Item}</span>
                <span>{item.Quantidade_Necessária}</span>
                <span>{item.Custo_Unitário}</span>
                <span>{item.Moeda_do_Preço}</span>
                <span>{item.Custo_Total}</span>
                <div className="item-img-detail"><img src={item.image ? item.image : defaultItemImg} alt=""/></div>
            </div>
        </>
  );
}
export default MyKitchen;