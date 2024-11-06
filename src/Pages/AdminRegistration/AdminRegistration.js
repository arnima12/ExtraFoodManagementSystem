import React from 'react';

const AdminRegistration = () => {
    return (
        <div className="bg-[url('/src/assets/login.jpg')] bg-cover bg-center h-screen relative">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center text-center w-full h-screen">
                <div className="bg-gradient-to-r from-[rgb(163,230,53)] to-[rgb(77,124,15)] w-[48rem] h-[36rem] rounded-lg flex flex-col">
                    <h1 className="text-5xl font-bold text-white mt-16">Registration</h1>
                    <form className="flex flex-col justify-center gap-8 h-full mt-12">
                        <div className="flex gap-12 justify-center">
                            <div>
                                <label htmlFor='firstName' />
                                <input type="text" placeholder="First Name" className="h-8 w-56 rounded px-4" />
                            </div>
                            <div>
                                <label htmlFor='lastName' />
                                <input type="text" placeholder="Last Name" className="h-8 w-56 rounded px-4" />
                            </div>
                        </div>
                        <div className="flex gap-12 justify-center">
                            <div>
                                <label htmlFor='email' />
                                <input type="email" placeholder="Email" className="h-8 w-56 rounded px-4" />
                            </div>
                            <div>
                                <label htmlFor='contact' />
                                <input type="digit" placeholder="Contact" className="h-8 w-56 rounded px-4" />
                            </div>
                        </div>
                        <div className="flex gap-12 justify-center">
                            <div>
                                <label htmlFor='address' />
                                <input type="text" placeholder="Address" className="h-8 w-56 rounded px-4" />
                            </div>
                            <div>
                                <label htmlFor='postal' />
                                <input type="text" placeholder="Postal Code" className="h-8 w-56 rounded px-4" />
                            </div>
                        </div>
                        <div className="flex gap-12 justify-center">
                            <div>
                                <label htmlFor='password' />
                                <input type="password" placeholder="Password" className="h-8 w-56 rounded px-4" />
                            </div>
                            <div>
                                <label htmlFor='confirmPassword' />
                                <input type="password" placeholder="Confirm Password" className="h-8 w-56 rounded px-4" />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <button className=" bg-orange-500 hover:bg-white hover:text-orange-500 hover:border-orange-500 hover:border-2 rounded-lg px-6 text-xl w-36 text-white h-[2.5rem] mb-4">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminRegistration;