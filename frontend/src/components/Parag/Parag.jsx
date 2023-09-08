import React from 'react';

const Parag = ({ text, className, style, onClick, onMouseDown }) => {
  return (
    <>
      <p
        onClick={onClick}
        style={style}
        className={className}
        onMouseDown={onMouseDown}
      >
        {text}
      </p>
    </>
  );
};

export default Parag;
