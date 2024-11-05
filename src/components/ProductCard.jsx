// src/components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-xl shadow">
      <img src={product.image} alt={product.title} className="w-full object-cover rounded-xl" />
      <h3 className="text-lg font-bold p-2">{product.title}</h3>
      <p className="text-gray-500 px-2">${product.price}</p>
      <Link to={`/product/${product.id}`} >
        <button className="border px-6 py-2 rounded-full bg-white font-semibold text-[#9538E2]">View Details</button>
      </Link>
    </div>
  );
};

export default ProductCard;
