import React, { createContext, useState, useEffect } from 'react';
import {
  getDataFromLocalStorage,
  getTotalFavoriteItems,
  getTotalCartItems,
} from '../utilsScripts/utils_ShopContext';

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartProducts, setCartProducts] = useState(
    getDataFromLocalStorage('cartProducts')
  );
  const [favoriteProd, setFavoriteProd] = useState(
    getDataFromLocalStorage('favoriteProd')
  );
  const [savedShippingDetails, setSavedShippingDetails] = useState(
    getDataFromLocalStorage('shippingDet')
  );
  const [savedBillingDetails, setSavedBillingDetails] = useState(
    getDataFromLocalStorage('billingDet')
  );

  const [searchResults, setSearchResults] = useState('');
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [totalFavoriteItems, setTotalFavoriteItems] = useState(0);

  useEffect(() => {
    setTotalCartItems(() => getTotalCartItems(cartProducts));
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  }, [cartProducts]);

  useEffect(() => {
    setTotalFavoriteItems(() => getTotalFavoriteItems(favoriteProd));
    localStorage.setItem('favoriteProd', JSON.stringify(favoriteProd));
  }, [favoriteProd]);

  useEffect(() => {
    localStorage.setItem('shippingDet', JSON.stringify(savedShippingDetails));
  }, [savedShippingDetails]);
  useEffect(() => {
    localStorage.setItem('billingDet', JSON.stringify(savedBillingDetails));
  }, [savedBillingDetails]);

  // useEffect(() => {
  //   localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  // }, [cartProducts]);

  // useEffect(() => {
  //   localStorage.setItem('favoriteProd', JSON.stringify(favoriteProd));
  // }, [favoriteProd]);

  const contextValue = {
    cartProducts,
    setCartProducts,
    totalCartItems,
    favoriteProd,
    setFavoriteProd,
    totalFavoriteItems,
    savedShippingDetails,
    savedBillingDetails,
    setSavedBillingDetails,
    setSavedShippingDetails,
    searchResults,
    setSearchResults,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
