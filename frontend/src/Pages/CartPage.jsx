import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import ProductImgs from '../components/ProductImgs/ProductImgs';
import ProductDescription from '../components/ProductDescription/ProductDescription';
import Button from '../components/Button/Button';
import { computersProd } from '../data';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import './cartPage.css';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { CiCircleRemove } from 'react-icons/ci';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

//const product = computersProd[0];

const CartPage = () => {
  const {
    cartProducts,
    addQuantityToCart,
    substrQuantityFromCart,
    totalCartItems,
    updateCartProductsInfo,
    removeFromCart,
  } = useContext(ShopContext);
  //cjkeck quantity/in stock!

  const getProdctsUrl = `http://127.0.0.1:5000/api/products`;

  const getCartProductsInfo = async () => {
    if (Object.keys(cartProducts).length > 0) {
      try {
        const response = await axios.get(getProdctsUrl, {
          params: {
            id: Object.keys(cartProducts).toString(),
          },
        });
        updateCartProductsInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const totalAmount = () => {
    const subtotal = Object.values(cartProducts).map((item) => {
      return item.quantity * item.price;
    });

    return subtotal.reduce((total, current) => total + current, 0);
  };

  useEffect(() => {
    getCartProductsInfo();
  }, []);

  return (
    <div className='container'>
      <h3>Cart</h3>

      {totalCartItems === 0 ? (
        <div>Cart empty</div>
      ) : (
        Object.values(cartProducts).map((item, i) => {
          return item.quantity === 0 ? null : (
            <div key={i}>
              <div className='cartProduct'>
                {item.inStock === false ? (
                  <div className='itemNotavAilable'>
                    item no longer available
                    <Button
                      ico={CiCircleRemove}
                      text={'Remove From Cart'}
                      className={'addCartBtn'}
                      onClick={() => removeFromCart(item)}
                    ></Button>
                  </div>
                ) : null}
                <img
                  src={!item.imgUrl ? null : item.imgUrl[0]}
                  alt=''
                  className='cartProdImg'
                />
                <ProductDescription data={item.desc} className='cartProdDesc' />
                <div>
                  <p>Price:{item.price}$</p>
                  <AiOutlineMinusCircle
                    className='icon iconCart-align'
                    onClick={() => substrQuantityFromCart(item)}
                  />
                  <span> {item.quantity} </span>
                  <AiOutlinePlusCircle
                    className='icon iconCart-align'
                    onClick={() => addQuantityToCart(item)}
                  />
                  <Button
                    ico={CiCircleRemove}
                    text={'Remove From Cart'}
                    className={'addCartBtn'}
                    onClick={() => removeFromCart(item)}
                  ></Button>
                </div>
                <div>
                  <p>Cart Subtotal: </p>
                  <p>{item.price * item.quantity} $</p>
                </div>
              </div>
            </div>
          );
        })
      )}

      <p>Total: {totalAmount()}$</p>

      <Link to='/checkout'>
        <Button
          ico={MdOutlineKeyboardDoubleArrowRight}
          text={'Proceed to checkout'}
          className={'addCartBtn'}
        ></Button>
      </Link>
    </div>
  );
};

export default CartPage;
