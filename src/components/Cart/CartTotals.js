import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { _cart, _totalPrice } from '../../recoil';

const CartTotals = (props) => {
  const totalPrice = useRecoilValue(_totalPrice);
  const resetCart = useResetRecoilState(_cart);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={resetCart}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal:</span>
              <strong>${totalPrice}</strong>
            </h5>
            <h5>
              <span className="text-title">tax:</span>
              <strong>10%</strong>
            </h5>
            <h5>
              <span className="text-title">total:</span>
              <strong>${(totalPrice * 1.1).toFixed(2)}</strong>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartTotals;
