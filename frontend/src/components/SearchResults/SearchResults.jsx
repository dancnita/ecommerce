import React from 'react';
import './searchResults.css';
import Parag from '../Parag/Parag';
import { Link, useNavigate } from 'react-router-dom';

const SearchResults = ({
  className,
  searchResults,
  isSearchBarFocus,
  searchInput,
  onClick,
  setIsSearchBarFocus,
}) => {
  const navigate = useNavigate();

  return (
    <div className={className}>
      {!isSearchBarFocus ? null : searchInput.length < 3 ? (
        <Parag text={`Please enter at least 3 characters to search... `} />
      ) : searchResults.length === 0 ? (
        <Parag text={`No results for ${searchInput}.`} />
      ) : (
        <>
          <Parag
            text={`List all "${searchInput}" products`}
            className='searchResult'
            onMouseDown={() => {
              navigate(`/searchResultList`);
              setIsSearchBarFocus(false);
            }}
          />
          {searchResults.map((item, id) => {
            return (
              <Parag
                key={id}
                text={item.title}
                className='searchResult'
                onMouseDown={() => {
                  navigate(`/product/${item._id}`);
                  setIsSearchBarFocus(false);
                }}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default SearchResults;
