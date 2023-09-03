import React from 'react';

const InputField = ({ type, className, placeholder }) => {
  return (
    <div>
      <input type={type} className={className} placeholder={placeholder} />
    </div>
  );
};

export default InputField;
