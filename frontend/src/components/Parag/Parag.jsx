import React from 'react';

const Parag = ({ text, className, style, onClick }) => {
  return (
    <>
      <p onClick={onClick} style={style} className={className}>
        {text}
      </p>
    </>
  );
};

export default Parag;
