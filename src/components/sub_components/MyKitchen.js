import {Link} from 'react-router-dom';

const MyKitchen = ({inputRef, submitClickHandler, submit}) => {
    return(
        
        <div>
        <form>
            <input type="text" placeholder="Item" ref={inputRef}/>
            <button onClick={submitClickHandler} type="submit">{submit}</button>
        </form>
        <nav className="mykitchen-menu">
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