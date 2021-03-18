
const MyKitchenMenu = ({setRecipesAsSearch, setInventoriesAsSearch, searchRecipes, searchInventories}) => {
    
    return(
                <nav className="mykitchen-menu box-element">
                    <div className={searchInventories ? "toggle-main-search selected" : "toggle-main-search"} onClick={setInventoriesAsSearch}> Inventários</div>
                    <div className={searchRecipes ? "toggle-main-search selected" : "toggle-main-search"} onClick={setRecipesAsSearch} >Receitas</div>
                </nav>
                
    )
}
export default MyKitchenMenu;