import React, { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import cartIcon from "../assets/cart.png";
import wishlistIcon from "../assets/wishlist.png";
import CartContext from '../context/CartContext';
import WishlistContext from '../context/WishlistContext';

const Navbar = () => {
    const { cart } = useContext(CartContext);
    const { wishlist } = useContext(WishlistContext);
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === "/";

    const totalCartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    const handleNavigate = (tab) => {
        navigate(`/dashboard?tab=${tab}`);
    };

    return (
        <div className={`container mx-auto p-2 mt-8 rounded-t-2xl ${isHomePage ? "bg-[#9538E2] text-white" : "bg-white text-black"} sticky top-0 z-10`}>
            <div className="flex justify-between items-center pt-5">
                <div>
                    <NavLink to="/" className={`btn btn-ghost text-xl`}>
                        Gadget Heaven
                    </NavLink>
                </div>
                <div>
                    <ul className="flex justify-center gap-4">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => (isActive ? "font-semibold btn bg-[#9538E2] text-white border-none" : "btn bg-[#9538E2] text-white")}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) => (isActive ? "font-semibold btn text-white bg-black " : "btn bg-[#9538E2] text-white border-none")}
                            >
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/statistics"
                                className={({ isActive }) => (isActive ? "font-semibold btn text-white bg-black" : "btn bg-[#9538E2] text-white border-none")}
                            >
                                Stats
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => (isActive ? "font-semibold btn text-white bg-black" : "btn bg-[#9538E2] text-white border-none")}
                            >
                                About
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center">
                    {/* Cart */}
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle"
                            onClick={() => handleNavigate("cart")}
                        >
                            <div className="indicator">
                                <img src={cartIcon} alt="Cart" className="h-5 w-5" />
                                <span className="badge badge-sm indicator-item bg-black text-white">{totalCartQuantity}</span>
                            </div>
                        </div>
                    </div>
                    {/* Wishlist */}
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-circle mx-2"
                        onClick={() => handleNavigate("wishlist")}
                    >
                        <div className="indicator">
                            <img src={wishlistIcon} alt="Wishlist" className="h-5 w-5" />
                            <span className="badge badge-sm indicator-item bg-black text-white">{wishlist.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;