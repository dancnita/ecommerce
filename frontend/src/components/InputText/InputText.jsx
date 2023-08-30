import React from 'react';

const InputText = ({ labelText, inputValue, onChange }) => {
  return (
    <div>
      <label>
        {labelText}
        <input type='text' input={inputValue} onChange={onChange} />
      </label>
    </div>
  );
};

export default InputText;
