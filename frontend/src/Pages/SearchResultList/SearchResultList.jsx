import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import TitleH2 from '../../components/TitleH2/TitleH2';
import ListAllProdCateg from '../../containers/ListAllProdCateg/ListAllProdCateg';

import CardWide from '../../components/CardWide/CardWide';
import Container from '../../components/Container/Container';
const SearchResultList = () => {
  const { searchResults } = useContext(ShopContext);

  return (
    <Container className='container'>
      <TitleH2 text={'Search Results'} />
      <ListAllProdCateg className='productsList' data={searchResults}>
        <CardWide />
      </ListAllProdCateg>
    </Container>
  );
};

export default SearchResultList;
