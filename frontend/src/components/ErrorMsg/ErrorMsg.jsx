import React from 'react';
import Parag from '../../components/Parag/Parag';

const ErrorMsg = ({ error }) => {
  return (
    <div>
      <Parag text={` An error occurred: ${error.status} ${error.statusText}`} />
    </div>
  );
};

export default ErrorMsg;
