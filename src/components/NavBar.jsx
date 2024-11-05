import React from "react";
import { NavLink } from "react-router-dom";
import cartIcon from "../assets/cart.png";
import wishlistIcon from "../assets/wishlist.png";
import BannerImg from "../assets/banner.jpg";

const Navbar = () => {
    return (
        <div className="container mx-auto bg-[#9538E2] p-2 mt-8 rounded-t-2xl " >
            <div className=" flex justify-between items-center pt-5">
                <div className="">
                    <NavLink to="/" className="btn btn-ghost text-xl text-white">
                        Gadget Heaven
                    </NavLink>
                </div>
                <div>
                    <ul className="flex justify-center gap-4">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => (isActive ? "font-semibold text-white" : "")}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) => (isActive ? "font-semibold text-white" : "")}
                            >
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/statistics"
                                className={({ isActive }) => (isActive ? "font-semibold text-white" : "")}
                            >
                                Stats
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className=" flex items-center">
                    <div className="">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle bg-white">
                            <div className="indicator">
                                <img
                                    src={cartIcon}
                                    alt="Cart"
                                    className="" />
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end mx-2">
                        <div tabIndex={0} role="button" className="btn btn-circle bg-white">
                            <img
                                src={wishlistIcon}
                                alt="Wishlist"
                                className="rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;
