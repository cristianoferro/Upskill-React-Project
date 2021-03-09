import Item from "./Item.js"
import {Link} from 'react-router-dom';
const Inventário = ({items,
                setItems,
                inputRef,
                submitClickHandler,
                submit}) => {
    return(
        <div className="inventario">
            <form className="inventario" onSubmit >
                <input type="text" placeholder="Item" ref={inputRef}/>
                <button onClick={submitClickHandler} type="submit">{submit}</button>
            </form>
            {
        items.map((item) => <Item item={item} items={items} setItems={setItems}  key={item.id}/>)
            }
        </div>
    )
}

export default Inventário;