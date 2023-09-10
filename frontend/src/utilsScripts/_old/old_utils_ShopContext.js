const removeFromFavorites = (item) => {
  setFavoriteProd((current) => {
    const copy = { ...current };
    delete copy[item._id];
    return copy;
  });
};

const removeFromCart = (item) => {
  setCartProducts((current) => {
    const copy = { ...current };
    delete copy[item._id];
    return copy;
  });
};

const addToFavorites = (item) => {
  Object.keys(favoriteProd).some((elem) => elem === item)
    ? null
    : setFavoriteProd((prev) => {
        return { ...prev, [item._id]: item };
      });
};

const addToCart = (item) => {
  Object.keys(cartProducts).some((elem) => elem === item)
    ? null
    : setCartProducts((prev) => {
        return { ...prev, [item._id]: { ...item, quantity: 1 } };
      });
};

const getTotalCartItems = () => {
  const totalProdQuant = Object.values(cartProducts).map((item) => {
    return item.quantity;
  });
  return totalProdQuant.reduce((total, current) => total + current, 0);
};

const addQuantityToCart = (item) => {
  setCartProducts((prev) => {
    return {
      ...prev,
      [item._id]: { ...item, quantity: prev[item._id].quantity + 1 },
    };
  });
};
