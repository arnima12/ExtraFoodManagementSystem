import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar py-6 px-6 text-2xl font-bold bg-lime-600 text-white top-0 w-full">
            <div className="navbar-start">
                Logo
            </div>
            <div className="navbar-center flex w-1/3 justify-between">
                <Link href="#" className="hover:text-gray-300">Home</Link>
                <Link href="#" className="hover:text-gray-300">About Us</Link>
                <Link href="#" className="hover:text-gray-300">Contact</Link>
            </div>
            <div className="navbar-end">
                <Link to="/login" className="bg-orange-500 hover:bg-white hover:text-orange-500 hover:border-orange-500 hover:border-2 rounded-xl px-6 py-2 text-xl">
                    Login
                </Link>
            </div>
        </div>

    );
};

export default Navbar;