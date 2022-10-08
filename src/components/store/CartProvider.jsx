import React, { useReducer } from 'react';
import CartContext from './CartContext';

const initialCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = [...state.items, action.item];
    }

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return {
      ...state,
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return state;
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );

  const addItemToCartHandler = item => {
    dispatchCartAction({ type: 'ADD', item });
  };

  const removeItemFromCartHandler = id => {
    dispatchCartAction({ type: 'REMOVE', id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
