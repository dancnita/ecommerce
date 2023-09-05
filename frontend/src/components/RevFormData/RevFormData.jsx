import React from 'react';
import TitleH2 from '../TitleH2/TitleH2';
import TitleH4 from '../TitleH4/TitleH4';
import Parag from '../Parag/Parag';

import './refFormData.css';

const RevFormData = ({
  cartProducts,
  currency,
  totalAmount,
  shippingFormValidationTemplate,
  savedShippingDetails,
  savedBillingDetails,
}) => {
  return (
    <div className='revFormData-container'>
      <TitleH4 text='Please review Order Details:' />
      <TitleH4 text='Products:' />
      {Object.values(cartProducts).map((item, i) => {
        return (
          <div key={i}>
            <Parag
              text={`${item.quantity} x ${item.title} Subtotal: ${
                item.price * item.quantity
              }${currency}`}
              className='revFormData-inline'
            />
          </div>
        );
      })}
      <Parag text={`Total: ${totalAmount}${currency}`} />
      <TitleH4 text='Shipping details:' />
      {shippingFormValidationTemplate.map((item, i) => (
        <Parag
          text={` ${item.label}
        ${
          savedShippingDetails[item.fieldName]
            ? savedShippingDetails[item.fieldName]
            : '-'
        }`}
          key={i}
        />
      ))}
      <TitleH4 text='Billing details:' />
      {shippingFormValidationTemplate.map((item, i) => (
        <Parag
          text={` ${item.label}
        ${
          savedBillingDetails[item.fieldName]
            ? savedBillingDetails[item.fieldName]
            : '-'
        }`}
          key={i}
        />
      ))}
    </div>
  );
};

export default RevFormData;
