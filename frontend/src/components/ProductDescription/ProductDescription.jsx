import React from 'react';

const ProductDescription = ({ data, className }) => {
  return (
    <div className={className}>
      <p>{!data ? null : data}</p>
    </div>
  );
};

export default ProductDescription;
