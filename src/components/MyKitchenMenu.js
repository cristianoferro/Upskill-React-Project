import {Link} from 'react-router-dom';

const MyKitchenMenu = () => {
    return(
        <nav className="mykitchen-menu box-element">
            <Link to="/inventario" >Inventários</Link>
            <Link to="/menus" >Menus</Link>
            <Link to="/receitas" >Receitas</Link>
            <Link to="/alertas" >Alertas</Link>
            <Link to="">Search</Link>
        </nav>
    )
}
export default MyKitchenMenu;