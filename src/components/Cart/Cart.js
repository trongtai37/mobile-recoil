import React from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';
import { _cart } from '../../recoil';
import { useRecoilValue } from 'recoil';

const Cart = (props) => {
  const cart = useRecoilValue(_cart);
  return (
    <section>
      {cart.length ? (
        <>
          <Title name="your" title="cart" />
          <CartColumns />
          <CartList cart={cart} />
          <CartTotals />
        </>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
};

export default Cart;
