import React, { useState, useEffect, useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import InputText from '../../components/InputText/InputText';
import Checkbox from '../../components/Checkbox/Checkbox';
import Button from '../../components/Button/Button';
import TitleH2 from '../../components/TitleH2/TitleH2';
import {
  shippingFormValidationTemplate,
  shippingFormValidationTemplateNoPattern,
} from '../../utilsScripts/data';
import Form from '../../components/Form/Form';
import { RxUpdate } from 'react-icons/rx';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import './checkout.css';

import axios from 'axios';

const Checkout = () => {
  const {
    cartProducts,
    savedShippingDetails,
    savedBillingDetails,
    setSavedBillingDetails,
    setSavedShippingDetails,
  } = useContext(ShopContext);

  const [shippingDetails, setShippingDetails] = useState({});
  const [billingDetails, setBillingDetails] = useState({});
  const [useShippingAsBillingDet, setUseShippingAsBillingDet] = useState(true);

  const [shippingFormErrors, setShippingFormErrors] = useState(null);
  const [billingFormErrors, setBillingFormErrors] = useState(null);

  //

  const handleOnChange = () => {
    setUseShippingAsBillingDet(!useShippingAsBillingDet);
  };

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

  const sendOrder = async () => {
    const postUrl = 'http://127.0.0.1:5000/api/order/save';
    const productsIdQty = Object.values(cartProducts).map((item) => {
      return { productId: item._id, quantity: item.quantity };
    });

    const dataToPost = JSON.stringify({
      savedShippingDetails,
      savedBillingDetails,
      products: productsIdQty,
    });
    //console.log(dataToPost);

    const options = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    try {
      const response = await axios.post(postUrl, dataToPost, options);
      console.log(response.data);
      if (response.data.success !== true) {
        throw new Error(`Request failed: ${response.status}`);
      }
      const orderId = response.data.savedOrder;
      getStripe(orderId);

      //console.log(response.data.savedOrder);
    } catch (error) {
      console.log(error);
    }
  };

  const saveFormData = async () => {
    console.log(shippingDetails);
    const postUrl = 'http://127.0.0.1:5000/api/order/shipBillCkeck';
    console.log(billingDetails);
    const dataToPost = JSON.stringify([shippingDetails, billingDetails]);
    const options = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    try {
      const response = await axios.post(postUrl, dataToPost, options);

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

  const cartItemsIdsQuantity = Object.values(cartProducts).map((item) => ({
    id: item._id,
    quantity: item.quantity,
  }));
  //console.log(itemQuantity);

  const getStripe = (orderId) => {
    fetch('http://localhost:5000/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderId: orderId,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        // return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .then((data) => console.log(data.json()))

      .catch((e) => {
        console.error(e.error);
      });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    saveFormData();
  };

  useEffect(() => {
    useShippingAsBillingDet ? setBillingDetails(shippingDetails) : null;
  }, [useShippingAsBillingDet, shippingDetails]);

  const totalAmount = () => {
    const subtotal = Object.values(cartProducts).map((item) => {
      return item.quantity * item.price;
    });

    return subtotal.reduce((total, current) => total + current, 0);
  };

  const placeOrder = () => {
    Object.values(savedBillingDetails).length === 0 ? null : sendOrder();
  };

  // function handleChange(value) {
  //   setShippingInput(value);
  // }

  return (
    <div>
      <TitleH2 text={'Checkout'} />

      <form onSubmit={onSubmit}>
        <Form
          className=''
          onSubmit={onSubmit}
          title={`Please ${
            Object.values(savedShippingDetails).length < 1 ? 'enter' : 'update'
          } shipping details`}
          inputTemplate={shippingFormValidationTemplate}
          errors={shippingFormErrors}
          handleChange={(input) => setShippingInput(input)}
        />
        <Checkbox
          checked={useShippingAsBillingDet}
          onChange={handleOnChange}
          text='Use shipping details as billing details'
        />

        {useShippingAsBillingDet ? null : (
          <Form
            onSubmit={onSubmit}
            title={`Please ${
              Object.values(savedBillingDetails).length < 1 ? 'enter' : 'update'
            } billing details`}
            inputTemplate={shippingFormValidationTemplate}
            errors={billingFormErrors}
            handleChange={(input) => setBillingInput(input)}
          />
        )}
        {/* <button type='submit' className='btn'>
          Save
        </button> */}

        <Button type='submit' text='Save' ico={RxUpdate} className='btn' />
      </form>
      <h3>Please review Order Details:</h3>
      <h4>Products:</h4>
      {Object.values(cartProducts).map((item, i) => {
        return (
          <div key={i}>
            <span>{item.quantity} x </span>
            <span>{item.title}</span>
            <span> Subtotal: {item.price * item.quantity} $</span>
          </div>
        );
      })}
      <span>Total: {totalAmount()} $</span>
      <h4>Shipping details:</h4>
      {shippingFormValidationTemplate.map((item, i) => (
        <p key={i}>
          {item.label}
          {savedShippingDetails[item.fieldName]}
        </p>
      ))}
      <h3>Billing details:</h3>
      {shippingFormValidationTemplate.map((item, i) => (
        <p key={i}>
          {item.label}
          {savedBillingDetails[item.fieldName]}
        </p>
      ))}

      <Button
        onClick={() => placeOrder()}
        ico={MdOutlineKeyboardDoubleArrowRight}
        text='Proceed to payment'
        className='btn'
      />
      <p style={{ color: 'red' }}>
        {Object.values(savedBillingDetails).length === 0
          ? 'Please enter shipping/billing details'
          : null}
      </p>
    </div>
  );
};

export default Checkout;

{
  /* <h3>
          Please{' '}
          {Object.values(savedShippingDetails).length < 1 ? 'enter' : 'update'}{' '}
          Shipping Details
        </h3>

        {shippingFormValidationTemplate.map((item, i) => (
          <InputText
            style={
              !shippingFormErrors
                ? null
                : shippingFormErrors.some(
                    (e) => e.path.slice(4) === item.fieldName
                  )
                ? { color: 'red' }
                : null
            }
            labelText={item.label}
            type={item.type}
            pattern={item.pattern}
            title={item.title}
            isRequired={item.isRequired}
            placeholder={item.placeholder}
            key={i}
            value={item.value}
            onChange={setShippingInput(item.fieldName)}
            isError={
              !shippingFormErrors
                ? false
                : shippingFormErrors.some(
                    (e) => e.path.slice(4) === item.fieldName
                  )
                ? true
                : false
            }
          />
        ))} */
}

{
  /* <h3>
          Please{' '}
          {Object.values(savedBillingDetails).length < 1 ? 'enter' : 'update'}{' '}
          Billing Details
        </h3> */
}

//
// <InputText
//   style={
//     !billingFormErrors
//       ? null
//       : shippingFormErrors.some(
//           (e) => e.path.slice(4) === item.fieldName
//         )
//       ? { color: 'red' }
//       : null
//   }
//   labelText={item.label}
//   type={item.type}
//   pattern={item.pattern}
//   title={item.title}
//   isRequired={item.isRequired}
//   placeholder={item.placeholder}
//   key={i}
//   value={item.value}
//   onChange={setBillingInput(item.fieldName)}
//   isError={
//     !shippingFormErrors
//       ? false
//       : shippingFormErrors.some(
//           (e) => e.path.slice(4) === item.fieldName
//         )
//       ? true
//       : false
//   }
// />
