import React, { useState, useEffect, useContext, useRef } from 'react';
import { ShopContext } from '../../context/ShopContext';
import InputField from '../InputField/InputField';
import SearchResults from '../SearchResults/SearchResults';
import './searchBar.css';
import { FiSearch } from 'react-icons/fi';
import { searchProductsUrl, getData } from '../../utilsScripts/utils';

const SearchBar = () => {
  //set local searchresults and only onClick list all-> set global in ShopContext?
  //const [searchResult, setSearchResult] = useState('');

  //
  const { searchResults, setSearchResults } = useContext(ShopContext);
  const searchInputRef = useRef(null);
  const [searchInput, setSearchInput] = useState('');

  const [isSearchBarFocus, setIsSearchBarFocus] = useState(false);
  //1 sec delay for user to finish type?
  useEffect(() => {
    searchInput.length > 2
      ? getData(`${searchProductsUrl}${searchInput}`, setSearchResults)
      : null;
  }, [searchInput]);

  return (
    <>
      <FiSearch
        className='searchIcon mobileV'
        onClick={() => {
          setIsSearchBarFocus(true);
        }}
      />
      <div
        className={isSearchBarFocus ? 'searchBar show' : 'searchBar '}
        onClick={() => searchInputRef.current.focus()}
      >
        <InputField
          className={isSearchBarFocus ? 'searchInput show' : 'searchInput '}
          type='text'
          placeholder='Search Product(s)'
          onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
          value={searchInput}
          onFocus={() => {
            setIsSearchBarFocus(true);
          }}
          onBlur={() => {
            setIsSearchBarFocus(false);
          }}
          ref={searchInputRef}
        />

        <SearchResults
          className={
            isSearchBarFocus ? 'searchResults show' : 'searchResults hide'
          }
          searchInput={searchInput}
          searchResults={searchResults}
          isSearchBarFocus={isSearchBarFocus}
          setIsSearchBarFocus={setIsSearchBarFocus}
        />
        <FiSearch className='searchIcon' />
      </div>
    </>
  );
};

export default SearchBar;
