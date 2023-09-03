import React from 'react';

const Checkbox = ({ text, checked, onChange }) => {
  return (
    <div>
      <input type='checkbox' checked={checked} onChange={onChange} />
      <span>{text}</span>
    </div>
  );
};

export default Checkbox;
