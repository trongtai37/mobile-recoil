import { atom, selector } from 'recoil';
import { storeProducts } from '../data';

export const _user = atom({
  key: 'user',
  default: null,
});

export const _products = atom({
  key: 'products',
  default: storeProducts,
});

export const _modalProduct = atom({
  key: 'modal-product',
  default: {
    isOpen: false,
    product: {},
  },
});

export const _detailProduct = atom({
  key: 'detail-product',
  default: {},
});

export const _cart = atom({
  key: 'cart-items',
  default: [],
});

export const _increaseProduct = selector({
  key: 'increase-product',
  set: ({ get, set }, product) => {
    const itemsOfCart = get(_cart);
    const foundProduct = itemsOfCart.find((item) => item.id === product.id);
    if (foundProduct) {
      set(
        _cart,
        itemsOfCart.map((product) => {
          if (product.id === foundProduct.id)
            return { ...product, count: product.count + 1 };
          return product;
        })
      );
    } else set(_cart, [...itemsOfCart, { ...product, count: 1 }]);
  },
});

export const _decreaseProduct = selector({
  key: 'decrease-product',
  set: ({ get, set }, product) => {
    const itemsOfCart = get(_cart);
    const foundProduct = itemsOfCart.find((item) => item.id === product.id);
    if (foundProduct.count > 1) {
      set(
        _cart,
        itemsOfCart.map((product) => {
          if (product.id === foundProduct.id)
            return { ...product, count: product.count - 1 };
          return product;
        })
      );
    } else
      set(
        _cart,
        itemsOfCart.filter((item) => item.id !== product.id)
      );
  },
});

export const _removeProduct = selector({
  key: 'remove-product',
  set: ({ get, set }, product) => {
    const itemsOfCart = get(_cart);
    set(
      _cart,
      itemsOfCart.filter((item) => item.id !== product.id)
    );
  },
});

export const _totalPrice = selector({
  key: 'total-price',
  get: ({ get }) => {
    const itemsOfCart = get(_cart);
    return itemsOfCart.reduce(
      (total, item) => total + item.price * item.count,
      0
    );
  },
  default: 0,
});
