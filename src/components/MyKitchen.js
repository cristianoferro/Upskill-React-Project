import {Link} from 'react-router-dom';

const MyKitchen = () => {
    return(
        <div>
        <nav className='my-kitchen-nav' >
            <Link to="/inventário" className='nav-item' >Inventário</Link>
            <Link to="/menus" className='nav-item' >Menus</Link>
            <Link to="/receitas" className='nav-item' >Receitas</Link>
            <Link to="/alertas" className='nav-item' >Alertas</Link>
            <Link to="" className='nav-item' >Search</Link>
        </nav>
        </div> 
    )
}
export default MyKitchen;