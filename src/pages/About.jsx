import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gray-100">
      <div className="w-full max-w-3xl p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">About TechVerse</h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          Welcome to <span className="font-semibold">TechVerse</span> your go-to destination for the latest and greatest gadgets.
          We are passionate about bringing you the finest selection of technology products designed to make your life smarter, faster, and more connected.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose TechVerse?</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><span className="font-medium text-gray-800">Diverse Selection:</span> A wide range of gadgets to meet every need and preference.</li>
          <li><span className="font-medium text-gray-800">User-Friendly Experience:</span> Easy-to-use features like an intuitive cart and wishlist system.</li>
          <li><span className="font-medium text-gray-800">Personalized Navigation:</span> Explore categories and sort options for a streamlined shopping experience.</li>
          <li><span className="font-medium text-gray-800">Quality Assurance:</span> Only the best gadgets meet our standards for performance and durability.</li>
          <li><span className="font-medium text-gray-800">Customer-Centric Approach:</span> Dedicated to ensuring your satisfaction and support.</li>
        </ul>

        <p className="text-lg text-gray-700 text-center mb-8">
          From the homepage, explore our featured categories and popular gadgets. Dive into detailed product pages to add items to your cart or wishlist with ease. Our dashboard allows you to manage your favorites, sort by price, and keep track of your purchases.
        </p>

        <p className="text-lg text-gray-700 text-center">
          At TechVerse, were here to keep you connected with the latest tech innovations, all while offering an enjoyable, seamless shopping experience.
        </p>
        
        <div className="mt-10 text-center">
          <a
            href="/"
            className=" btn px-6 py-3 bg-purple-500 text-white font-semibold rounded hover:bg-purple-700 transition duration-200"
          >
            Start Exploring
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
