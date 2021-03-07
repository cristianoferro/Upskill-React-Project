import {Link} from 'react-router-dom';

const MyKitchen = ({inputRef,
                    submitClickHandler,
                    submit}) => {
    return(
        
        <div>
        <form className="inventario" onSubmit >
            <input type="text" placeholder="Item" ref={inputRef}/>
            <button onClick={submitClickHandler} type="submit">{submit}</button>
        </form>
        <nav className='my-kitchen-nav' >
            <Link to="/item-list" className='nav-item' >Inventários</Link>
            <Link to="/menus" className='nav-item' >Menus</Link>
            <Link to="/receitas" className='nav-item' >Receitas</Link>
            <Link to="/alertas" className='nav-item' >Alertas</Link>
            <Link to="" className='nav-item' >Search</Link>
        </nav>
        </div> 
    )
}
export default MyKitchen;