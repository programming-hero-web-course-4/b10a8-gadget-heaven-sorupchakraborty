import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import cartIcon from "../assets/cart.png";
import wishlistIcon from "../assets/wishlist.png";
import CartContext from '../context/CartContext';
import WishlistContext from '../context/WishlistContext';

const Navbar = () => {
    const { cart } = useContext(CartContext);
    const { wishlist } = useContext(WishlistContext);
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const totalCartQuantity = cart.reduce((total, item) => total + item.quantity, 0);


    return (
        <div className={`container mx-auto p-2 mt-8 rounded-t-2xl ${isHomePage ? "bg-[#9538E2]" : "bg-white"} sticky top-0 z-10`}>
            <div className="flex justify-between items-center pt-5">
                <div>
                    <NavLink to="/" className={`btn btn-ghost text-xl text-white  ${isHomePage ? "text-white" : "text-black"}`}>
                        Gadget Heaven
                    </NavLink>
                </div>
                <div>
                    <ul className="flex justify-center gap-4">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => (isActive ? "font-semibold btn bg-[#9538E2] text-white border-none" : "btn bg-[#9538E2]")}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) => (isActive ? "font-semibold btn text-white" : "btn bg-[#9538E2] border-none")}
                            >
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/statistics"
                                className={({ isActive }) => (isActive ? "font-semibold btn text-white" : "btn bg-[#9538E2] border-none")}
                            >
                                Stats
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => (isActive ? "font-semibold btn text-white" : "btn bg-[#9538E2] border-none")}
                            >
                                About
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center">
                    {/* cart */}
                    <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-circle">
                            <div className="indicator">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="badge badge-sm indicator-item bg-black text-white">{cart.length}</span>
                            </div>
                        </div>
                        {/* wishlist */}
                        <div tabIndex={0} role="button" className="btn btn-circle mx-2">
                            <div className="indicator">
                                <img src={wishlistIcon} alt="" />
                                <span className="badge badge-sm indicator-item bg-black text-white">{wishlist.length}</span>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;