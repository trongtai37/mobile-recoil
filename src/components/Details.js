import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ButtonContainer } from './Button';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { _increaseProduct, _modalProduct, _detailProduct } from '../recoil';

const Details = (props) => {
  const history = useHistory();
  const increaseProduct = useSetRecoilState(_increaseProduct);
  const detailProduct = useRecoilValue(_detailProduct);
  const setModalProduct = useSetRecoilState(_modalProduct);
  const { company, img, info, price, title, inCart } = detailProduct;

  const openModal = (product) =>
    setModalProduct({
      isOpen: true,
      product,
    });

  return (
    <div className="row m-5">
      <div className="col-10 mx-auto text-center text-slanter text-blue my-5">
        <h1>{title}</h1>
      </div>
      <div className="row">
        <div className="col-10 mx-auto col-md-4 my-3 pl-5 text-capitalize">
          <img src={img} className="img-fluid" alt="product" />
        </div>
        <div className="col-10 mx-auto col-md-8 my-3 text-capitalize">
          <h2>model: {title}</h2>
          <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
            made by : <span className="text-uppercase">{company}</span>
          </h4>
          <h4 className="text-blue">
            <strong>
              price: <span>$</span> {price}
            </strong>
          </h4>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            some info about product:
          </p>
          <p className="text-muted lead">{info}</p>
          <div>
            <Link to="/">
              <ButtonContainer onClick={() => history.push('/')}>
                back to products
              </ButtonContainer>
            </Link>
            <ButtonContainer
              disabled={inCart ? true : false}
              onClick={() => {
                increaseProduct(detailProduct);
                openModal(detailProduct);
              }}
            >
              {inCart ? 'inCart' : 'add to cart'}
            </ButtonContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
