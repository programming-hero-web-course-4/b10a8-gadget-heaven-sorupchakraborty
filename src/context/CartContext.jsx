import { createContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
  wishlist: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.cart.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        const updatedCart = state.cart.map((item, index) =>
          index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
        return { ...state, cart: updatedCart };
      }
      return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter((item) => item.id !== action.payload.id) };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        )
      };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "ADD_TO_WISHLIST":
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    case "REMOVE_FROM_WISHLIST":
      return { ...state, wishlist: state.wishlist.filter((item) => item.id !== action.payload.id) };
    case "SORT_CART_BY_PRICE":
      return {
        ...state,
        cart: [...state.cart].sort((a, b) => b.price - a.price),
      };
    default:
      return state;
    }
  };

  export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
  
    return (
      <CartContext.Provider value={{ ...state, dispatch }}>
        {children}
      </CartContext.Provider>
    );
  };
  export default CartContext;