import Item from "./Item.js"
const ItemList = ({items, setItems}) => {
    return(
        <div className="item-list">
            {
        items.map((item) => <Item item={item} items={items} setItems={setItems}  key={item.id}/>)
            }
        </div>
    )
}

export default ItemList;