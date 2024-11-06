import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import Banner from "../components/Banner";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  useEffect(() => {
    fetch("./products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = selectedCategory === "All Products"
    ? products
    : products.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <Helmet>
        <title>Home - Gadget Heaven</title>
      </Helmet>
      <Banner />
      <div className="flex">
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <main className="w-3/4 grid grid-cols-3 gap-4 p-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default HomePage;