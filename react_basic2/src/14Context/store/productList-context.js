import { createContext, useState } from 'react';

const ProductContext = createContext({
  product: [],
  setProduct: () => {},
  cart: [],
  setCart: () => {},
  // count: 0,
  // setCount: () => {},
});

export function ProductProvider({ children }) {
  const [product, setProduct] = useState([
    { id: 1, name: '상품1', cost: 10000 },
    { id: 2, name: '상품2', cost: 2000 },
    { id: 3, name: '상품3', cost: 40000 },
  ]);

  const [cart, setCart] = useState([]);

  // const [count, setCount] = useState(0);

  return <ProductContext.Provider value={{ product, setProduct, cart, setCart }}>{children}</ProductContext.Provider>;
}

export default ProductContext;
