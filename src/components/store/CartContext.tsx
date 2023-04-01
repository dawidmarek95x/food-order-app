import { createContext } from 'react';

interface Item {
  id: string;
  name: string;
  amount: number;
  price: number;
}

export interface CartContextProps {
  items: Item[];
  totalAmount: number;
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps>({
  items: [],
  totalAmount: 0,
  addItem: item => {},
  removeItem: id => {},
  clearCart: () => {},
});

export default CartContext;
