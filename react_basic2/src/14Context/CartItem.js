import { useContext } from 'react';
import ProductContext from './store/productList-context';
import styled from 'styled-components';

const _productBoxWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const _productBox = styled.div`
  height: 250px;
  width: 30%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 3px solid black;
`;

export default function CartItem() {
  const value = useContext(ProductContext);

  const deleteItem = (id, name, cost, count) => {
    if (count > 1) {
      const updatedCart = value.cart.map((product) => {
        if (product.id === id) {
          return { ...product, count: product.count - 1 };
        }
        return product;
      });

      value.setCart(updatedCart);
      // value.setCount(value.count - cost);
    } else {
      const noneCart = value.cart.filter((item) => {
        return item.count > 1;
      });
      value.setCart(noneCart);
    }
  };
  return (
    <>
      <h3>장바구니</h3>
      <_productBoxWrapper>
        {value.cart.map((item) => {
          return (
            <>
              <_productBox>
                <h4>상품명: {item.name}</h4>
                <h4>상품가격: {item.cost}</h4>
                <span>
                  수량: {item.count}{' '}
                  <button type='button' onClick={() => deleteItem(item.id, item.name, item.cost, item.count)}>
                    버리기
                  </button>
                </span>
              </_productBox>
            </>
          );
        })}
      </_productBoxWrapper>
    </>
  );
}
