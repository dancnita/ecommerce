import React, { forwardRef } from 'react';

const InputField = forwardRef(
  (
    { type, className, placeholder, onChange, onFocus, onBlur, onClick },
    ref
  ) => {
    return (
      <div>
        <input
          type={type}
          className={className}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onClick={onClick}
          ref={ref}
        />
      </div>
    );
  }
);

export default InputField;
