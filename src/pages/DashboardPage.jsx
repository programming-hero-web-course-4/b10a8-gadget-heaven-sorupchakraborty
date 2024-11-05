// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import CartContext from "../context/CartContext";
// import WishlistContext from "../context/WishlistContext";

// const DashboardPage = () => {
//   const { cart, dispatch: cartDispatch } = useContext(CartContext);
//   const { wishlist, dispatch: wishlistDispatch } = useContext(WishlistContext);
//   const [activeTab, setActiveTab] = useState("cart");
//   const [showModal, setShowModal] = useState(false);
//   const navigate = useNavigate();

//   const sortCartByPrice = () => {
//     cartDispatch({ type: "SORT_CART_BY_PRICE" });
//   };

//   const totalCartPrice = cart.reduce((total, item) => total + item.price, 0);

//   const handlePurchase = () => {
//     setShowModal(true);
//     cartDispatch({ type: "CLEAR_CART" });
//     wishlistDispatch({ type: "CLEAR_WISHLIST" });
//     setTimeout(() => {
//       setShowModal(false);
//       navigate("/");
//     }, 2000);
//   };

//   const handleDelete = (id, type) => {
//     if (type === "cart") {
//       cartDispatch({ type: "REMOVE_FROM_CART", payload: { id } });
//     } else {
//       wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: { id } });
//     }
//   };

//   return (
//     <div className="p-4">
//       <div className="text-center">
//         <button
//           className={`tab ${activeTab === "cart" ? "tab-active bg-purple-500 text-white px-4 py-2 mt-4 ml-2 rounded h-auto" : ""}`}
//           onClick={() => setActiveTab("cart")}
//         >
//           Cart
//         </button>
//         <button
//           className={`tab ${activeTab === "wishlist" ? "tab-active bg-purple-500 text-white px-4 py-2 mt-4 ml-2 rounded h-auto" : ""}`}
//           onClick={() => setActiveTab("wishlist")}
//         >
//           Wishlist
//         </button>
//       </div>

//       {activeTab === "cart" ? (
//         <div className="mt-4">
//           <div className="text-center">
//             <p className="text-xl font-semibold mt-4">Total: ${totalCartPrice}</p>
//             <button
//               onClick={sortCartByPrice}
//               className="bg-purple-500 text-white px-4 py-2 mt-4 ml-2 rounded mb-4 h-auto"
//             >
//               Sort by Price
//             </button>
//             <button
//               onClick={handlePurchase}
//               className="bg-green-500 text-white px-4 py-2 rounded"
//               disabled={cart.length === 0}
//             >
//               Purchase
//             </button>
//           </div>
//           <div className="grid grid-cols-1 gap-4">
//             {cart.map((item) => (
//               <div key={item.id} className="flex justify-around items-center bg-gray-100 p-4 rounded-md">
//                 <div>
//                   <img src={item.image} alt={item.title} className="w-full h-32 object-cover rounded" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-bold">{item.title}</h3>
//                   <p className="text-sm">{item.category}</p>
//                   <p className="text-sm">Rating: {item.rating}</p>
//                   <p className="font-semibold">${item.price}</p>
//                 </div>
//                 <div className="">
//                   <button
//                     onClick={() => handleDelete(item.id, "cart")}
//                     className="bg-red-500 text-white px-4 py-2 rounded"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <div className="mt-4">
//           <div className="grid grid-cols-1 gap-4">
//             {wishlist.map((item) => (
//               <div key={item.id} className="flex justify-around items-center bg-gray-100 p-4 rounded-md">
//                 <div>
//                   <img src={item.image} alt={item.title} className="w-full h-32 object-cover rounded" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-bold">{item.title}</h3>
//                   <p className="text-sm">{item.category}</p>
//                   <p className="text-sm">Rating: {item.rating}</p>
//                   <p className="font-semibold">${item.price}</p>
//                 </div>
//                 <div className="">
//                   <button
//                     onClick={() => handleDelete(item.id, "wishlist")}
//                     className="bg-red-500 text-white px-4 py-2 rounded"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-8 rounded shadow-lg text-center">
//             <h2 className="text-2xl font-bold mb-4">Thank you for buying!</h2>
//             <p>You will be redirected to the home page shortly.</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DashboardPage;

import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CartContext from "../context/CartContext";
import WishlistContext from "../context/WishlistContext";

const DashboardPage = () => {
  const { cart, dispatch: cartDispatch } = useContext(CartContext);
  const { wishlist, dispatch: wishlistDispatch } = useContext(WishlistContext);
  const [activeTab, setActiveTab] = useState("cart");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get("tab");
    if (tab) {
      setActiveTab(tab);
    }
  }, [location]);

  const sortCartByPrice = () => {
    cartDispatch({ type: "SORT_CART_BY_PRICE" });
  };

  const totalCartPrice = cart.reduce((total, item) => total + item.price, 0);

  const handlePurchase = () => {
    setShowModal(true);
    cartDispatch({ type: "CLEAR_CART" });
    wishlistDispatch({ type: "CLEAR_WISHLIST" });
    setTimeout(() => {
      setShowModal(false);
      navigate("/");
    }, 2000);
  };

  const handleDelete = (id, type) => {
    if (type === "cart") {
      cartDispatch({ type: "REMOVE_FROM_CART", payload: { id } });
    } else {
      wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: { id } });
    }
  };

  return (
    <div className="p-4">
      <div className="text-center">
        <button
          className={`tab ${activeTab === "cart" ? "tab-active bg-purple-500 text-white px-4 py-2 mt-4 ml-2 rounded h-auto" : ""}`}
          onClick={() => setActiveTab("cart")}
        >
          Cart
        </button>
        <button
          className={`tab ${activeTab === "wishlist" ? "tab-active bg-purple-500 text-white px-4 py-2 mt-4 ml-2 rounded h-auto" : ""}`}
          onClick={() => setActiveTab("wishlist")}
        >
          Wishlist
        </button>
      </div>

      {activeTab === "cart" ? (
        <div className="mt-4">
          <div className="text-center">
            <p className="text-xl font-semibold mt-4">Total: ${totalCartPrice}</p>
            <button
              onClick={sortCartByPrice}
              className="bg-purple-500 text-white px-4 py-2 mt-4 ml-2 rounded mb-4 h-auto"
            >
              Sort by Price
            </button>
            <button
              onClick={handlePurchase}
              className="bg-green-500 text-white px-4 py-2 rounded"
              disabled={cart.length === 0}
            >
              Purchase
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-around items-center bg-gray-100 p-4 rounded-md">
                <div>
                  <img src={item.image} alt={item.title} className="w-full h-32 object-cover rounded" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm">{item.category}</p>
                  <p className="text-sm">Rating: {item.rating}</p>
                  <p className="font-semibold">${item.price}</p>
                </div>
                <div className="">
                  <button
                    onClick={() => handleDelete(item.id, "cart")}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-4">
          <div className="grid grid-cols-1 gap-4">
            {wishlist.map((item) => (
              <div key={item.id} className="flex justify-around items-center bg-gray-100 p-4 rounded-md">
                <div>
                  <img src={item.image} alt={item.title} className="w-full h-32 object-cover rounded" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm">{item.category}</p>
                  <p className="text-sm">Rating: {item.rating}</p>
                  <p className="font-semibold">${item.price}</p>
                </div>
                <div className="">
                  <button
                    onClick={() => handleDelete(item.id, "wishlist")}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Thank you for buying!</h2>
            <p>You will be redirected to the home page shortly.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;