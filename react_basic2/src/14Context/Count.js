import { useContext } from 'react';
import ProductContext from './store/productList-context';

export default function Count() {
  const value = useContext(ProductContext);
  const totalPrice = value.cart.reduce((acc, curr) => acc + curr.cost, 0);
  return (
    <>
      <h3>총 금액: {totalPrice}</h3>
    </>
  );
}
