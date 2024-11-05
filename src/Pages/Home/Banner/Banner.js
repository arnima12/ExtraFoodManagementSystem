import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="bg-[url('/src/assets/hero.jpg')] bg-cover bg-center h-screen relative">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center text-center w-full h-full">
                <h2 className="text-white text-4xl font-bold mb-4">Reducing Food Waste, Feeding Communities</h2>
                <p className="text-white mb-6">Connecting food donors with those in need to make a sustainable impact</p>
                <Link to="/login"> <button className="bg-orange-500 hover:bg-white hover:text-orange-500 hover:border-orange-500 hover:border-2 rounded-xl px-6 py-3 text-white">Get Started</button></Link>
            </div>
        </div>

    );
};

export default Banner;