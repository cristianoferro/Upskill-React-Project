import defaultItemImg from '../../media/images/0.jpg';
import Close from '../visual_components/Close';
import { useState } from "react";
import {motion} from 'framer-motion'

const ListItem = ({ k, id, item, expanded, setExpanded, isPortrait, buttonVariants}) => {
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
            <motion.div className={(isPortrait ? (id + 1) % 3 === 0 : (id + 1) % 4 === 0) ? "item-result no-margin-right" : "item-result"} 
                onClick={() => clickItem(id)}
                variants={buttonVariants}
                whileHover="hoverSmaller">
                <div>
                    <span>{item.Nome_do_Item}</span>
                    <span>{item.Nome_do_Item}</span>
                </div>

            <div className="item-img"><img src={item.image ? item.image : defaultItemImg} alt=""/></div>
            </motion.div>
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

export default ListItem;