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

export default function ProductList() {
  const value = useContext(ProductContext);

  const AddCart = (id, name, cost) => {
    // 이미 장바구니에 있는지 확인
    const existingProduct = value.cart.find((product) => product.id === id);

    if (existingProduct) {
      // 이미 장바구니에 있는 경우 count 값을 증가
      const updatedCart = value.cart.map((product) => {
        if (product.id === id) {
          return { ...product, count: product.count + 1 };
        }
        return product;
      });
      value.setCart(updatedCart);
    } else {
      // 장바구니에 없는 경우 새로운 상품 추가
      const newProduct = {
        id: id,
        name: name,
        cost: cost,
        count: 1, // 새로운 상품의 count 값은 1
      };
      value.setCart([...value.cart, newProduct]);
    }
    // value.setCount(value.count + cost);
  };
  return (
    <>
      <h3>상품 리스트</h3>
      <_productBoxWrapper>
        {value.product.map((item) => {
          return (
            <>
              <_productBox key={item.id}>
                <h4>상품명: {item.name}</h4>
                <h4>가격: {item.cost}</h4>
                <button type='button' onClick={() => AddCart(item.id, item.name, item.cost)}>
                  상품 추가하기
                </button>
              </_productBox>
            </>
          );
        })}
      </_productBoxWrapper>
    </>
  );
}
