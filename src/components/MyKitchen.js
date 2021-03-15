import MyKitchenMenu from './MyKitchenMenu';
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";

import UpperBar from './UpperBar'
import SearchBar from './SearchBar'

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
    const inventario_teste = [
        {
            itemID: 0,
            Nome_do_Item:"FORNO",
            Tipo_de_Item:"EQUIPAMENTO DE CAPITAL",
            Quantidade_Necessária:4,
            Custo_Unitário:1999.28,
            Moeda_do_Preço:"Euro",
            Custo_Total:"7997,12",
        },
        {   
            itemID: 1,
            Nome_do_Item:"MÁQUINA DE GELO",
            Tipo_de_Item:"EQUIPAMENTO DE CAPITAL",
            Quantidade_Necessária:1,
            Custo_Unitário:165.66,
            Moeda_do_Preço:"Euro",
            Custo_Total:165.66,
        }
        ];
        

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
    const searchedInventario = inventario_teste.filter(item =>
        item.Nome_do_Item.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Tipo_de_Item.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
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
                <List list={searchedInventario} />
                <MyKitchenMenu/>
                
        </motion.div> 
    )
}

const List = ({ list }) =>
    list.map(item => <Item key={item.itemID} item={item} />);

const Item = ({ item }) =>(
    <div>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      
      <span>{item.Nome_do_Item}</span>
      <span>{item.Tipo_de_Item}</span>
      <span>{item.Quantidade_Necessária}</span>
      <span>{item.Custo_Unitário}</span>
      <span>{item.Moeda_do_Preço}</span>
      <span>{item.Custo_Total}</span>
    </div>
  );
export default MyKitchen;