import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="bg-[url('/src/assets/login.jpg')] bg-cover bg-center h-screen relative">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center text-center w-full h-screen">
                <div className="bg-gradient-to-r from-[rgb(163,230,53)] to-[rgb(77,124,15)] w-[24rem] h-[25rem] rounded-lg flex flex-col">
                    <h1 className="text-5xl font-bold text-white mt-16">Login</h1>
                    <form className="flex flex-col justify-center gap-8 h-full">
                        <div>
                            <label htmlFor='email' />
                            <input type="email" placeholder="Email" className="h-8 w-56 rounded px-4" />
                        </div>
                        <div>
                            <label htmlFor='password' />
                            <input type="password" placeholder="Password" className="h-8 w-56 rounded px-4" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <button className=" bg-orange-500 hover:bg-white hover:text-orange-500 hover:border-orange-500 hover:border-2 rounded-lg px-6 text-xl w-36 text-white h-[2.5rem] mb-4">Submit</button>
                            <p>Don't have an account? <Link to="/choice" className="text-orange-800 font-semibold">Create an account</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;