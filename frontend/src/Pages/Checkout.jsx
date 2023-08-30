import React, { useState } from 'react';
import InputText from '../components/InputText/InputText';

const data = ['First Name: ', 'Last Name: ', 'Postal Code: ', 'Address1: '];

const Checkout = () => {
  const [shippingDetails, setShippingDetails] = useState();
  return (
    <div>
      Checkout
      <form action=''>
        <p>shipping details</p>
        {data.map((item, i) => (
          <InputText labelText={item} key={i} inputValue={''} />
        ))}
        <button>Save</button>

        <p>billing details</p>

        <button>to Payment</button>
        <p>Order Details</p>
      </form>
    </div>
  );
};

export default Checkout;
