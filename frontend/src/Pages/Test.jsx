import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';

const Test = () => {
  const { cartProducts } = useContext(ShopContext);

  //console.log(Object.values(cartProducts));
  const cartItemsIdsQuantity = Object.values(cartProducts).map((item) => ({
    id: item._id,
    quantity: item.quantity,
  }));
  //console.log(itemQuantity);

  const getStripe = () => {
    fetch('http://localhost:5000/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: cartItemsIdsQuantity,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        // return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((e) => {
        console.error(e.error);
      });
  };

  useEffect(() => {
    getStripe();
  }, []);

  return <div>Checkout</div>;
};

export default Test;
