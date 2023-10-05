import CartContext from './store/cart-context';
import { useContext } from 'react';

export default function ProductList2() {
  const products = [
    {
      id: 1,
      name: 'A상품',
      price: 1000,
    },
    {
      id: 2,
      name: 'B상품',
      price: 1500,
    },
    {
      id: 3,
      name: 'c상품',
      price: 2000,
    },
  ];

  const { cart, setCart } = useContext(CartContext);

  const addProduct = (product) => {
    setCart({ ...cart, product });
  };

  return (
    <div>
      <h2>상품 리스트</h2>
      {products.map((value) => {
        return (
          <div key={value.id}>
            <span>
              {value.name} : {value.price}원
            </span>
            <button onClick={() => addProduct(value)}>장바구니에 추가</button>
          </div>
        );
      })}
    </div>
  );
}
