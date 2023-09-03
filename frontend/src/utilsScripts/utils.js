import axios from 'axios';

const productCategUrl = 'http://127.0.0.1:5000/api/productCateg';
const frontPageProdUrl = 'http://127.0.0.1:5000/api/frontPagProd';

const prodCategUrlById = `http://127.0.0.1:5000/api/products/?category=`;

const findProdUrl = `http://127.0.0.1:5000/api/find/`;

const getProdctsUrl = `http://127.0.0.1:5000/api/products`;

const getData = async (url, setData) => {
  try {
    const response = await axios.get(url);
    setData(response.data);
  } catch (error) {
    console.log(error);
  }
};

const getTotalAmount = (products) => {
  const subtotal = Object.values(products).map((item) => {
    return item.quantity * item.price;
  });

  return subtotal.reduce((total, current) => total + current, 0);
};

export {
  productCategUrl,
  frontPageProdUrl,
  getData,
  prodCategUrlById,
  findProdUrl,
  getTotalAmount,
  getProdctsUrl,
};
