import React, { useState } from 'react'

/** gets the callback by props just like function */
function SearchBar({ callback }) {
    const [innerValue, setInnerValue] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        callback(innerValue)
    }
    return (
        <form className='searchBar' onSubmit={handleSubmit}>
            <input
             placeholder="Type word or not and press enter..."
                type="text"
                className='searchBarInput'
                value={innerValue}
                onChange={(e) => setInnerValue(e.target.value)}
            />
        </form>
    )
}

export default SearchBar