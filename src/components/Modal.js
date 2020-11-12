import React from 'react';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { _modalProduct } from '../recoil';

const Modal = (props) => {
  const [modalProduct, setModalProduct] = useRecoilState(_modalProduct);
  const {
    isOpen,
    product: { img, title, price },
  } = modalProduct;
  return isOpen ? (
    <ModalContainer>
      <div className="container">
        <div className="row">
          <div
            id="modal"
            className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
          >
            <h5>item added to the cart</h5>
            <img src={img} className="img-fluid" alt="product" />
            <h5>{title}</h5>
            <h5 className="text-muted">price: $ {price}</h5>
            <Link to="/">
              <ButtonContainer
                onClick={() =>
                  setModalProduct({
                    isOpen: false,
                    product: {},
                  })
                }
              >
                store
              </ButtonContainer>
            </Link>
            <Link to="/cart">
              <ButtonContainer
                onClick={() =>
                  setModalProduct({
                    isOpen: false,
                    product: {},
                  })
                }
              >
                go to cart
              </ButtonContainer>
            </Link>
          </div>
        </div>
      </div>
    </ModalContainer>
  ) : null;
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;

export default Modal;
