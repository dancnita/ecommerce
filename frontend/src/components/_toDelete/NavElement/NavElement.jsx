import React from 'react';

const NavElement = ({
  //containerClass,
  Icon,
  iconClass,
  title,
  totalItems = 0,
  totalItemsClass,
  titleClass,
}) => {
  return (
    <div
    //className={containerClass}
    >
      <Icon className={iconClass} />
      <span
        className={totalItemsClass}
        style={{ display: totalItems === 0 ? 'none' : 'inline' }}
      >
        {totalItems}
      </span>
      <span className={titleClass}>{title}</span>
    </div>
  );
};

export default NavElement;
