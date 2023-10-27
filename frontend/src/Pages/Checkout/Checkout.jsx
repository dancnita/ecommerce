import React, { useState, useEffect, useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import Checkbox from '../../components/Checkbox/Checkbox';
import Button from '../../components/Button/Button';
import TitleH2 from '../../components/TitleH2/TitleH2';
import {
  shippingFormValidationTemplate,
  shippingFormValidationTemplateNoPattern,
} from '../../utilsScripts/data';
import PartialForm from '../../components/PartialForm/PartialForm';
import { RxUpdate } from 'react-icons/rx';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import './checkout.css';
import RevFormData from '../../components/RevFormData/RevFormData';
import { currency } from '../../utilsScripts/data';
import Parag from '../../components/Parag/Parag';
import Container from '../../components/Container/Container';
import {
  getTotalAmount,
  setInput,
  getProductsIdQty,
  checkBoxOnChange,
  filterErrors,
} from '../../utilsScripts/utils';

import {
  postUrlShipBillCkeck,
  postUrlSaveOrder,
  postToStripeUrl,
  postDefaultHeaders,
  postData,
} from '../../utilsScripts/utils_requests';

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

  const onSubmit = (event) => {
    event.preventDefault();
    saveFormData();
  };

  const saveFormData = () => {
    const dataToPost = JSON.stringify([shippingDetails, billingDetails]);
    postData(postUrlShipBillCkeck, dataToPost, postDefaultHeaders).then(
      (res) => {
        if (res.status === 200) {
          setShippingFormErrors(null);
          setBillingFormErrors(null);
          setSavedShippingDetails(shippingDetails);
          setSavedBillingDetails(billingDetails);
        } else {
          setShippingFormErrors(filterErrors(res.data.errors, '[0]'));
          setBillingFormErrors(filterErrors(res.data.errors, '[1]'));
        }
      }
    );
  };

  const placeOrder = () => {
    const dataToPost = JSON.stringify({
      savedShippingDetails,
      savedBillingDetails,
      products: getProductsIdQty(cartProducts),
    });
    postData(postUrlSaveOrder, dataToPost, postDefaultHeaders).then((res) => {
      if (res.data.success === true) {
        const orderId = res.data.savedOrder;
        getStripe(orderId);
      } else {
        throw new Error(`Request failed: ${res.status}`);
        //set error // display error
      }
    });
  };

  const getStripe = (orderId) => {
    const dataToPost = JSON.stringify({
      orderId: orderId,
    });
    postData(postToStripeUrl, dataToPost, postDefaultHeaders)
      .then((res) => {
        if (res.statusText === 'OK') {
          return res.data;
        } else {
          throw new Error(`Request failed: ${res.status}`);
          //set error // display error
        }
      })
      .then(({ url }) => {
        window.location = url;
      });
  };

  useEffect(() => {
    useShippingAsBillingDet ? setBillingDetails(shippingDetails) : null;
  }, [useShippingAsBillingDet, shippingDetails]);

  return (
    <Container className='checkout-container'>
      <TitleH2 text={'Checkout'} />
      <Container className='checkout-forms'>
        <form onSubmit={onSubmit}>
          <PartialForm
            onSubmit={onSubmit}
            title={`Please ${
              Object.values(savedShippingDetails).length < 1
                ? 'enter'
                : 'update'
            } shipping details`}
            inputTemplate={shippingFormValidationTemplate}
            errors={shippingFormErrors}
            handleChange={(input) => setInput(setShippingDetails, input)}
          />
          <Checkbox
            checked={useShippingAsBillingDet}
            onChange={() =>
              checkBoxOnChange(
                useShippingAsBillingDet,
                setUseShippingAsBillingDet
              )
            }
            text='Use shipping details as billing details'
          />

          {useShippingAsBillingDet ? null : (
            <PartialForm
              onSubmit={onSubmit}
              title={`Please ${
                Object.values(savedBillingDetails).length < 1
                  ? 'enter'
                  : 'update'
              } billing details`}
              inputTemplate={shippingFormValidationTemplate}
              errors={billingFormErrors}
              handleChange={(input) => setInput(setBillingDetails, input)}
            />
          )}
          <Button
            type='submit'
            text={`${
              Object.values(savedBillingDetails).length < 1 ? 'Save' : 'Update'
            }`}
            ico={RxUpdate}
            className='btn'
          />
        </form>
        <Container>
          <RevFormData
            cartProducts={cartProducts}
            currency={currency}
            totalAmount={getTotalAmount(cartProducts)}
            shippingFormValidationTemplate={shippingFormValidationTemplate}
            savedShippingDetails={savedShippingDetails}
            savedBillingDetails={savedBillingDetails}
          />
        </Container>
      </Container>
      <Button
        onClick={() =>
          Object.values(savedBillingDetails).length === 0 ? null : placeOrder()
        }
        ico={MdOutlineKeyboardDoubleArrowRight}
        text='Proceed to payment'
        className='btn'
      />
      <Parag
        style={{ color: 'red' }}
        text={
          Object.values(savedBillingDetails).length === 0
            ? 'Please enter shipping/billing details'
            : null
        }
      />
    </Container>
  );
};

export default Checkout;

// const saveFormData = async () => {
//   const dataToPost = JSON.stringify([shippingDetails, billingDetails]);

//   try {
//     const response = await axios.post(
//       postUrlShipBillCkeck,
//       dataToPost,
//       postDefaultHeaders
//     );
//     setShippingFormErrors(null);
//     setBillingFormErrors(null);
//     setSavedShippingDetails(shippingDetails);
//     setSavedBillingDetails(billingDetails);
//   } catch (error) {
//     const getShippingFormErrors = error.response.data.errors.filter((item) =>
//       Object.values(item).some((str) => str.includes('[0]'))
//     );
//     const getBillingFormErrors = error.response.data.errors.filter((item) =>
//       Object.values(item).some((str) => str.includes('[1]'))
//     );
//     setShippingFormErrors(getShippingFormErrors);
//     setBillingFormErrors(getBillingFormErrors);
//   }
// };

// const placeOrder = async () => {
//   if (Object.values(savedBillingDetails).length === 0) return;
//   const dataToPost = JSON.stringify({
//     savedShippingDetails,
//     savedBillingDetails,
//     products: getProductsIdQty(cartProducts),
//   });
//   try {
//     const response = await axios.post(
//       postUrlSaveOrder,
//       dataToPost,
//       postDefaultHeaders
//     );
//     if (response.data.success !== true) {
//       throw new Error(`Request failed: ${response.status}`);
//     }
//     const orderId = response.data.savedOrder;
//     getStripe(orderId);
//   } catch (error) {
//     console.log(error);
//   }
// };
