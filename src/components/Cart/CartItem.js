import React from 'react';
import { useSetRecoilState } from 'recoil';
import {
  _increaseProduct,
  _decreaseProduct,
  _removeProduct,
} from '../../recoil';

const CartItem = ({ item }) => {
  const { title, img, price, count } = item;
  const total = price * count;
  const increaseProduct = useSetRecoilState(_increaseProduct);
  const decreaseProduct = useSetRecoilState(_decreaseProduct);
  const removeProduct = useSetRecoilState(_removeProduct);

  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ widht: '5rem', height: '5rem' }}
          className="img-fluid"
          alt="product"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product:</span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price :</span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span
              className="btn btn-black mx-1"
              onClick={() => decreaseProduct(item)}
            >
              {' '}
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span
              className="btn btn-black mx-1"
              onClick={() => increaseProduct(item)}
            >
              {' '}
              +
            </span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeProduct(item)}>
          <i className="fas fa-trash" />
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>item total: $ {total}</strong>
      </div>
    </div>
  );
};
export default CartItem;
