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

// const totalAmount = () => {
//   const subtotal = Object.values(cartProducts).map((item) => {
//     return item.quantity * item.price;
//   });

//   return subtotal.reduce((total, current) => total + current, 0);
// };

const setShippingInput = (fieldName) => {
  return ({ target: { value } }) => {
    setShippingDetails((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };
};
const setBillingInput = (fieldName) => {
  return ({ target: { value } }) => {
    setBillingDetails((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };
};

const saveFormData = async () => {
  const dataToPost = JSON.stringify([shippingDetails, billingDetails]);
  const options = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  try {
    const response = await axios.post(
      postUrlShipBillCkeck,
      dataToPost,
      options
    );
    if (response.data.success !== true) {
      throw new Error(`Request failed: ${response.status}`);
    }
    setShippingFormErrors(null);
    setBillingFormErrors(null);
    setSavedShippingDetails(shippingDetails);
    setSavedBillingDetails(billingDetails);
  } catch (error) {
    const getShippingFormErrors = error.response.data.errors.filter((item) =>
      Object.values(item).some((str) => str.includes('[0]'))
    );
    const getBillingFormErrors = error.response.data.errors.filter((item) =>
      Object.values(item).some((str) => str.includes('[1]'))
    );
    setShippingFormErrors(getShippingFormErrors);
    setBillingFormErrors(getBillingFormErrors);
  }
};

// postData(postUrlShipBillCkeck, dataToPost, postDefaultHeaders)
//   .then((response) => {
//     setShippingFormErrors(null);
//     setBillingFormErrors(null);
//     setSavedShippingDetails(shippingDetails);
//     setSavedBillingDetails(billingDetails);
//   })
//   .catch((error) => {
//     const getShippingFormErrors = error.response.data.errors.filter(
//       (item) => Object.values(item).some((str) => str.includes('[0]'))
//     );
//     const getBillingFormErrors = error.response.data.errors.filter((item) =>
//       Object.values(item).some((str) => str.includes('[1]'))
//     );
//     setShippingFormErrors(getShippingFormErrors);
//     setBillingFormErrors(getBillingFormErrors);
//   });
//};

// const getStripe = (orderId) => {
//   fetch('http://localhost:5000/api/create-checkout-session', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       orderId: orderId,
//     }),
//   })
//     .then((res) => {
//       if (res.ok) return res.json();
//       // return res.json().then((json) => Promise.reject(json));
//     })
//     .then(({ url }) => {
//       window.location = url;
//     })
//     .then((data) => console.log(data.json()))

//     .catch((e) => {
//       console.error(e.error);
//     });
// };

// const productsIdQty = Object.values(cartProducts).map((item) => {
//   return { productId: item._id, quantity: item.quantity };
// });

// const cartItemsIdsQuantity = Object.values(cartProducts).map((item) => ({
//   id: item._id,
//   quantity: item.quantity,
// }));
