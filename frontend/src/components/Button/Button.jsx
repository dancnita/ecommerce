import React from 'react';
import './button.css';

const Button = ({ text, ico, className, onClick }) => {
  const Icon = ico;
  return (
    <div>
      <button className={className} onClick={onClick}>
        <span>
          <Icon />
        </span>
        <span>{text}</span>
      </button>
    </div>
  );
};

export default Button;
