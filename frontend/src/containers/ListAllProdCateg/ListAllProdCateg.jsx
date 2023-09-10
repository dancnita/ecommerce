import React from 'react';
import Container from '../../components/Container/Container';
import ClipLoaderContainer from '../../components/ClipLoaderContainer/ClipLoaderContainer';

const ListAllProdCateg = ({ children, className, data }) => {
  return (
    <Container className={className}>
      {!data ? (
        <ClipLoaderContainer />
      ) : (
        data.map((item, index) => {
          return (
            <Container key={index}>
              {React.cloneElement(children, { data: item })}
            </Container>
          );
        })
      )}
    </Container>
  );
};

export default ListAllProdCateg;
