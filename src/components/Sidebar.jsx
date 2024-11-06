import React from "react";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  const categories = ["All Products", "Laptops", "Phones", "Accessories", "Smart Watches", "MacBook", "Iphone"];

  return (
    <aside className="w-1/4 px-4 py-4">
      <div className="border text-center rounded-xl">
        <ul className="py-4">
          {categories.map((category) => (
            <li key={category} className="mb-2">
              <button
                className={` btn w-full text-purple-700 px-6 py-3 border rounded-full bg-[#09080F0] hover:bg-purple-700 hover:text-white ${
                  selectedCategory === category ? "bg-purple-700 text-white" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;