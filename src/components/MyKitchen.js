import MyKitchenMenu from './MyKitchenMenu';
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive'

import UpperBar from './UpperBar';
import SearchBar from './SearchBar';
import defaultItemImg from '../media/images/0.jpg';
import Close from './Close';

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
        },
        {
            itemID: 2,
            Nome_do_Item:"FORNO",
            Tipo_de_Item:"EQUIPAMENTO DE CAPITAL",
            Quantidade_Necessária:4,
            Custo_Unitário:1999.28,
            Moeda_do_Preço:"Euro",
            Custo_Total:"7997,12",
        },
        {   
            itemID: 3,
            Nome_do_Item:"MÁQUINA DE GELO",
            Tipo_de_Item:"EQUIPAMENTO DE CAPITAL",
            Quantidade_Necessária:1,
            Custo_Unitário:165.66,
            Moeda_do_Preço:"Euro",
            Custo_Total:165.66,
        },
        {
            itemID: 4,
            Nome_do_Item:"FORNO",
            Tipo_de_Item:"EQUIPAMENTO DE CAPITAL",
            Quantidade_Necessária:4,
            Custo_Unitário:1999.28,
            Moeda_do_Preço:"Euro",
            Custo_Total:"7997,12",
        },
        {   
            itemID: 5,
            Nome_do_Item:"MÁQUINA DE GELO",
            Tipo_de_Item:"EQUIPAMENTO DE CAPITAL",
            Quantidade_Necessária:1,
            Custo_Unitário:165.66,
            Moeda_do_Preço:"Euro",
            Custo_Total:165.66,
        },
        {
            itemID: 6,
            Nome_do_Item:"FORNO",
            Tipo_de_Item:"EQUIPAMENTO DE CAPITAL",
            Quantidade_Necessária:4,
            Custo_Unitário:1999.28,
            Moeda_do_Preço:"Euro",
            Custo_Total:"7997,12",
        },
        {   
            itemID: 7,
            Nome_do_Item:"MÁQUINA DE GELO",
            Tipo_de_Item:"EQUIPAMENTO DE CAPITAL",
            Quantidade_Necessária:1,
            Custo_Unitário:165.66,
            Moeda_do_Preço:"Euro",
            Custo_Total:165.66,
        },
        {   
            itemID: 8,
            Nome_do_Item:"MÁQUINA DE GELO",
            Tipo_de_Item:"EQUIPAMENTO DE CAPITAL",
            Quantidade_Necessária:1,
            Custo_Unitário:165.66,
            Moeda_do_Preço:"Euro",
            Custo_Total:165.66,
        },
        {
            itemID: 9,
            Nome_do_Item:"FORNO",
            Tipo_de_Item:"EQUIPAMENTO DE CAPITAL",
            Quantidade_Necessária:4,
            Custo_Unitário:1999.28,
            Moeda_do_Preço:"Euro",
            Custo_Total:"7997,12",
        },
        {   
            itemID: 10,
            Nome_do_Item:"MÁQUINA DE GELO",
            Tipo_de_Item:"EQUIPAMENTO DE CAPITAL",
            Quantidade_Necessária:1,
            Custo_Unitário:165.66,
            Moeda_do_Preço:"Euro",
            Custo_Total:165.66,
        },
        {
            itemID: 11,
            Nome_do_Item:"FORNO",
            Tipo_de_Item:"EQUIPAMENTO DE CAPITAL",
            Quantidade_Necessária:4,
            Custo_Unitário:1999.28,
            Moeda_do_Preço:"Euro",
            Custo_Total:"7997,12",
        },
        {   
            itemID: 12,
            Nome_do_Item:"MÁQUINA DE GELO",
            Tipo_de_Item:"EQUIPAMENTO DE CAPITAL",
            Quantidade_Necessária:1,
            Custo_Unitário:165.66,
            Moeda_do_Preço:"Euro",
            Custo_Total:165.66,
        },
        {   
            itemID: 13,
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

    const [expanded, setExpanded] = useState();

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
                <List list={searchedInventario} expanded={expanded} setExpanded={setExpanded}/>
                <MyKitchenMenu/>
                
        </motion.div> 
    )
}

const List = ({ list, expanded, setExpanded}) => (
        <div className="list-results">
            {list.map((item, id) => <Item key={item.itemID} id={id} item={item} expanded={expanded} setExpanded={setExpanded}  />)}
        </div>
        
    )

const Item = ({ k, id, item, expanded, setExpanded}) => {
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
            <div className={(id + 1) % 4 === 0 ? "item-result no-margin-right" : "item-result"} 
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