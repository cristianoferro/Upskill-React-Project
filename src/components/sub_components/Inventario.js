import Item from "./Item.js"
import {Link} from 'react-router-dom';
import { useEffect, useState } from "react";

const Inventario = ({items,
                setItems,
                inputRef,
                submitClickHandler,
                submit}) => {
    
    const investario_teste = [
        {
            Nome_do_Item:"FORNO",
            Tipo_de_Item:"EQUIPAMENTO DE CAPITAL",
            Quantidade_Necessária:4,
            Custo_Unitário:1999.28,
            Moeda_do_Preço:"Euro",
            Custo_Total:"7997,12",
        },
        {
            Nome_do_Item:"MÁQUINA DE GELO",
            Tipo_de_Item:"EQUIPAMENTO DE CAPITAL",
            Quantidade_Necessária:1,
            Custo_Unitário:165.66,
            Moeda_do_Preço:"Euro",
            Custo_Total:165.66,
        }
        ];
        
    const [localInventory, setLocalInventory] = useState(
        localStorage.getItem('addicional_inventory') || ''
    );

    useEffect(() => {
        localStorage.setItem('addicional_inventory', localInventory);
        console.log(localInventory);
    }, [localInventory]);

    const handleSearch = event => {
        setLocalInventory(event.target.value);
    };
    
    // const searchedInventario = investario_teste.filter(story =>
    //     story.title.toLowerCase().includes(localInventory.toLowerCase())
    //   );

    return(
        <div className="inventario">
            <form className="inventario" onSubmit >
                Nome_do_Item
                Tipo_de_Item
                Quantidade_Necessária
                Custo_Unitário
                Moeda_do_Preço
                Custo_Total
                <input type="text" placeholder="Item" ref={inputRef}/>
                <button onClick={submitClickHandler} type="submit">{submit}</button>
            </form>
            {
                items.map((item) => <Item item={item} items={items} setItems={setItems}  key={item.id}/>)
            }
        </div>
    )
}

export default Inventario;