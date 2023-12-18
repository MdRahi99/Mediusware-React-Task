import React from 'react';

const SearchContact = ({ searchInput, handleSearchInputChange, handleSearchInputKeyDown }) => {
    return (
        <div>
            <input
                className='w-100 p-1'
                type="text"
                placeholder="Search Contacts"
                value={searchInput}
                onChange={handleSearchInputChange}
                onKeyDown={handleSearchInputKeyDown}
            />
        </div>
    );
};

export default SearchContact;