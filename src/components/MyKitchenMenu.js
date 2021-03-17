import {Link} from 'react-router-dom';

const MyKitchenMenu = () => {
    return(
                <nav className="mykitchen-menu box-element">
                    <Link to="/inventario" >Inventários</Link>
                    <Link to="/receitas" >Receitas</Link>
                </nav>
                
    )
}
export default MyKitchenMenu;