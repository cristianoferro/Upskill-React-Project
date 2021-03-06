import s from "../../styles/Item.module.css"
import styled from "styled-components"
//import { useState } from "react";

const Item = ({item, items, setItems}) => {
    const onRemoveHandler = (event) => {
        const newItems = items.filter((itemItem) => {
            return itemItem.id !== item.id
        });
        setItems(newItems);
    }
    const ItemContainer = styled.div`
        background-color: pink;`

    return (
        <div className={s.item} id={item.id}>
            <ItemContainer>
                <div>
                    <h3>{item.text}</h3>
                </div>
                <button onClick={onRemoveHandler}>Remove</button>
            </ItemContainer>
        </div>
    )
}

export default Item;