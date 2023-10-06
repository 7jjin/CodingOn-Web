import { createStore } from 'redux';
​
export const ADD_CART = 'ADD_CART';
export const REMOVE_CART = 'REMOVE_CART';
​
const reducer = (state = [], action) => {
    console.log(action);
    switch (action.type) {
        case ADD_CART:
            //findIndex()는 배열의 index값을 찾아주며 존재하지 않는다면 -1반환, 존재할시 해당 index반환
            const findIndex = state.findIndex((e) => e.id === action.product.id);
            // console.log(findIndex);
            if (findIndex !== -1) {
                const newState = [...state];
                console.log(newState);
                newState[findIndex].quantity++;
                return newState;
            } else {
                return [...state, { ...action.product, quantity: 1 }];
            }
​
        case REMOVE_CART:
            return state.filter((el) => el.id !== action.id);
        default:
            return state;
    }
};
​
const store = createStore(reducer);
​
export default store;