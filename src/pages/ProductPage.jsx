import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import CartContext from "../context/CartContext.jsx";
import WishlistContext from "../context/WishlistContext.jsx";

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { dispatch: cartDispatch } = useContext(CartContext);
  const { dispatch: wishlistDispatch } = useContext(WishlistContext);

  const addToCart = () => {
    cartDispatch({ type: "ADD_TO_CART", payload: product });
  };

  const addToWishlist = () => {
    wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: product });
  };

  return (
    <div className="flex items-center p-4">
      <div>
        <img src={product.image} alt={product.title} className="w-1/2 mx-auto my-4" />
      </div>
      <div>
        <h2 className="text-3xl font-bold">{product.title}</h2>
        <p className="text-gray-600">Category: {product.category}</p>
        <p className="text-lg font-semibold my-2">Price: ${product.price}</p>
        <p className="text-gray-800 my-2">{product.description}</p>
        <div className="my-4">
          <h3 className="text-xl font-semibold">Specifications:</h3>
          <ul className="list-disc pl-6">
            {product.specification.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        </div>
        <p className={`text-lg font-bold ${product.availability ? "text-green-600" : "text-red-600"}`}>
          {product.availability ? "In Stock" : "Out of Stock"}
        </p>
        <p className="text-yellow-500 font-semibold">Rating: {product.rating} ★</p>
        <button
          onClick={addToCart}
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
          disabled={!product.availability}
        >
          {product.availability ? "Add to Cart" : "Unavailable"}
        </button>
        <button
          onClick={addToWishlist}
          className="bg-purple-500 text-white px-4 py-2 mt-4 ml-2 rounded"
          disabled={!product.availability}
        >
          {product.availability ? "Add to Wishlist" : "Unavailable"}
        </button>
      </div>
    </div>
  );
};

export default ProductPage;