import React from 'react';
import sustainability from "../../../assets/sustainibility.png";
import community from "../../../assets/community.png";
import convenience from "../../../assets/convenience.png";
const Benefit = () => {
    return (
        <div className="flex bg-orange-400 px-24 justify-between py-8">
            <div className="mt-8 w-52">
                <div className="w-48 h-48 flex justify-center items-center">
                    <img src={sustainability} alt="sustainability" className="w-48 h-48" />
                </div>
                <p className="text-white text-xl">Reducing food waste and environmental impact</p>
            </div>
            <div className="mt-8 w-52">
                <div className="w-48 h-48 flex justify-center items-center">
                    <img src={community} alt="sustainability" className="w-40 h-40" />
                </div>
                <p className="text-white text-xl">Providing meals for those in need</p>
            </div>
            <div className="mt-8 w-52">
                <div className="w-48 h-48 flex justify-center items-center">
                    <img src={convenience} alt="sustainability" className="w-40 h-40" />
                </div>
                <p className="text-white text-xl">Easy-to-use platform for donating and claiming food</p>
            </div>
        </div>
    );
};

export default Benefit;