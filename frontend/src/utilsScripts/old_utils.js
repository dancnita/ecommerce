const getFrontPageProd = async () => {
  try {
    const response = await axios.get(frontPageProdUrl);
    setFrontPageProd(response.data);
  } catch (error) {
    console.log(error);
  }
};

const getProductCateg = async () => {
  try {
    const response = await axios.get(productCategUrl);

    setProdCateg(response.data);
  } catch (error) {
    console.log(error);
  }
};

const getProducts = async () => {
  try {
    const response = await axios.get(prodCategUrlById);
    setProducts(response.data);
  } catch (error) {
    console.log(error);
  }
};

const totalAmount = () => {
  const subtotal = Object.values(cartProducts).map((item) => {
    return item.quantity * item.price;
  });

  return subtotal.reduce((total, current) => total + current, 0);
};
