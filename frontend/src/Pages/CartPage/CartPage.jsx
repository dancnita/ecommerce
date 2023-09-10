import ProductDescription from '../../components/ProductDescription/ProductDescription';
import Button from '../../components/Button/Button';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import './cartPage.css';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { CiCircleRemove } from 'react-icons/ci';
import { ShopContext } from '../../context/ShopContext';
import { Link } from 'react-router-dom';
import TitleH2 from '../../components/TitleH2/TitleH2';
import Parag from '../../components/Parag/Parag';
import Image from '../../components/Image/Image';
import Container from '../../components/Container/Container';
import ErrorMsg from '../../components/ErrorMsg/ErrorMsg';

import React, { useContext, useEffect, useState } from 'react';
import { currency } from '../../utilsScripts/data';
import { getTotalAmount } from '../../utilsScripts/utils';
import { getCartProductsInfo } from '../../utilsScripts/utils_requests';
import {
  removeObjFromObjsCollect,
  addQuantityToCart,
  substrQuantityFromCart,
  updateCartProductsInfo,
} from '../../utilsScripts/utils_ShopContext';

const CartPage = () => {
  const { cartProducts, setCartProducts, totalCartItems } =
    useContext(ShopContext);
  const [error, setError] = useState(null);
  //cjkeck quantity/in stock!

  useEffect(() => {
    getCartProductsInfo(
      cartProducts,
      updateCartProductsInfo,
      setCartProducts,
      setError
    );
  }, []);

  return (
    <Container className='container'>
      <TitleH2 text='Cart' />
      {error ? (
        <ErrorMsg error={error} />
      ) : (
        <Container>
          {totalCartItems === 0 ? (
            <Parag text='Your Cart is empty.' />
          ) : (
            Object.values(cartProducts).map((item, i) => {
              return item.quantity === 0 ? null : (
                <Container key={i}>
                  <Container className='cartProduct'>
                    {item.inStock === false ? (
                      <Container className='itemNotavAilable'>
                        item no longer available
                        <Button
                          ico={CiCircleRemove}
                          text={'Remove From Cart'}
                          className={'btn'}
                          onClick={() =>
                            removeObjFromObjsCollect(setCartProducts, item)
                          }
                        ></Button>
                      </Container>
                    ) : null}

                    <Link to={`/product/${item._id}`}>
                      <Image
                        src={!item.imgUrl ? null : item.imgUrl[0]}
                        alt={item.title}
                        className='cartProdImg'
                      />
                    </Link>

                    <ProductDescription
                      data={item.desc}
                      className='cartProdDesc'
                    />
                    <Container>
                      <Parag text={`Price: ${item.price} ${currency}`} />
                      <AiOutlineMinusCircle
                        className='cart-icon iconCart-align'
                        onClick={() =>
                          substrQuantityFromCart(
                            cartProducts,
                            setCartProducts,
                            item
                          )
                        }
                      />

                      <Parag text={item.quantity} className='cart-itemNo ' />
                      <AiOutlinePlusCircle
                        className='cart-icon iconCart-align'
                        onClick={() => addQuantityToCart(setCartProducts, item)}
                      />

                      <Parag
                        text={'Remove From Cart'}
                        className={'remove-from-cart'}
                        onClick={() =>
                          removeObjFromObjsCollect(setCartProducts, item)
                        }
                      />
                    </Container>
                    <Container>
                      <Parag text={`Cart Subtotal: `} />
                      <Parag
                        text={`${item.price * item.quantity} ${currency}`}
                      />
                    </Container>
                  </Container>
                </Container>
              );
            })
          )}

          {totalCartItems < 1 ? null : (
            <>
              <Parag
                text={`Total: ${getTotalAmount(cartProducts)} ${currency} `}
              />
              <Link to='/checkout'>
                <Button
                  ico={MdOutlineKeyboardDoubleArrowRight}
                  text={'Proceed to checkout'}
                  className={'btn'}
                ></Button>
              </Link>
            </>
          )}
        </Container>
      )}
    </Container>
  );
};

export default CartPage;
