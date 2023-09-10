import axios from 'axios';

const baseApiUrl = `http://127.0.0.1:5000/api/`;

const productCategUrl = `${baseApiUrl}productCateg`;
const frontPageProdUrl = `${baseApiUrl}frontPagProd`;
const findProdUrl = `${baseApiUrl}find/`;
const getProdctsUrl = `${baseApiUrl}products`;
const searchProductsUrl = `${baseApiUrl}products/?searchDT=`;
const prodCategUrlById = `${baseApiUrl}products/?category=`;
//

const postUrlShipBillCkeck = `${baseApiUrl}order/shipBillCkeck`;
const postUrlSaveOrder = `${baseApiUrl}order/save`;
const postToStripeUrl = `${baseApiUrl}create-checkout-session`;

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
    setError(error.response);
  }
};

const getCartProductsInfo = async (
  cartProducts,
  updateCartProductsInfo,
  setCartProducts,
  setError
) => {
  if (Object.keys(cartProducts).length > 0) {
    try {
      const response = await axios.get(getProdctsUrl, {
        params: {
          id: Object.keys(cartProducts).toString(),
        },
      });
      updateCartProductsInfo(response.data, setCartProducts, cartProducts);
    } catch (error) {
      setError(error.response);
    }
  }
};

export {
  productCategUrl,
  frontPageProdUrl,
  postDefaultHeaders,
  getData,
  findProdUrl,
  prodCategUrlById,
  getCartProductsInfo,
  searchProductsUrl,
};
