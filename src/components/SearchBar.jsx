import React, { useState } from 'react';

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" value={term} onChange={handleChange} />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchBar;
