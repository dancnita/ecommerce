const checkBoxOnChange = (checkBoxState, setCheckboxState) => {
  setCheckboxState(!checkBoxState);
};

const filterErrors = (error, value) =>
  error.filter((item) =>
    Object.values(item).some((str) => str.includes(value))
  );

const getTotalAmount = (products) => {
  const subtotal = Object.values(products).map((item) => {
    return item.quantity * item.price;
  });

  return subtotal.reduce((total, current) => total + current, 0);
};

const setInput = (setInputDetails, fieldName) => {
  return ({ target: { value } }) => {
    setInputDetails((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };
};
const getProductsIdQty = (cartProducts) => {
  return Object.values(cartProducts).map((item) => {
    return { productId: item._id, quantity: item.quantity };
  });
};

export {
  getTotalAmount,
  setInput,
  getProductsIdQty,
  checkBoxOnChange,
  filterErrors,
};
