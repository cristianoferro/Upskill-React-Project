import Item from './ListItem';

const List = ({ results, list, expanded, setExpanded, isPortrait, buttonVariants }) => (
    <div className="list-results">
        <h2 className="results-name">{results}</h2>
        <div className="main-filters">
            <span>Filtrar por:</span>
            <div className="filter-button">
                Tipo
                <span></span>
            </div>
            <div className="filter-button">Quantidade</div>
            <div className="filter-button">Custo</div>
        </div>
        {list.map((item, id) => <Item key={item.itemID} id={id} item={item} expanded={expanded} setExpanded={setExpanded} isPortrait={isPortrait}  buttonVariants={buttonVariants} />)}
    </div>
    
)

export default List;