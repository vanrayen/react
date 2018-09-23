import React from 'react'

const SearchBox = props =>{
    return (
        <div>
            <br/>
            <input 
                type="text"
                onInput={props.onSearch}
                placeholder="search"
                className="form-control"
            />
        </div>
    )
}

export default SearchBox