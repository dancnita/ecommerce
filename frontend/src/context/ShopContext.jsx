import React, { createContext, useState, useEffect } from 'react';
export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  //prod:quantity

  // getFromLocalStorage

  const getFromLocalStorage = (dataName) => {
    const savedData = localStorage.getItem(`${dataName}`);
    const initialValue = JSON.parse(savedData);
    return initialValue || {};
  };

  const [cartProducts, setCartProducts] = useState(
    getFromLocalStorage('cartProducts')
  );

  const [totalCartItems, setTotalCartItems] = useState(0);

  const [savedShippingDetails, setSavedShippingDetails] = useState(
    getFromLocalStorage('shippingDet')
  );

  const [savedBillingDetails, setSavedBillingDetails] = useState(
    getFromLocalStorage('billingDet')
  );

  const removeFromCart = (item) => {
    setCartProducts((current) => {
      const copy = { ...current };
      delete copy[item._id];
      return copy;
    });
    console.log(cartProducts);
  };

  const updateCartProductsInfo = (cartProductsUpdate) => {
    cartProductsUpdate.map((item) => {
      setCartProducts((prev) => {
        return {
          ...prev,
          [item._id]: { ...item, quantity: cartProducts[item._id].quantity },
        };
      });
    });
  };

  const getTotalCartItems = () => {
    const totalProdQuant = Object.values(cartProducts).map((item) => {
      return item.quantity;
    });

    return totalProdQuant.reduce((total, current) => total + current, 0);
  };

  useEffect(() => {
    setTotalCartItems(() => getTotalCartItems());
  }, [cartProducts]);

  const addToCart = (item) => {
    Object.keys(cartProducts).some((elem) => elem === item)
      ? null
      : setCartProducts((prev) => {
          return { ...prev, [item._id]: { ...item, quantity: 1 } };
        });
  };

  const addQuantityToCart = (item) => {
    setCartProducts((prev) => {
      return {
        ...prev,

        [item._id]: { ...item, quantity: prev[item._id].quantity + 1 },
      };
    });
  };

  const substrQuantityFromCart = (item) => {
    cartProducts[item._id].quantity === 1
      ? removeFromCart(item)
      : cartProducts[item._id].quantity > 1
      ? setCartProducts((prev) => {
          return {
            ...prev,
            [item._id]: { ...item, quantity: prev[item._id].quantity - 1 },
          };
        })
      : null;
  };
  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  }, [cartProducts]);

  useEffect(() => {
    localStorage.setItem('shippingDet', JSON.stringify(savedShippingDetails));
  }, [savedShippingDetails]);
  useEffect(() => {
    localStorage.setItem('billingDet', JSON.stringify(savedBillingDetails));
  }, [savedBillingDetails]);

  const contextValue = {
    cartProducts,
    addToCart,
    addQuantityToCart,
    substrQuantityFromCart,
    totalCartItems,
    updateCartProductsInfo,
    removeFromCart,
    savedShippingDetails,
    savedBillingDetails,
    setSavedBillingDetails,
    setSavedShippingDetails,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
