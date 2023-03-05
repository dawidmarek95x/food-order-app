import { createContext } from 'react';

interface Item {
  id: string;
  name: string;
  amount: number;
  price: number;
}

interface CartContextProps {
  items: Item[];
  totalAmount: number;
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
}

const CartContext = createContext<CartContextProps>({
  items: [],
  totalAmount: 0,
  addItem: item => {},
  removeItem: id => {},
});

export default CartContext;
