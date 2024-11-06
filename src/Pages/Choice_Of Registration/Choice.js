import React from 'react';
import { Link } from 'react-router-dom';

const Choice = () => {
    return (
        <div className="bg-[url('/src/assets/login.jpg')] bg-cover bg-center h-screen relative">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center text-center w-full h-screen gap-10">
                <h1 className="text-white text-5xl">What do you need?</h1>
                <Link to="/adminRegistration" className="w-[10rem] py-2 bg-gradient-to-r from-[rgb(163,230,53)] to-[rgb(77,124,15)] rounded-lg text-white">
                    I am Administrator
                </Link>
                <Link to="/donarRegistration" className="w-[10rem] py-2 bg-gradient-to-r from-[rgb(163,230,53)] to-[rgb(77,124,15)] rounded-lg text-white">
                    I want to donate
                </Link>
                <Link to="/recipientRegistration" className="w-[10rem] py-2 bg-gradient-to-r from-[rgb(163,230,53)] to-[rgb(77,124,15)] rounded-lg text-white">
                    I need donation
                </Link>
            </div>
        </div>
    );
};

export default Choice;