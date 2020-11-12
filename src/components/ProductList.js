import React from 'react';
import Product from './Product';
import Title from './Title';
import { useRecoilValue } from 'recoil';
import { _products } from '../recoil';

const ProductList = (props) => {
  const products = useRecoilValue(_products);
  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            {products.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
