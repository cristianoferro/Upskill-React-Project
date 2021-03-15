const SearchBar = ({ id, type = 'text', value, placeholder = 'Search', handleSearch }) => {
    

    return(
            <div className="search-container box-element">
                    <input 
                        id={id} 
                        type={type} 
                        value={value} 
                        placeholder={placeholder} 
                        onChange={handleSearch}/>
            </div>
    )
}

export default SearchBar;