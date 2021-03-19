import RecipeItem from './RecipeItem';
import InventoryItem from './InventoryItem';
import { useState } from "react";

const List = ({ results, inventoryObjs, categoriasFilterClicked, nPessoasFilterClicked, metodosPrepFilterClicked, allSearchedRecipes, searchedRecipes, searchedInventario,  buttonVariants, searchRecipes, searchInventories, isPortrait}) => {
    
    const [expanded, setExpanded] = useState();
    const [itemIsClosed, setItemIsClosed] = useState(true);
    const closeItem = () =>{
        setItemIsClosed(true)
    }
    const clickItem = (id) => {
        setExpanded(id)
        setItemIsClosed(false)
    }
    const [filterSelected, setFilterSelected] = useState();
    const clickFilter = (id) => {
        setFilterSelected(id)
    }

    const [categoriasFiltersShow, setcategoriasFiltersShow] = useState(false);
    const [nPessoasFiltersShow, setnPessoasFiltersShow] = useState(false);
    const [metodosPrepFiltersShow, setmetodosPrepFiltersShow] = useState(false);
    const filterClicked = (filterName) => {
        if (filterName === "categoria"){
            setcategoriasFiltersShow(!categoriasFiltersShow);
            setnPessoasFiltersShow(false);
            setmetodosPrepFiltersShow(false);
        } if (filterName === "npessoas"){
            setcategoriasFiltersShow(false);
            setnPessoasFiltersShow(!nPessoasFiltersShow);
            setmetodosPrepFiltersShow(false);
        } if (filterName === "metodo"){
            setcategoriasFiltersShow(false);
            setnPessoasFiltersShow(false);
            setmetodosPrepFiltersShow(!metodosPrepFiltersShow);
        }
        
    }

    
    // Filtros
    const categorias = allSearchedRecipes.map(recipe => recipe.labelsrecipessectionsFilter).filter((v, i, a) => a.indexOf(v) === i).map(filter => <span onClick={() => categoriasFilterClicked(filter)} className="filter-button">{filter}</span>)

    const nPessoas = allSearchedRecipes.map(recipe => recipe.servesNumPeoplerecipe).filter((v, i, a) => a.indexOf(v) === i).map(filter => <span onClick={() => nPessoasFilterClicked(filter)} className="filter-button">{filter}</span>)
    
    const metodosPrep = allSearchedRecipes.flatMap(recipe => recipe.preparationMethodsrecipe).filter((v, i, a) => a.indexOf(v) === i).map(filter => <span onClick={() => metodosPrepFilterClicked(filter)} className="filter-button">{filter}</span>)
    // Segunda forma de filtrar items repetidos
    // const metodosPrep = [...new Set(allSearchedRecipes.flatMap(recipe => recipe.preparationMethodsrecipe))].map(filter => <span onClick={() => metodosPrepFilterClicked(filter)} className="filter-button">{filter}</span>)
    return (
    
    <div className="list-results">
        <div className="fixed-results-topbar">
            <h2 className="results-name">{results}</h2>
            <div className="main-filters">
                <span>Filtrar por:</span>
                
                {(() => {
                if (searchRecipes) {
                    return  <> 
                                <span>
                                    <div className="filter-button"
                                    onClick={() => filterClicked("categoria")}>
                                    Categoria
                                    
                                    </div>
                                    <div className={categoriasFiltersShow ? "fliter-clicked" : "filter-hidden"}>
                                            {categorias}
                                            {console.log("categorias",categorias)}
                                    </div>
                                </span>
                                <span>
                                <div className="filter-button" 
                                    onClick={() => filterClicked("npessoas")}>
                                    Para Quantas Pessoas
                                    
                                </div>
                                <div className={nPessoasFiltersShow ? "fliter-clicked" : "filter-hidden"}>
                                        {nPessoas}
                                        {"pessoas",console.log(nPessoas)}
                                    </div>
                                </span>
                                <span>
                                <div className="filter-button" 
                                    onClick={() => filterClicked("metodo")}>
                                    Método
                                    
                                </div>
                                <div className={metodosPrepFiltersShow ? "fliter-clicked" : "filter-hidden"}>
                                        {metodosPrep}
                                    </div>
                                </span>
                            </>
                        

                    } else if(searchInventories) {
                    
                    return searchedInventario.map((item, id) => 

                    {<span>Tipo</span>
                    
                        // <div className="filter-button">Quantidade</div>
                        // <div className="filter-button">Custo</div>
                        
                    }
                            
                    );
                    }
                })()}
                    
            </div>

        </div>
        
        {(() => {
          if (searchRecipes) {
            return searchedRecipes.map((item, id) => 
                <RecipeItem 
                    key={id} 
                    id={id} 
                    item={item} 
                    expanded={expanded} 
                    setExpanded={setExpanded} 
                    isPortrait={isPortrait}  
                    buttonVariants={buttonVariants} 
                    searchRecipe={searchRecipes} 
                    searchInventories={searchInventories} 
                    clickItem={clickItem} 
                    closeItem={closeItem} 
                    itemIsClosed={itemIsClosed}/>);

          } else if(searchInventories) {
              
            return searchedInventario.map((item, id) => 
                    
                    <InventoryItem 
                    key={id} 
                    id={id} 
                    item={item} 
                    expanded={expanded} 
                    setExpanded={setExpanded} 
                    isPortrait={isPortrait}  
                    buttonVariants={buttonVariants} 
                    searchRecipe={searchRecipes} 
                    searchInventories={searchInventories} 
                    clickItem={clickItem} 
                    closeItem={closeItem} 
                    itemIsClosed={itemIsClosed}/>
            );
          }
        })()}

        
         </div>
    
);
}

export default List;