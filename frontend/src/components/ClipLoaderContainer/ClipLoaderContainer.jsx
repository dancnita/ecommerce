import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const ClipLoaderContainer = () => {
  return (
    <div style={{ width: '10vw', margin: 'auto', display: 'block' }}>
      <ClipLoader color='#0097e6' size={50} />
    </div>
  );
};

export default ClipLoaderContainer;
