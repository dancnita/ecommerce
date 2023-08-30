import React from 'react';
import './searchBar.css';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  return (
    <div className='searchBar'>
      <input
        className='searchInput'
        type='text'
        placeholder='Search here'
        // onChange={handleChange}
        // value={searchInput}
      />
      <FiSearch className='searchIcon' />
    </div>
  );
};

export default SearchBar;
