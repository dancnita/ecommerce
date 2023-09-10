import axios from 'axios';

const baseApiUrl = `http://127.0.0.1:5000/api/`;
const productCategUrl = 'http://127.0.0.1:5000/api/productCateg';
const frontPageProdUrl = 'http://127.0.0.1:5000/api/frontPagProd';
const prodCategUrlById = `http://127.0.0.1:5000/api/products/?category=`;
const findProdUrl = `http://127.0.0.1:5000/api/find/`;
const getProdctsUrl = `http://127.0.0.1:5000/api/products`;
const postUrlShipBillCkeck = 'http://127.0.0.1:5000/api/order/shipBillCkeck';
const postUrlSaveOrder = 'http://127.0.0.1:5000/api/order/save';
const postToStripeUrl = 'http://localhost:5000/api/create-checkout-session';
const searchProductsUrl = 'http://127.0.0.1:5000/api/products/?searchDT=';

const postDefaultHeaders = {
  headers: {
    'Content-type': 'application/json',
  },
};

const getData = async (url, setData, setError) => {
  try {
    const response = await axios.get(url);
    setData(response.data);
  } catch (error) {
    setError(error.response.data);
  }
};

const postData = async (url, dataToPost, options) => {
  const response = await axios.post(url, dataToPost, options);
  return response;
};

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

// const checkObjectEmpty = (objToCkeck) => {
//   Object.values(objToCkeck).length < 1 ? false : true;
// };

export {
  productCategUrl,
  frontPageProdUrl,
  getData,
  prodCategUrlById,
  findProdUrl,
  getTotalAmount,
  getProdctsUrl,
  setInput,
  postUrlShipBillCkeck,
  postUrlSaveOrder,
  postData,
  postDefaultHeaders,
  postToStripeUrl,
  getProductsIdQty,
  //checkObjectEmpty,
  searchProductsUrl,
};
