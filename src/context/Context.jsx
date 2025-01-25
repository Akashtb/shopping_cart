import faker from "faker";
import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./Reducer";

const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`, // Reliable placeholder image
    inStock: faker.random.arrayElement([0, 3, 5, 7, 9]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return (
    <Cart.Provider value={{ state, dispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
