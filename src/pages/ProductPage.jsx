import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import products from "/products.json?url";
import CartContext from "../context/CartContext.jsx";
import WishlistContext from "../context/WishlistContext.jsx";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { dispatch: cartDispatch } = useContext(CartContext);
  const { dispatch: wishlistDispatch } = useContext(WishlistContext);

  const addToCart = () => {
    cartDispatch({ type: "ADD_TO_CART", payload: product });
    toast.success("Item added to cart!");
  };

  const addToWishlist = () => {
    wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: product });
    toast.success("Item added to wishlist!");
  };

  return (
    <div className="container mx-auto ">
      <Helmet>
        <title>{product.title} - Gadget Heaven</title>
      </Helmet>
      <div className="text-center bg-[#9538E2] p-5 rounded-2xl">
        <h2 className="text-3xl text-white">Product Details</h2>
        <p className="text-white  max-w-[60%] mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      </div>

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
            className="bg-purple-500 btn text-white px-4 py-2 mt-4 rounded hover:bg-purple-600"
            disabled={!product.availability}
          >
            {product.availability ? "Add to Cart" : "Unavailable"}
          </button>
          <button
            onClick={addToWishlist}
            className="bg-purple-500 btn text-white px-4 py-2 mt-4 ml-2 rounded hover:bg-purple-600"
            disabled={!product.availability}
          >
            {product.availability ? "Add to Wishlist" : "Unavailable"}
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;