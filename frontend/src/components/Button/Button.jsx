import React from 'react';
import './button.css';

const Button = ({ text, ico, className, onClick }) => {
  const Icon = ico;
  return (
    <>
      <button className={className} onClick={onClick}>
        {ico === null ? null : (
          <span>
            <Icon />
          </span>
        )}
        <span>{text}</span>
      </button>
    </>
  );
};

export default Button;
