import React from 'react';

function Search({setSearchText, searchText}) {
    return (
        <div id="search">
            <label>Search Concerts by City  </label>
            <input
                className="search-input"
                type="text"
                name="search"
                placeholder="search for Concerts by City"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
            />
            <button onSubmit={setSearchText} value={searchText}>submit</button>
        </div>
    );
}

export default Search;