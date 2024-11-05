import { createContext, useReducer } from "react";

const WishlistContext = createContext();

const initialState = {
    wishlist: [],
};

const wishlistReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_WISHLIST":
            if (state.wishlist.some(item => item.id === action.payload.id)) {
                return state; // Item already in wishlist, do nothing
            }
            return { ...state, wishlist: [...state.wishlist, action.payload] };
        case "REMOVE_FROM_WISHLIST":
            return { ...state, wishlist: state.wishlist.filter((item) => item.id !== action.payload.id) };
        case "CLEAR_WISHLIST":
            return { ...state, wishlist: [] };
        default:
            return state;
    }
};

export const WishlistProvider = ({ children }) => {
    const [state, dispatch] = useReducer(wishlistReducer, initialState);

    return (
        <WishlistContext.Provider value={{ ...state, dispatch }}>
            {children}
        </WishlistContext.Provider>
    );
};

export default WishlistContext;