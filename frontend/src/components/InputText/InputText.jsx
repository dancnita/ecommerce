import React from 'react';

const InputText = ({
  labelText,
  type,
  pattern,
  title,
  isRequired,
  placeholder,
  value,
  onChange,
  style,
  isError,
}) => {
  return (
    <div>
      <label style={style}>
        {labelText}
        <input
          style={style}
          type={type}
          pattern={pattern}
          title={title}
          required={isRequired}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </label>
      <span
        style={
          isError ? { display: 'block', color: 'red' } : { display: 'none' }
        }
      >
        Not a valid {labelText.slice(0, -2)}
      </span>
    </div>
  );
};

export default InputText;
