import React from 'react';
import './checkbox.css';

const Checkbox = ({ text, checked, onChange }) => {
  return (
    <div className='checkbox'>
      <input type='checkbox' checked={checked} onChange={onChange} />
      <span>{text}</span>
    </div>
  );
};

export default Checkbox;
