import {Link} from 'react-router-dom';

const MyKitchen = ({inputRef, submitClickHandler, submit}) => {
    return(
        
        <div>
        <nav>
            <Link to="/item-list" >Inventários</Link>
            <Link to="/menus" >Menus</Link>
            <Link to="/receitas" >Receitas</Link>
            <Link to="/alertas" >Alertas</Link>
            <Link to="">Search</Link>
        </nav>
        </div> 
    )
}
export default MyKitchen;