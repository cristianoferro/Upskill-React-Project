const Search2 = () => {
    return
}
const Menus = () => {
    return
}
const Receitas = () => {
    return
}
const Alertas = () => {
    return
}

const MyKitchen = () => {
    return(
        <nav>
            <Link to="/item-list" >Inventários</Link>
            <button onClick={Menus} >Menus</button>
            <button onClick={Receitas} >Receitas</button>
            <button onClick={Alertas} >Alertas</button>
            <input type="search"/>
        </nav>
    )
}

export default MyKitchen;