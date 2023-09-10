import React from 'react';
import './searchResults.css';
import Parag from '../Parag/Parag';
import ErrorMsg from '../ErrorMsg/ErrorMsg';
import Container from '../Container/Container';
import { useNavigate } from 'react-router-dom';

const SearchResults = ({
  className,
  searchResults,
  isSearchBarFocus,
  searchInput,
  error,
  setIsSearchBarFocus,
}) => {
  const navigate = useNavigate();

  return (
    <Container className={className}>
      {!isSearchBarFocus ? null : searchInput.length < 3 ? (
        <Parag text={`Please enter at least 3 characters to search... `} />
      ) : error ? (
        <ErrorMsg error={error} />
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
    </Container>
  );
};

export default SearchResults;
