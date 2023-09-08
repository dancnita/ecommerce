import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import TitleH2 from '../../components/TitleH2/TitleH2';
import ClipLoaderContainer from '../../components/ClipLoaderContainer/ClipLoaderContainer';
import CardWide from '../../components/CardWide/CardWide';
const SearchResultList = () => {
  const { searchResults } = useContext(ShopContext);

  return (
    <div className='container'>
      <TitleH2 text={'Search Results'} />
      <div className='productsList'>
        {!searchResults
          ? null
          : searchResults.map((item, index) => {
              return (
                <div key={index}>
                  <CardWide data={item} />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default SearchResultList;
