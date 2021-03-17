import Item from './ListItem';

const List = ({ results, list, expanded, setExpanded, isPortrait}) => (
    <div className="list-results">
        <h2 className="results-name">{results}</h2>
        <div className="main-filters">
            <span>Filtrar por:</span>
            <span className="filter-button">Tipo</span>
            <span className="filter-button">Quantidade</span>
            <span className="filter-button">Custo</span>
        </div>
        {list.map((item, id) => <Item key={item.itemID} id={id} item={item} expanded={expanded} setExpanded={setExpanded} isPortrait={isPortrait} />)}
    </div>
    
)

export default List;