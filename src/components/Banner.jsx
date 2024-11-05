import React from "react";
import BannerImg from "../assets/banner.jpg"; // Ensure this image is in the assets folder

const Banner = () => {
    return (
        <div className=" container mx-auto text-center text-white bg-[#9538E2]">
            <div className="max-w-[60%] mx-auto">
                <h1 className="text-5xl mb-5">
                    Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                </h1>
            </div>
            <div className="max-w-[50%] mx-auto">
                <p className="mb-5">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
            </div>
            <button 
                className="border px-6 py-2 rounded-full mb-5 bg-white font-semibold text-[#9538E2]"
                onClick={() => window.location.href = "/dashboard"} // Redirects to Dashboard
            >
                Shop Now
            </button>
            <div className="max-w-[80%] mx-auto border p-5 rounded-2xl">
                <img src={BannerImg} alt="Banner" className="rounded-2xl" />
            </div>
            <h2 className="text-3xl my-6 text-center font-bold text-white">
                Explore Cutting-Edge Gadgets
            </h2>
        </div>
    );
};

export default Banner;
