import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import cartIcon from "../assets/cart.png";
import wishlistIcon from "../assets/wishlist.png";
import CartContext from '../context/CartContext';
import WishlistContext from '../context/WishlistContext';

const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <div className={`container mx-auto p-2 mt-8 rounded-t-2xl ${isHomePage ? "bg-[#9538E2]" : "bg-white"}`}>
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
                    </ul>
                </div>
                <div className="flex items-center">
                    <div>
                        <div tabIndex={0} role="button" className="btn btn-circle bg-white">
                            <div className="indicator">
                                <img src={cartIcon} alt="Cart" />
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end mx-2">
                        <div tabIndex={0} role="button" className="btn btn-circle bg-white">
                            <img src={wishlistIcon} alt="Wishlist" className="rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;