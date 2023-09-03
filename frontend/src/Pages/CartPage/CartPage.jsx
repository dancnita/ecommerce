import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import ProductImgs from '../../components/ProductImgs/ProductImgs';
import ProductDescription from '../../components/ProductDescription/ProductDescription';
import Button from '../../components/Button/Button';
import { computersProd } from '../../utilsScripts/data';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import './cartPage.css';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { CiCircleRemove } from 'react-icons/ci';
import { ShopContext } from '../../context/ShopContext';
import { Link } from 'react-router-dom';
import TitleH2 from '../../components/TitleH2/TitleH2';
import Parag from '../../components/Parag/Parag';
import Image from '../../components/Image/Image';
import { currency } from '../../utilsScripts/data';
import { getTotalAmount, getProdctsUrl } from '../../utilsScripts/utils';

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

  useEffect(() => {
    getCartProductsInfo();
  }, []);

  return (
    <div className='container'>
      <TitleH2 text='Cart' />

      {totalCartItems === 0 ? (
        <Parag text='Your Cart is empty.' />
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
                      className={'btn'}
                      onClick={() => removeFromCart(item)}
                    ></Button>
                  </div>
                ) : null}
                <Image
                  src={!item.imgUrl ? null : item.imgUrl[0]}
                  alt={item.title}
                  className='cartProdImg'
                />

                <ProductDescription data={item.desc} className='cartProdDesc' />
                <div>
                  <Parag text={`Price: ${item.price} ${currency}`} />
                  <AiOutlineMinusCircle
                    className='cart-icon iconCart-align'
                    onClick={() => substrQuantityFromCart(item)}
                  />

                  <Parag text={item.quantity} className='cart-itemNo ' />
                  <AiOutlinePlusCircle
                    className='cart-icon iconCart-align'
                    onClick={() => addQuantityToCart(item)}
                  />

                  <Parag
                    text={'Remove From Cart'}
                    className={'remove-from-cart'}
                    onClick={() => removeFromCart(item)}
                  />
                </div>
                <div>
                  <Parag text={`Cart Subtotal: `} />
                  <Parag text={`${item.price * item.quantity} ${currency}`} />
                </div>
              </div>
            </div>
          );
        })
      )}
      <Parag text={`Total: ${getTotalAmount(cartProducts)} ${currency} `} />
      {totalCartItems < 1 ? null : (
        <Link to='/checkout'>
          <Button
            ico={MdOutlineKeyboardDoubleArrowRight}
            text={'Proceed to checkout'}
            className={'btn'}
          ></Button>
        </Link>
      )}
    </div>
  );
};

export default CartPage;
