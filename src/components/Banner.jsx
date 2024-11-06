import React from "react";
import BannerImg from "../assets/banner.jpg"; // Ensure this image is in the assets folder

const Banner = () => {
    return (
        <div>

            <div className=" container mx-auto text-center text-white bg-[#9538E2] rounded-b-2xl pb-48 ">
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
                    onClick={() => window.location.href = "/dashboard"}
                >
                    Shop Now
                </button>


            </div>
            <div className="max-w-4xl mx-auto p-4 rounded-xl backdrop-blur-lg bg-white/60 -mt-40">
                <img src={BannerImg} alt="Banner" className="rounded-2xl" />
            </div>
        </div>
    );
};

export default Banner;
