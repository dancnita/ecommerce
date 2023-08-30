import React from 'react';

const TopBarNavItem = ({ text, icon }) => {
  const Icon = icon;
  return (
    <div>
      <Icon />
      <span>{text}</span>
    </div>
  );
};

export default TopBarNavItem;
