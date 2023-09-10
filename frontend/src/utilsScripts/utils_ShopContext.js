const getDataFromLocalStorage = (dataName) => {
  const savedData = localStorage.getItem(`${dataName}`);
  const initialValue = JSON.parse(savedData);
  return initialValue || {};
};

const removeObjFromObjsCollect = (setObjsCollect, obj) => {
  setObjsCollect((current) => {
    const copy = { ...current };
    delete copy[obj._id];
    return copy;
  });
};

const addToFavorites = (favoriteProd, setFavoriteProd, item) => {
  Object.keys(favoriteProd).some((elem) => elem === item)
    ? null
    : setFavoriteProd((prev) => {
        return { ...prev, [item._id]: item };
      });
};

const addToCart = (cartProducts, setCartProducts, item) => {
  Object.keys(cartProducts).some((elem) => elem === item._id)
    ? null
    : setCartProducts((prev) => {
        return { ...prev, [item._id]: { ...item, quantity: 1 } };
      });
};

const addQuantityToCart = (setCartProducts, item) => {
  setCartProducts((prev) => {
    return {
      ...prev,
      [item._id]: { ...item, quantity: prev[item._id].quantity + 1 },
    };
  });
};

const substrQuantityFromCart = (cartProducts, setCartProducts, item) => {
  cartProducts[item._id].quantity === 1
    ? removeObjFromObjsCollect(setCartProducts, item)
    : cartProducts[item._id].quantity > 1
    ? setCartProducts((prev) => {
        return {
          ...prev,
          [item._id]: { ...item, quantity: prev[item._id].quantity - 1 },
        };
      })
    : null;
};

const getTotalFavoriteItems = (favoriteProd) => {
  const totalFavorites = Object.keys(favoriteProd).length;
  return totalFavorites;
};

const getTotalCartItems = (cartProducts) => {
  const totalProdQuant = Object.values(cartProducts).map((item) => {
    return item.quantity;
  });
  return totalProdQuant.reduce((total, current) => total + current, 0);
};

const updateCartProductsInfo = (
  cartProductsUpdate,
  setCartProducts,
  cartProducts
) => {
  cartProductsUpdate.map((item) => {
    setCartProducts((prev) => {
      return {
        ...prev,
        [item._id]: { ...item, quantity: cartProducts[item._id].quantity },
      };
    });
  });
};

export {
  getDataFromLocalStorage,
  removeObjFromObjsCollect,
  addToFavorites,
  addToCart,
  addQuantityToCart,
  substrQuantityFromCart,
  getTotalFavoriteItems,
  getTotalCartItems,
  updateCartProductsInfo,
};
